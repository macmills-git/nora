import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ViewMode } from '../types';

interface EditorialConsultationBannerProps {
  onNavigate: (view: ViewMode) => void;
}

export const EditorialConsultationBanner: React.FC<EditorialConsultationBannerProps> = ({ onNavigate }) => {
  return (
    <section className="py-12 sm:py-16 bg-[#FAF4F6] text-center border-b border-nora-pink/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-nora-pink/60 text-nora-burgundy text-[10px] font-mono tracking-widest uppercase font-semibold">
          <Sparkles className="w-3 h-3" />
          <span>DERMATOLOGICAL EVALUATION</span>
        </div>

        <h2 className="font-sans text-xl sm:text-2xl lg:text-3xl text-nora-wine font-medium uppercase tracking-[0.1em] leading-snug">
          A personalized skin prescription — <br className="hidden sm:inline" />
          the first step to equilibrium.
        </h2>

        <p className="font-sans text-xs text-nora-dusty max-w-md mx-auto leading-relaxed">
          Our diagnostic algorithm assesses your barrier integrity, climate, and renewal rate to curate your custom protocol.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onNavigate('store')}
            className="bg-[#1E070F] text-white py-3 px-8 rounded-full font-sans text-xs tracking-widest uppercase font-semibold hover:bg-nora-burgundy transition-all shadow-sm active:scale-95 inline-flex items-center justify-center gap-2 group"
          >
            <span>Start Skin Diagnosis</span>
            <ArrowRight className="w-3.5 h-3.5 text-nora-pink group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
