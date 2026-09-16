import React from 'react';
import { ScreenView, CartItem } from '../types';

interface NavbarProps {
  currentScreen: ScreenView;
  setCurrentScreen: (screen: ScreenView) => void;
  cartItems: CartItem[];
  setIsCartOpen: (open: boolean) => void;
  setIsSearchOpen: (open: boolean) => void;
  setIsStoreLocatorOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  setCurrentScreen,
  cartItems,
  setIsCartOpen,
  setIsSearchOpen,
  setIsStoreLocatorOpen,
}) => {
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // During checkout, render a streamlined, focused transactional top bar as shown in Screen 4
  if (currentScreen === 'checkout') {
    return (
      <header className="w-full bg-[#fdf9f4]/95 backdrop-blur-md sticky top-0 z-50 border-b border-[#ebe8e3]/80 py-4 px-4 md:px-16 flex justify-between items-center max-w-[1280px] mx-auto">
        <button
          onClick={() => setCurrentScreen('shop')}
          className="text-xs uppercase tracking-widest text-[#414847] hover:text-[#133a35] flex items-center gap-1 transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span className="hidden sm:inline">Back to Shop</span>
        </button>
        <button
          onClick={() => setCurrentScreen('home')}
          className="font-serif text-3xl md:text-4xl text-[#133a35] tracking-tighter"
        >
          Al-Qalb
        </button>
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#735c00] font-semibold">
          <span className="material-symbols-outlined text-[16px]">lock</span>
          <span>Encrypted</span>
        </div>
      </header>
    );
  }

  return (
    <header className="w-full sticky top-0 z-50 bg-[#fdf9f4]/90 backdrop-blur-md shadow-xs border-b border-[#ebe8e3]/60 transition-all duration-300">
      <nav className="flex justify-between items-center h-20 px-4 md:px-16 max-w-[1280px] mx-auto">
        {/* Brand Logo */}
        <button
          onClick={() => setCurrentScreen('home')}
          className="font-serif text-3xl md:text-4xl text-[#133a35] tracking-tighter hover:opacity-90 transition-opacity text-left cursor-pointer"
        >
          Al-Qalb
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => setCurrentScreen('shop')}
            className={`font-semibold text-xs tracking-widest uppercase py-2 cursor-pointer transition-all duration-200 ${
              currentScreen === 'shop' || currentScreen === 'product-detail'
                ? 'text-[#133a35] border-b-2 border-[#fed65b]'
                : 'text-[#414847] hover:text-[#133a35]'
            }`}
          >
            Shop
          </button>
          <button
            onClick={() => setCurrentScreen('gifts')}
            className={`font-medium text-xs tracking-widest uppercase py-2 cursor-pointer transition-all duration-200 ${
              currentScreen === 'gifts'
                ? 'text-[#133a35] border-b-2 border-[#fed65b]'
                : 'text-[#414847] hover:text-[#133a35]'
            }`}
          >
            Gifts
          </button>
          <button
            onClick={() => setCurrentScreen('provenance')}
            className={`font-medium text-xs tracking-widest uppercase py-2 cursor-pointer transition-all duration-200 ${
              currentScreen === 'provenance'
                ? 'text-[#133a35] border-b-2 border-[#fed65b]'
                : 'text-[#414847] hover:text-[#133a35]'
            }`}
          >
            Provenance
          </button>
          <button
            onClick={() => setCurrentScreen('sustainability')}
            className={`font-medium text-xs tracking-widest uppercase py-2 cursor-pointer transition-all duration-200 ${
              currentScreen === 'sustainability'
                ? 'text-[#133a35] border-b-2 border-[#fed65b]'
                : 'text-[#414847] hover:text-[#133a35]'
            }`}
          >
            Sustainability
          </button>
        </div>

        {/* Trailing Icons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search catalog"
            className="p-2 text-[#133a35] hover:opacity-70 transition-opacity cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">search</span>
          </button>

          <button
            onClick={() => setIsStoreLocatorOpen(true)}
            aria-label="Find boutique stores"
            className="p-2 text-[#133a35] hover:opacity-70 transition-opacity hidden sm:block cursor-pointer"
            title="UAE Boutiques"
          >
            <span className="material-symbols-outlined text-[22px]">storefront</span>
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Shopping Bag"
            className="p-2 text-[#133a35] hover:opacity-70 transition-opacity relative cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            {totalCartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#fed65b] text-[#745c00] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                {totalCartCount}
              </span>
            )}
          </button>

          {/* Mobile Navigation Menu Toggle */}
          <button
            onClick={() => setCurrentScreen(currentScreen === 'shop' ? 'home' : 'shop')}
            className="md:hidden p-2 text-[#133a35]"
            aria-label="Navigation"
          >
            <span className="material-symbols-outlined text-[22px]">
              {currentScreen === 'home' ? 'menu_book' : 'home'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Submenu Bar */}
      <div className="md:hidden flex justify-around border-t border-[#ebe8e3] py-2.5 px-4 bg-[#f7f3ee] text-[11px] tracking-wider uppercase font-semibold text-[#414847]">
        <button
          onClick={() => setCurrentScreen('shop')}
          className={currentScreen === 'shop' ? 'text-[#133a35] font-bold border-b border-[#fed65b]' : ''}
        >
          Shop
        </button>
        <button
          onClick={() => setCurrentScreen('gifts')}
          className={currentScreen === 'gifts' ? 'text-[#133a35] font-bold border-b border-[#fed65b]' : ''}
        >
          Gifts
        </button>
        <button
          onClick={() => setCurrentScreen('provenance')}
          className={currentScreen === 'provenance' ? 'text-[#133a35] font-bold border-b border-[#fed65b]' : ''}
        >
          Provenance
        </button>
        <button
          onClick={() => setCurrentScreen('sustainability')}
          className={currentScreen === 'sustainability' ? 'text-[#133a35] font-bold border-b border-[#fed65b]' : ''}
        >
          Eco
        </button>
      </div>
    </header>
  );
};
