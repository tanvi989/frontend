/**
 * GA4 / GTM e-commerce event tracking via dataLayer.
 * Meta Pixel events fired on route change (see ScrollToTop) and here for e-commerce.
 * Configure GTM to fire GA4 tags on these events.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    fbq?: (action: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}

/** Meta Pixel: ensure content_ids are string[] (required for catalog/Advantage+). */
function metaParams(params?: Record<string, unknown>): Record<string, unknown> | undefined {
  if (!params) return undefined;
  const out = { ...params };
  if (Array.isArray(out.content_ids)) {
    out.content_ids = out.content_ids.map((id: unknown) => String(id));
  }
  return out;
}

/** Fire a Meta Pixel standard event. Retries if fbq not yet loaded (async script). */
function trackMetaEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const doFire = () => {
    if (typeof window.fbq !== "function") return false;
    const p = metaParams(params);
    if (p && Object.keys(p).length > 0) {
      window.fbq("track", eventName, p);
    } else {
      window.fbq("track", eventName);
    }
    return true;
  };
  if (doFire()) return;
  setTimeout(() => {
    if (!doFire()) setTimeout(doFire, 250);
  }, 150);
}

/** Fire Meta Pixel PageView. Retries if fbq not yet loaded (async script). Call on every SPA route change. */
export function trackMetaPageView() {
  if (typeof window === "undefined") return;
  const fire = () => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
      return true;
    }
    return false;
  };
  if (fire()) return;
  setTimeout(() => { if (!fire()) setTimeout(fire, 250); }, 150);
}

type GA4Item = {
  item_id?: string;
  item_name?: string;
  item_brand?: string;
  item_category?: string;
  price?: number;
  quantity?: number;
  item_variant?: string;
};

function ensureDataLayer() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
}

function toGA4Item(p: {
  skuid?: string;
  id?: string | number;
  name?: string;
  brand?: string;
  price?: string | number;
  frameColor?: string;
  item_variant?: string;
  quantity?: number;
  item_category?: string;
  style?: string;
  gender?: string;
  category?: string;
}): GA4Item {
  const price = typeof p.price === "string" ? parseFloat(p.price.replace(/[^0-9.]/g, "")) || 0 : Number(p.price) || 0;
  const itemCategory = p.item_category || p.category || (p.style ? `Style: ${p.style}` : undefined) || (p.gender ? `Gender: ${p.gender}` : undefined) || "Eyeglasses";
  return {
    item_id: p.skuid || String(p.id || ""),
    item_name: p.name,
    item_brand: p.brand,
    item_category: itemCategory,
    price,
    quantity: p.quantity ?? 1,
    item_variant: p.frameColor || p.item_variant,
  };
}

export function trackViewItemList(products: Record<string, unknown>[], listId?: string, listName?: string) {
  ensureDataLayer();
  const items: GA4Item[] = (products || []).slice(0, 50).map((p: any) => toGA4Item(p));
  window.dataLayer!.push({
    event: "view_item_list",
    ecommerce: {
      item_list_id: listId || "product_list",
      item_list_name: listName || "Product List",
      items,
    },
  });
}

/**
 * GA4 view_item + Meta ViewContent.
 * Use this event in GA4 to see "most viewed products": Reports → Explore → Event = view_item, Dimension = Item name or Item ID, Metric = Event count.
 */
export function trackViewItem(product: Record<string, unknown>) {
  ensureDataLayer();
  const p = product as any;
  const item = toGA4Item(p);
  window.dataLayer!.push({
    event: "view_item",
    ecommerce: {
      currency: "GBP",
      value: item.price,
      items: [item],
    },
    // For "most viewed" reporting: item_id and item_name are the key dimensions in GA4
    view_item_reporting: "most_viewed",
  });
  // Meta Pixel standard event: ViewContent (product page) – use in Meta for content engagement / audiences
  trackMetaEvent("ViewContent", {
    content_ids: [String(item.item_id || "")].filter(Boolean),
    content_name: item.item_name,
    content_type: "product",
    content_category: item.item_category,
    value: Number(item.price) || 0,
    currency: "GBP",
  });
}

export function trackAddToCart(product: Record<string, unknown>, quantity = 1) {
  ensureDataLayer();
  const p = product as any;
  const item = toGA4Item({ ...p, quantity });
  window.dataLayer!.push({
    event: "add_to_cart",
    ecommerce: {
      currency: "GBP",
      value: (item.price || 0) * quantity,
      items: [item],
    },
  });
  // Meta Pixel standard event: AddToCart
  const value = (Number(item.price) || 0) * quantity;
  trackMetaEvent("AddToCart", {
    content_ids: [String(item.item_id || "")].filter(Boolean),
    content_name: item.item_name,
    content_type: "product",
    value,
    currency: "GBP",
    num_items: quantity,
    contents: [{ id: String(item.item_id || ""), quantity, item_price: Number(item.price) || 0 }],
  });
}

/** Map cart API item (CartItem) to GA4 format */
function mapCartItemToProduct(item: any): Record<string, unknown> {
  const p = item?.product?.products || item?.product || {};
  const qty = item?.quantity ?? 1;
  const price = p?.price ?? p?.list_price ?? 0;
  return {
    skuid: p?.skuid ?? p?.store_skuid ?? item?.product_id,
    id: p?.skuid ?? item?.product_id,
    name: p?.name ?? p?.naming_system,
    brand: p?.brand,
    price: typeof price === "number" ? price : parseFloat(String(price)) || 0,
    quantity: qty,
  };
}

export function trackBeginCheckout(cartItems: Array<Record<string, unknown>>) {
  ensureDataLayer();
  const items: GA4Item[] = (cartItems || []).map((item: any) =>
    item?.product?.products ? toGA4Item(mapCartItemToProduct(item)) : toGA4Item(item)
  );
  const value = items.reduce((sum, i) => sum + (i.price || 0) * (i.quantity || 1), 0);
  window.dataLayer!.push({
    event: "begin_checkout",
    ecommerce: {
      currency: "GBP",
      value,
      items,
    },
  });
  // Meta Pixel standard event: InitiateCheckout
  const numItems = items.reduce((n, i) => n + (i.quantity || 1), 0);
  trackMetaEvent("InitiateCheckout", {
    value,
    currency: "GBP",
    num_items: numItems,
    content_ids: items.map((i) => String(i.item_id || "")).filter(Boolean),
    content_type: "product",
  });
}

/** GA4: add_shipping_info – when user submits shipping information during checkout */
export function trackAddShippingInfo(params: {
  cartItems: Array<Record<string, unknown>>;
  value: number;
  currency?: string;
  shippingTier?: string;
}) {
  ensureDataLayer();
  const items: GA4Item[] = (params.cartItems || []).map((item: any) =>
    item?.product?.products ? toGA4Item(mapCartItemToProduct(item)) : toGA4Item(item)
  );
  const payload: Record<string, unknown> = {
    currency: params.currency || "GBP",
    value: params.value,
    items,
  };
  if (params.shippingTier) payload.shipping_tier = params.shippingTier;
  window.dataLayer!.push({
    event: "add_shipping_info",
    ecommerce: payload,
  });
}

export function trackPurchase(orderData: {
  transaction_id?: string;
  value?: number;
  currency?: string;
  items?: Array<Record<string, unknown>>;
  shipping?: number;
  tax?: number;
}) {
  ensureDataLayer();
  const items: GA4Item[] = (orderData.items || []).map((p: any) => toGA4Item(p));
  window.dataLayer!.push({
    event: "purchase",
    ecommerce: {
      transaction_id: orderData.transaction_id || `ord_${Date.now()}`,
      value: orderData.value ?? 0,
      currency: orderData.currency || "GBP",
      shipping: orderData.shipping ?? 0,
      tax: orderData.tax ?? 0,
      items,
    },
  });
  // Meta Pixel standard event: Purchase (value + currency required; content_ids/contents for catalog)
  const purchaseValue = Number(orderData.value) ?? 0;
  const currency = orderData.currency || "GBP";
  const orderId = orderData.transaction_id || `ord_${Date.now()}`;
  trackMetaEvent("Purchase", {
    value: purchaseValue,
    currency,
    order_id: orderId,
    num_items: items.length,
    content_ids: items.map((i) => String(i.item_id || "")).filter(Boolean),
    content_type: "product",
    contents: items.map((i) => ({
      id: String(i.item_id || ""),
      quantity: i.quantity ?? 1,
      item_price: Number(i.price) || 0,
    })),
  });
}
