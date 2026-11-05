import React from 'react';
import { ArrowUpRight, Star, Sparkles, Droplets, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';

interface BentoGridProps {
  onSelectProduct: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  products: Product[];
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  onSelectProduct,
  onAddToCart,
  products
}) => {
  const polish = products.find(p => p.id === 'berry-polish-exfoliant') || products[3];
  const cream = products.find(p => p.id === 'ceramide-barrier-cream') || products[0];

  return (
    <section id="bento-rituals" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Editorial Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nora-pink/50 text-nora-burgundy text-xs font-semibold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Sensorial Dermatology</span>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-nora-wine font-light leading-tight">
          Where clinical biology meets <br />
          <span className="italic font-normal text-nora-burgundy">unapologetic luxury.</span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-nora-dusty max-w-xl mx-auto">
          Explore our breakthrough textures—from cloudberry whipped butters to cold-pressed anthocyanin nectars.
        </p>
      </div>

      {/* Asymmetric Bento Layout (Direct translation of References 130202 & 111137) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Card 1: Promo & Scrub Jar (md:col-span-7) */}
        <div className="md:col-span-7 rounded-3xl bg-white border border-nora-pink/50 p-8 sm:p-10 shadow-luxury flex flex-col justify-between relative overflow-hidden group">
          <div className="space-y-3 z-10 max-w-md">
            <span className="inline-block text-[11px] font-sans font-bold tracking-widest uppercase text-nora-burgundy bg-nora-pink px-3 py-1 rounded-full">
              Seasonal Ritual 20% Off
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-nora-wine font-normal leading-snug">
              Berry Polish Clarifying Exfoliant
            </h3>
            <p className="text-sm text-nora-dusty font-sans leading-relaxed">
              Crushed wild blackberry seed granules infused in a soothing mandelic gel. Dissolves congestion while infusing potent berry bioflavonoids.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onAddToCart(polish)}
                className="bg-nora-burgundy text-white px-6 py-3 rounded-full text-xs font-sans font-semibold tracking-wider uppercase hover:bg-nora-wine transition-all shadow-sm active:scale-95"
              >
                Add to Bag · $36
              </button>
              <button
                onClick={() => onSelectProduct('berry-polish-exfoliant')}
                className="text-xs text-nora-wine underline underline-offset-4 hover:text-nora-burgundy font-semibold"
              >
                Formula Science →
              </button>
            </div>
          </div>

          <div className="mt-8 sm:mt-6 flex justify-end">
            <div 
              onClick={() => onSelectProduct('berry-polish-exfoliant')}
              className="cursor-pointer relative max-w-xs sm:max-w-sm rounded-2xl overflow-hidden border border-nora-pink/30 group-hover:scale-105 transition-transform duration-500"
            >
              <img
                src="/assets/nora_berry_polish_tube_card.jpg"
                alt="Berry Polish with jam smear"
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="absolute top-6 right-6 p-2 rounded-full bg-nora-blush/60 text-nora-wine group-hover:bg-nora-burgundy group-hover:text-white transition-colors">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        {/* Card 2: Smiling Radiant Model with Cream Swatch (md:col-span-5) */}
        <div 
          onClick={() => onSelectProduct('hydrating-melt-cream')}
          className="md:col-span-5 rounded-3xl overflow-hidden relative shadow-luxury min-h-[380px] group cursor-pointer border border-nora-pink/40"
        >
          <img
            src="/assets/Gemini_Generated_Image_3xuoa73xuoa73xuo.jpg"
            alt="Radiant model with cream swatch"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nora-wine/90 via-nora-wine/30 to-transparent flex flex-col justify-end p-8 text-white">
            <div className="flex items-center gap-1 text-amber-300 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="text-xs text-white/90 font-mono ml-2">4.9 / 5.0 (428 reviews)</span>
            </div>
            <p className="font-serif text-xl sm:text-2xl text-white italic font-normal leading-snug">
              "The Hydrating Melt is the first barrier formula that stopped my seasonal winter flaking in under 48 hours."
            </p>
            <span className="text-xs font-sans text-nora-pink/90 uppercase tracking-widest mt-2 font-medium">
              — Elena V., Verified Clinical Customer
            </span>
          </div>
        </div>

        {/* Card 3: Macro Tactile Swirl Close-Up (md:col-span-5) */}
        <div 
          onClick={() => onSelectProduct('ceramide-barrier-cream')}
          className="md:col-span-5 rounded-3xl overflow-hidden relative shadow-luxury group cursor-pointer border border-nora-pink/40 min-h-[360px]"
        >
          <img
            src="/assets/nora_tactile_macro_texture_swirl.jpg"
            alt="Macro cream and berry oil droplet swirl"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nora-wine/85 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
            <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-nora-pink font-semibold">
              Micro-Sensorial Matrix
            </span>
            <h4 className="font-serif text-2xl text-white font-normal">
              Whipped Phytoceramide Cushion
            </h4>
            <p className="text-xs text-nora-pink/80 font-sans mt-1">
              Zero synthetic silicones. Saturated with cold-pressed arctic berry lipid esters.
            </p>
          </div>
        </div>

        {/* Card 4: Biometric Facial Mapping & Science (md:col-span-7) */}
        <div className="md:col-span-7 rounded-3xl bg-nora-wine text-white p-8 sm:p-10 shadow-luxury flex flex-col sm:flex-row gap-8 items-center justify-between relative overflow-hidden group">
          <div className="space-y-4 z-10 max-w-sm text-left">
            <span className="text-[11px] font-mono tracking-widest uppercase text-nora-pink font-semibold flex items-center gap-1.5">
              <Droplets className="w-3.5 h-3.5 text-nora-pink" />
              <span>Climate-Adaptive Dermatology</span>
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-snug">
              Engineered for all tones, climates & seasons.
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
              From humid sub-tropics to arid sub-zero winters, NŌRA's smart bio-lipids adjust osmotic moisture release to prevent cellular evaporation.
            </p>
            <div className="space-y-1.5 pt-1 text-xs text-nora-pink">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-nora-pink" />
                <span>Non-comedogenic & pore breathable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-nora-pink" />
                <span>Zero white cast on deep melanin-rich tones</span>
              </div>
            </div>
          </div>

          <div 
            onClick={() => onSelectProduct('berry-radiance-glow-serum')}
            className="w-full sm:w-64 h-64 rounded-2xl overflow-hidden border border-white/20 group-hover:scale-105 transition-transform duration-500 cursor-pointer shrink-0"
          >
            <img
              src="/assets/Gemini_Generated_Image_zhsyk2zhsyk2zhsy.jpg"
              alt="Scientific biometric facial mapping"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

    </section>
  );
};

