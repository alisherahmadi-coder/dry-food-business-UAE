import React, { useState } from 'react';
import { CartItem, DeliveryDetails, PaymentMethod, Order } from '../types';
import { MAP_IMAGE } from '../data/products';

interface CheckoutScreenProps {
  cartItems: CartItem[];
  onCompleteOrder: (order: Order) => void;
  onUpdateCartQuantity: (productId: string, delta: number) => void;
  onBackToShop: () => void;
}

export const CheckoutScreen: React.FC<CheckoutScreenProps> = ({
  cartItems,
  onCompleteOrder,
  onUpdateCartQuantity,
  onBackToShop,
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isLocating, setIsLocating] = useState<boolean>(false);

  // Form State
  const [delivery, setDelivery] = useState<DeliveryDetails>({
    emirate: 'dubai',
    area: 'Downtown Dubai',
    street: 'Sheikh Mohammed bin Rashid Blvd',
    building: 'Burj Crown Residence',
    apartment: 'Unit 1402',
    instructions: 'Please call upon arrival and leave at reception.',
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card');
  const [cardNumber, setCardNumber] = useState<string>('4532 •••• •••• 8892');
  const [cardExpiry, setCardExpiry] = useState<string>('09/28');
  const [cardCvv, setCardCvv] = useState<string>('482');
  const [promoCode, setPromoCode] = useState<string>('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoError, setPromoError] = useState<string | null>(null);
  const [promoSuccess, setPromoSuccess] = useState<string | null>(null);

  // Form Errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Financial Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const taxableSubtotal = subtotal - discountAmount;
  const shipping = taxableSubtotal >= 150 || taxableSubtotal === 0 ? 0 : 20.0;
  const vat = taxableSubtotal * 0.05;
  const total = taxableSubtotal + shipping + vat;

  const handleUseCurrentLocation = () => {
    setIsLocating(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setIsLocating(false);
          setDelivery((prev) => ({
            ...prev,
            emirate: 'dubai',
            area: 'Financial Center (DIFC)',
            street: 'Gate Avenue, Level 1',
            building: 'Index Tower',
          }));
        },
        (err) => {
          setIsLocating(false);
          // Fallback to sample detected Dubai coordinates
          setDelivery((prev) => ({
            ...prev,
            emirate: 'dubai',
            area: 'Dubai Marina & JBR',
            street: 'Al Marsa Street',
            building: 'Marina Gate 2',
          }));
        },
        { timeout: 4000 }
      );
    } else {
      setIsLocating(false);
      setDelivery((prev) => ({
        ...prev,
        emirate: 'dubai',
        area: 'Downtown Dubai',
        street: 'Mohammed Bin Rashid Blvd',
      }));
    }
  };

  const validateDelivery = () => {
    const errs: Record<string, string> = {};
    if (!delivery.emirate) errs.emirate = 'Please select an Emirate';
    if (!delivery.area.trim()) errs.area = 'Area / Neighborhood is required';
    if (!delivery.street.trim()) errs.street = 'Street Address is required';
    if (!delivery.building.trim()) errs.building = 'Building / Villa No. is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleContinueToPayment = () => {
    if (validateDelivery()) {
      setActiveStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError(null);
    setPromoSuccess(null);
    const code = promoCode.trim().toUpperCase();
    if (code === 'ALQALB10') {
      setDiscountPercent(10);
      setPromoSuccess('10% Welcome Discount Applied');
    } else if (code === 'EID2026') {
      setDiscountPercent(15);
      setPromoSuccess('15% Festive Celebration Discount Applied');
    } else if (code === '') {
      setPromoError('Please enter a valid promotion code');
    } else {
      setPromoError('Invalid code. Try "ALQALB10" for 10% off');
    }
  };

  const handlePlaceOrder = () => {
    const newOrder: Order = {
      id: `AQ-${Math.floor(100000 + Math.random() * 900000)}`,
      createdAt: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      items: [...cartItems],
      subtotal,
      shipping,
      vat,
      total,
      deliveryDetails: delivery,
      paymentMethod,
      status: 'Confirmed',
      estimatedDelivery: delivery.emirate === 'dubai' || delivery.emirate === 'abudhabi' || delivery.emirate === 'sharjah' ? 'Tomorrow, between 10 AM - 2 PM' : 'Within 48 hours',
    };

    onCompleteOrder(newOrder);
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-[800px] mx-auto px-4 py-20 text-center">
        <span className="material-symbols-outlined text-6xl text-[#717977] mb-4">
          shopping_basket
        </span>
        <h2 className="font-serif text-3xl text-[#133a35] mb-2">Your Bag is Empty</h2>
        <p className="text-sm text-[#414847] mb-8">
          Explore our collection of fresh, hand-selected dry foods and gift boxes.
        </p>
        <button
          onClick={onBackToShop}
          className="bg-[#133a35] text-[#ffffff] px-8 py-3.5 rounded text-xs uppercase tracking-wider font-semibold hover:bg-[#2c514c]"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-16 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Main Checkout Area (Steps) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Step 1 Header */}
          <div
            onClick={() => setActiveStep(1)}
            className={`flex items-center justify-between border-b pb-4 cursor-pointer transition-colors ${
              activeStep === 1
                ? 'border-[#133a35]'
                : 'border-[#ebe8e3] opacity-70 hover:opacity-100'
            }`}
          >
            <div className="flex items-center space-x-4">
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-full font-semibold text-xs transition-colors ${
                  activeStep === 1
                    ? 'bg-[#133a35] text-[#ffffff]'
                    : 'bg-[#ebe8e3] text-[#414847]'
                }`}
              >
                1
              </span>
              <h1 className="font-serif text-2xl md:text-3xl text-[#1c1c19]">
                Delivery Details
              </h1>
            </div>
            {activeStep > 1 && (
              <span className="text-xs text-[#735c00] font-semibold uppercase tracking-wider underline">
                Edit
              </span>
            )}
          </div>

          {/* Step 1: Delivery Form */}
          {activeStep === 1 && (
            <section className="space-y-8 animate-fade-in" id="step-1">
              <div className="bg-[#ffffff] rounded-lg border border-[#ebe8e3] ambient-shadow overflow-hidden">
                {/* Interactive Map View */}
                <div className="w-full h-48 bg-[#f1ede8] relative overflow-hidden">
                  <img
                    src={MAP_IMAGE}
                    alt="Map view of Dubai, UAE"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="material-symbols-outlined text-[#133a35] text-4xl drop-shadow-md fill">
                      location_on
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleUseCurrentLocation}
                    disabled={isLocating}
                    className="absolute bottom-4 right-4 bg-[#ffffff] text-[#133a35] px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider border border-[#ebe8e3] hover:bg-[#f1ede8] transition-colors shadow-xs flex items-center space-x-2 cursor-pointer"
                  >
                    <span
                      className={`material-symbols-outlined text-[16px] ${
                        isLocating ? 'animate-spin' : ''
                      }`}
                    >
                      {isLocating ? 'refresh' : 'my_location'}
                    </span>
                    <span>{isLocating ? 'Locating...' : 'Use Current Location'}</span>
                  </button>
                </div>

                {/* Form Fields */}
                <div className="p-6 md:p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-[#414847] uppercase tracking-wider block">
                        Emirate *
                      </label>
                      <select
                        value={delivery.emirate}
                        onChange={(e) => setDelivery({ ...delivery, emirate: e.target.value })}
                        className="input-underline w-full text-sm text-[#1c1c19] py-1.5 focus:ring-0 cursor-pointer"
                      >
                        <option value="dubai">Dubai</option>
                        <option value="abudhabi">Abu Dhabi</option>
                        <option value="sharjah">Sharjah</option>
                        <option value="ajman">Ajman</option>
                        <option value="rak">Ras Al Khaimah</option>
                        <option value="fujairah">Fujairah</option>
                        <option value="ummalquwain">Umm Al Quwain</option>
                      </select>
                      {errors.emirate && (
                        <p className="text-xs text-[#ba1a1a] mt-1">{errors.emirate}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-[#414847] uppercase tracking-wider block">
                        Area / Neighborhood *
                      </label>
                      <input
                        type="text"
                        value={delivery.area}
                        onChange={(e) => setDelivery({ ...delivery, area: e.target.value })}
                        placeholder="e.g. Downtown Dubai"
                        className="input-underline w-full text-sm text-[#1c1c19] py-1.5 focus:ring-0"
                      />
                      {errors.area && (
                        <p className="text-xs text-[#ba1a1a] mt-1">{errors.area}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-[#414847] uppercase tracking-wider block">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      value={delivery.street}
                      onChange={(e) => setDelivery({ ...delivery, street: e.target.value })}
                      placeholder="Street Name, Area"
                      className="input-underline w-full text-sm text-[#1c1c19] py-1.5 focus:ring-0"
                    />
                    {errors.street && (
                      <p className="text-xs text-[#ba1a1a] mt-1">{errors.street}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-[#414847] uppercase tracking-wider block">
                        Building / Villa No. *
                      </label>
                      <input
                        type="text"
                        value={delivery.building}
                        onChange={(e) => setDelivery({ ...delivery, building: e.target.value })}
                        placeholder="e.g. Villa 12, Burj Khalifa"
                        className="input-underline w-full text-sm text-[#1c1c19] py-1.5 focus:ring-0"
                      />
                      {errors.building && (
                        <p className="text-xs text-[#ba1a1a] mt-1">{errors.building}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-[#414847] uppercase tracking-wider block">
                        Apartment (Optional)
                      </label>
                      <input
                        type="text"
                        value={delivery.apartment}
                        onChange={(e) => setDelivery({ ...delivery, apartment: e.target.value })}
                        placeholder="Apt Number"
                        className="input-underline w-full text-sm text-[#1c1c19] py-1.5 focus:ring-0"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-[#414847] uppercase tracking-wider block">
                      Delivery Instructions
                    </label>
                    <input
                      type="text"
                      value={delivery.instructions}
                      onChange={(e) => setDelivery({ ...delivery, instructions: e.target.value })}
                      placeholder="Leave at the door, call upon arrival, etc."
                      className="input-underline w-full text-sm text-[#1c1c19] py-1.5 focus:ring-0"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={handleContinueToPayment}
                  className="bg-[#133a35] text-[#ffffff] px-8 py-4 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#2c514c] transition-all duration-300 w-full md:w-auto shadow-xs cursor-pointer"
                >
                  Continue to Payment
                </button>
              </div>
            </section>
          )}

          {/* Step 2 Header */}
          <div
            onClick={() => {
              if (validateDelivery()) setActiveStep(2);
            }}
            className={`flex items-center space-x-4 border-b pb-4 cursor-pointer transition-colors mt-8 ${
              activeStep === 2 ? 'border-[#133a35]' : 'border-[#ebe8e3] opacity-60'
            }`}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 rounded-full font-semibold text-xs ${
                activeStep === 2
                  ? 'bg-[#133a35] text-[#ffffff]'
                  : 'border border-[#717977] text-[#717977]'
              }`}
            >
              2
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#1c1c19]">
              Payment & Review
            </h2>
          </div>

          {/* Step 2: Payment Details Form */}
          {activeStep === 2 && (
            <section className="space-y-6 animate-fade-in" id="step-2">
              <div className="bg-[#ffffff] rounded-lg border border-[#ebe8e3] ambient-shadow p-6 md:p-8 space-y-6">
                {/* Method selector */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label
                    className={`flex items-center p-3.5 rounded-lg border cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'border-[#133a35] bg-[#f1ede8]/50 text-[#133a35]'
                        : 'border-[#ebe8e3] hover:bg-[#fdf9f4]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="sr-only"
                    />
                    <span className="material-symbols-outlined mr-2 text-[20px]">credit_card</span>
                    <span className="text-xs uppercase font-bold tracking-wider">Credit Card</span>
                  </label>

                  <label
                    className={`flex items-center p-3.5 rounded-lg border cursor-pointer transition-all ${
                      paymentMethod === 'applepay'
                        ? 'border-[#133a35] bg-[#f1ede8]/50 text-[#133a35]'
                        : 'border-[#ebe8e3] hover:bg-[#fdf9f4]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'applepay'}
                      onChange={() => setPaymentMethod('applepay')}
                      className="sr-only"
                    />
                    <span className="material-symbols-outlined mr-2 text-[20px]">phone_iphone</span>
                    <span className="text-xs uppercase font-bold tracking-wider">Apple Pay</span>
                  </label>

                  <label
                    className={`flex items-center p-3.5 rounded-lg border cursor-pointer transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-[#133a35] bg-[#f1ede8]/50 text-[#133a35]'
                        : 'border-[#ebe8e3] hover:bg-[#fdf9f4]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                      className="sr-only"
                    />
                    <span className="material-symbols-outlined mr-2 text-[20px]">payments</span>
                    <span className="text-xs uppercase font-bold tracking-wider">Cash on Delivery</span>
                  </label>
                </div>

                {/* Card Fields */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4 pt-2">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-[#414847] uppercase tracking-wider block">
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="•••• •••• •••• ••••"
                        className="input-underline w-full text-sm text-[#1c1c19] py-1.5 focus:ring-0 font-mono"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-[#414847] uppercase tracking-wider block">
                          Expiry (MM/YY)
                        </label>
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          placeholder="MM/YY"
                          className="input-underline w-full text-sm text-[#1c1c19] py-1.5 focus:ring-0 font-mono"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-[#414847] uppercase tracking-wider block">
                          Security CVV
                        </label>
                        <input
                          type="password"
                          value={cardCvv}
                          onChange={(e) => setCardCvv(e.target.value)}
                          placeholder="•••"
                          maxLength={4}
                          className="input-underline w-full text-sm text-[#1c1c19] py-1.5 focus:ring-0 font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'applepay' && (
                  <div className="p-6 bg-[#f7f3ee] rounded-lg text-center space-y-2">
                    <span className="material-symbols-outlined text-4xl text-[#133a35]">fingerprint</span>
                    <p className="text-sm font-semibold text-[#133a35]">
                      Touch ID / Face ID will authenticate your payment.
                    </p>
                    <p className="text-xs text-[#414847]">
                      Billed to your default Apple Wallet card in AED.
                    </p>
                  </div>
                )}

                {paymentMethod === 'cod' && (
                  <div className="p-6 bg-[#f7f3ee] rounded-lg space-y-2">
                    <p className="text-sm font-semibold text-[#133a35]">
                      Pay cash or card to the courier upon delivery.
                    </p>
                    <p className="text-xs text-[#414847]">
                      Our driver carries a contactless mobile POS terminal compatible with all UAE debit/credit cards.
                    </p>
                  </div>
                )}

                {/* Promo Code Input */}
                <div className="pt-4 border-t border-[#ebe8e3]">
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promo code (e.g. ALQALB10)"
                      className="input-underline flex-grow text-xs uppercase tracking-wider py-1.5 focus:ring-0"
                    />
                    <button
                      type="submit"
                      className="bg-[#ebe8e3] text-[#133a35] px-4 py-2 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#ddd9d5] transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                  {promoError && (
                    <p className="text-xs text-[#ba1a1a] mt-1.5">{promoError}</p>
                  )}
                  {promoSuccess && (
                    <p className="text-xs text-[#2e3812] font-semibold mt-1.5 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">check</span>
                      <span>{promoSuccess}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveStep(1)}
                  className="text-xs uppercase tracking-wider font-semibold text-[#414847] hover:text-[#133a35] py-3 text-left"
                >
                  ← Back to Delivery
                </button>
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="bg-[#133a35] text-[#ffffff] px-8 py-4 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#2c514c] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  <span>Place Order (AED {total.toFixed(2)})</span>
                </button>
              </div>
            </section>
          )}
        </div>

        {/* Order Summary Sidebar */}
        <aside className="lg:col-span-5">
          <div className="bg-[#ffffff] rounded-lg border border-[#ebe8e3] ambient-shadow p-6 md:p-8 sticky top-24 space-y-6">
            <h3 className="font-serif text-xl text-[#1c1c19]">Order Summary</h3>

            {/* Items List */}
            <div className="space-y-6 border-b border-[#ebe8e3] pb-6 max-h-[380px] overflow-y-auto pr-1">
              {cartItems.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-start space-x-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#f1ede8] rounded overflow-hidden flex-shrink-0 border border-[#e6e2dd]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-grow">
                    <h4 className="font-serif text-base text-[#1c1c19] line-clamp-1">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#414847] mt-0.5">
                      Origin: {product.origin} • {product.unit}
                    </p>

                    <div className="flex justify-between items-center mt-2">
                      {/* Quantity Controls in Checkout */}
                      <div className="flex items-center space-x-2 text-xs text-[#414847]">
                        <span>Qty:</span>
                        <button
                          onClick={() => onUpdateCartQuantity(product.id, -1)}
                          className="w-5 h-5 rounded bg-[#f1ede8] text-[#133a35] hover:bg-[#e6e2dd] flex items-center justify-center font-bold"
                          title="Decrease"
                        >
                          -
                        </button>
                        <span className="font-bold text-[#1c1c19]">{quantity}</span>
                        <button
                          onClick={() => onUpdateCartQuantity(product.id, 1)}
                          className="w-5 h-5 rounded bg-[#f1ede8] text-[#133a35] hover:bg-[#e6e2dd] flex items-center justify-center font-bold"
                          title="Increase"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-sm font-semibold text-[#1c1c19]">
                        AED {(product.price * quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtotals & Taxes */}
            <div className="space-y-3 text-sm text-[#1c1c19]">
              <div className="flex justify-between text-xs">
                <span className="text-[#414847]">Subtotal</span>
                <span>AED {subtotal.toFixed(2)}</span>
              </div>

              {discountPercent > 0 && (
                <div className="flex justify-between text-xs text-[#2e3812] font-medium">
                  <span>Special Discount ({discountPercent}%)</span>
                  <span>-AED {discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between text-xs">
                <span className="text-[#414847]">Shipping (UAE Express)</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-[#2e3812] font-semibold uppercase text-[11px]">
                      Complimentary
                    </span>
                  ) : (
                    `AED ${shipping.toFixed(2)}`
                  )}
                </span>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-[#414847]">Taxes (UAE VAT 5%)</span>
                <span>AED {vat.toFixed(2)}</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-end border-t border-[#ebe8e3] pt-5">
              <span className="font-serif text-xl font-bold text-[#1c1c19]">Total</span>
              <div className="text-right">
                <span className="text-[11px] font-bold text-[#414847] block tracking-wider">
                  AED
                </span>
                <span className="font-serif text-3xl font-bold text-[#1c1c19]">
                  {total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Security Badge */}
            <div className="pt-4 border-t border-[#ebe8e3]/60 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#414847] flex items-center justify-center space-x-1.5">
                <span className="material-symbols-outlined text-[16px] text-[#735c00]">lock</span>
                <span>Secure 256-bit SSL Checkout</span>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};
