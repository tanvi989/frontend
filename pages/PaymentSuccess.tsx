import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { trackPurchase } from '@/utils/analytics';
import { updateOrderWithCart } from '@/api/retailerApis';
import { clearOrderRelatedStorage } from '@/utils/productFlowStorage';

const PENDING_ORDER_SYNC_KEY = 'multifolks_pending_order_sync';

const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [countdown, setCountdown] = useState(5);

  // Clear product flow and local prescriptions so next order starts fresh
  useEffect(() => {
    clearOrderRelatedStorage();
  }, []);

  // Sync order with cart + totals so order details show correct price (not £0)
  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(PENDING_ORDER_SYNC_KEY);
      if (!raw) return;
      const data = JSON.parse(raw) as { order_id: string; cart_items?: any[]; subtotal?: number; discount_amount?: number; shipping_cost?: number; total_payable?: number };
      const { order_id, ...payload } = data;
      if (!order_id) return;
      sessionStorage.removeItem(PENDING_ORDER_SYNC_KEY);
      updateOrderWithCart(order_id, payload).catch(() => {});
    } catch (_) {}
  }, []);

  // GA4: Track purchase on page load (order confirmation)
  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    trackPurchase({
      transaction_id: sessionId || `ord_${Date.now()}`,
      value: 0, // Can be enriched from order API if needed
      currency: 'GBP',
      items: [],
    });
  }, [searchParams]);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/orders');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleViewOrders = () => {
    navigate('/orders');
  };

  const handleContinueShopping = () => {
    navigate('/glasses');
  };

  return (
    <div className="min-h-screen bg-[#F3F0E7] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-sm w-full max-w-md p-8 md:p-12 border border-gray-200">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-[#00C853] rounded-full flex items-center justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#1F1F1F] mb-3">
          Thank You!
        </h1>
        <p className="text-center text-[#525252] text-sm mb-6">
          Your order has been placed successfully.
        </p>

        {/* Auto-redirect notice */}
        <p className="text-center text-gray-500 text-xs mb-8">
          Redirecting to your orders in {countdown} seconds...
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleViewOrders}
            className="w-full bg-[#1F1F1F] text-white py-3 rounded-md font-bold text-sm hover:bg-black transition-colors"
          >
            View My Orders
          </button>
          <button
            onClick={handleContinueShopping}
            className="w-full bg-white text-[#1F1F1F] py-3 rounded-md font-bold text-sm border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
