import React from 'react';

export const EditorialStatement: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 bg-[#FAF4F6] text-center border-b border-nora-pink/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="inline-block text-[10px] font-mono tracking-[0.25em] uppercase text-nora-dusty font-medium mb-3">
          — NŌRA CLINICAL PHILOSOPHY —
        </div>

        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extralight text-nora-burgundy select-none">
            (
          </span>

          <h2 className="font-sans text-base sm:text-xl lg:text-2xl text-nora-wine font-light tracking-[0.1em] uppercase leading-relaxed max-w-2xl">
            We do not chase perfection. <br className="hidden sm:inline" />
            We understand your skin.
          </h2>

          <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extralight text-nora-burgundy select-none">
            )
          </span>
        </div>

        <p className="font-sans text-xs text-nora-dusty max-w-md mx-auto mt-3 leading-relaxed">
          Biomimetic lipid bilayers designed for diverse skin phototypes and fluctuating climates.
        </p>

      </div>
    </section>
  );
};
