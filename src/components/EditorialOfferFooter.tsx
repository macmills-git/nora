import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { ViewMode } from '../types';

interface EditorialOfferFooterProps {
  onNavigate: (view: ViewMode) => void;
  onSelectProduct: (productId: string) => void;
}

export const EditorialOfferFooter: React.FC<EditorialOfferFooterProps> = ({
  onNavigate,
  onSelectProduct
}) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('NORAGLOW');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FAF4F6] text-left border-b border-nora-pink/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: 3 Compact Cards */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-2.5">
            <div 
              onClick={() => onSelectProduct('ceramide-barrier-cream')}
              className="rounded-xl overflow-hidden bg-white border border-nora-pink/40 shadow-sm aspect-square cursor-pointer group relative"
            >
              <img
                src="/assets/Gemini_Generated_Image_3xuoa73xuoa73xuo.jpg"
                alt="Skin Profile"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div 
              onClick={() => onSelectProduct('ceramide-barrier-cream')}
              className="rounded-xl overflow-hidden bg-white border border-nora-pink/40 shadow-sm aspect-square cursor-pointer group relative"
            >
              <img
                src="/assets/nora_tactile_macro_texture_swirl.jpg"
                alt="Swirl texture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div 
              onClick={() => onSelectProduct('core-barrier-ritual-set')}
              className="rounded-xl overflow-hidden bg-white border border-nora-pink/40 shadow-sm aspect-square cursor-pointer group relative"
            >
              <img
                src="/assets/Gemini_Generated_Image_lknbm8lknbm8lknb (1).jpg"
                alt="Gift box"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 space-y-2.5">
            <span className="text-[10px] font-mono tracking-widest uppercase text-nora-burgundy font-semibold block">
              SPECIAL INVITATION
            </span>

            <h3 className="font-sans text-lg sm:text-xl font-medium text-nora-wine uppercase tracking-wide leading-snug">
              Receive 20% off your initial ritual protocol and complimentary consultation.
            </h3>

            <p className="text-xs text-nora-dusty font-sans leading-relaxed">
              Use code <span className="font-mono font-bold text-nora-burgundy">NORAGLOW</span> for 15% off + complimentary artisan wax packaging.
            </p>

            <div className="pt-1 flex items-center gap-4">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 text-xs font-sans tracking-wider uppercase font-bold text-nora-burgundy border-b border-nora-burgundy pb-0.5 hover:text-nora-wine hover:border-nora-wine transition-all"
              >
                <span>{copiedCode ? 'CODE COPIED' : 'COPY CODE: NORAGLOW'}</span>
                {copiedCode ? <Check className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
              </button>

              <button
                onClick={() => onNavigate('store')}
                className="text-xs font-sans text-nora-dusty hover:text-nora-wine underline underline-offset-2"
              >
                Shop Collection →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
