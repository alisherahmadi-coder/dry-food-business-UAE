import React, { useState } from 'react';
import { Product } from '../types';

interface GiftsScreenProps {
  giftProducts: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const GiftsScreen: React.FC<GiftsScreenProps> = ({
  giftProducts,
  onSelectProduct,
  onAddToCart,
}) => {
  const [selectedRibbon, setSelectedRibbon] = useState<string>('Emerald Green');
  const [customEngraving, setCustomEngraving] = useState<string>('');
  const [inquirySubmitted, setInquirySubmitted] = useState<boolean>(false);

  const ribbons = [
    { name: 'Emerald Green', hex: '#133a35' },
    { name: 'Imperial Gold', hex: '#fed65b' },
    { name: 'Royal Crimson', hex: '#8b1e22' },
    { name: 'Desert Sand', hex: '#d4af37' },
  ];

  return (
    <div className="w-full pb-20">
      {/* Header */}
      <div className="w-full bg-[#f1ede8] py-14 md:py-20 mb-12 border-b border-[#e6e2dd]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#735c00] block mb-2">
            The Art of Arabian Gifting
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#133a35] mb-4">
            Curated Gift Hampers
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#414847] max-w-2xl mx-auto leading-relaxed">
            Elegantly presented in handcrafted walnut keepsakes and bespoke brass-embossed boxes. Designed for celebrations, VIP corporate gifts, and cherished moments.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-16 space-y-16">
        {/* Gift Boxes Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {giftProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#ffffff] rounded-xl border border-[#e6e2dd] overflow-hidden hover:shadow-lg transition-all flex flex-col group"
            >
              <div
                onClick={() => onSelectProduct(product)}
                className="aspect-[4/5] bg-[#f7f3ee] relative cursor-pointer overflow-hidden p-6 flex items-center justify-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#fed65b] text-[#745c00] px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
                  Bespoke Box
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3
                  onClick={() => onSelectProduct(product)}
                  className="font-serif text-xl text-[#133a35] mb-2 hover:text-[#735c00] cursor-pointer transition-colors"
                >
                  {product.name}
                </h3>
                <p className="text-xs text-[#414847] leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#f1ede8]">
                  <div>
                    <span className="font-serif text-xl font-bold text-[#1c1c19]">
                      AED {product.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-[#414847] block">{product.unit}</span>
                  </div>

                  <button
                    onClick={() => onAddToCart(product, 1)}
                    className="bg-[#133a35] text-[#ffffff] px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#2c514c] transition-colors flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[16px]">card_giftcard</span>
                    <span>Order Hamper</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bespoke Customization Studio */}
        <div className="bg-[#ffffff] rounded-2xl border border-[#e6e2dd] p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#735c00]">
              Personalization Atelier
            </span>
            <h2 className="font-serif text-3xl text-[#133a35]">
              Customize Your Keepsake Box
            </h2>
            <p className="text-sm text-[#414847] leading-relaxed">
              Every Al-Qalb gift hamper can be adorned with your choice of silk grosgrain ribbon and a custom brass-engraved nameplate with Arabic calligraphy or Roman lettering.
            </p>

            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold text-[#133a35] uppercase tracking-wider block">
                Select Silk Ribbon Color:
              </label>
              <div className="flex gap-3">
                {ribbons.map((ribbon) => (
                  <button
                    key={ribbon.name}
                    onClick={() => setSelectedRibbon(ribbon.name)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border flex items-center gap-2 transition-all ${
                      selectedRibbon === ribbon.name
                        ? 'border-[#133a35] bg-[#f1ede8] text-[#133a35]'
                        : 'border-[#c0c8c6] text-[#414847]'
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-black/20"
                      style={{ backgroundColor: ribbon.hex }}
                    />
                    <span>{ribbon.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold text-[#133a35] uppercase tracking-wider block">
                Complimentary Calligraphy Greeting Message:
              </label>
              <input
                type="text"
                value={customEngraving}
                onChange={(e) => setCustomEngraving(e.target.value)}
                placeholder="e.g. With Warmest Regards, The Al Maktoum Family"
                className="input-underline w-full text-sm text-[#1c1c19] py-1.5 focus:ring-0"
              />
            </div>
          </div>

          {/* Corporate Gifting Inquiry Form */}
          <div className="lg:col-span-6 bg-[#f7f3ee] p-6 md:p-8 rounded-xl border border-[#e6e2dd]">
            <h3 className="font-serif text-2xl text-[#133a35] mb-2">
              Corporate & Wedding Concierge
            </h3>
            <p className="text-xs text-[#414847] mb-6">
              Ordering 10+ hampers for executive gifting or royal weddings? Our dedicated gifting specialist will prepare a tailored proposal.
            </p>

            {inquirySubmitted ? (
              <div className="bg-[#dce8b2] text-[#2e3812] p-4 rounded-lg text-center space-y-1">
                <span className="material-symbols-outlined text-2xl">check_circle</span>
                <p className="font-bold text-sm">Thank You for Your Inquiry</p>
                <p className="text-xs">
                  Our boutique concierge will reach out via phone & email within 2 business hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setInquirySubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name / Organization"
                    className="w-full bg-[#ffffff] border border-[#c0c8c6] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#133a35]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="bg-[#ffffff] border border-[#c0c8c6] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#133a35]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="UAE Phone (+971)"
                    className="bg-[#ffffff] border border-[#c0c8c6] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#133a35]"
                  />
                </div>
                <div>
                  <textarea
                    rows={2}
                    placeholder="Event details & estimated quantity (e.g. 50 boxes for Eid Gala)"
                    className="w-full bg-[#ffffff] border border-[#c0c8c6] rounded px-3 py-2 text-xs focus:outline-none focus:border-[#133a35]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#133a35] text-[#ffffff] py-3 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#2c514c] transition-colors"
                >
                  Request Bespoke Catalog & Pricing
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
