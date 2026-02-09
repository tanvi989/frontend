# Backend: Persist full prescriptions (photo image_url) on order

The frontend sends **full prescriptions** (including camera/upload photo `image_url`) when placing an order. The saved order in your DB must store this **exactly as sent**, not replace it with PD-only.

---

## What the frontend sends

**POST /api/v1/orders** body includes:

1. **`metadata.prescriptions`** – array of `{ cart_id, product_id, product_name, prescription }`
2. **`prescriptions`** (top-level) – same array (use either one, but **do not overwrite**)

Each `prescription` can be:

- **Photo/upload:** `{ type: "photo", name, image_url: "https://storage.googleapis.com/...", data: { fileName, fileSize, ... }, created_at }`
- **Manual:** `{ type: "manual", data: { ... }, ... }`
- **PD only:** `{ pdType: "Dual", pdRight: "28.00", pdLeft: "26.50" }`

If you replace the array with one built only from cart `product_details`, you will **lose** `type`, `image_url`, and `data` and only keep PD.

---

## What the backend MUST do

When creating or updating the order document:

1. **Use the prescriptions from the request body**, not from cart.
2. **Persist the full object** for each prescription (so `type`, `image_url`, `data` are stored).

### Correct (persist as received)

```python
# When creating order from POST /api/v1/orders
body = await request.json()
metadata = body.get("metadata") or {}
# Use prescriptions from request – do NOT build from cart
prescriptions_from_request = body.get("prescriptions") or metadata.get("prescriptions") or []
order_doc = {
    ...
    "metadata": {
        **metadata,
        "prescriptions": prescriptions_from_request  # full objects with type, image_url, data
    }
}
```

### Wrong (do not do this)

```python
# WRONG: building prescriptions only from cart product_details loses photo/manual
prescriptions = []
for item in cart_items:
    pd = item.get("product_details") or {}
    prescriptions.append({
        "cart_id": item["cart_id"],
        "product_id": item["product_id"],
        "prescription": {"pdType": "Dual", "pdRight": pd.get("pd_right_mm"), "pdLeft": pd.get("pd_left_mm")}
    })
order_doc["metadata"]["prescriptions"] = prescriptions  # this drops image_url and type!
```

---

## Summary

- **Read** `prescriptions` from `request.body.prescriptions` or `request.body.metadata.prescriptions`.
- **Save** that array to `order.metadata.prescriptions` (or your order’s prescriptions field) **without** replacing it with a PD-only version built from cart.
- Then camera/upload prescription **image_url** will be stored in the database.
