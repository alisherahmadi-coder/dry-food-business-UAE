import React from 'react';
import { ScreenView } from '../types';

interface FooterProps {
  setCurrentScreen: (screen: ScreenView) => void;
  setIsStoreLocatorOpen: (open: boolean) => void;
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentScreen,
  setIsStoreLocatorOpen,
  onOpenContactModal,
}) => {
  return (
    <footer className="w-full mt-auto bg-[#e6e2dd] text-[#133a35] relative overflow-hidden border-t border-[#ddd9d5]/70">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-4 md:px-16 py-16 max-w-[1280px] mx-auto text-sm">
        {/* Brand info */}
        <div className="col-span-1 md:col-span-4 flex flex-col gap-3">
          <button
            onClick={() => setCurrentScreen('home')}
            className="font-serif text-2xl text-[#133a35] text-left hover:opacity-80 transition-opacity"
          >
            Al-Qalb
          </button>
          <p className="text-[#414847] text-sm leading-relaxed max-w-sm">
            Elevating the everyday with nature's finest dry foods. Refined earthiness sourced globally for the discerning palate.
          </p>
          <p className="text-[#414847]/80 text-xs mt-2 uppercase tracking-wider font-semibold">
            © {new Date().getFullYear()} Al-Qalb Premium Dry Foods. UAE Registered.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 md:col-span-8 flex flex-col md:flex-row justify-start md:justify-end gap-8 md:gap-16 items-start md:items-center">
          <div className="flex flex-wrap gap-6 md:gap-10 text-sm">
            <button
              onClick={() => {
                alert('UAE Delivery: Dubai & Abu Dhabi orders placed before 3 PM arrive next day. 14-day freshness return guarantee on unopened items.');
              }}
              className="text-[#414847] hover:text-[#133a35] underline decoration-[#fed65b] decoration-2 underline-offset-4 transition-all duration-200 text-left"
            >
              Shipping & Returns
            </button>
            <button
              onClick={() => {
                alert('Al-Qalb Privacy Policy: We uphold the strictest standards of data protection and privacy under UAE federal law.');
              }}
              className="text-[#414847] hover:text-[#133a35] underline decoration-[#fed65b] decoration-2 underline-offset-4 transition-all duration-200 text-left"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setIsStoreLocatorOpen(true)}
              className="text-[#414847] hover:text-[#133a35] underline decoration-[#fed65b] decoration-2 underline-offset-4 transition-all duration-200 text-left"
            >
              Store Locator
            </button>
            <button
              onClick={onOpenContactModal}
              className="text-[#414847] hover:text-[#133a35] underline decoration-[#fed65b] decoration-2 underline-offset-4 transition-all duration-200 text-left"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
