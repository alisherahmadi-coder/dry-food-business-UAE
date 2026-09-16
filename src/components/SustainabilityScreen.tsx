import React from 'react';
import { ScreenView } from '../types';

interface SustainabilityScreenProps {
  setCurrentScreen: (screen: ScreenView) => void;
}

export const SustainabilityScreen: React.FC<SustainabilityScreenProps> = ({ setCurrentScreen }) => {
  return (
    <div className="w-full pb-20">
      {/* Header */}
      <div className="w-full bg-[#f1ede8] py-14 md:py-20 mb-12 border-b border-[#e6e2dd]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#735c00] block mb-2">
            Environmental Stewardship
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#133a35] mb-4">
            Committed to Tomorrow
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#414847] max-w-2xl mx-auto leading-relaxed">
            Luxury without compromise to the earth. Discover our circular packaging initiative and solar-powered cold-chain distribution across the United Arab Emirates.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-16 space-y-16">
        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#ffffff] p-8 rounded-xl border border-[#e6e2dd] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#dce8b2] text-[#2e3812] flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">recycling</span>
            </div>
            <h3 className="font-serif text-xl text-[#133a35]">100% Recyclable Glass Jars</h3>
            <p className="text-xs text-[#414847] leading-relaxed">
              We package all retail products in food-grade, heavy ultraviolet glass jars that preserve delicate natural oils while eliminating single-use plastics.
            </p>
          </div>

          <div className="bg-[#ffffff] p-8 rounded-xl border border-[#e6e2dd] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#dce8b2] text-[#2e3812] flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">solar_power</span>
            </div>
            <h3 className="font-serif text-xl text-[#133a35]">Solar Cold Chain</h3>
            <p className="text-xs text-[#414847] leading-relaxed">
              Our Dubai storage and distribution center runs on a 1.2MW rooftop solar array, guaranteeing zero grid emissions for all nut refrigeration.
            </p>
          </div>

          <div className="bg-[#ffffff] p-8 rounded-xl border border-[#e6e2dd] shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#dce8b2] text-[#2e3812] flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">handshake</span>
            </div>
            <h3 className="font-serif text-xl text-[#133a35]">Fair Farmer Premiums</h3>
            <p className="text-xs text-[#414847] leading-relaxed">
              We pay guaranteed above-market premiums directly to small-holder growers in California, Rafsanjan, and UAE oases.
            </p>
          </div>
        </div>

        {/* The Glass Return Incentive */}
        <div className="bg-[#133a35] text-[#ffffff] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-[#fed65b] text-xs uppercase font-bold tracking-wider">
              Circularity in the Emirates
            </span>
            <h2 className="font-serif text-3xl">The Al-Qalb Jar Return Program</h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Return 5 empty Al-Qalb glass jars to any of our UAE boutiques (The Dubai Mall or Galleria Abu Dhabi) and receive an AED 25 boutique gift certificate.
            </p>
          </div>

          <button
            onClick={() => setCurrentScreen('shop')}
            className="bg-[#fed65b] text-[#745c00] px-8 py-4 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#ffe088] transition-colors flex-shrink-0"
          >
            Shop Conscious Collection
          </button>
        </div>
      </div>
    </div>
  );
};
