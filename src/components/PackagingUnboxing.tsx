import React, { useState } from 'react';
import { Gift, Check, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface PackagingUnboxingProps {
  onAddGiftWrap?: () => void;
  isGiftWrapSelected: boolean;
  onToggleGiftWrap: () => void;
}

const packagingItems = [
  {
    id: 'keepsake-box',
    title: 'Sliding Keepsake Box',
    subtitle: 'Rigid burgundy drawer box with botanical wax seal',
    image: '/assets/Gemini_Generated_Image_lknbm8lknbm8lknb (1).jpg',
    tag: 'Keepsake Box',
  },
  {
    id: 'gift-bags',
    title: 'Signature Gift Bags',
    subtitle: 'Pale pink paper with burgundy grosgrain handles',
    image: '/assets/Gemini_Generated_Image_lknbm8lknbm8lknb (2).jpg',
    tag: 'Gift Bags',
  },
  {
    id: 'ritual-set',
    title: 'Velvet Ritual Suite',
    subtitle: 'Hinged gift set with custom pink velvet inlay',
    image: '/assets/Gemini_Generated_Image_aezt41aezt41aezt.jpg',
    tag: '3-Piece Set',
  },
  {
    id: 'retail-carton',
    title: 'Embossed Retail Carton',
    subtitle: 'Deep wine soft-touch box with foil embossing',
    image: '/assets/Gemini_Generated_Image_v12gsav12gsav12g.jpg',
    tag: 'Outer Carton',
  },
];

export const PackagingUnboxing: React.FC<PackagingUnboxingProps> = ({
  isGiftWrapSelected,
  onToggleGiftWrap,
}) => {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalIndex !== null) {
      setModalIndex((modalIndex - 1 + packagingItems.length) % packagingItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalIndex !== null) {
      setModalIndex((modalIndex + 1) % packagingItems.length);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FAF4F6] border-y border-nora-pink/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 space-y-2">
          <span className="text-[11px] font-sans tracking-[0.2em] text-nora-burgundy uppercase font-semibold">
            Artisan Packaging
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-nora-wine font-light tracking-tight">
            The Unboxing Ritual
          </h2>
          <p className="font-sans text-xs sm:text-sm text-nora-dusty leading-relaxed">
            Every NŌRA parcel arrives housed in our collectible rigid burgundy drawer box, wrapped in monogrammed tissue paper, and stamped with a botanical wax seal.
          </p>
        </div>

        {/* 4-Image Packaging Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {packagingItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setModalIndex(index)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-nora-pink/40 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-nora-blush/20">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle Hover Gradient & Zoom Indicator */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-nora-wine shadow-sm transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>

                {/* Subtle Tag Badge */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-sans font-medium text-nora-wine border border-nora-pink/40 shadow-2xs">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Minimal Caption Footer */}
              <div className="p-2.5 sm:p-3 text-left bg-white">
                <h3 className="font-sans text-xs font-semibold text-nora-wine leading-tight truncate">
                  {item.title}
                </h3>
                <p className="font-sans text-[11px] text-nora-dusty/80 leading-normal truncate mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Gift Presentation Pill Toggle */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={onToggleGiftWrap}
            className={`py-2 px-5 rounded-full text-xs font-sans tracking-wider uppercase font-semibold inline-flex items-center gap-2 transition-all ${
              isGiftWrapSelected
                ? 'bg-nora-wine text-white shadow-sm ring-2 ring-nora-pink/50'
                : 'bg-white text-nora-burgundy border border-nora-pink/80 hover:bg-nora-pink/20 shadow-xs'
            }`}
          >
            <Gift className="w-3.5 h-3.5 text-nora-burgundy" />
            <span>
              {isGiftWrapSelected
                ? 'Complimentary Gift Packaging Included'
                : 'Complimentary Gift Packaging Included'}
            </span>
            <Check
              className={`w-3.5 h-3.5 transition-transform ${
                isGiftWrapSelected ? 'text-nora-pink scale-100' : 'text-nora-dusty/40 scale-75'
              }`}
            />
          </button>
        </div>

      </div>

      {/* Lightbox Modal for Full View Inspection */}
      {modalIndex !== null && (
        <div
          onClick={() => setModalIndex(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Close Button */}
            <button
              onClick={() => setModalIndex(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-xs transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev/Next Navigation */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-nora-wine flex items-center justify-center shadow-md backdrop-blur-xs transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-nora-wine flex items-center justify-center shadow-md backdrop-blur-xs transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="aspect-[4/5] bg-nora-blush/20 overflow-hidden">
              <img
                src={packagingItems[modalIndex].image}
                alt={packagingItems[modalIndex].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Micro Caption */}
            <div className="p-4 bg-white text-center">
              <span className="text-[10px] font-sans tracking-widest text-nora-burgundy uppercase font-semibold">
                {packagingItems[modalIndex].tag}
              </span>
              <h4 className="font-serif text-lg text-nora-wine font-light mt-0.5">
                {packagingItems[modalIndex].title}
              </h4>
              <p className="font-sans text-xs text-nora-dusty mt-1">
                {packagingItems[modalIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
