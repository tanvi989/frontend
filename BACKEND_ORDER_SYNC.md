# Backend: Fix £0 order after payment (PATCH order endpoint)

After Stripe payment, the order can be saved with `cart: []` and `total_payable: 0`. The frontend now **syncs the order when the user lands on the payment-success page** by calling:

```
PATCH /api/v1/orders/:order_id
```

You **must implement this endpoint** so the order shows the correct totals and line items.

---

## Request

- **Method:** `PATCH`
- **Path:** `/api/v1/orders/{order_id}`  
  Example: `PATCH /api/v1/orders/ORD-1770518210207`
- **Headers:** Same as other authenticated APIs (e.g. `Authorization: Bearer <token>` if you use it).
- **Body (JSON):**

```json
{
  "cart_items": [ /* array of cart line items */ ],
  "subtotal": 139,
  "discount_amount": 0,
  "shipping_cost": 0,
  "total_payable": 139
}
```

- All body fields are optional. Send only what you need to update.
- `cart_items`: same shape as cart API (each item has `cart_id`, `product_id`, `name`, `quantity`, `price`, `product`, `lens`, `prescription`, `product_details`, `flag`).

---

## What the backend should do

1. Find the order by `order_id` (e.g. in MongoDB: `order_id: "ORD-1770518210207"`).
2. If the order does not exist, return `404`.
3. Update the order document:
   - If `cart_items` is present → set `order.cart = cart_items` (or your field name).
   - If `subtotal` is present → set `order.subtotal = subtotal`.
   - If `discount_amount` is present → set `order.discount_amount` (or `order.discount`) = `discount_amount`.
   - If `shipping_cost` is present → set `order.shipping_cost` = `shipping_cost`.
   - If `total_payable` is present → set `order.total_payable` and `order.order_total` = `total_payable`.
4. Return `200` with e.g. `{ "success": true, "message": "Order updated" }`.

---

## Example (FastAPI / Python)

```python
@app.patch("/api/v1/orders/{order_id}")
async def update_order(order_id: str, body: dict, current_user: dict = Depends(verify_token)):
    # Optional: ensure order belongs to current_user
    order = await orders_collection.find_one({"order_id": order_id})
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")

    update = {}
    if "cart_items" in body:
        update["cart"] = body["cart_items"]
    if "subtotal" in body:
        update["subtotal"] = body["subtotal"]
    if "discount_amount" in body:
        update["discount_amount"] = body["discount_amount"]
    if "shipping_cost" in body:
        update["shipping_cost"] = body["shipping_cost"]
    if "total_payable" in body:
        update["total_payable"] = body["total_payable"]
        update["order_total"] = body["total_payable"]

    if update:
        update["updated_at"] = datetime.utcnow()
        await orders_collection.update_one(
            {"order_id": order_id},
            {"$set": update}
        )
    return {"success": True, "message": "Order updated"}
```

(Fix typo: `"subtotal" is in body` → `"subtotal" in body`.)

---

## Example (Node/Express)

```js
app.patch('/api/v1/orders/:order_id', authMiddleware, async (req, res) => {
  const { order_id } = req.params;
  const { cart_items, subtotal, discount_amount, shipping_cost, total_payable } = req.body;
  const order = await Order.findOne({ order_id });
  if (!order) return res.status(404).json({ success: false, detail: 'Order not found' });

  const update = {};
  if (cart_items != null) update.cart = cart_items;
  if (subtotal != null) update.subtotal = subtotal;
  if (discount_amount != null) update.discount_amount = discount_amount;
  if (shipping_cost != null) update.shipping_cost = shipping_cost;
  if (total_payable != null) {
    update.total_payable = total_payable;
    update.order_total = total_payable;
  }
  if (Object.keys(update).length) {
    update.updated_at = new Date();
    await Order.updateOne({ order_id }, { $set: update });
  }
  return res.json({ success: true, message: 'Order updated' });
});
```

---

## Flow summary

1. User clicks Pay on checkout → frontend calls `POST /api/v1/payment/create-session` (with `cart_items`, totals) and stores the same payload in `sessionStorage` under `multifolks_pending_order_sync`.
2. User is redirected to Stripe and pays.
3. Stripe redirects to your success URL (e.g. `/payment-success?session_id=...`).
4. On load, the frontend reads `multifolks_pending_order_sync`, then calls **`PATCH /api/v1/orders/:order_id`** with that payload and clears storage.
5. Your backend updates the order’s `cart`, `subtotal`, `total_payable`, etc., so the order details and admin show the correct price and line items.

Once this endpoint is implemented, orders will no longer show £0 after payment.
