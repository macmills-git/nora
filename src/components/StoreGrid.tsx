import React, { useState } from 'react';
import { ShoppingBag, Star, Filter, Check, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface StoreGridProps {
  products: Product[];
  onSelectProduct: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  isLandingPage?: boolean;
  onSeeCollection?: () => void;
}

export const StoreGrid: React.FC<StoreGridProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
  isLandingPage = false,
  onSeeCollection,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [addedMap, setAddedMap] = useState<Record<string, boolean>>({});

  // Collection Page: strictly two categories (Bundles & Gifts, Single Products) + All Formulations
  const categories = [
    {
      id: 'all',
      label: 'All Formulations',
      count: products.length,
    },
    {
      id: 'bundles',
      label: 'Bundles & Gifts',
      count: products.filter((p) => p.category === 'set').length,
    },
    {
      id: 'singles',
      label: 'Single Products',
      count: products.filter((p) => p.category !== 'set').length,
    },
  ];

  // Curated landing page selection: 4 flagship sets + 4 iconic singles (exactly 2 rows of 4)
  const landingFeaturedIds = [
    'core-barrier-ritual-set',
    'morning-equilibrium-bundle',
    'overnight-recovery-set',
    'daily-travel-pouch-set',
    'ceramide-barrier-cream',
    'berry-radiance-glow-serum',
    'gentle-barrier-cleanser',
    'balancing-treatment-essence',
  ];

  let displayProducts: Product[];

  if (isLandingPage) {
    // Exactly 2 rows (8 products) for landing page
    displayProducts = landingFeaturedIds
      .map((id) => products.find((p) => p.id === id))
      .filter((p): p is Product => Boolean(p));
  } else {
    // Dedicated Collection Page with category filter
    if (selectedCategory === 'bundles') {
      displayProducts = products.filter((p) => p.category === 'set');
    } else if (selectedCategory === 'singles') {
      displayProducts = products.filter((p) => p.category !== 'set');
    } else {
      displayProducts = products;
    }
  }

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedMap((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* LANDING PAGE HEADER (Minimal, No Filters) */}
      {isLandingPage ? (
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-nora-pink/30 gap-4">
          <div className="text-left">
            <span className="text-[10px] font-sans tracking-[0.25em] text-nora-burgundy uppercase font-semibold">
              Curated Formulations
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-nora-wine font-light mt-0.5">
              The Collection
            </h2>
          </div>

          {onSeeCollection && (
            <button
              onClick={onSeeCollection}
              className="inline-flex items-center gap-1.5 text-xs font-sans tracking-wider uppercase font-semibold text-nora-burgundy hover:text-nora-wine transition-colors group self-start sm:self-auto"
            >
              <span>See Collection</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      ) : (
        /* COLLECTION PAGE HEADER (With 2 Categories Filter + All) */
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-nora-pink/40 gap-4">
          <div className="text-left">
            <span className="text-[10px] font-mono tracking-widest uppercase text-nora-burgundy font-semibold">
              NŌRA APOTHECARY & STORE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-nora-wine font-light mt-0.5">
              The Complete Collection
            </h2>
            <p className="text-xs text-nora-dusty mt-1">
              {displayProducts.length} Formulations & Ritual Sets Available
            </p>
          </div>

          {/* Strictly 2 Categories Filter + All */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <Filter className="w-3.5 h-3.5 text-nora-dusty shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-sans whitespace-nowrap transition-all flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-nora-burgundy text-white font-semibold shadow-xs'
                    : 'bg-white text-nora-wine hover:bg-nora-blush/60 border border-nora-pink/50'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedCategory === cat.id
                      ? 'bg-white/20 text-white'
                      : 'bg-nora-blush text-nora-dusty'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Product & Bundle Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
        {displayProducts.map((product) => {
          const isAdded = addedMap[product.id];
          const isBundle = product.category === 'set';

          return (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product.id)}
              className="bg-white rounded-2xl border border-nora-pink/40 p-3 sm:p-4 flex flex-col justify-between group cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Top Tag Badges */}
              <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1">
                {product.tag && (
                  <span
                    className={`px-2 py-0.5 rounded-full text-[9px] font-sans font-bold uppercase tracking-wider shadow-2xs border ${
                      isBundle
                        ? 'bg-nora-wine text-white border-nora-burgundy'
                        : 'bg-nora-blush text-nora-burgundy border-nora-pink/60'
                    }`}
                  >
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Product Image Stage */}
              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-nora-blush/15 mb-3 flex items-center justify-center p-2 relative group-hover:bg-nora-blush/25 transition-colors">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Info Hierarchy */}
              <div className="space-y-1 mb-3 text-left">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-[11px] font-mono font-medium text-nora-wine">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-[10px] font-sans text-nora-dusty/80 truncate">
                    {product.size}
                  </span>
                </div>

                <h3 className="font-serif text-sm sm:text-base text-nora-wine font-medium leading-snug line-clamp-1 group-hover:text-nora-burgundy transition-colors">
                  {product.name}
                </h3>

                <p className="text-[11px] text-nora-dusty font-sans line-clamp-1">
                  {product.subtitle}
                </p>

                <div className="flex items-baseline gap-2 pt-1">
                  <span className="font-mono text-sm sm:text-base font-bold text-nora-wine">
                    ${product.price}
                  </span>
                  {product.subscriptionPrice && (
                    <span className="text-[10px] font-mono text-nora-dusty line-through">
                      ${Math.round(product.price * 1.25)}
                    </span>
                  )}
                  {isBundle && (
                    <span className="text-[9px] font-sans font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">
                      Bundle Save
                    </span>
                  )}
                </div>
              </div>

              {/* Add to Bag Button */}
              <button
                onClick={(e) => handleQuickAdd(product, e)}
                className={`w-full py-2 rounded-lg text-[11px] font-sans tracking-wider uppercase font-semibold transition-all flex items-center justify-center gap-1.5 shadow-2xs ${
                  isAdded
                    ? 'bg-emerald-700 text-white'
                    : 'bg-nora-burgundy text-white hover:bg-nora-wine active:scale-95'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                    <span>Added</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3 h-3 text-nora-pink" />
                    <span>Add to Bag</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
};
