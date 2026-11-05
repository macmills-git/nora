import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

interface SensorialBentoProps {
  onSelectProduct: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  products: Product[];
}

export const SensorialBento: React.FC<SensorialBentoProps> = ({
  onSelectProduct,
  onAddToCart,
  products
}) => {
  const [activeTab, setActiveTab] = useState<'cosmetology' | 'daily'>('cosmetology');
  const [addedId, setAddedId] = useState<string | null>(null);

  const polish = products.find(p => p.id === 'berry-polish-exfoliant') || products[3];

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FAF4F6] border-b border-nora-pink/30 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Selector */}
        <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-nora-pink/40">
          <div className="flex items-baseline gap-2.5">
            <button
              onClick={() => setActiveTab('cosmetology')}
              className={`font-serif text-2xl sm:text-3xl transition-colors ${
                activeTab === 'cosmetology' 
                  ? 'text-nora-wine font-medium' 
                  : 'text-nora-dusty/60 hover:text-nora-wine'
              }`}
            >
              Dermatology
            </button>
            <span className="text-xl text-nora-dusty/40 font-light">/</span>
            <button
              onClick={() => setActiveTab('daily')}
              className={`font-serif text-2xl sm:text-3xl transition-colors ${
                activeTab === 'daily' 
                  ? 'text-nora-wine font-medium' 
                  : 'text-nora-dusty/60 hover:text-nora-wine'
              }`}
            >
              Sensorial Formulations
            </button>
          </div>

          <span className="text-[10px] font-mono tracking-widest text-nora-dusty uppercase hidden sm:block">
            BENTO SELECTION
          </span>
        </div>

        {/* Compact Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Top Left: Compact Promo Card (md:col-span-6) */}
          <div 
            onClick={() => onSelectProduct('berry-polish-exfoliant')}
            className="md:col-span-6 rounded-2xl bg-[#B0737C] text-white p-5 shadow-sm relative overflow-hidden group cursor-pointer flex flex-col justify-between h-56"
          >
            <div className="space-y-1 z-10 max-w-[220px]">
              <span className="text-[9px] font-mono tracking-widest uppercase bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-white inline-block">
                20% OFF
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal pt-1">
                Berry Polish Exfoliant
              </h3>
              <p className="text-[11px] text-white/90 font-sans leading-tight">
                Crushed wild seed nectar that reveals smooth skin without micro-tears.
              </p>
            </div>

            <div className="pt-2 z-10">
              <button
                onClick={(e) => handleQuickAdd(polish, e)}
                className="bg-white text-nora-burgundy hover:bg-nora-pink px-4 py-1.5 rounded-full text-[11px] font-sans font-bold tracking-wider uppercase transition-all shadow-sm active:scale-95"
              >
                {addedId === polish.id ? 'Added' : 'Shop Exfoliant · $36'}
              </button>
            </div>

            <div className="absolute -right-3 -bottom-4 w-40 sm:w-44 group-hover:scale-105 transition-transform duration-500">
              <img
                src="/assets/nora_berry_polish_tube_card.jpg"
                alt="Berry Polish"
                className="w-full object-contain drop-shadow-lg rounded-xl"
              />
            </div>
          </div>

          {/* Top Right: Compact Smiling Model (md:col-span-6) */}
          <div
            onClick={() => onSelectProduct('hydrating-melt-cream')}
            className="md:col-span-6 rounded-2xl overflow-hidden relative shadow-sm border border-nora-pink/40 h-56 group cursor-pointer bg-white"
          >
            <img
              src="/assets/Gemini_Generated_Image_3xuoa73xuoa73xuo.jpg"
              alt="Radiant Model"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nora-wine/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] font-mono tracking-widest uppercase text-nora-pink font-semibold">
                LIPID REPLENISHMENT
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-white font-normal mt-0.5 leading-snug">
                "A velvety layer of pure calm for reactive skin."
              </h3>
            </div>
          </div>

          {/* Bottom Left: Compact Macro Cream Swirl (md:col-span-6) */}
          <div
            onClick={() => onSelectProduct('ceramide-barrier-cream')}
            className="md:col-span-6 rounded-2xl overflow-hidden relative shadow-sm border border-nora-pink/40 h-44 group cursor-pointer bg-white"
          >
            <img
              src="/assets/nora_tactile_macro_texture_swirl.jpg"
              alt="Whipped cream swirl"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-sans font-bold text-nora-burgundy uppercase tracking-wider shadow-sm">
                Shop Barrier Cream · $42
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-nora-wine/75 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
              <h4 className="font-serif text-base text-white">
                Whipped Cloudberry & 5-Ceramide Butter
              </h4>
            </div>
          </div>

          {/* Bottom Right: Compact Jar Preview (md:col-span-6) */}
          <div
            onClick={() => onSelectProduct('ceramide-barrier-cream')}
            className="md:col-span-6 rounded-2xl overflow-hidden relative shadow-sm border border-nora-pink/40 h-44 group cursor-pointer bg-white flex items-center justify-between p-5"
          >
            <div className="w-28 h-28 shrink-0 flex items-center justify-center p-2">
              <img
                src="/assets/nora_ceramide_barrier_cream_jar_studio.jpg"
                alt="NŌRA Ceramide Barrier Cream Jar"
                className="max-h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="space-y-1 text-left pl-3">
              <span className="font-mono text-[9px] tracking-widest uppercase text-nora-dusty block">
                HERO RESTORATION JAR
              </span>
              <h4 className="font-serif text-lg font-medium text-nora-wine leading-tight">
                Ceramide Barrier Cream
              </h4>
              <span className="text-[11px] font-sans font-bold text-nora-burgundy flex items-center gap-1 pt-1">
                <span>View Details</span>
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
