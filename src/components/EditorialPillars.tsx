import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

interface EditorialPillarsProps {
  onSelectProduct: (productId: string) => void;
  products: Product[];
}

export const EditorialPillars: React.FC<EditorialPillarsProps> = ({ onSelectProduct }) => {
  const pillars = [
    {
      num: '( 01 )',
      title: 'Barrier Reconstruction',
      desc: 'Phytoceramides & cloudberry butter.',
      productId: 'ceramide-barrier-cream',
      image: '/assets/Gemini_Generated_Image_wpx3ncwpx3ncwpx3.jpg'
    },
    {
      num: '( 02 )',
      title: 'Berry Radiance',
      desc: 'Lingonberry anthocyanins & hyaluronics.',
      productId: 'berry-radiance-glow-serum',
      image: '/assets/Gemini_Generated_Image_hdj4hqhdj4hqhdj4.jpg'
    },
    {
      num: '( 03 )',
      title: 'Daily Protocol',
      desc: 'Synergistic 3-step morning & night suite.',
      productId: 'core-barrier-ritual-set',
      image: '/assets/nora_tactile_macro_texture_swirl.jpg'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FAF4F6] border-b border-nora-pink/30 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-xl mx-auto mb-8 space-y-1.5">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-nora-burgundy font-semibold">
            CLINICAL PILLARS
          </span>
          <h2 className="font-sans text-xl sm:text-2xl uppercase tracking-[0.12em] text-nora-wine font-medium">
            Our Clinical Directions
          </h2>
          <p className="font-sans text-xs text-nora-dusty max-w-sm mx-auto">
            Targeted protocols engineered to preserve cutaneous barrier equilibrium.
          </p>
        </div>

        {/* Compact 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          {pillars.map((p) => (
            <div
              key={p.num}
              onClick={() => onSelectProduct(p.productId)}
              className="group cursor-pointer rounded-2xl overflow-hidden relative shadow-sm hover:shadow-md border border-nora-pink/40 h-56 sm:h-60 bg-white transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nora-wine/90 via-nora-wine/30 to-transparent flex flex-col justify-between p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-wider text-nora-pink font-semibold">
                    {p.num}
                  </span>
                  <div className="p-1.5 rounded-full bg-white/20 backdrop-blur-md group-hover:bg-nora-burgundy transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                <div>
                  <h3 className="font-sans text-base font-semibold tracking-wide text-white">
                    {p.title}
                  </h3>
                  <p className="text-[11px] text-nora-pink/90 font-sans mt-0.5">
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
