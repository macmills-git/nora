import React from 'react';

export const EditorialHero: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen min-h-[580px] overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 50% 15%, #471820 0%, #3e1018 45%, #340c14 100%)',
      }}
    >
      {/* 16:9 Widescreen Campaign Hero Background */}
      <img
        src="/assets/Gemini_Generated_Image_wodz6dwodz6dwodz.jpg"
        alt="NŌRA Luxury Campaign Hero"
        className="w-full h-full object-cover object-[center_25%] sm:object-center transform scale-90 translate-y-5"
        style={{
          WebkitMaskImage:
            'radial-gradient(ellipse 95% 95% at 50% 50%, black 86%, transparent 100%)',
          maskImage:
            'radial-gradient(ellipse 95% 95% at 50% 50%, black 86%, transparent 100%)',
        }}
      />

      {/* Atmospheric Transitional Overlay at Base */}
      <div
        className="absolute inset-x-0 bottom-0 h-28 sm:h-40 md:h-48 lg:h-56 pointer-events-none select-none z-10"
        style={{
          background:
            'linear-gradient(to top, #FAF4F6 0%, rgba(250, 244, 246, 0.85) 20%, rgba(250, 244, 246, 0.35) 50%, transparent 100%)',
        }}
      />
    </section>
  );
};
