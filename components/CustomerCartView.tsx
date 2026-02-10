import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import DeleteDialog from "./DeleteDialog";
import Offers from "./Offers";
import { deleteProductFromCart } from "../api/retailerApis";
import { CartItem } from "../types";
import {
  calculateItemTotal,
  calculateCartSubtotal,
  getLensCoating,
  getTintInfo,
  getLensTypeDisplay,
  getLensIndex,
  formatFrameSize,
} from "../utils/priceUtils";

interface CustomerCartViewProps {
  open: boolean;
  close: () => void;
  carts: CartItem[];
  refetch: () => void;
  onCheckout?: () => void;
  buttonText?: string;
  /** When provided (e.g. from payment page), show shipping and total payable in footer */
  shippingCost?: number;
  /** Discount already applied (e.g. from payment page cartData) */
  discountAmount?: number;
}

const CustomerCartView: React.FC<CustomerCartViewProps> = ({
  open,
  close,
  carts,
  refetch,
  onCheckout,
  buttonText,
  shippingCost = 0,
  discountAmount,
}) => {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [selectedCart, setSelectedCart] = useState<CartItem | null>(null);
  const navigate = useNavigate();

  const { mutate: handleDeleteItem, isPending } = useMutation({
    mutationFn: (cartId: number) =>
      deleteProductFromCart(cartId, undefined, undefined),
    onSuccess: () => {
      setDeleteDialog(false);
      setSelectedCart(null);
      refetch();
    },
    onError: (error) => {
      console.error("Delete failed", error);
      setDeleteDialog(false);
      refetch();
    },
  });

  const handleDelete = () => {
    if (selectedCart) {
      handleDeleteItem(selectedCart.cart_id);
    }
  };

  const handleCheckout = () => {
    if (onCheckout) {
      onCheckout();
      return;
    }
    close();
    if (localStorage.getItem("token")) {
      navigate("/payment");
    } else {
      navigate("/login", { state: { returnTo: "/payment" } });
    }
  };

  if (!carts) {
    return 'No Cart'
  }

  // Subtotal = sum of (frame + lens + coating) per item, same as cart page
  const subtotal = Array.isArray(carts) ? calculateCartSubtotal(carts) : 0;

  // Safely get applied offer and discount
  const appliedOffer = Array.isArray(carts)
    ? carts.find((c) => c.offer)?.offer || null
    : null;

  const offerAmount = Array.isArray(carts)
    ? carts.reduce((sum, item) => sum + (item.offer_applied_discount || 0), 0)
    : 0;

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[199] transition-opacity duration-300"
          onClick={close}
        />
      )}

      {/* Sidebar Drawer - Slides from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[475px] bg-white shadow-2xl z-[200] transform transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <h2 className="text-xl font-bold text-[#1F1F1F] font-sans">
              Cart View
            </h2>
            <button
              onClick={close}
              className="p-2 text-gray-400 hover:text-[#E94D37] transition-colors rounded-full hover:bg-gray-50"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {carts && carts.length > 0 ? (
              <ul className="space-y-5">
                {carts.map((cart) => {
                  const framePrice = Number(cart.product?.products?.list_price || 0);
                  const lensIndexInfo = getLensIndex(cart);
                  const coating = getLensCoating(cart);
                  const tintInfo = getTintInfo(cart);
                  return (
                    <li
                      key={cart.cart_id}
                      className="p-3 rounded-xl border border-gray-200 bg-white shadow-sm"
                    >
                      <div className="flex gap-3">
                        {/* Product Image */}
                        <div className="w-[90px] h-[90px] shrink-0 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                          <img
                            src={
                              cart.product?.products?.image ||
                              "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=300"
                            }
                            alt="Product"
                            className="w-full h-full object-cover mix-blend-multiply"
                          />
                        </div>

                        {/* Frame details header */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-2">
                            <div>
                              <h4 className="text-sm font-bold text-[#1F1F1F]">
                                {cart.product?.products?.naming_system || cart.product?.products?.brand}
                              </h4>
                              <p className="text-xs text-[#525252] mt-0.5">
                                {cart.product?.products?.framecolor}{" "}
                                {cart.product?.products?.style} For{" "}
                                {cart.product?.products?.gender}
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                setSelectedCart(cart);
                                setDeleteDialog(true);
                              }}
                              className="shrink-0 p-1 text-gray-400 hover:text-[#E94D37] transition-colors"
                              aria-label="Remove"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 6h18"></path>
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Price breakdown table */}
                      <div className="mt-3 border border-gray-200 rounded text-xs">
                        <div className="flex border-b border-gray-200">
                          <div className="w-1/2 py-2 px-2 font-semibold text-[#1F1F1F] border-r border-gray-200">
                            Frame Price:
                          </div>
                          <div className="w-1/2 py-2 px-2 text-right font-semibold text-[#1F1F1F]">
                            £{framePrice.toFixed(2)}
                          </div>
                        </div>
                        <div className="flex border-b border-gray-200">
                          <div className="w-1/2 py-2 px-2 font-semibold text-[#1F1F1F] border-r border-gray-200">
                            Color:
                          </div>
                          <div className="w-1/2 py-2 px-2 text-[#525252]">
                            {cart.product?.products?.framecolor || "—"}
                          </div>
                        </div>
                        <div className="flex border-b border-gray-200">
                          <div className="w-1/2 py-2 px-2 font-semibold text-[#1F1F1F] border-r border-gray-200">
                            Frame Size:
                          </div>
                          <div className="w-1/2 py-2 px-2 text-[#525252]">
                            {formatFrameSize(cart.product?.products?.size)}
                          </div>
                        </div>
                        <div className="flex border-b border-gray-200">
                          <div className="w-1/2 py-2 px-2 font-semibold text-[#1F1F1F] border-r border-gray-200">
                            Lens Type:
                          </div>
                          <div className="w-1/2 py-2 px-2 text-[#525252]">
                            {getLensTypeDisplay(cart)}
                          </div>
                        </div>
                        <div className="flex border-b border-gray-200">
                          <div className="w-1/2 py-2 px-2 font-semibold text-[#1F1F1F] border-r border-gray-200">
                            Lens Index:
                          </div>
                          <div className="w-1/2 py-2 px-2 flex justify-between items-center">
                            <span className="text-[#525252] truncate pr-1">{lensIndexInfo.index}</span>
                            <span className="font-semibold text-[#1F1F1F] shrink-0">£{lensIndexInfo.price.toFixed(2)}</span>
                          </div>
                        </div>
                        {tintInfo ? (
                          <div className="flex">
                            <div className="w-1/2 py-2 px-2 font-semibold text-[#1F1F1F] border-r border-gray-200">
                              Lens Tint:
                            </div>
                            <div className="w-1/2 py-2 px-2 flex justify-between items-center">
                              <span className="text-[#525252]">{tintInfo.type}{tintInfo.color ? `-${tintInfo.color}` : ""}</span>
                              <span className="font-semibold text-[#1F1F1F]">£{Number(tintInfo.price).toFixed(2)}</span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex">
                            <div className="w-1/2 py-2 px-2 font-semibold text-[#1F1F1F] border-r border-gray-200">
                              Lens Coating:
                            </div>
                            <div className="w-1/2 py-2 px-2 flex justify-between items-center">
                              <span className="text-[#525252]">{coating.name}</span>
                              <span className="font-semibold text-[#1F1F1F]">£{Number(coating.price || 0).toFixed(2)}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Line total */}
                      <div className="mt-3 flex justify-end items-center gap-2">
                        <span className="text-xs font-bold text-[#1F1F1F]">Total</span>
                        <span className="text-sm font-bold text-[#4596F3]">£{calculateItemTotal(cart).toFixed(2)}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-gray-400">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="mb-4 opacity-50"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <p className="font-medium">Your cart is empty</p>
              </div>
            )}
          </div>

          {/* Footer */}
          {carts && carts.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-gray-50">
              {/* Offers Section */}
              <Offers
                refetch={refetch}
                listPrice={subtotal}
                offer={appliedOffer}
                offerAmount={offerAmount}
              />

              <div className="space-y-2 mb-4 pt-2">
                <div className="flex justify-between text-sm font-medium text-[#1F1F1F]">
                  <span>Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                {(discountAmount != null && discountAmount > 0) && (
                  <div className="flex justify-between text-sm font-medium text-[#00C853]">
                    <span>Discount</span>
                    <span>- £{Number(discountAmount).toFixed(2)}</span>
                  </div>
                )}
                {(shippingCost != null && shippingCost > 0) && (
                  <div className="flex justify-between text-sm font-medium text-[#1F1F1F]">
                    <span>Shipping</span>
                    <span>£{Number(shippingCost).toFixed(2)}</span>
                  </div>
                )}
                {((shippingCost ?? 0) > 0 || (discountAmount ?? 0) > 0) && (
                  <div className="flex justify-between text-base font-bold text-[#1F1F1F] pt-2 border-t border-gray-200">
                    <span>Total Payable</span>
                    <span>£{(subtotal - (discountAmount ?? 0) + (shippingCost ?? 0)).toFixed(2)}</span>
                  </div>
                )}
              </div>
              <button
                onClick={handleCheckout}
                className={`w-full py-3 font-bold rounded-full transition-colors shadow-lg uppercase tracking-wider text-sm ${onCheckout
                    ? "bg-[#E94D37] hover:bg-red-600 text-white"
                    : "bg-[#232320] hover:bg-black text-white"
                  }`}
              >
                {onCheckout ? (buttonText || "Checkout") : "Checkout"}
              </button>
            </div>
          )}
        </div>
      </div>

      <DeleteDialog
        open={deleteDialog}
        onClose={() => setDeleteDialog(false)}
        itemType="product"
        onConfirm={handleDelete}
      />
    </>
  );
};

export default React.memo(CustomerCartView);
