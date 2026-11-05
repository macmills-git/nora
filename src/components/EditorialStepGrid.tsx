import React from 'react';
import { ShieldCheck, Droplets, Microscope, Sun, HeartHandshake, Sparkles } from 'lucide-react';

export const EditorialStepGrid: React.FC = () => {
  const steps = [
    {
      num: '/01',
      title: 'Dermatologist Formulated',
      desc: '15+ years of clinical lipid research.',
      icon: Microscope
    },
    {
      num: '/02',
      title: '5 Biomimetic Ceramides',
      desc: 'Rebuilds natural stratum corneum.',
      icon: ShieldCheck
    },
    {
      num: '/03',
      title: 'Climate-Adaptive Osmosis',
      desc: 'Balances dry heat and tropical humidity.',
      icon: Sun
    },
    {
      num: '/04',
      title: 'Cold-Pressed Actives',
      desc: 'Wild lingonberry & cloudberry ferments.',
      icon: Droplets
    },
    {
      num: '/05',
      title: 'Melanin-Safe Inclusivity',
      desc: 'Zero cast across all 6 Fitzpatrick tones.',
      icon: HeartHandshake
    },
    {
      num: '/06',
      title: 'Biomimetic pH 5.5',
      desc: 'Protects delicate acid mantle flora.',
      icon: Sparkles
    }
  ];

  return (
    <section id="science" className="py-12 sm:py-16 bg-[#FAF4F6] border-b border-nora-pink/30 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Photo Trio */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 items-center">
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden bg-white border border-nora-pink/40 shadow-sm aspect-[4/5] relative">
                <img
                  src="/assets/Gemini_Generated_Image_qeyr9nqeyr9nqeyr.jpg"
                  alt="Cleansing foam"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-white/90 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold text-nora-burgundy">
                  01 / PURIFY
                </span>
              </div>
              <div className="rounded-xl overflow-hidden bg-white border border-nora-pink/40 shadow-sm aspect-video relative">
                <img
                  src="/assets/nora_tactile_macro_texture_swirl.jpg"
                  alt="Cream swirl"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl overflow-hidden bg-white border border-nora-pink/40 shadow-sm aspect-square relative">
                <img
                  src="/assets/Gemini_Generated_Image_3xuoa73xuoa73xuo.jpg"
                  alt="Dewy skin"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="rounded-2xl overflow-hidden bg-white border border-nora-pink/40 shadow-sm aspect-[4/5] relative">
                <img
                  src="/assets/Gemini_Generated_Image_zhsyk2zhsyk2zhsy.jpg"
                  alt="Biometrics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Numbered Points */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="border-b border-nora-pink/40 pb-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-nora-burgundy font-semibold">
                BIOLOGICAL INTEGRITY
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-nora-wine font-light mt-0.5">
                The Science of Cutaneous Balance
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {steps.map((s) => (
                <div 
                  key={s.num}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/70 border border-nora-pink/30 hover:bg-white transition-colors"
                >
                  <span className="font-mono text-xs font-bold text-nora-burgundy px-1.5 py-0.5 rounded bg-nora-blush">
                    {s.num}
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="font-sans font-bold text-xs text-nora-wine">
                      {s.title}
                    </h4>
                    <p className="text-[11px] text-nora-dusty leading-tight">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
