import React, { useState, useMemo } from 'react';
import { Product } from '../types';

interface ShopScreenProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ShopScreen: React.FC<ShopScreenProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedOrigins, setSelectedOrigins] = useState<string[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState<boolean>(false);
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const handleQuantityChange = (productId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[productId] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [productId]: next };
    });
  };

  const handleAddWithFeedback = (product: Product) => {
    const qty = quantities[product.id] || 1;
    onAddToCart(product, qty);
    setAddedNotice(`Added ${qty} × ${product.name} to cart`);
    setTimeout(() => {
      setAddedNotice(null);
    }, 2500);
  };

  const toggleOrigin = (origin: string) => {
    setSelectedOrigins((prev) =>
      prev.includes(origin) ? prev.filter((o) => o !== origin) : [...prev, origin]
    );
  };

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Origin match
      if (selectedOrigins.length > 0 && !selectedOrigins.includes(item.origin)) {
        return false;
      }
      return true;
    });
  }, [products, selectedCategory, selectedOrigins]);

  return (
    <div className="w-full pb-20">
      {/* Toast notification */}
      {addedNotice && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#133a35] text-[#ffffff] px-5 py-3 rounded-lg shadow-xl flex items-center gap-3 border border-[#2c514c] animate-fade-in">
          <span className="material-symbols-outlined text-[#fed65b] text-[20px]">check_circle</span>
          <span className="text-xs tracking-wider uppercase font-semibold">{addedNotice}</span>
        </div>
      )}

      {/* Page Header */}
      <div className="w-full bg-[#f1ede8] py-12 md:py-20 mb-10 border-b border-[#e6e2dd]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#133a35] mb-4 tracking-tight">
            Premium Kernels
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#414847] max-w-2xl mx-auto leading-relaxed">
            Sourced from the finest orchards, our raw kernels are carefully selected for their purity, size, and rich natural flavor. Perfect for healthy snacking or culinary creations.
          </p>
        </div>
      </div>

      {/* Main Layout Grid */}
      <main className="max-w-[1280px] mx-auto px-4 md:px-16 w-full grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Mobile Filter Toggle */}
        <div className="flex md:hidden justify-between items-center col-span-1 mb-2">
          <button
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="flex items-center space-x-2 text-[#133a35] font-semibold text-xs tracking-wider uppercase border border-[#c0c8c6] px-4 py-2.5 rounded-lg bg-[#fdf9f4]"
          >
            <span className="material-symbols-outlined text-[18px]">tune</span>
            <span>Filters ({selectedOrigins.length + (selectedCategory !== 'all' ? 1 : 0)})</span>
          </button>

          <span className="text-xs text-[#414847]">
            Showing {filteredProducts.length} items
          </span>
        </div>

        {/* Sidebar Filters (md: 3 cols) */}
        <aside className={`md:col-span-3 pr-0 md:pr-6 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
          <div className="sticky top-28 space-y-8 bg-[#fdf9f4] p-4 md:p-0 rounded-xl md:rounded-none border md:border-none border-[#e6e2dd]">
            {/* Category Filter */}
            <div>
              <h3 className="font-serif text-xl text-[#133a35] mb-4 border-b border-[#e6e2dd] pb-2">
                Category
              </h3>
              <ul className="space-y-3 text-sm text-[#1c1c19]">
                <li>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                      className="form-radio h-4 w-4 text-[#133a35] border-[#c0c8c6] focus:ring-[#2c514c]"
                    />
                    <span className="group-hover:text-[#133a35] transition-colors font-medium">
                      All Kernels
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'almonds'}
                      onChange={() => setSelectedCategory('almonds')}
                      className="form-radio h-4 w-4 text-[#133a35] border-[#c0c8c6] focus:ring-[#2c514c]"
                    />
                    <span className="group-hover:text-[#133a35] transition-colors">
                      Almonds
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'pistachios'}
                      onChange={() => setSelectedCategory('pistachios')}
                      className="form-radio h-4 w-4 text-[#133a35] border-[#c0c8c6] focus:ring-[#2c514c]"
                    />
                    <span className="group-hover:text-[#133a35] transition-colors">
                      Pistachios
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'walnuts'}
                      onChange={() => setSelectedCategory('walnuts')}
                      className="form-radio h-4 w-4 text-[#133a35] border-[#c0c8c6] focus:ring-[#2c514c]"
                    />
                    <span className="group-hover:text-[#133a35] transition-colors">
                      Walnuts
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'dates-seeds'}
                      onChange={() => setSelectedCategory('dates-seeds')}
                      className="form-radio h-4 w-4 text-[#133a35] border-[#c0c8c6] focus:ring-[#2c514c]"
                    />
                    <span className="group-hover:text-[#133a35] transition-colors">
                      Dates & Gourmet
                    </span>
                  </label>
                </li>
              </ul>
            </div>

            {/* Origin Filter */}
            <div>
              <h3 className="font-serif text-xl text-[#133a35] mb-4 border-b border-[#e6e2dd] pb-2">
                Origin
              </h3>
              <ul className="space-y-3 text-sm text-[#1c1c19]">
                <li>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedOrigins.includes('USA (California)')}
                      onChange={() => toggleOrigin('USA (California)')}
                      className="form-checkbox h-4 w-4 text-[#133a35] rounded border-[#c0c8c6] focus:ring-[#2c514c]"
                    />
                    <span className="group-hover:text-[#133a35] transition-colors">
                      USA (California)
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedOrigins.includes('Iran')}
                      onChange={() => toggleOrigin('Iran')}
                      className="form-checkbox h-4 w-4 text-[#133a35] rounded border-[#c0c8c6] focus:ring-[#2c514c]"
                    />
                    <span className="group-hover:text-[#133a35] transition-colors">
                      Iran
                    </span>
                  </label>
                </li>
                <li>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedOrigins.includes('UAE')}
                      onChange={() => toggleOrigin('UAE')}
                      className="form-checkbox h-4 w-4 text-[#133a35] rounded border-[#c0c8c6] focus:ring-[#2c514c]"
                    />
                    <span className="group-hover:text-[#133a35] transition-colors">
                      UAE
                    </span>
                  </label>
                </li>
              </ul>
            </div>

            {/* Reset Filters */}
            {(selectedCategory !== 'all' || selectedOrigins.length > 0) && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedOrigins([]);
                }}
                className="text-xs uppercase tracking-wider text-[#735c00] font-semibold underline underline-offset-2 hover:opacity-80"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </aside>

        {/* Product Grid (md: 9 cols) */}
        <div className="col-span-1 md:col-span-9">
          {filteredProducts.length === 0 ? (
            <div className="bg-[#ffffff] rounded-xl border border-[#e6e2dd] p-12 text-center">
              <span className="material-symbols-outlined text-4xl text-[#717977] mb-2">search_off</span>
              <h3 className="font-serif text-xl text-[#133a35] mb-2">No matching products found</h3>
              <p className="text-sm text-[#414847] mb-6">
                Try clearing selected origins or category filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedOrigins([]);
                }}
                className="bg-[#133a35] text-[#ffffff] px-6 py-2.5 rounded text-xs uppercase tracking-wider font-semibold hover:bg-[#2c514c]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => {
                const currentQty = quantities[product.id] || 1;

                return (
                  <div
                    key={product.id}
                    className="group bg-[#ffffff] rounded-xl border border-[#e6e2dd] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                  >
                    {/* Image Area */}
                    <div
                      onClick={() => onSelectProduct(product)}
                      className="relative aspect-[4/5] overflow-hidden bg-[#f7f3ee] flex items-center justify-center p-4 cursor-pointer"
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
                          <span className="bg-[#dce8b2] text-[#2e3812] px-2 py-0.5 rounded text-[10px] tracking-wider uppercase font-semibold">
                            Premium
                          </span>
                        )}
                        {product.origin && (
                          <span className="bg-[#fdf9f4] text-[#133a35] border border-[#e6e2dd] px-2 py-0.5 rounded text-[10px] tracking-wider uppercase font-semibold shadow-2xs">
                            Origin: {product.origin}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-4 md:p-5 flex flex-col flex-grow">
                      <h2
                        onClick={() => onSelectProduct(product)}
                        className="font-serif text-lg font-bold text-[#133a35] hover:text-[#735c00] transition-colors line-clamp-1 mb-1 cursor-pointer"
                      >
                        {product.name}
                      </h2>
                      <p className="text-xs text-[#414847] line-clamp-2 mb-4 flex-grow">
                        {product.shortDescription}
                      </p>

                      {/* Price & Quantity Row */}
                      <div className="flex items-end justify-between mt-auto pt-2 border-t border-[#f1ede8]">
                        <div>
                          <span className="font-bold text-[#1c1c19] text-base block">
                            AED {product.price.toFixed(2)}
                          </span>
                          <span className="text-[11px] text-[#414847]">per {product.unit}</span>
                        </div>

                        {/* Quantity Tactile Selector */}
                        <div className="flex items-center bg-[#f1ede8] rounded-lg border border-[#e6e2dd]">
                          <button
                            onClick={() => handleQuantityChange(product.id, -1)}
                            aria-label="Decrease quantity"
                            className="px-2.5 py-1 text-[#133a35] hover:bg-[#e6e2dd] transition-colors rounded-l-lg"
                          >
                            <span className="material-symbols-outlined text-[14px]">remove</span>
                          </button>
                          <span className="px-2 text-xs font-semibold w-6 text-center text-[#1c1c19]">
                            {currentQty}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(product.id, 1)}
                            aria-label="Increase quantity"
                            className="px-2.5 py-1 text-[#133a35] hover:bg-[#e6e2dd] transition-colors rounded-r-lg"
                          >
                            <span className="material-symbols-outlined text-[14px]">add</span>
                          </button>
                        </div>
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={() => handleAddWithFeedback(product)}
                        className="w-full mt-4 bg-[#133a35] text-[#ffffff] py-3 rounded-lg font-semibold text-xs uppercase tracking-wider hover:bg-[#2c514c] transition-colors focus:ring-2 focus:ring-[#fed65b] focus:outline-none flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-[0.99]"
                      >
                        <span className="material-symbols-outlined text-[16px]">shopping_cart</span>
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
