import React, { useState } from 'react';
import { Product, ScreenView } from '../types';

interface ProductDetailScreenProps {
  product: Product;
  setCurrentScreen: (screen: ScreenView) => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onInstantBuy: (product: Product, quantity: number) => void;
}

export const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  product,
  setCurrentScreen,
  onAddToCart,
  onInstantBuy,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const activeImage = images[selectedImageIndex] || product.image;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setToastMessage(`Added ${quantity} × ${product.name} to your bag`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 md:px-16 py-8 md:py-16 flex flex-col gap-12 md:gap-20">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#133a35] text-[#ffffff] px-6 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 border border-[#2c514c] animate-fade-in">
          <span className="material-symbols-outlined text-[#fed65b] text-[22px]">check_circle</span>
          <span className="text-xs uppercase font-semibold tracking-wider">{toastMessage}</span>
        </div>
      )}

      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-[#414847] uppercase tracking-wider">
        <button
          onClick={() => setCurrentScreen('shop')}
          className="hover:text-[#133a35] transition-colors"
        >
          Shop
        </button>
        <span>/</span>
        <button
          onClick={() => setCurrentScreen('shop')}
          className="hover:text-[#133a35] transition-colors capitalize"
        >
          {product.category}
        </button>
        <span>/</span>
        <span className="text-[#133a35] font-semibold">{product.name}</span>
      </div>

      {/* Product Main Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Gallery (Spans 7 cols on desktop) */}
        <div className="md:col-span-7 flex flex-col gap-4">
          <div className="w-full aspect-[4/5] md:aspect-[3/4] bg-[#f1ede8] rounded-xl overflow-hidden relative shadow-[0_12px_24px_rgba(93,64,55,0.05)] border border-[#e6e2dd]">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute top-4 left-4 bg-[#dce8b2] text-[#414b23] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-xs border border-[#c0cc98] backdrop-blur-xs bg-opacity-95">
              <span className="material-symbols-outlined text-[16px] text-[#2e3812]">verified</span>
              <span>Origin: {product.origin}</span>
            </div>
          </div>

          {/* Thumbnails Row */}
          {images.length > 1 && (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`aspect-square bg-[#f1ede8] rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
                    selectedImageIndex === idx
                      ? 'border-2 border-[#fed65b] shadow-xs scale-[0.98]'
                      : 'border border-[#e6e2dd] hover:opacity-80'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Details (Spans 5 cols on desktop) */}
        <div className="md:col-span-5 flex flex-col gap-6 md:sticky md:top-28">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#133a35] mb-2 leading-tight">
              {product.name}
            </h1>
            <p className="text-base text-[#414847] mb-4 leading-relaxed">
              {product.shortDescription}
            </p>
            <div className="font-serif text-2xl text-[#1c1c19] font-bold">
              AED {product.price.toFixed(2)}{' '}
              <span className="text-sm text-[#414847] font-normal font-sans">
                / {product.unit}
              </span>
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#c0c8c6]/40" />

          {/* Badges */}
          <div className="flex flex-wrap gap-2.5">
            {product.badges.map((badge, idx) => (
              <span
                key={idx}
                className="bg-[#ebe8e3] text-[#414847] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5 border border-[#c0c8c6]/50"
              >
                <span className="material-symbols-outlined text-[15px] text-[#133a35]">
                  {idx === 0 ? 'ac_unit' : 'spa'}
                </span>
                <span>{badge}</span>
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-[#1c1c19] leading-relaxed">
            {product.description}
          </p>

          {/* Quantity & Add to Cart Controls */}
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex items-center gap-4">
              {/* Quantity Selector */}
              <div className="flex items-center border border-[#717977] bg-[#fdf9f4] rounded-lg h-[48px]">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="px-4 text-[#1c1c19] hover:text-[#133a35] transition-colors flex items-center justify-center cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">remove</span>
                </button>
                <input
                  aria-label="Quantity"
                  type="text"
                  readOnly
                  value={quantity}
                  className="w-12 text-center text-sm font-semibold bg-transparent border-none focus:ring-0 text-[#1c1c19]"
                />
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="px-4 text-[#1c1c19] hover:text-[#133a35] transition-colors flex items-center justify-center cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="flex-grow bg-[#133a35] text-[#ffffff] h-[48px] rounded-lg text-xs font-semibold uppercase tracking-widest hover:bg-[#2c514c] transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                <span>Add to Cart</span>
              </button>
            </div>

            {/* Quick Buy directly to Checkout */}
            <button
              onClick={() => onInstantBuy(product, quantity)}
              className="w-full bg-[#fed65b] text-[#745c00] h-[44px] rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#ffe088] transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">bolt</span>
              <span>Express Checkout (UAE)</span>
            </button>
          </div>

          {/* UAE Delivery Details Box */}
          <div className="bg-[#f7f3ee] border border-[#e6e2dd] rounded-xl p-4 flex flex-col gap-3 mt-1">
            <h3 className="text-xs uppercase tracking-wider font-bold text-[#133a35] flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">local_shipping</span>
              <span>UAE Delivery Timelines</span>
            </h3>
            <ul className="text-xs text-[#414847] space-y-1.5">
              <li className="flex justify-between">
                <span>Dubai & Sharjah</span>
                <span className="font-semibold text-[#1c1c19]">Next Day</span>
              </li>
              <li className="flex justify-between">
                <span>Abu Dhabi</span>
                <span className="font-semibold text-[#1c1c19]">Next Day</span>
              </li>
              <li className="flex justify-between">
                <span>Other Emirates</span>
                <span className="font-semibold text-[#1c1c19]">1-2 Days</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Nutritional Facts & Bento Grid (Section 2) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {/* Nutritional Profile Bento */}
        <div className="col-span-1 md:col-span-2 bg-[#ffffff] border border-[#e6e2dd] rounded-xl p-6 md:p-8 shadow-xs">
          <h2 className="font-serif text-2xl text-[#133a35] mb-6">
            Nutritional Profile
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="flex flex-col gap-1 border-l-2 border-[#fed65b] pl-4">
              <span className="font-serif text-2xl font-semibold text-[#1c1c19]">
                {product.nutrition.calories}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#414847]">
                Calories per 1oz
              </span>
            </div>

            <div className="flex flex-col gap-1 border-l-2 border-[#fed65b] pl-4">
              <span className="font-serif text-2xl font-semibold text-[#1c1c19]">
                {product.nutrition.protein}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#414847]">
                Protein
              </span>
            </div>

            <div className="flex flex-col gap-1 border-l-2 border-[#fed65b] pl-4">
              <span className="font-serif text-2xl font-semibold text-[#1c1c19]">
                {product.nutrition.healthyFats}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#414847]">
                Healthy Fats
              </span>
            </div>

            <div className="flex flex-col gap-1 border-l-2 border-[#fed65b] pl-4">
              <span className="font-serif text-2xl font-semibold text-[#1c1c19]">
                {product.nutrition.dietaryFiber}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#414847]">
                Dietary Fiber
              </span>
            </div>
          </div>

          <p className="text-sm text-[#414847] mt-6 italic leading-relaxed">
            {product.nutrition.vitaminsNote ||
              'Rich in Vitamin E, Magnesium, and Antioxidants. A perfect addition to a balanced, refined diet.'}
          </p>
        </div>

        {/* The Al-Qalb Promise */}
        <div className="col-span-1 bg-[#133a35] text-[#ffffff] rounded-xl p-6 md:p-8 shadow-xs flex flex-col justify-center items-center text-center relative overflow-hidden">
          <span className="material-symbols-outlined text-[72px] opacity-10 absolute -right-4 -bottom-4 pointer-events-none">
            eco
          </span>
          <span className="material-symbols-outlined text-[36px] mb-4 text-[#fed65b]">
            workspace_premium
          </span>
          <h3 className="font-serif text-xl font-bold mb-2 text-[#ffffff]">
            The Al-Qalb Promise
          </h3>
          <p className="text-sm text-[#ffffff]/90 leading-relaxed">
            Every kernel is inspected to meet our exacting standards of quality, ensuring only the finest nature has to offer reaches your table.
          </p>
        </div>
      </section>
    </div>
  );
};
