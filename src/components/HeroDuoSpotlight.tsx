import React, { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types';

interface HeroDuoSpotlightProps {
  onAddToCart: (product: Product, quantity?: number) => void;
  products: Product[];
  onSelectProduct: (productId: string) => void;
}

export const HeroDuoSpotlight: React.FC<HeroDuoSpotlightProps> = ({
  onAddToCart,
  products,
  onSelectProduct
}) => {
  const [addedDuo, setAddedDuo] = useState(false);

  const cleanser = products.find(p => p.id === 'gentle-barrier-cleanser') || products[6];
  const essence = products.find(p => p.id === 'balancing-treatment-essence') || products[7];

  const handleAddDuo = () => {
    onAddToCart(cleanser, 1);
    onAddToCart(essence, 1);
    setAddedDuo(true);
    setTimeout(() => setAddedDuo(false), 2500);
  };

  return (
    <section className="py-12 sm:py-16 bg-nora-blush/25 border-y border-nora-pink/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text & CTA Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nora-pink text-nora-burgundy text-[11px] font-bold tracking-wider uppercase">
              <span>Save 35% on Duo</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-nora-wine leading-tight font-light">
              Daily essentials for barrier defense and moisture equilibrium.
            </h2>

            <p className="font-sans text-xs sm:text-sm text-nora-dusty leading-relaxed font-normal">
              Clinically formulated Barrier Cleanser and fermented Essence that work synergistically to replenish depleted lipids and elevate hydration.
            </p>

            <div className="space-y-1 py-1 text-xs text-nora-wine/90 font-sans">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-nora-burgundy shrink-0" />
                <span>Step 1: Gentle Barrier Cleanser (200 ml)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-nora-burgundy shrink-0" />
                <span>Step 2: Balancing Treatment Essence (150 ml)</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleAddDuo}
                className="inline-flex items-center gap-2.5 bg-nora-burgundy text-white px-6 py-3 rounded-full font-sans text-xs tracking-wider uppercase font-semibold hover:bg-nora-wine transition-all shadow-sm active:scale-95"
              >
                {addedDuo ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-nora-pink" />
                    <span>Duo Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5 text-nora-pink" />
                    <span>Shop Daily Essentials Duo · $58</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Hero Duo Container (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            
            {/* Primary Duo Showcase Card */}
            <div className="relative rounded-2xl bg-white border border-nora-pink/50 p-6 shadow-sm overflow-hidden">
              
              <div className="grid grid-cols-2 gap-4 items-end justify-center min-h-[220px]">
                
                {/* Cleanser */}
                <div 
                  onClick={() => onSelectProduct('gentle-barrier-cleanser')}
                  className="cursor-pointer group flex flex-col items-center text-center"
                >
                  <div className="w-full h-44 flex items-center justify-center p-1">
                    <img
                      src="/assets/Gemini_Generated_Image_kljpxkljpxkljpxk.jpg"
                      alt="Gentle Barrier Cleanser"
                      className="max-h-full object-contain rounded-xl group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-serif text-sm text-nora-wine mt-1 font-medium">Gentle Barrier Cleanser</h3>
                  <span className="text-[11px] text-nora-dusty font-mono">$32 · 200 ml</span>
                </div>

                {/* Essence */}
                <div 
                  onClick={() => onSelectProduct('balancing-treatment-essence')}
                  className="cursor-pointer group flex flex-col items-center text-center"
                >
                  <div className="w-full h-44 flex items-center justify-center p-1">
                    <img
                      src="/assets/Gemini_Generated_Image_npo1lbnpo1lbnpo1.jpg"
                      alt="Balancing Treatment Essence"
                      className="max-h-full object-contain rounded-xl group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-serif text-sm text-nora-wine mt-1 font-medium">Treatment Essence</h3>
                  <span className="text-[11px] text-nora-dusty font-mono">$38 · 150 ml</span>
                </div>

              </div>

            </div>

            {/* 3 Supporting Thumbnails */}
            <div className="grid grid-cols-3 gap-2.5">
              <div 
                onClick={() => onSelectProduct('hydrating-melt-cream')}
                className="group cursor-pointer rounded-xl overflow-hidden bg-white border border-nora-pink/30 shadow-sm aspect-video relative"
              >
                <img
                  src="/assets/Gemini_Generated_Image_3xuoa73xuoa73xuo.jpg"
                  alt="Application"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              <div 
                onClick={() => onSelectProduct('core-barrier-ritual-set')}
                className="group cursor-pointer rounded-xl overflow-hidden bg-white border border-nora-pink/30 shadow-sm aspect-video relative"
              >
                <img
                  src="/assets/Gemini_Generated_Image_lknbm8lknbm8lknb (1).jpg"
                  alt="Unboxing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>

              <div 
                onClick={() => onSelectProduct('ceramide-shield-spf')}
                className="group cursor-pointer rounded-xl overflow-hidden bg-white border border-nora-pink/30 shadow-sm aspect-video relative"
              >
                <img
                  src="/assets/Gemini_Generated_Image_gzpqg3gzpqg3gzpq.jpg"
                  alt="Vanity"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
