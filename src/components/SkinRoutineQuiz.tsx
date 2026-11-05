import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, RotateCcw, Droplets, Sun, Shield, Award } from 'lucide-react';
import { Product } from '../types';

interface SkinRoutineQuizProps {
  products: Product[];
  onAddToCart: (product: Product, quantity?: number) => void;
  onSelectProduct: (productId: string) => void;
}

export const SkinRoutineQuiz: React.FC<SkinRoutineQuizProps> = ({
  products,
  onAddToCart,
  onSelectProduct
}) => {
  const [step, setStep] = useState<number>(1);
  const [skinType, setSkinType] = useState<string>('dry');
  const [climate, setClimate] = useState<string>('arid');
  const [goal, setGoal] = useState<string>('barrier');
  const [completed, setCompleted] = useState<boolean>(false);
  const [bundleAdded, setBundleAdded] = useState<boolean>(false);

  const handleFinish = () => {
    setCompleted(true);
  };

  const handleReset = () => {
    setStep(1);
    setCompleted(false);
    setBundleAdded(false);
  };

  // Determine recommended bundle based on selections
  const getRecommendation = () => {
    const cleanser = products.find(p => p.id === 'gentle-barrier-cleanser')!;
    const serum = products.find(p => p.id === 'berry-radiance-glow-serum')!;
    const cream = products.find(p => p.id === 'ceramide-barrier-cream')!;
    const tube = products.find(p => p.id === 'hydrating-melt-cream')!;

    if (climate === 'humid') {
      return {
        title: 'Lightweight Barrier Equilibrium Protocol',
        description: 'Engineered for high humidity and tropical moisture. Balances oil while maintaining lipid bilayers.',
        items: [cleanser, serum, tube],
        totalPrice: 118,
        discountedPrice: 94
      };
    }

    return {
      title: 'Deep Lipid Cellular Restoration Protocol',
      description: 'Formulated for cold, arid heating, and compromised skin barrier matrices.',
      items: [cleanser, serum, cream],
      totalPrice: 122,
      discountedPrice: 98
    };
  };

  const recommendation = getRecommendation();

  const handleAddBundle = () => {
    recommendation.items.forEach(item => onAddToCart(item, 1));
    setBundleAdded(true);
    setTimeout(() => setBundleAdded(false), 3000);
  };

  return (
    <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      
      {/* Quiz Card */}
      <div className="bg-white rounded-3xl border border-nora-pink/50 p-8 sm:p-14 shadow-luxury relative overflow-hidden">
        
        {/* Progress Dots */}
        {!completed && (
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-nora-pink/30">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-nora-burgundy uppercase tracking-widest">
                Question {step} of 3
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-2 rounded-full transition-all ${
                    s === step 
                      ? 'w-8 bg-nora-burgundy' 
                      : s < step 
                        ? 'w-3 bg-nora-pink' 
                        : 'w-2 bg-nora-blush'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {!completed ? (
          <div>
            {/* Step 1: Skin Type */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono tracking-widest uppercase text-nora-burgundy font-semibold">
                    Step 1 · Cutaneous Barrier State
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-nora-wine font-light">
                    How does your skin feel 2 hours after cleansing?
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    { id: 'dry', title: 'Tight, Dry or Flaky', desc: 'Prone to seasonal irritation and moisture loss' },
                    { id: 'reactive', title: 'Red, Sensitive or Stinging', desc: 'Compromised acid mantle needing soothing repair' },
                    { id: 'combo', title: 'T-Zone Shine & Dry Cheeks', desc: 'Mixed lipid zones needing targeted calibration' },
                    { id: 'oily', title: 'Excess Sebum & Congestion', desc: 'Enlarged pores requiring gentle non-pore-clogging hydration' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSkinType(opt.id)}
                      className={`p-5 rounded-2xl border text-left transition-all ${
                        skinType === opt.id
                          ? 'border-nora-burgundy bg-nora-blush/40 ring-1 ring-nora-burgundy/40 shadow-sm'
                          : 'border-nora-pink/40 hover:border-nora-burgundy/40 bg-white'
                      }`}
                    >
                      <h3 className="font-sans font-bold text-sm text-nora-wine">{opt.title}</h3>
                      <p className="text-xs text-nora-dusty mt-1 font-sans">{opt.desc}</p>
                    </button>
                  ))}
                </div>

                <div className="pt-6 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-2 bg-nora-burgundy text-white px-8 py-3.5 rounded-full text-xs font-sans tracking-widest uppercase font-semibold hover:bg-nora-wine transition-all"
                  >
                    <span>Next: Climate Stressors</span>
                    <ArrowRight className="w-4 h-4 text-nora-pink" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Climate */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono tracking-widest uppercase text-nora-burgundy font-semibold">
                    Step 2 · Environmental Ecosystem
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-nora-wine font-light">
                    What climate environment does your skin live in?
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    { id: 'arid', title: 'Arid, Cold & Indoor Heating', desc: 'Accelerates trans-epidermal water loss (TEWL)' },
                    { id: 'humid', title: 'Tropical, High Humidity & Heat', desc: 'High sweat and sebum production with clogged pores' },
                    { id: 'urban', title: 'Dense Urban & High Pollution', desc: 'Free radical oxidative stress requiring antioxidant shield' },
                    { id: 'temperate', title: 'Temperate / Seasonal Transitions', desc: 'Shifting seasons requiring flexible routine layering' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setClimate(opt.id)}
                      className={`p-5 rounded-2xl border text-left transition-all ${
                        climate === opt.id
                          ? 'border-nora-burgundy bg-nora-blush/40 ring-1 ring-nora-burgundy/40 shadow-sm'
                          : 'border-nora-pink/40 hover:border-nora-burgundy/40 bg-white'
                      }`}
                    >
                      <h3 className="font-sans font-bold text-sm text-nora-wine">{opt.title}</h3>
                      <p className="text-xs text-nora-dusty mt-1 font-sans">{opt.desc}</p>
                    </button>
                  ))}
                </div>

                <div className="pt-6 flex items-center justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs font-sans text-nora-dusty hover:text-nora-burgundy font-semibold"
                  >
                    ← Previous Step
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 bg-nora-burgundy text-white px-8 py-3.5 rounded-full text-xs font-sans tracking-widest uppercase font-semibold hover:bg-nora-wine transition-all"
                  >
                    <span>Next: Primary Goal</span>
                    <ArrowRight className="w-4 h-4 text-nora-pink" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Goal */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-mono tracking-widest uppercase text-nora-burgundy font-semibold">
                    Step 3 · Clinical Priority
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-nora-wine font-light">
                    What is your number one priority for your skin?
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {[
                    { id: 'barrier', title: 'Repair Compromised Moisture Barrier', desc: 'Eliminate tightness, flaking, and redness permanently' },
                    { id: 'radiance', title: 'Lit-From-Within Glass Skin Radiance', desc: 'Revitalize dullness with concentrated berry antioxidants' },
                    { id: 'texture', title: 'Smooth Irregular Texture & Refine Pores', desc: 'Gentle fruit enzyme renewal without mechanical abrasion' },
                    { id: 'shield', title: 'Daily Mineral Defense & Anti-Aging', desc: 'Fortify against UV, blue light, and environmental degradation' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setGoal(opt.id)}
                      className={`p-5 rounded-2xl border text-left transition-all ${
                        goal === opt.id
                          ? 'border-nora-burgundy bg-nora-blush/40 ring-1 ring-nora-burgundy/40 shadow-sm'
                          : 'border-nora-pink/40 hover:border-nora-burgundy/40 bg-white'
                      }`}
                    >
                      <h3 className="font-sans font-bold text-sm text-nora-wine">{opt.title}</h3>
                      <p className="text-xs text-nora-dusty mt-1 font-sans">{opt.desc}</p>
                    </button>
                  ))}
                </div>

                <div className="pt-6 flex items-center justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="text-xs font-sans text-nora-dusty hover:text-nora-burgundy font-semibold"
                  >
                    ← Previous Step
                  </button>
                  <button
                    onClick={handleFinish}
                    className="inline-flex items-center gap-2 bg-nora-burgundy text-white px-8 py-3.5 rounded-full text-xs font-sans tracking-widest uppercase font-semibold hover:bg-nora-wine transition-all shadow-luxury"
                  >
                    <span>Generate Prescription</span>
                    <Sparkles className="w-4 h-4 text-nora-pink" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Recommendation Output Screen */
          <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-nora-pink/40 gap-4">
              <div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-nora-burgundy font-semibold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-nora-burgundy" />
                  <span>Clinical Prescription Generated</span>
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-nora-wine font-light mt-1">
                  {recommendation.title}
                </h2>
                <p className="text-xs sm:text-sm text-nora-dusty font-sans mt-1">
                  {recommendation.description}
                </p>
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-nora-dusty hover:text-nora-burgundy font-semibold"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            </div>

            {/* Prescribed Items Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {recommendation.items.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => onSelectProduct(item.id)}
                  className="bg-nora-blush/20 rounded-2xl p-4 border border-nora-pink/50 cursor-pointer hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-white mb-3 flex items-center justify-center p-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full object-contain"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-nora-burgundy font-bold">
                      STEP 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-base text-nora-wine font-medium leading-snug">
                      {item.name}
                    </h3>
                    <p className="font-mono text-xs text-nora-dusty font-bold">
                      ${item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bundle Checkout Card */}
            <div className="rounded-2xl bg-nora-wine text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-left">
                <span className="text-xs font-mono uppercase tracking-widest text-nora-pink font-semibold">
                  Personalized 3-Step Protocol Bundle
                </span>
                <h4 className="font-serif text-2xl text-white font-normal">
                  Restores Cutaneous Matrix in 7 Days
                </h4>
                <div className="flex items-baseline gap-3 pt-1">
                  <span className="font-mono text-2xl font-bold text-white">
                    ${recommendation.discountedPrice}
                  </span>
                  <span className="line-through text-sm font-mono text-white/50">
                    ${recommendation.totalPrice}
                  </span>
                  <span className="text-xs bg-nora-pink text-nora-burgundy font-bold px-2 py-0.5 rounded-full">
                    Bundle & Save 20%
                  </span>
                </div>
              </div>

              <button
                onClick={handleAddBundle}
                className="w-full sm:w-auto bg-nora-pink text-nora-burgundy px-8 py-4 rounded-full font-sans text-xs tracking-widest uppercase font-bold hover:bg-white transition-all shadow-luxury active:scale-95 flex items-center justify-center gap-2"
              >
                {bundleAdded ? (
                  <>
                    <Check className="w-4 h-4 text-nora-burgundy" />
                    <span>Bundle Added to Bag</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-nora-burgundy" />
                    <span>Add Complete Protocol to Bag</span>
                  </>
                )}
              </button>
            </div>

          </div>
        )}

      </div>

    </section>
  );
};

