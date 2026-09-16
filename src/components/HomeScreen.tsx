import React from 'react';
import { ScreenView, Product } from '../types';
import { HERO_IMAGE } from '../data/products';

interface HomeScreenProps {
  setCurrentScreen: (screen: ScreenView) => void;
  onSelectProduct: (product: Product) => void;
  featuredProducts: Product[];
  onAddToCart: (product: Product, quantity?: number) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  setCurrentScreen,
  onSelectProduct,
  featuredProducts,
  onAddToCart,
}) => {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[580px] md:min-h-[720px] flex items-center justify-center overflow-hidden py-16 px-4 md:px-16">
        {/* Background photo & warm gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center w-full h-full opacity-35 transform scale-105 transition-transform duration-1000 ease-out"
            style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
            role="img"
            aria-label="Artisanal almonds and pistachios on desert sandstone"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdf9f4] via-[#fdf9f4]/85 to-[#fdf9f4]/40" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center">
          <div className="lg:col-span-8 flex flex-col justify-center space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#dce8b2] text-[#2e3812] px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase w-fit border border-[#c0cc98]">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              UAE Boutique Atelier
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#133a35] font-bold leading-[1.1] tracking-tight">
              Nature's Finest, <br />
              <span className="text-[#735c00] underline decoration-[#fed65b] decoration-4 underline-offset-8">
                Refined.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#414847] max-w-xl font-normal leading-relaxed">
              Discover our curated selection of premium dry foods. Sourced with integrity, roasted to perfection, and delivered swiftly across the UAE.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => setCurrentScreen('shop')}
                className="bg-[#133a35] text-[#ffffff] px-8 py-4 rounded font-semibold text-xs tracking-widest uppercase hover:bg-[#2c514c] transition-all hover:scale-[1.02] shadow-sm flex items-center justify-center gap-2"
              >
                <span>Explore Collection</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>

              <button
                onClick={() => setCurrentScreen('provenance')}
                className="border border-[#133a35] text-[#133a35] px-8 py-4 rounded font-semibold text-xs tracking-widest uppercase hover:bg-[#f1ede8] transition-all flex items-center justify-center gap-2"
              >
                Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection Quick Showcase */}
      <section className="py-14 px-4 md:px-16 max-w-[1280px] mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-3 border-b border-[#ebe8e3]">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#735c00] block mb-1">
              Curated Harvests
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#133a35]">
              Featured Selections
            </h2>
          </div>
          <button
            onClick={() => setCurrentScreen('shop')}
            className="text-xs uppercase font-semibold tracking-wider text-[#133a35] hover:text-[#735c00] flex items-center gap-1 mt-2 md:mt-0 transition-colors"
          >
            <span>View All ({featuredProducts.length}+)</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="group bg-[#ffffff] rounded-xl border border-[#e6e2dd] overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div
                onClick={() => onSelectProduct(product)}
                className="relative aspect-[4/5] overflow-hidden bg-[#f7f3ee] cursor-pointer flex items-center justify-center p-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full rounded-lg mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  {product.tags.raw && (
                    <span className="bg-[#dce8b2] text-[#2e3812] px-2 py-0.5 rounded text-[10px] tracking-wider uppercase font-semibold">
                      Raw
                    </span>
                  )}
                  {product.tags.premium && (
                    <span className="bg-[#fed65b] text-[#745c00] px-2 py-0.5 rounded text-[10px] tracking-wider uppercase font-semibold">
                      Premium
                    </span>
                  )}
                </div>
                <span className="absolute bottom-3 right-3 bg-[#fdf9f4]/90 text-[#414847] px-2 py-0.5 rounded text-[10px] font-medium border border-[#e6e2dd]">
                  {product.origin}
                </span>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3
                  onClick={() => onSelectProduct(product)}
                  className="font-serif text-lg text-[#133a35] hover:text-[#735c00] cursor-pointer transition-colors line-clamp-1 mb-1"
                >
                  {product.name}
                </h3>
                <p className="text-xs text-[#414847] line-clamp-2 mb-3 flex-grow">
                  {product.shortDescription}
                </p>
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-[#f1ede8]">
                  <div>
                    <span className="font-bold text-[#1c1c19] text-base">
                      AED {product.price.toFixed(2)}
                    </span>
                    <span className="text-[11px] text-[#414847] ml-1">/ {product.unit}</span>
                  </div>
                  <button
                    onClick={() => onAddToCart(product, 1)}
                    className="bg-[#133a35] text-[#ffffff] px-3 py-1.5 rounded text-[11px] uppercase tracking-wider font-semibold hover:bg-[#2c514c] transition-colors flex items-center gap-1"
                    title="Add to bag"
                  >
                    <span className="material-symbols-outlined text-[15px]">add_shopping_cart</span>
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Al-Qalb Standard (Why Choose Us) */}
      <section className="py-20 px-4 md:px-16 bg-[#f7f3ee] relative texture-overlay border-y border-[#e6e2dd]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#133a35] mb-4">
              The Al-Qalb Standard
            </h2>
            <div className="w-16 h-1 bg-[#fed65b] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#fdf9f4] p-8 rounded-xl border border-[#ddd9d5] hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#f1ede8] flex items-center justify-center mb-6 group-hover:bg-[#2c514c] group-hover:text-[#ffffff] text-[#133a35] transition-colors">
                <span className="material-symbols-outlined text-3xl">workspace_premium</span>
              </div>
              <h3 className="font-serif text-xl text-[#1c1c19] mb-3">
                Exceptional Quality
              </h3>
              <p className="text-[#414847] text-sm leading-relaxed">
                Hand-selected kernels, ensuring only the largest and most flavorful nuts reach your table.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#fdf9f4] p-8 rounded-xl border border-[#ddd9d5] hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#f1ede8] flex items-center justify-center mb-6 group-hover:bg-[#2c514c] group-hover:text-[#ffffff] text-[#133a35] transition-colors">
                <span className="material-symbols-outlined text-3xl">local_shipping</span>
              </div>
              <h3 className="font-serif text-xl text-[#1c1c19] mb-3">
                UAE Wide Delivery
              </h3>
              <p className="text-[#414847] text-sm leading-relaxed">
                Premium packaging ensuring freshness, delivered swiftly to your doorstep across the Emirates.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#fdf9f4] p-8 rounded-xl border border-[#ddd9d5] hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#f1ede8] flex items-center justify-center mb-6 group-hover:bg-[#2c514c] group-hover:text-[#ffffff] text-[#133a35] transition-colors">
                <span className="material-symbols-outlined text-3xl">eco</span>
              </div>
              <h3 className="font-serif text-xl text-[#1c1c19] mb-3">
                Sustainable Sourcing
              </h3>
              <p className="text-[#414847] text-sm leading-relaxed">
                Committed to ethical farming practices and sustainable packaging for a better tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Taste of Heritage Banner */}
      <section className="py-16 px-4 md:px-16 max-w-[1280px] mx-auto w-full">
        <div className="bg-[#133a35] text-[#ffffff] rounded-2xl p-8 md:p-14 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
          <span className="material-symbols-outlined text-[180px] opacity-5 absolute -right-10 -bottom-10 pointer-events-none">
            spa
          </span>
          <div className="max-w-xl space-y-4">
            <span className="text-[#fed65b] text-xs uppercase tracking-widest font-semibold">
              Gifting & Corporate Collections
            </span>
            <h3 className="font-serif text-3xl md:text-4xl leading-tight">
              Share the Tradition of Arabian Hospitality
            </h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Custom engraved walnut keepsake boxes, hand-picked raw kernels, and artisan sweets tailored for luxury personal and executive gifting.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={() => setCurrentScreen('gifts')}
              className="bg-[#fed65b] text-[#745c00] px-8 py-4 rounded font-bold text-xs uppercase tracking-widest hover:bg-[#ffe088] transition-all shadow-sm"
            >
              Explore Gift Boxes
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
