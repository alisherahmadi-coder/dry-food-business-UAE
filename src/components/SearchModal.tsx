import React, { useState, useMemo } from 'react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.origin.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q)
    );
  }, [query, products]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 flex items-start justify-center">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
      />

      <div className="relative w-full max-w-2xl bg-[#ffffff] rounded-2xl shadow-2xl border border-[#e6e2dd] overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-[#e6e2dd] flex items-center gap-3">
          <span className="material-symbols-outlined text-[#133a35] text-2xl">search</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search almonds, pistachios, hampers, origins..."
            className="w-full text-base sm:text-lg text-[#1c1c19] placeholder-[#717977] bg-transparent border-none focus:outline-none focus:ring-0"
            autoFocus
          />
          <button
            onClick={onClose}
            className="text-xs uppercase font-bold text-[#414847] hover:text-[#133a35] px-2 py-1"
          >
            Esc
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[420px] overflow-y-auto p-4 space-y-2">
          {query.trim() === '' ? (
            <div className="p-6 text-center text-xs text-[#414847] space-y-3">
              <p className="uppercase tracking-wider font-semibold">Suggested searches</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['Almonds', 'Pistachios', 'UAE Dates', 'Walnuts', 'Hampers'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setQuery(item)}
                    className="bg-[#f1ede8] text-[#133a35] px-3 py-1.5 rounded-full text-xs hover:bg-[#e6e2dd] transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-8 text-center text-sm text-[#414847]">
              No products found matching "{query}". Try checking the spelling or search by origin.
            </div>
          ) : (
            searchResults.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#f7f3ee] transition-colors cursor-pointer border border-transparent hover:border-[#e6e2dd]"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 object-cover rounded-lg bg-[#f1ede8]"
                />
                <div className="flex-grow">
                  <h4 className="font-serif text-base font-bold text-[#133a35]">{product.name}</h4>
                  <p className="text-xs text-[#414847]">
                    {product.origin} • {product.unit}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-[#1c1c19]">
                    AED {product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
