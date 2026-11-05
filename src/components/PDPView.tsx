import React, { useState } from 'react';
import { 
  Star, 
  ShoppingBag, 
  Heart, 
  ChevronRight, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  RefreshCw, 
  ArrowLeft, 
  ArrowRight,
  Truck,
  Leaf
} from 'lucide-react';
import { Product } from '../types';

interface PDPViewProps {
  product: Product;
  allProducts: Product[];
  onSelectProduct: (productId: string) => void;
  onAddToCart: (product: Product, quantity: number, isSubscription?: boolean) => void;
  onBackToStore: () => void;
}

export const PDPView: React.FC<PDPViewProps> = ({
  product,
  allProducts,
  onSelectProduct,
  onAddToCart,
  onBackToStore
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [isSubscription, setIsSubscription] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'how' | 'benefits' | 'ingredients' | 'sustainability'>('how');
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  const [addedNotice, setAddedNotice] = useState<boolean>(false);

  // Recommendations: exclude current product
  const recommendations = allProducts
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const priceToUse = isSubscription && product.subscriptionPrice 
    ? product.subscriptionPrice 
    : product.price;

  const handleAdd = () => {
    onAddToCart(product, quantity, isSubscription);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      
      {/* Breadcrumb Path (Reference Screenshot 131114) */}
      <nav className="flex items-center gap-2 text-xs font-sans text-nora-dusty mb-8">
        <button onClick={onBackToStore} className="hover:text-nora-burgundy transition-colors">
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button onClick={onBackToStore} className="hover:text-nora-burgundy transition-colors">
          Shop
        </button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-nora-burgundy font-semibold truncate max-w-xs sm:max-w-none">
          {product.name}
        </span>
      </nav>

      {/* Main PDP Grid (Left: Gallery, Right: Buy Box) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
        
        {/* Left Side: Product Gallery (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Main Stage Image */}
          <div className="relative rounded-3xl bg-white border border-nora-pink/50 p-8 sm:p-12 shadow-luxury flex items-center justify-center min-h-[440px] sm:min-h-[520px] overflow-hidden group">
            
            {product.tag && (
              <span className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider bg-nora-pink text-nora-burgundy border border-nora-burgundy/20 shadow-sm z-10">
                {product.tag}
              </span>
            )}

            <img
              src={selectedImage}
              alt={product.name}
              className="max-h-[460px] max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
            />

            <div className="absolute bottom-4 right-4 text-[10px] font-mono tracking-widest text-nora-dusty/80 bg-white/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
              STUDIO CAPTURE · 4K HIGH RES
            </div>
          </div>

          {/* Thumbnail Gallery Row */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {product.gallery.map((imgUrl, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(imgUrl)}
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-white border p-2 shrink-0 transition-all ${
                  selectedImage === imgUrl
                    ? 'border-nora-burgundy ring-2 ring-nora-burgundy/30 scale-95 shadow-sm'
                    : 'border-nora-pink/40 hover:border-nora-burgundy/50 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={imgUrl}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </button>
            ))}
          </div>

        </div>

        {/* Right Side: Product Details & Purchase Panel (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="space-y-2 border-b border-nora-pink/40 pb-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono tracking-widest uppercase text-nora-burgundy font-semibold">
                NŌRA DERMATOLOGY
              </span>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-xs font-mono font-bold text-nora-wine ml-1">{product.rating}</span>
                <span className="text-xs text-nora-dusty">({product.reviewCount})</span>
              </div>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-nora-wine font-light leading-tight">
              {product.name}
            </h1>

            <p className="text-xs sm:text-sm text-nora-dusty font-sans">
              {product.subtitle} · <span className="font-medium text-nora-wine">{product.size}</span>
            </p>

            {/* Price Presentation */}
            <div className="pt-2 flex items-baseline gap-3">
              <span className="font-mono text-3xl font-bold text-nora-wine">
                ${priceToUse.toFixed(2)}
              </span>
              {isSubscription && (
                <span className="line-through text-base font-mono text-nora-dusty">
                  ${product.price.toFixed(2)}
                </span>
              )}
              <span className="text-xs text-nora-dusty font-sans">
                or 4 interest-free payments of ${(priceToUse / 4).toFixed(2)}
              </span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-nora-blush/60 text-[11px] font-sans text-nora-wine font-medium mt-2">
              <Sparkles className="w-3.5 h-3.5 text-nora-burgundy" />
              <span>94 skincare enthusiasts ordered this formula this week</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-nora-wine/90 font-sans leading-relaxed">
            {product.description}
          </p>

          {/* Purchase Option Radio Selector (Reference Screenshot 131114) */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-nora-wine block">
              Purchase Preference
            </span>

            {/* One Time Purchase */}
            <label
              onClick={() => setIsSubscription(false)}
              className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                !isSubscription
                  ? 'border-nora-burgundy bg-white shadow-sm ring-1 ring-nora-burgundy/20'
                  : 'border-nora-pink/50 bg-white/60 hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="purchase_type"
                  checked={!isSubscription}
                  onChange={() => setIsSubscription(false)}
                  className="accent-nora-burgundy w-4 h-4"
                />
                <span className="text-xs sm:text-sm font-sans font-medium text-nora-wine">
                  One-time purchase
                </span>
              </div>
              <span className="font-mono text-sm font-bold text-nora-wine">
                ${product.price.toFixed(2)}
              </span>
            </label>

            {/* Subscription */}
            {product.subscriptionPrice && (
              <label
                onClick={() => setIsSubscription(true)}
                className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                  isSubscription
                    ? 'border-nora-burgundy bg-white shadow-sm ring-1 ring-nora-burgundy/20'
                    : 'border-nora-pink/50 bg-white/60 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="purchase_type"
                    checked={isSubscription}
                    onChange={() => setIsSubscription(true)}
                    className="accent-nora-burgundy w-4 h-4"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-sans font-medium text-nora-wine">
                        Auto-Replenish (Every 30 Days)
                      </span>
                      <span className="text-[10px] bg-nora-pink text-nora-burgundy px-2 py-0.5 rounded-full font-bold">
                        Save 20%
                      </span>
                    </div>
                    <span className="text-[11px] text-nora-dusty block">
                      Cancel or pause anytime. Complimentary travel gift included.
                    </span>
                  </div>
                </div>
                <span className="font-mono text-sm font-bold text-nora-burgundy">
                  ${product.subscriptionPrice.toFixed(2)}
                </span>
              </label>
            )}
          </div>

          {/* Quantity and Actions */}
          <div className="space-y-3 pt-3">
            <div className="flex items-center gap-4">
              {/* Stepper */}
              <div className="flex items-center border border-nora-burgundy/30 rounded-full bg-white px-3 py-2 shadow-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-6 h-6 flex items-center justify-center text-nora-wine hover:text-nora-burgundy font-bold text-sm"
                >
                  -
                </button>
                <span className="w-8 text-center font-mono text-sm font-semibold text-nora-wine">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-6 h-6 flex items-center justify-center text-nora-wine hover:text-nora-burgundy font-bold text-sm"
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAdd}
                className="flex-1 bg-nora-burgundy text-white py-3.5 px-6 rounded-full text-xs font-sans tracking-widest uppercase font-semibold hover:bg-nora-wine transition-all shadow-luxury hover:shadow-luxury-hover flex items-center justify-center gap-2 active:scale-98"
              >
                {addedNotice ? (
                  <>
                    <Check className="w-4 h-4 text-nora-pink" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-nora-pink" />
                    <span>Add to Bag · ${(priceToUse * quantity).toFixed(2)}</span>
                  </>
                )}
              </button>

              {/* Wishlist Heart */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-3.5 rounded-full border transition-all ${
                  isWishlisted 
                    ? 'bg-nora-pink border-nora-burgundy text-nora-burgundy' 
                    : 'bg-white border-nora-burgundy/30 text-nora-dusty hover:text-nora-burgundy'
                }`}
                title="Save to Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          {/* Tabbed Information (Reference Screenshot 131114) */}
          <div className="pt-6 border-t border-nora-pink/40 space-y-4">
            {/* Tab Headers */}
            <div className="flex border-b border-nora-pink/40 gap-4 text-xs font-sans tracking-wider uppercase font-semibold">
              <button
                onClick={() => setActiveTab('how')}
                className={`pb-2 transition-colors relative ${
                  activeTab === 'how'
                    ? 'text-nora-burgundy after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-nora-burgundy'
                    : 'text-nora-dusty hover:text-nora-wine'
                }`}
              >
                How to Use
              </button>
              <button
                onClick={() => setActiveTab('benefits')}
                className={`pb-2 transition-colors relative ${
                  activeTab === 'benefits'
                    ? 'text-nora-burgundy after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-nora-burgundy'
                    : 'text-nora-dusty hover:text-nora-wine'
                }`}
              >
                Clinical Benefits
              </button>
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`pb-2 transition-colors relative ${
                  activeTab === 'ingredients'
                    ? 'text-nora-burgundy after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-nora-burgundy'
                    : 'text-nora-dusty hover:text-nora-wine'
                }`}
              >
                Ingredients
              </button>
              <button
                onClick={() => setActiveTab('sustainability')}
                className={`pb-2 transition-colors relative ${
                  activeTab === 'sustainability'
                    ? 'text-nora-burgundy after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-nora-burgundy'
                    : 'text-nora-dusty hover:text-nora-wine'
                }`}
              >
                Packaging
              </button>
            </div>

            {/* Tab Content */}
            <div className="text-xs sm:text-sm text-nora-wine/80 font-sans leading-relaxed min-h-[90px]">
              {activeTab === 'how' && (
                <div className="space-y-2">
                  <p>{product.howToUse}</p>
                  <p className="text-xs text-nora-dusty italic">
                    Pro-tip: For compromised seasonal skin, apply onto damp skin directly following your treatment essence.
                  </p>
                </div>
              )}

              {activeTab === 'benefits' && (
                <ul className="space-y-1.5 list-disc list-inside">
                  {product.benefits.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              )}

              {activeTab === 'ingredients' && (
                <div className="space-y-2">
                  <p className="font-mono text-xs text-nora-dusty leading-relaxed">
                    {product.ingredients}
                  </p>
                  <span className="text-[11px] text-nora-burgundy font-medium block">
                    Formulated without parabens, sulfates, synthetic fragrances, or silicones.
                  </span>
                </div>
              )}

              {activeTab === 'sustainability' && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-nora-wine">
                    <Leaf className="w-4 h-4 text-emerald-700" />
                    <span>Heavy-bottom recyclable frosted glass + FSC certified gift carton.</span>
                  </div>
                  <div className="flex items-center gap-2 text-nora-wine">
                    <Truck className="w-4 h-4 text-nora-burgundy" />
                    <span>Carbon-neutral delivery worldwide with sealed wax stamping.</span>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>

      {/* "You Might Also Like" Carousel (Reference Screenshot 131114) */}
      <div className="mt-24 pt-12 border-t border-nora-pink/40">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-nora-wine font-light">
              You might also like
            </h2>
            <p className="text-xs text-nora-dusty font-sans mt-1">
              Curated companions to elevate your daily barrier ritual
            </p>
          </div>
          <button
            onClick={onBackToStore}
            className="text-xs font-sans tracking-wider uppercase font-semibold text-nora-burgundy underline underline-offset-4 hover:text-nora-wine"
          >
            More products →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              onClick={() => {
                onSelectProduct(rec.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl border border-nora-pink/40 p-5 group cursor-pointer hover:shadow-luxury hover:-translate-y-1 transition-all"
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-nora-blush/20 mb-4 flex items-center justify-center p-3">
                <img
                  src={rec.image}
                  alt={rec.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <h3 className="font-serif text-lg text-nora-wine font-medium group-hover:text-nora-burgundy transition-colors truncate">
                {rec.name}
              </h3>
              <div className="flex items-center justify-between mt-1 text-xs">
                <span className="font-mono font-bold text-nora-wine">${rec.price}</span>
                <span className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-nora-wine font-mono">{rec.rating}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

