import React, { useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Droplets, Sun, ChevronRight } from 'lucide-react';
import { ViewMode } from '../types';

interface HeroProps {
  onNavigate: (view: ViewMode) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [activeHeroSlide, setActiveHeroSlide] = useState<'model' | 'vanity' | 'biometric'>('model');

  const slides = {
    model: {
      image: '/assets/Gemini_Generated_Image_c76ygic76ygic76y.jpg',
      tag: 'Editorial Campaign · Spring 2026',
      headline: 'The New Geometry of Radiant Skin',
      caption: 'Featuring the NŌRA Hydrating Barrier Toner in deep burgundy soft-touch glass.'
    },
    vanity: {
      image: '/assets/Gemini_Generated_Image_gzpqg3gzpqg3gzpq.jpg',
      tag: 'Morning Ritual Protocol',
      headline: 'Awaken Your Cutaneous Barrier',
      caption: 'Complete morning defense suite on sunlit marble: Cleanser, Essence, Melt, and SPF 50+.'
    },
    biometric: {
      image: '/assets/Gemini_Generated_Image_zhsyk2zhsyk2zhsy.jpg',
      tag: 'Dermatological Precision',
      headline: 'Formulated for Diverse Climates',
      caption: 'Cellular lipid mapping ensures customized moisture retention across all environmental gradients.'
    }
  };

  const current = slides[activeHeroSlide];

  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-28">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-nora-pink/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-nora-blush/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8 text-left z-10">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nora-pink/60 border border-nora-dusty/20 text-nora-burgundy text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-nora-burgundy" />
              <span>Accessible Luxury · Science-Backed</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl leading-[1.08] text-nora-wine font-light tracking-tight">
                Your skin, <br />
                <span className="italic font-normal text-nora-burgundy">understood.</span>
              </h1>
              <p className="font-sans text-base sm:text-lg text-nora-dusty leading-relaxed font-normal pt-2 max-w-xl">
                NŌRA combines advanced dermatological science, bio-identical lipid matrices, and sensory indulgence. Skincare shouldn't chase perfection—it should understand your unique biological barrier and give it precisely what it needs.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => onNavigate('store')}
                className="inline-flex items-center justify-center gap-3 bg-nora-burgundy text-white px-8 py-4 rounded-full font-sans text-sm tracking-wider uppercase font-semibold hover:bg-nora-wine transition-all shadow-luxury hover:shadow-luxury-hover group active:scale-95"
              >
                <span>Explore Store Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-nora-pink" />
              </button>

              <button
                onClick={() => onNavigate('store')}
                className="inline-flex items-center justify-center gap-2 border border-nora-burgundy/40 text-nora-burgundy bg-white/60 hover:bg-white px-7 py-4 rounded-full font-sans text-sm tracking-wider uppercase font-semibold transition-all hover:border-nora-burgundy active:scale-95 shadow-sm"
              >
                <span>Find Your Ritual</span>
              </button>
            </div>

            {/* Clinical Trust Badges */}
            <div className="pt-6 border-t border-nora-pink/50 grid grid-cols-3 gap-4">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-nora-burgundy shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-bold text-nora-wine uppercase tracking-wider">Bio-Identical</h2>
                  <p className="text-[11px] text-nora-dusty">5 Essential Ceramides</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Sun className="w-5 h-5 text-nora-burgundy shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-bold text-nora-wine uppercase tracking-wider">Adaptive</h2>
                  <p className="text-[11px] text-nora-dusty">All Climates & Tones</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Droplets className="w-5 h-5 text-nora-burgundy shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xs font-bold text-nora-wine uppercase tracking-wider">Clinical</h2>
                  <p className="text-[11px] text-nora-dusty">100% Barrier Safe</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Stage Column (7 cols) */}
          <div className="lg:col-span-7 relative">
            
            {/* Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white group aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/3] max-h-[640px]">
              
              <img
                src={current.image}
                alt={current.headline}
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Scrim for Editorial Typography */}
              <div className="absolute inset-0 bg-gradient-to-t from-nora-wine/85 via-nora-wine/20 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
                
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-sans tracking-[0.25em] uppercase text-nora-pink font-semibold">
                    {current.tag}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal leading-snug">
                    {current.headline}
                  </h2>
                  <p className="text-xs sm:text-sm text-nora-pink/80 font-sans max-w-lg hidden sm:block">
                    {current.caption}
                  </p>
                </div>

                {/* Micro Action in Hero Overlay */}
                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('store')}
                    className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-white underline underline-offset-4 hover:text-nora-pink transition-colors"
                  >
                    <span>View Product Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <div className="text-[11px] font-mono tracking-widest text-nora-pink/70">
                    NŌRA · EST. 2026
                  </div>
                </div>

              </div>

            </div>

            {/* Slide Navigation Selectors */}
            <div className="flex items-center justify-center gap-3 pt-4">
              <button
                onClick={() => setActiveHeroSlide('model')}
                className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition-all ${
                  activeHeroSlide === 'model'
                    ? 'bg-nora-burgundy text-white shadow-sm'
                    : 'bg-white/70 text-nora-wine hover:bg-white'
                }`}
              >
                Editorial Toner
              </button>
              <button
                onClick={() => setActiveHeroSlide('vanity')}
                className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition-all ${
                  activeHeroSlide === 'vanity'
                    ? 'bg-nora-burgundy text-white shadow-sm'
                    : 'bg-white/70 text-nora-wine hover:bg-white'
                }`}
              >
                Vanity Lineup
              </button>
              <button
                onClick={() => setActiveHeroSlide('biometric')}
                className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition-all ${
                  activeHeroSlide === 'biometric'
                    ? 'bg-nora-burgundy text-white shadow-sm'
                    : 'bg-white/70 text-nora-wine hover:bg-white'
                }`}
              >
                Biometric Science
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

