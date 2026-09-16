import React from 'react';
import { Order } from '../types';

interface OrderConfirmationModalProps {
  order: Order | null;
  onClose: () => void;
  onContinueShopping: () => void;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  order,
  onClose,
  onContinueShopping,
}) => {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 flex items-center justify-center">
      <div onClick={onClose} className="fixed inset-0 bg-black/50 backdrop-blur-xs" />

      <div className="relative w-full max-w-xl bg-[#ffffff] rounded-2xl shadow-2xl border border-[#e6e2dd] p-6 sm:p-8 space-y-6 animate-fade-in">
        <div className="text-center space-y-3">
          <div className="w-16 h-16 bg-[#dce8b2] text-[#2e3812] rounded-full flex items-center justify-center mx-auto shadow-sm">
            <span className="material-symbols-outlined text-3xl">check_circle</span>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#735c00] block">
            Payment & Booking Confirmed
          </span>
          <h2 className="font-serif text-3xl text-[#133a35]">
            Thank You for Your Order
          </h2>
          <p className="text-xs text-[#414847]">
            Order Reference: <strong className="text-[#133a35] font-mono">{order.id}</strong> • Placed on {order.createdAt}
          </p>
        </div>

        {/* Delivery Details Card */}
        <div className="bg-[#f7f3ee] p-5 rounded-xl border border-[#e6e2dd] space-y-3 text-xs">
          <div className="flex items-center justify-between border-b border-[#e6e2dd] pb-2">
            <span className="font-bold text-[#133a35] uppercase tracking-wider">Estimated Delivery</span>
            <span className="font-semibold text-[#2e3812]">{order.estimatedDelivery}</span>
          </div>
          <div>
            <span className="text-[#414847] block mb-1">Destination Address:</span>
            <p className="font-medium text-[#1c1c19]">
              {order.deliveryDetails.building}, {order.deliveryDetails.street},{' '}
              {order.deliveryDetails.area}, {order.deliveryDetails.emirate.toUpperCase()}
            </p>
          </div>
          <div className="flex justify-between pt-2 border-t border-[#e6e2dd]">
            <span className="text-[#414847]">Payment Method:</span>
            <span className="font-semibold uppercase text-[#133a35]">{order.paymentMethod}</span>
          </div>
        </div>

        {/* Ordered items quick preview */}
        <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
          {order.items.map((item) => (
            <div key={item.product.id} className="flex justify-between items-center text-xs py-1.5 border-b border-[#f1ede8]">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#133a35]">{item.quantity}×</span>
                <span className="text-[#1c1c19]">{item.product.name}</span>
              </div>
              <span className="font-medium text-[#414847]">
                AED {(item.product.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center border-t border-[#e6e2dd] pt-4">
          <span className="font-serif text-lg font-bold text-[#133a35]">Total Paid:</span>
          <span className="font-serif text-2xl font-bold text-[#133a35]">
            AED {order.total.toFixed(2)}
          </span>
        </div>

        <button
          onClick={onContinueShopping}
          className="w-full bg-[#133a35] text-[#ffffff] py-4 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#2c514c] transition-colors shadow-sm"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};
