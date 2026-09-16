import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 150;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#fdf9f4] border-l border-[#e6e2dd] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-[#e6e2dd] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="material-symbols-outlined text-[#133a35]">shopping_bag</span>
              <h2 className="font-serif text-2xl text-[#133a35]">Your Bag</h2>
              <span className="text-xs bg-[#fed65b] text-[#745c00] font-bold px-2 py-0.5 rounded-full">
                {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-[#414847] hover:text-[#133a35] transition-colors rounded-full"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="px-6 py-3 bg-[#f1ede8] border-b border-[#e6e2dd]">
            <div className="flex justify-between text-xs mb-1.5 font-medium">
              {remainingForFreeShipping > 0 ? (
                <span>
                  Add <strong className="text-[#133a35]">AED {remainingForFreeShipping.toFixed(2)}</strong> for Free UAE Delivery
                </span>
              ) : (
                <span className="text-[#2e3812] font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]">check</span>
                  You qualify for Complimentary UAE Delivery!
                </span>
              )}
            </div>
            <div className="w-full h-1.5 bg-[#e6e2dd] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#133a35] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-grow overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <span className="material-symbols-outlined text-5xl text-[#717977]">
                  shopping_cart
                </span>
                <p className="text-base font-serif text-[#133a35]">Your bag is currently empty</p>
                <p className="text-xs text-[#414847]">
                  Explore our exquisite selection of almonds, pistachios, and curated hampers.
                </p>
              </div>
            ) : (
              cartItems.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex items-center space-x-4 bg-[#ffffff] p-3 rounded-lg border border-[#e6e2dd]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded bg-[#f7f3ee]"
                  />
                  <div className="flex-grow">
                    <h3 className="text-sm font-serif font-bold text-[#133a35] line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-[11px] text-[#414847]">{product.unit} • {product.origin}</p>
                    <p className="text-xs font-bold text-[#1c1c19] mt-1">
                      AED {(product.price * quantity).toFixed(2)}
                    </p>
                  </div>
                  {/* Qty +/- */}
                  <div className="flex items-center space-x-1.5 bg-[#f1ede8] rounded border border-[#e6e2dd] px-1.5 py-0.5">
                    <button
                      onClick={() => onUpdateQuantity(product.id, -1)}
                      className="text-xs px-1 text-[#133a35] hover:opacity-70 font-bold"
                    >
                      -
                    </button>
                    <span className="text-xs font-semibold px-1 text-[#1c1c19]">{quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(product.id, 1)}
                      className="text-xs px-1 text-[#133a35] hover:opacity-70 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#e6e2dd] bg-[#ffffff] space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#414847] uppercase text-xs tracking-wider">Subtotal:</span>
                <span className="font-serif text-2xl font-bold text-[#133a35]">
                  AED {subtotal.toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onCheckout();
                }}
                className="w-full bg-[#133a35] text-[#ffffff] py-4 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#2c514c] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
