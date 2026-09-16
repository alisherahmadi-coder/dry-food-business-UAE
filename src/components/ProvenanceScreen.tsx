import React, { useState } from 'react';
import { ScreenView } from '../types';

interface ProvenanceScreenProps {
  setCurrentScreen: (screen: ScreenView) => void;
}

export const ProvenanceScreen: React.FC<ProvenanceScreenProps> = ({ setCurrentScreen }) => {
  const [activeRegion, setActiveRegion] = useState<string>('uae');

  const regions = [
    {
      id: 'uae',
      name: 'United Arab Emirates',
      location: 'Al Ain & Liwa Oasis',
      specialty: 'Royal Medjool Dates & Artisan Roasting',
      description: 'The ancient date palms of Al Ain have nourished generations. Blessed with subterranean mountain aquifers and intense sun, each date develops unmatched caramel richness. Our Dubai atelier hand-finishes all kernels at low heat.',
      climate: 'Arid desert climate with mineral-rich oasis wells',
      elevation: '290m above sea level',
      harvest: 'Late Summer to Early Autumn',
    },
    {
      id: 'iran',
      name: 'Iran (Rafsanjan Plateau)',
      location: 'Kerman Province',
      specialty: 'Emerald Green Pistachio Kernels',
      description: 'Rafsanjan is universally regarded as the birthplace of the finest pistachios on earth. High-altitude sunshine and crisp desert nights concentrate natural chlorophyll, resulting in an unmistakable emerald color and rich, buttery flavor.',
      climate: 'High-altitude desert steppe with extreme day-night shifts',
      elevation: '1,520m above sea level',
      harvest: 'September Harvest',
    },
    {
      id: 'california',
      name: 'California, USA',
      location: 'Central Valley (San Joaquin)',
      specialty: 'Sweet Nonpareil Almonds & Chandler Walnuts',
      description: 'Fed by pure Sierra Nevada snowmelt and Mediterranean sun, California’s fertile valley produces almonds with golden skins and supreme sweetness, along with pearl-blonde Chandler walnut halves.',
      climate: 'Warm Mediterranean valley climate',
      elevation: '110m above sea level',
      harvest: 'August to October Harvest',
    },
  ];

  const currentRegion = regions.find((r) => r.id === activeRegion) || regions[0];

  return (
    <div className="w-full pb-20">
      {/* Header */}
      <div className="w-full bg-[#f1ede8] py-14 md:py-20 mb-12 border-b border-[#e6e2dd]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#735c00] block mb-2">
            Origins & Traceability
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#133a35] mb-4">
            The Provenance of Al-Qalb
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#414847] max-w-2xl mx-auto leading-relaxed">
            We partner exclusively with multi-generational growers who practice regenerative agriculture. Every harvest is 100% traceable from source orchard to your table.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-16 space-y-12">
        {/* Region Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {regions.map((r) => (
            <button
              key={r.id}
              onClick={() => setActiveRegion(r.id)}
              className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeRegion === r.id
                  ? 'bg-[#133a35] text-[#ffffff] shadow-sm'
                  : 'bg-[#ffffff] text-[#414847] border border-[#e6e2dd] hover:bg-[#f7f3ee]'
              }`}
            >
              {r.name}
            </button>
          ))}
        </div>

        {/* Region Story Bento */}
        <div className="bg-[#ffffff] rounded-2xl border border-[#e6e2dd] p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#dce8b2] text-[#2e3812] px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">location_on</span>
              <span>{currentRegion.location}</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl text-[#133a35]">
              {currentRegion.specialty}
            </h2>

            <p className="text-base text-[#414847] leading-relaxed">
              {currentRegion.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#f1ede8]">
              <div>
                <span className="text-[10px] font-bold text-[#735c00] uppercase tracking-wider block mb-1">
                  Climate & Terroir
                </span>
                <p className="text-xs text-[#1c1c19] font-medium">{currentRegion.climate}</p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#735c00] uppercase tracking-wider block mb-1">
                  Orchard Elevation
                </span>
                <p className="text-xs text-[#1c1c19] font-medium">{currentRegion.elevation}</p>
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#735c00] uppercase tracking-wider block mb-1">
                  Harvest Cycle
                </span>
                <p className="text-xs text-[#1c1c19] font-medium">{currentRegion.harvest}</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setCurrentScreen('shop')}
                className="bg-[#133a35] text-[#ffffff] px-6 py-3 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#2c514c] transition-colors"
              >
                Shop Harvests from {currentRegion.name}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#f7f3ee] rounded-xl p-6 border border-[#e6e2dd] space-y-4">
            <h3 className="font-serif text-xl text-[#133a35] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#735c00]">verified</span>
              Traceability Guarantee
            </h3>
            <p className="text-xs text-[#414847] leading-relaxed">
              Every batch undergoes independent laboratory testing for aflatoxins, pesticide residues, and moisture purity upon arrival at Dubai Ports.
            </p>
            <ul className="text-xs text-[#1c1c19] space-y-2 border-t border-[#ebe8e3] pt-4">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#2e3812]">check</span>
                <span>Single-origin orchard verification</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#2e3812]">check</span>
                <span>Zero chemical preservatives or bleaching</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-[#2e3812]">check</span>
                <span>Temperature-controlled UAE storage</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
