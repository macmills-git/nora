import React from 'react';
import { Instagram } from 'lucide-react';
import { ViewMode } from '../types';

interface FooterProps {
  onNavigate: (view: ViewMode) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#520515] text-white">
      {/* 
        Billboard Stage:
        Height reduced and bottom cropped by an additional 30px (h-[calc(100%+55px)]).
      */}
      <div className="relative w-full h-[68vh] min-h-[465px] sm:min-h-[545px] md:min-h-[625px] lg:min-h-[685px] max-h-[725px] flex flex-col justify-between overflow-hidden">
        
        {/* Photographic Background cropped additional 30px at bottom */}
        <img
          src="/assets/Gemini_Generated_Image_6t1wf36t1wf36t1w.jpg"
          alt="NŌRA Sculptural Campaign"
          className="absolute inset-x-0 top-0 w-full h-[calc(100%+55px)] object-cover object-[center_28%] sm:object-[center_30%] select-none"
        />

        {/* Top-Left Action Pills & Trademark Statement */}
        <div className="relative z-10 pt-6 sm:pt-9 md:pt-11 px-6 sm:px-8 lg:px-[30px] max-w-[85%] sm:max-w-md md:max-w-lg space-y-2.5 sm:space-y-3.5 text-left">
          
          {/* Action Pills */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white text-black font-sans text-xs sm:text-[13px] font-semibold hover:bg-white/90 transition-all shadow-md active:scale-95"
            >
              <Instagram className="w-3.5 h-3.5 stroke-[2.2]" />
              <span>@noraskincare</span>
            </a>

            <a
              href="mailto:concierge@noraskincare.com"
              className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white text-black font-sans text-xs sm:text-[13px] font-semibold hover:bg-white/90 transition-all shadow-md active:scale-95"
            >
              Contact us
            </a>
          </div>

          {/* Trademark & Brand Protection Paragraph */}
          <p className="font-sans text-[11px] sm:text-xs md:text-[13px] text-white/95 leading-relaxed font-normal drop-shadow-sm max-w-sm sm:max-w-md">
            The NŌRA skincare line is a registered brand. 'NŌRA' and its distinct product designs are trademarks. All rights reserved. Further registrations and protections are pending worldwide, including the United States, United Kingdom, and the European Union.
          </p>

        </div>

        {/* 
          Massive Bottom Billboard Tagline:
          Grounding headline with ~30px left padding and tuned bottom padding
        */}
        <div className="relative z-10 w-full pl-[30px] pr-6 pb-[14px] sm:pb-[16px] text-left overflow-hidden">
          <h2 className="font-sans font-bold text-[7vw] sm:text-[7.2vw] md:text-[7.5vw] tracking-[-0.035em] text-white leading-[0.9] select-none whitespace-nowrap drop-shadow-md">
            Your skin, understood.
          </h2>
        </div>

      </div>

      {/* Compact Utility Bar */}
      <div className="relative z-10 bg-[#32030c] border-t border-white/10 px-6 sm:px-8 lg:px-[30px] py-3 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/65 font-sans gap-2.5">
        <div>
          © {new Date().getFullYear()} NŌRA Skincare Laboratory Inc. All rights reserved.
        </div>
        <div className="flex items-center gap-5 sm:gap-7">
          <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Overview</button>
          <button onClick={() => onNavigate('store')} className="hover:text-white transition-colors">Collection</button>
          <button onClick={() => onNavigate('science')} className="hover:text-white transition-colors">The Science</button>
        </div>
      </div>
    </footer>
  );
};
