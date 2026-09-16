import React, { useState } from 'react';
import { ScreenView, Product, CartItem, Order } from './types';
import { PRODUCTS, INITIAL_CHECKOUT_ITEMS } from './data/products';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { ShopScreen } from './components/ShopScreen';
import { ProductDetailScreen } from './components/ProductDetailScreen';
import { CheckoutScreen } from './components/CheckoutScreen';
import { GiftsScreen } from './components/GiftsScreen';
import { ProvenanceScreen } from './components/ProvenanceScreen';
import { SustainabilityScreen } from './components/SustainabilityScreen';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { StoreLocatorModal } from './components/StoreLocatorModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { ContactModal } from './components/ContactModal';

export function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenView>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [cartItems, setCartItems] = useState<CartItem[]>(INITIAL_CHECKOUT_ITEMS);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isStoreLocatorOpen, setIsStoreLocatorOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [completedOrder, setCompletedOrder] = useState<Order | null>(null);

  // Add to cart handler
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  // Instant Buy (Direct to Checkout)
  const handleInstantBuy = (product: Product, quantity = 1) => {
    handleAddToCart(product, quantity);
    setCurrentScreen('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Update Cart Quantity
  const handleUpdateCartQuantity = (productId: string, delta: number) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  // Product Selection
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentScreen('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Screen change wrapper to scroll top
  const handleScreenChange = (screen: ScreenView) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Order Placement
  const handleCompleteOrder = (order: Order) => {
    setCompletedOrder(order);
    setCartItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf9f4] text-[#1c1c19] selection:bg-[#fed65b] selection:text-[#745c00] relative">
      {/* Texture Background Layer */}
      <div className="texture-overlay" />

      {/* Navigation Header */}
      <Navbar
        currentScreen={currentScreen}
        setCurrentScreen={handleScreenChange}
        cartItems={cartItems}
        setIsCartOpen={setIsCartOpen}
        setIsSearchOpen={setIsSearchOpen}
        setIsStoreLocatorOpen={setIsStoreLocatorOpen}
      />

      {/* Screen Views */}
      <div className="flex-grow flex flex-col relative z-10">
        {currentScreen === 'home' && (
          <HomeScreen
            setCurrentScreen={handleScreenChange}
            onSelectProduct={handleSelectProduct}
            featuredProducts={PRODUCTS}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentScreen === 'shop' && (
          <ShopScreen
            products={PRODUCTS}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentScreen === 'product-detail' && (
          <ProductDetailScreen
            product={selectedProduct}
            setCurrentScreen={handleScreenChange}
            onAddToCart={handleAddToCart}
            onInstantBuy={handleInstantBuy}
          />
        )}

        {currentScreen === 'checkout' && (
          <CheckoutScreen
            cartItems={cartItems}
            onCompleteOrder={handleCompleteOrder}
            onUpdateCartQuantity={handleUpdateCartQuantity}
            onBackToShop={() => handleScreenChange('shop')}
          />
        )}

        {currentScreen === 'gifts' && (
          <GiftsScreen
            giftProducts={PRODUCTS.filter((p) => p.category === 'gifts' || p.tags.premium)}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentScreen === 'provenance' && (
          <ProvenanceScreen setCurrentScreen={handleScreenChange} />
        )}

        {currentScreen === 'sustainability' && (
          <SustainabilityScreen setCurrentScreen={handleScreenChange} />
        )}
      </div>

      {/* Global Footer (shown on non-checkout views) */}
      {currentScreen !== 'checkout' && (
        <Footer
          setCurrentScreen={handleScreenChange}
          setIsStoreLocatorOpen={setIsStoreLocatorOpen}
          onOpenContactModal={() => setIsContactOpen(true)}
        />
      )}

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onCheckout={() => {
          setIsCartOpen(false);
          handleScreenChange('checkout');
        }}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={handleSelectProduct}
      />

      {/* Store Locator Modal */}
      <StoreLocatorModal
        isOpen={isStoreLocatorOpen}
        onClose={() => setIsStoreLocatorOpen(false)}
      />

      {/* Order Confirmation Modal */}
      <OrderConfirmationModal
        order={completedOrder}
        onClose={() => setCompletedOrder(null)}
        onContinueShopping={() => {
          setCompletedOrder(null);
          handleScreenChange('shop');
        }}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;
