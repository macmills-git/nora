import React from 'react';
import { ThumbsUp, ArrowUpRight } from 'lucide-react';

interface EditorialScienceMetricsProps {
  onExploreCollection?: () => void;
}

export const EditorialScienceMetrics: React.FC<EditorialScienceMetricsProps> = ({
  onExploreCollection
}) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF4F6] border-b border-nora-pink/30 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row: Eyebrow on left (col-5), Main heading on right (col-7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8 sm:mb-12">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] font-semibold text-nora-wine">
              ABOUT US
            </span>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-nora-wine font-light leading-[1.18] tracking-tight">
              The role of user experience in modern design
            </h2>
          </div>
        </div>

        {/* Bento Grid: Left Portrait Card + Right Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Vertical Portrait Image Card */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-3xl overflow-hidden bg-[#F2ECE9] border border-nora-pink/40 shadow-[0_4px_25px_rgba(120,20,48,0.04)] relative aspect-[4/5] lg:aspect-auto lg:h-full min-h-[440px] sm:min-h-[500px]">
              <img
                src="/assets/Gemini_Generated_Image_c76ygic76ygic76y.jpg"
                alt="NŌRA Science & Formulation"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nora-wine/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Bento Cards Stack */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            
            {/* Top Card: 4K Happy customers */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-nora-pink/30 shadow-[0_4px_25px_rgba(120,20,48,0.04)] flex flex-col justify-between gap-6">
              <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8">
                <span className="font-sans text-5xl sm:text-6xl font-medium tracking-tight text-nora-wine leading-none shrink-0">
                  4K
                </span>
                <div className="space-y-1.5 pt-0.5">
                  <h3 className="font-sans text-lg sm:text-xl font-semibold text-nora-wine tracking-tight">
                    Happy customers
                  </h3>
                  <p className="text-xs sm:text-sm text-nora-dusty max-w-md leading-relaxed font-sans">
                    We believe that the key to our success lies in understanding our clients.
                  </p>
                </div>
              </div>

              {/* Avatar Stack + Subtitle */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <img
                    src="/assets/Gemini_Generated_Image_3xuoa73xuoa73xuo.jpg"
                    alt="Customer avatar 1"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  />
                  <img
                    src="/assets/Gemini_Generated_Image_zhsyk2zhsyk2zhsy.jpg"
                    alt="Customer avatar 2"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  />
                  <img
                    src="/assets/Gemini_Generated_Image_hdj4hqhdj4hqhdj4.jpg"
                    alt="Customer avatar 3"
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  />
                </div>
                <span className="text-xs font-sans text-nora-wine font-medium">
                  Sustainable creativity, timeless appeal
                </span>
              </div>
            </div>

            {/* Bottom Row: 2 Cards Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
              
              {/* Bottom Left Card: Progress Bars (Strategy 75%, Design 85%, Strategy 75%) */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-nora-pink/30 shadow-[0_4px_25px_rgba(120,20,48,0.04)] flex flex-col justify-center space-y-4">
                
                {/* Metric 1 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-sans font-medium text-nora-wine">
                    <span>Strategy</span>
                    <span className="font-mono text-[11px] font-bold">75%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#FAF4F6] rounded-full overflow-hidden">
                    <div className="h-full bg-nora-wine rounded-full w-[75%]" />
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-sans font-medium text-nora-wine">
                    <span>Design</span>
                    <span className="font-mono text-[11px] font-bold">85%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#FAF4F6] rounded-full overflow-hidden">
                    <div className="h-full bg-nora-wine rounded-full w-[85%]" />
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-sans font-medium text-nora-wine">
                    <span>Strategy</span>
                    <span className="font-mono text-[11px] font-bold">75%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#FAF4F6] rounded-full overflow-hidden">
                    <div className="h-full bg-nora-wine rounded-full w-[75%]" />
                  </div>
                </div>

              </div>

              {/* Bottom Right Card: Customer Satisfaction Rate */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-nora-pink/30 shadow-[0_4px_25px_rgba(120,20,48,0.04)] flex flex-col justify-between">
                <div>
                  <div className="w-7 h-7 flex items-center justify-start text-nora-wine">
                    <ThumbsUp className="w-5 h-5 stroke-[2]" />
                  </div>
                  <p className="text-xs sm:text-sm font-sans font-medium text-nora-wine mt-2.5 leading-snug">
                    Customer satisfaction rate
                  </p>
                </div>
                <div className="pt-4">
                  <span className="font-sans text-5xl sm:text-6xl font-medium tracking-tight text-nora-wine leading-none">
                    95%
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Transition Row (from Image Reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mt-16 sm:mt-20 pt-10 border-t border-nora-pink/30">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-mono uppercase tracking-[0.22em] font-semibold text-nora-wine">
              FEATURED PORTFOLIO
            </span>
          </div>

          <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-nora-wine font-light leading-tight tracking-tight">
              Explore our latest branding <br className="hidden sm:inline" />and design projects
            </h3>
            {onExploreCollection && (
              <button
                onClick={onExploreCollection}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-nora-wine text-white text-xs font-sans font-medium hover:bg-nora-burgundy transition-all self-start sm:self-auto shrink-0 shadow-xs group"
              >
                <span>View more</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

