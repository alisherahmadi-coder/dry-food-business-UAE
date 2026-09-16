import React from 'react';

interface StoreLocatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoreLocatorModal: React.FC<StoreLocatorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const stores = [
    {
      name: 'The Dubai Mall (Flagship Atelier)',
      location: 'Fashion Avenue, Ground Level (Near Fountain Promenade)',
      city: 'Downtown Dubai, UAE',
      phone: '+971 4 388 9200',
      hours: 'Sun – Thu: 10:00 AM – 11:00 PM | Fri – Sat: 10:00 AM – 12:00 AM',
    },
    {
      name: 'The Galleria Al Maryah Island',
      location: 'Luxury Collection, Level 2',
      city: 'Abu Dhabi, UAE',
      phone: '+971 2 616 8844',
      hours: 'Mon – Sun: 10:00 AM – 10:00 PM',
    },
    {
      name: 'Mall of the Emirates',
      location: 'Level 1, Central Galleria',
      city: 'Al Barsha, Dubai, UAE',
      phone: '+971 4 409 9000',
      hours: 'Mon – Sun: 10:00 AM – 11:00 PM',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 flex items-center justify-center">
      <div onClick={onClose} className="fixed inset-0 bg-black/40 backdrop-blur-xs" />

      <div className="relative w-full max-w-2xl bg-[#ffffff] rounded-2xl shadow-2xl border border-[#e6e2dd] p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-[#e6e2dd] pb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#133a35] text-2xl">storefront</span>
            <h3 className="font-serif text-2xl text-[#133a35]">UAE Boutiques</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#414847] hover:text-[#133a35] transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <div className="space-y-4">
          {stores.map((store, i) => (
            <div
              key={i}
              className="bg-[#f7f3ee] p-5 rounded-xl border border-[#e6e2dd] space-y-2 hover:border-[#133a35] transition-colors"
            >
              <h4 className="font-serif text-lg font-bold text-[#133a35]">{store.name}</h4>
              <p className="text-xs text-[#1c1c19] font-medium">{store.location}</p>
              <p className="text-xs text-[#414847]">{store.city}</p>
              <div className="flex flex-col sm:flex-row justify-between text-xs text-[#735c00] pt-2 border-t border-[#e6e2dd]">
                <span>📞 {store.phone}</span>
                <span>🕒 {store.hours}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
