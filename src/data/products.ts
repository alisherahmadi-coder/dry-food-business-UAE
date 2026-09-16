import { Product } from '../types';

export const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB40d1bhh1AXbDXKoDORfr2kX7jzgQTyJkZKmx49u8GaInf24rypTiSoqlMKfK8-jyI6xiv-X4JOEktUbQqFzOolbEJeoY7BnzrquI_eE7KJBFrXrTYKy8Ls9tHlVikJyT3mWNYTcrDAsKDSHhjemx-YlazOdD5-FcVRFRRL6IU_0vbrtDVeAF1GysUzOLpHDLyLiXwt3J6i2Go8CiLA2XUtk9Ae6KTfX9zePvos9F_bHseTjopVshchQ';

export const MAP_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPnrKr07z8s9ugHXYxErz4etjEnjNmEDlC1nYaSP9hRtAEpLtvRc_T-KxI1I1ho0V2QCg9Vp9wZBRDVcaYpkqw8TH0nuZxfMt0oKohFOI2Ph6bXq6G_t3zD9U5YS28uXvpdBvxDH7Wq5hX6qMJGLxHfe0kk0tFJJL6AeN5RZoysxwyWUe15YxTItJmqC5gwPkPIwXPx9JwHBMcnZjxmLP3Z-kp0XzC3B95InEOvByc5ZVWFYApS70c8A';

export const PRODUCTS: Product[] = [
  {
    id: 'premium-almond-kernels',
    name: 'Premium Almond Kernels',
    category: 'almonds',
    origin: 'UAE',
    price: 145.00,
    unit: '500g',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADDJT9Ao8RulQ6JXOQQgnj4k4Av8zkJFCsB_-Uz0MOvQ8PYcXQLDoMaffcLVaEqirrAIeWKHYPO9SoHumFe8jNBDIUD0sZhkyZrleRpse5EPA8JXTCFox5T1NLvurUW1iUZqVGXuZESuvCmLd2tjtj7QhU8UFuFR92fAY1SU_0hLU21mVJ08MZF6t5zXH3E_EjBse59Olx7Sl_ZZq1X0AId4nPd69hkaR8-Q18MLvzxPut_VT5aMDbpQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuADDJT9Ao8RulQ6JXOQQgnj4k4Av8zkJFCsB_-Uz0MOvQ8PYcXQLDoMaffcLVaEqirrAIeWKHYPO9SoHumFe8jNBDIUD0sZhkyZrleRpse5EPA8JXTCFox5T1NLvurUW1iUZqVGXuZESuvCmLd2tjtj7QhU8UFuFR92fAY1SU_0hLU21mVJ08MZF6t5zXH3E_EjBse59Olx7Sl_ZZq1X0AId4nPd69hkaR8-Q18MLvzxPut_VT5aMDbpQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBLFFLMxjZuLfjc28uTz9RUTsKHSNGCTxyrt0ITjZdRc9BI0dF1ElyEV38dqmWbMwWWrEFIDRstuYsybh40JUZ4FilzaOkpH0oEtSlKSuiglOK4tAtHkEhIC7getRcxcDH6RC89EGfwt2xhpU12-sGPhZKXAfjTEUbxgIH8m9fsJApiT9Qc9EtxrmA-5d2c3l8yMB2dEJJ715zY4D0BZmT6D6Ii1HCSlZK8BEzZH2jvvq7dlhfRDQIqZA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBCXysrPjfkZBdwOISePEUd9X7Mcm9HnCTnyBnLNB1YHMhHzsvVt0xm5SQIt0q8wQP0rOAldzrw4xzFMCBi_0L6nKAw79bvlZh1dQtrCEL24trqFRkK9UV5VN68KyMgNgQ7PdxwGnr6FTse0OCpDSm3FsglKjHkijZ6SAfPu7M0dMtzmIb5GqYaMLwU5yI4Oo-Z4Dk0JBxmRjuOl1PSxqLE3us0lizbtv31d_f0TjvrKaf0uoSS3nkm_w',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCeWZmcAUIaSeMpPBVcCSJa_j0-GUB3VF8RFrEC2PbOqZnx_VQAt19SiCJM9ApldQiQ1ZjYw83qcI9JzFC4X24NN0gvABHdfU7soNQjE-ua-kX8vo-o1YzqOg-_8rE08ThhC5zW2j-l_k59qSBTSLEH20ttM-mIRhNNqTBXMsDN1Ttv6Bb_PxwOwBFjPy9eUaZYuTATWy3PnXx7AOdEm3pBLedZLOLoLOEzFqKQZbHfy4uQphxK-pzjgA'
    ],
    shortDescription: 'Raw, unpasteurized, and naturally sweet. Sourced from heritage orchards.',
    description: 'Our Premium Almond Kernels are meticulously selected for their size, flawless appearance, and delicate, buttery flavor. Harvested from the finest orchards, these almonds offer a satisfying crunch and a wealth of natural nutrients. Perfect for sophisticated snacking, culinary creations, or luxurious gifting.',
    badges: ['Store in a cool place', 'Raw & Unsalted'],
    tags: {
      raw: true,
      premium: true,
      originTag: 'UAE'
    },
    nutrition: {
      calories: '164',
      protein: '6g',
      healthyFats: '14g',
      dietaryFiber: '3.5g',
      vitaminsNote: 'Rich in Vitamin E, Magnesium, and Antioxidants. A perfect addition to a balanced, refined diet.'
    },
    inStock: true,
    featured: true
  },
  {
    id: 'californian-almond-kernel',
    name: 'Californian Almond Kernel',
    category: 'almonds',
    origin: 'USA (California)',
    price: 85.00,
    unit: '500g',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcpgsZTWuUTczuuxklimXuQIiay6x1FSutEAgCH9NmNaI4Nvs_n-IEueZ5vij6a4QbAPonnVrnD5TtqwQVDT62aOj6OfVc1aRvU57PkQuuL_PHFFGnLsW0PF1f_mFfCjP5h1D8KOCvp-UyIiQ8K0LJ-egbTzk7J9GAqT_b2SPTxq4NV7XyJWUPQTqujqfqW6VJkMHhUZoD8X6zpNcX5JVgCePuY0OnKRvaEmMFiNT69_wK-CVEVVTQMA',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCcpgsZTWuUTczuuxklimXuQIiay6x1FSutEAgCH9NmNaI4Nvs_n-IEueZ5vij6a4QbAPonnVrnD5TtqwQVDT62aOj6OfVc1aRvU57PkQuuL_PHFFGnLsW0PF1f_mFfCjP5h1D8KOCvp-UyIiQ8K0LJ-egbTzk7J9GAqT_b2SPTxq4NV7XyJWUPQTqujqfqW6VJkMHhUZoD8X6zpNcX5JVgCePuY0OnKRvaEmMFiNT69_wK-CVEVVTQMA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBLFFLMxjZuLfjc28uTz9RUTsKHSNGCTxyrt0ITjZdRc9BI0dF1ElyEV38dqmWbMwWWrEFIDRstuYsybh40JUZ4FilzaOkpH0oEtSlKSuiglOK4tAtHkEhIC7getRcxcDH6RC89EGfwt2xhpU12-sGPhZKXAfjTEUbxgIH8m9fsJApiT9Qc9EtxrmA-5d2c3l8yMB2dEJJ715zY4D0BZmT6D6Ii1HCSlZK8BEzZH2jvvq7dlhfRDQIqZA'
    ],
    shortDescription: 'Extra large, sweet raw almonds with intact skins. Unroasted and unsalted.',
    description: 'Directly sourced from the sunny Central Valley of California, these extra-large raw almonds boast an immaculate golden skin and a delicate milky sweetness.',
    badges: ['Store in a cool place', 'Raw'],
    tags: {
      raw: true,
      originTag: 'USA (California)'
    },
    nutrition: {
      calories: '160',
      protein: '6g',
      healthyFats: '14g',
      dietaryFiber: '3.5g',
      vitaminsNote: 'Packed with beneficial monounsaturated fatty acids and dietary fiber.'
    },
    inStock: true,
    featured: true
  },
  {
    id: 'iranian-pistachio-kernel',
    name: 'Iranian Pistachio Kernel',
    category: 'pistachios',
    origin: 'Iran',
    price: 140.00,
    unit: '500g',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFX0tTCsZY1owF--DEA8KZ1xY3IFRo3cNjoxfEKchvxWvik3Kno71qfrgnr2q_5oP_sIHATe8nBCfNu3-WTNvyrqKdy1wpKIQyf-y9v9rqBdU5zM0Ga3jV5CHSMHjmdRvsQA64ocfyKfXMaBfOvZ3QpbLhuGIv_NTUKxaJQSLttGFZLcFbOg4FEqDTFYbZDxyKcme5TlB-_eik7Qa8mDFMyMQVOcSfgpreoOYFpqlhrw7krTok7piH5Q',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDFX0tTCsZY1owF--DEA8KZ1xY3IFRo3cNjoxfEKchvxWvik3Kno71qfrgnr2q_5oP_sIHATe8nBCfNu3-WTNvyrqKdy1wpKIQyf-y9v9rqBdU5zM0Ga3jV5CHSMHjmdRvsQA64ocfyKfXMaBfOvZ3QpbLhuGIv_NTUKxaJQSLttGFZLcFbOg4FEqDTFYbZDxyKcme5TlB-_eik7Qa8mDFMyMQVOcSfgpreoOYFpqlhrw7krTok7piH5Q',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCvhVkXaUK7hpdNWGS9AaI2UjprTCOhF1sInLG1FDk8wPKQXgNulMRf1Hbjo7e8xAg9Rfz4cHi5x69SBT4T-Dc-qRlsn6MQwuexO9zZCTvciqCy9hZ3sqp9zkXMA6ogLN3Y8JoAXKqjvBVSHu_HsBtxaT09h6BKkO8vUl7ouuT8glxgG8c79xaEuZk4nES97BwccMO274q2ugEQxrZgR_4gu904ZKK3RkQCVuedqIkZ6Co3QkRERvMVxg'
    ],
    shortDescription: 'Vibrant green kernels, meticulously shelled. Renowned for their intense, rich flavor.',
    description: 'Sourced from the historic orchards of Rafsanjan, Iran. These hand-picked emerald green pistachio kernels are revered for their unmatched aromatic profile and silky crunch.',
    badges: ['Premium Harvest', 'Pure Emerald Grade'],
    tags: {
      premium: true,
      originTag: 'Iran'
    },
    nutrition: {
      calories: '159',
      protein: '5.8g',
      healthyFats: '13g',
      dietaryFiber: '3g',
      vitaminsNote: 'Exceptional source of lutein, zeaxanthin, and potassium.'
    },
    inStock: true,
    featured: true
  },
  {
    id: 'chandler-walnut-halves',
    name: 'Chandler Walnut Halves',
    category: 'walnuts',
    origin: 'USA (California)',
    price: 95.00,
    unit: '500g',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMrPN1-g6ogolzQ0dCADScZ1lPUdM0JK8OrdoS-kCR1v-QQkt4TppGBvnNEuzHmzUHRndAVgmPLaozXyFU3WTdTSI_N0j3Vw_dv02oKwgENLmIxyObMFhg_bDt2_BM8JwAerL1pRvYh83wY_KuMqtBTqUKsynmnKbHr7Y9OLrPZrzAhsK-IvD8vRo4S1l24_PWhxPS0VY59hsnmTIG9lqke2LFlUK0Ucd78GWqdcT5jjz1BnUGhezlbw',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBMrPN1-g6ogolzQ0dCADScZ1lPUdM0JK8OrdoS-kCR1v-QQkt4TppGBvnNEuzHmzUHRndAVgmPLaozXyFU3WTdTSI_N0j3Vw_dv02oKwgENLmIxyObMFhg_bDt2_BM8JwAerL1pRvYh83wY_KuMqtBTqUKsynmnKbHr7Y9OLrPZrzAhsK-IvD8vRo4S1l24_PWhxPS0VY59hsnmTIG9lqke2LFlUK0Ucd78GWqdcT5jjz1BnUGhezlbw'
    ],
    shortDescription: 'Light-colored, perfectly intact halves with a mild, earthy taste. Excellent source of Omega-3.',
    description: 'Supreme-grade Chandler walnuts characterized by their luminous pearl-blonde color and buttery, low-tannin flavor. Crack-free whole halves perfect for gourmet baking or artisanal breakfast bowls.',
    badges: ['High Omega-3', 'Raw Unsalted'],
    tags: {
      raw: true,
      originTag: 'USA (California)'
    },
    nutrition: {
      calories: '185',
      protein: '4.3g',
      healthyFats: '18.5g',
      dietaryFiber: '2g',
      vitaminsNote: 'Contains 2.5g of plant-based ALA Omega-3 per serving.'
    },
    inStock: true,
    featured: true
  },
  {
    id: 'royal-roasted-almonds',
    name: 'Royal Roasted Almonds',
    category: 'almonds',
    origin: 'UAE',
    price: 70.00,
    unit: '500g',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzm-aQyAp50xA1qPmkL-HDXI6vVGwaV8Sx0GlEjKSgmWCL1krjXFb1eBR8O9rLXKHzks8tYzIR_-9E7tUJWUuXSNWUGDpOf0ZoLffzT9anxncifJyrvopIFiMnLZ_E8Lt9iP-I5UB2g_JlXEO2voXMMKBiZ00ZVB5xaJT6H1YC7C3ql01iP9JmDCIs1Ops60h82TrAZcrHwv-eq1EST1dHNOQj-7eG_l17I0qQbPoK73ROWCOn9gxe9w',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCzm-aQyAp50xA1qPmkL-HDXI6vVGwaV8Sx0GlEjKSgmWCL1krjXFb1eBR8O9rLXKHzks8tYzIR_-9E7tUJWUuXSNWUGDpOf0ZoLffzT9anxncifJyrvopIFiMnLZ_E8Lt9iP-I5UB2g_JlXEO2voXMMKBiZ00ZVB5xaJT6H1YC7C3ql01iP9JmDCIs1Ops60h82TrAZcrHwv-eq1EST1dHNOQj-7eG_l17I0qQbPoK73ROWCOn9gxe9w'
    ],
    shortDescription: 'Slow-roasted in our Dubai atelier with a hint of Himalayan pink salt.',
    description: 'Slowly batch-roasted at low temperatures in our Dubai facility to unlock a deep, caramelized crunch while preserving essential micronutrients.',
    badges: ['Artisan Roasted', 'UAE Atelier'],
    tags: {
      premium: true,
      originTag: 'UAE'
    },
    nutrition: {
      calories: '169',
      protein: '6.2g',
      healthyFats: '15g',
      dietaryFiber: '3.1g',
      vitaminsNote: 'Crafted without palm oil or artificial preservatives.'
    },
    inStock: true
  },
  {
    id: 'salt-free-pistachio-kernels',
    name: 'Pistachio Kernels',
    category: 'pistachios',
    origin: 'Iran',
    price: 85.00,
    unit: '250g',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvhVkXaUK7hpdNWGS9AaI2UjprTCOhF1sInLG1FDk8wPKQXgNulMRf1Hbjo7e8xAg9Rfz4cHi5x69SBT4T-Dc-qRlsn6MQwuexO9zZCTvciqCy9hZ3sqp9zkXMA6ogLN3Y8JoAXKqjvBVSHu_HsBtxaT09h6BKkO8vUl7ouuT8glxgG8c79xaEuZk4nES97BwccMO274q2ugEQxrZgR_4gu904ZKK3RkQCVuedqIkZ6Co3QkRERvMVxg',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCvhVkXaUK7hpdNWGS9AaI2UjprTCOhF1sInLG1FDk8wPKQXgNulMRf1Hbjo7e8xAg9Rfz4cHi5x69SBT4T-Dc-qRlsn6MQwuexO9zZCTvciqCy9hZ3sqp9zkXMA6ogLN3Y8JoAXKqjvBVSHu_HsBtxaT09h6BKkO8vUl7ouuT8glxgG8c79xaEuZk4nES97BwccMO274q2ugEQxrZgR_4gu904ZKK3RkQCVuedqIkZ6Co3QkRERvMVxg'
    ],
    shortDescription: 'Salt-Free raw whole kernels. Rich, buttery, and vibrant.',
    description: 'Whole shelled raw pistachios, completely free of sodium and added oils. Ideal for pastry decoration, pestos, or luxury clean eating.',
    badges: ['Salt-Free', 'Raw Superfood'],
    tags: {
      raw: true,
      originTag: 'Iran'
    },
    nutrition: {
      calories: '156',
      protein: '5.7g',
      healthyFats: '12.5g',
      dietaryFiber: '2.9g',
      vitaminsNote: 'Zero sodium, high natural antioxidant density.'
    },
    inStock: true
  },
  {
    id: 'medjool-royal-dates',
    name: 'Al-Ain Royal Medjool Dates',
    category: 'dates-seeds',
    origin: 'UAE',
    price: 110.00,
    unit: '500g',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCXysrPjfkZBdwOISePEUd9X7Mcm9HnCTnyBnLNB1YHMhHzsvVt0xm5SQIt0q8wQP0rOAldzrw4xzFMCBi_0L6nKAw79bvlZh1dQtrCEL24trqFRkK9UV5VN68KyMgNgQ7PdxwGnr6FTse0OCpDSm3FsglKjHkijZ6SAfPu7M0dMtzmIb5GqYaMLwU5yI4Oo-Z4Dk0JBxmRjuOl1PSxqLE3us0lizbtv31d_f0TjvrKaf0uoSS3nkm_w',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBCXysrPjfkZBdwOISePEUd9X7Mcm9HnCTnyBnLNB1YHMhHzsvVt0xm5SQIt0q8wQP0rOAldzrw4xzFMCBi_0L6nKAw79bvlZh1dQtrCEL24trqFRkK9UV5VN68KyMgNgQ7PdxwGnr6FTse0OCpDSm3FsglKjHkijZ6SAfPu7M0dMtzmIb5GqYaMLwU5yI4Oo-Z4Dk0JBxmRjuOl1PSxqLE3us0lizbtv31d_f0TjvrKaf0uoSS3nkm_w'
    ],
    shortDescription: 'Jumbo succulent dates with soft caramel notes, harvested in the oasis of Al Ain.',
    description: 'Prized for their impressive size and luscious caramel undertone. Hand-picked at peak ripeness in the historic oasis groves of Al Ain, Abu Dhabi.',
    badges: ['Oasis Sourced', 'UAE Heritage'],
    tags: {
      raw: true,
      premium: true,
      originTag: 'UAE'
    },
    nutrition: {
      calories: '133',
      protein: '1.2g',
      healthyFats: '0.2g',
      dietaryFiber: '3.2g',
      vitaminsNote: 'Natural energy source loaded with potassium and polyphenols.'
    },
    inStock: true
  },
  {
    id: 'heritage-gift-hamper',
    name: 'The Al-Qalb Heritage Hamper',
    category: 'gifts',
    origin: 'UAE',
    price: 345.00,
    unit: 'Gift Box (1.5kg)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeWZmcAUIaSeMpPBVcCSJa_j0-GUB3VF8RFrEC2PbOqZnx_VQAt19SiCJM9ApldQiQ1ZjYw83qcI9JzFC4X24NN0gvABHdfU7soNQjE-ua-kX8vo-o1YzqOg-_8rE08ThhC5zW2j-l_k59qSBTSLEH20ttM-mIRhNNqTBXMsDN1Ttv6Bb_PxwOwBFjPy9eUaZYuTATWy3PnXx7AOdEm3pBLedZLOLoLOEzFqKQZbHfy4uQphxK-pzjgA',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCeWZmcAUIaSeMpPBVcCSJa_j0-GUB3VF8RFrEC2PbOqZnx_VQAt19SiCJM9ApldQiQ1ZjYw83qcI9JzFC4X24NN0gvABHdfU7soNQjE-ua-kX8vo-o1YzqOg-_8rE08ThhC5zW2j-l_k59qSBTSLEH20ttM-mIRhNNqTBXMsDN1Ttv6Bb_PxwOwBFjPy9eUaZYuTATWy3PnXx7AOdEm3pBLedZLOLoLOEzFqKQZbHfy4uQphxK-pzjgA'
    ],
    shortDescription: 'Handcrafted wooden marquetry box with four premium dry food selections.',
    description: 'An ode to Arabian hospitality. Enclosed in a bespoke walnut wooden box with brass clasp. Includes Californian Almonds, Iranian Pistachios, Al-Ain Medjool Dates, and Chandler Walnuts.',
    badges: ['Luxury Keepsake Box', 'Custom Calligraphy Card'],
    tags: {
      premium: true,
      originTag: 'UAE'
    },
    nutrition: {
      calories: '165 (avg)',
      protein: '5.5g',
      healthyFats: '14.5g',
      dietaryFiber: '3.4g',
      vitaminsNote: 'Includes four curated air-tight glass jars in a keepsake walnut box.'
    },
    inStock: true
  }
];

export const INITIAL_CHECKOUT_ITEMS = [
  {
    product: PRODUCTS.find(p => p.id === 'royal-roasted-almonds') || PRODUCTS[0],
    quantity: 2
  },
  {
    product: PRODUCTS.find(p => p.id === 'salt-free-pistachio-kernels') || PRODUCTS[1],
    quantity: 1
  }
];
