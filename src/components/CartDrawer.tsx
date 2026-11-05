import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Sparkles, Check, Gift, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  isGiftWrapSelected: boolean;
  onToggleGiftWrap: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  isGiftWrapSelected,
  onToggleGiftWrap
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((acc, item) => {
    const itemPrice = item.isSubscription && item.product.subscriptionPrice
      ? item.product.subscriptionPrice
      : item.product.price;
    return acc + itemPrice * item.quantity;
  }, 0);

  const discountRate = appliedPromo === 'NORAGLOW' ? 0.15 : 0;
  const discountAmount = rawSubtotal * discountRate;
  const subtotal = rawSubtotal - discountAmount;
  const freeShippingThreshold = 65;
  const amountUntilFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shipping = subtotal >= freeShippingThreshold || items.length === 0 ? 0 : 8;
  const finalTotal = subtotal + shipping;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'NORAGLOW') {
      setAppliedPromo('NORAGLOW');
      setPromoError(false);
    } else {
      setPromoError(true);
    }
  };

  const handleCheckout = () => {
    setCheckoutSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-nora-wine/50 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-nora-pink/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-nora-burgundy" />
              <h2 className="font-serif text-2xl text-nora-wine font-medium">Your Bag</h2>
              <span className="text-xs bg-nora-pink text-nora-burgundy font-bold px-2 py-0.5 rounded-full ml-1">
                {items.reduce((acc, i) => acc + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-nora-dusty hover:text-nora-wine rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Milestone Bar */}
          <div className="bg-nora-blush/40 px-6 py-3 border-b border-nora-pink/30">
            {amountUntilFreeShipping > 0 ? (
              <p className="text-xs text-nora-wine font-sans">
                Add <span className="font-bold text-nora-burgundy font-mono">${amountUntilFreeShipping.toFixed(2)}</span> more to unlock <span className="font-semibold">Free Worldwide Shipping & Free Mask</span>
              </p>
            ) : (
              <p className="text-xs text-emerald-800 font-sans font-semibold flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-700" />
                <span>You unlocked Free Worldwide Shipping & Free Infusion Mask!</span>
              </p>
            )}
            <div className="w-full bg-nora-pink/60 rounded-full h-1.5 mt-2 overflow-hidden">
              <div 
                className="bg-nora-burgundy h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-nora-blush flex items-center justify-center mx-auto text-nora-dusty">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-nora-wine">Your bag is empty</h3>
                <p className="text-xs text-nora-dusty max-w-xs mx-auto">
                  Discover our dermatological barrier formulas and awaken your cutaneous radiance.
                </p>
              </div>
            ) : (
              items.map((item) => {
                const itemPrice = item.isSubscription && item.product.subscriptionPrice
                  ? item.product.subscriptionPrice
                  : item.product.price;

                return (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-3 rounded-2xl bg-nora-blush/20 border border-nora-pink/40"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-white p-2 shrink-0 flex items-center justify-center border border-nora-pink/30">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="max-h-full object-contain"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between text-left">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="font-serif text-base font-medium text-nora-wine leading-tight">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-nora-dusty hover:text-rose-700 transition-colors p-1"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-[11px] text-nora-dusty font-sans">
                          {item.product.size} {item.isSubscription && '· Auto-Replenish'}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-nora-burgundy/30 rounded-full bg-white px-2 py-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="w-5 h-5 flex items-center justify-center text-xs text-nora-wine hover:text-nora-burgundy font-bold"
                          >
                            -
                          </button>
                          <span className="w-6 text-center text-xs font-mono font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="w-5 h-5 flex items-center justify-center text-xs text-nora-wine hover:text-nora-burgundy font-bold"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-mono text-sm font-bold text-nora-wine">
                          ${(itemPrice * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}

            {/* Complimentary Gift Box Banner */}
            {items.length > 0 && (
              <div 
                onClick={onToggleGiftWrap}
                className="cursor-pointer p-4 rounded-2xl border border-nora-pink/60 bg-nora-blush/30 flex items-center justify-between hover:bg-nora-blush/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-nora-burgundy text-nora-pink">
                    <Gift className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-nora-wine">Artisan Burgundy Gift Box</p>
                    <p className="text-[11px] text-nora-dusty">Wax seal stamping & monogram tissue</p>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                  isGiftWrapSelected ? 'bg-nora-burgundy border-nora-burgundy text-white' : 'border-nora-burgundy/40 bg-white'
                }`}>
                  {isGiftWrapSelected && <Check className="w-3.5 h-3.5" />}
                </div>
              </div>
            )}
          </div>

          {/* Footer & Checkout Box */}
          {items.length > 0 && (
            <div className="p-6 border-t border-nora-pink/40 bg-white space-y-4">
              
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo code (try NORAGLOW)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 text-xs border border-nora-burgundy/20 rounded-full px-4 py-2 focus:outline-none focus:border-nora-burgundy font-mono uppercase placeholder:normal-case placeholder:font-sans"
                />
                <button
                  type="submit"
                  className="bg-nora-blush hover:bg-nora-pink text-nora-burgundy px-4 py-2 rounded-full text-xs font-bold font-sans uppercase tracking-wider transition-colors"
                >
                  Apply
                </button>
              </form>

              {appliedPromo && (
                <div className="text-xs text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg flex items-center justify-between">
                  <span>Code <strong>NORAGLOW</strong> applied (15% Off)</span>
                  <button onClick={() => setAppliedPromo(null)} className="text-[10px] text-emerald-700 underline">Remove</button>
                </div>
              )}
              {promoError && (
                <p className="text-xs text-rose-600">Invalid code. Enter <strong>NORAGLOW</strong> for 15% off.</p>
              )}

              {/* Price Calculation */}
              <div className="space-y-1.5 text-xs font-sans text-nora-wine border-t border-nora-pink/30 pt-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono font-medium">${rawSubtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-nora-burgundy font-semibold">
                    <span>Discount (15%)</span>
                    <span className="font-mono">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Carbon-Neutral Shipping</span>
                  <span className="font-mono font-medium">
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {isGiftWrapSelected && (
                  <div className="flex justify-between text-nora-dusty">
                    <span>Artisan Wax Packaging</span>
                    <span className="font-mono font-semibold text-nora-burgundy">FREE</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold text-nora-wine pt-2 border-t border-nora-pink/30">
                  <span>Total</span>
                  <span className="font-mono text-lg text-nora-burgundy">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full bg-nora-burgundy text-white py-4 rounded-full text-xs font-sans tracking-widest uppercase font-semibold hover:bg-nora-wine transition-all shadow-luxury hover:shadow-luxury-hover flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 text-nora-pink" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-nora-dusty">
                <ShieldCheck className="w-3.5 h-3.5 text-nora-burgundy" />
                <span>256-bit Encrypted Checkout · 30-Day Skin Guarantee</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Simulated Checkout Success Modal */}
      {checkoutSuccess && (
        <div className="fixed inset-0 z-60 bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-8 text-center space-y-4 border border-nora-pink shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-nora-pink flex items-center justify-center mx-auto text-nora-burgundy">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl text-nora-wine">Order Confirmed</h3>
            <p className="text-xs text-nora-dusty font-sans leading-relaxed">
              Thank you for trusting NŌRA with your skin barrier. Your ritual parcel is being hand-stamped in our bespoke burgundy wax seal packaging.
            </p>
            <div className="p-3 rounded-2xl bg-nora-blush/40 text-xs font-mono text-nora-wine">
              Order #NORA-849201 · Tracked Express
            </div>
            <button
              onClick={() => { setCheckoutSuccess(false); onClose(); }}
              className="w-full bg-nora-burgundy text-white py-3 rounded-full text-xs font-sans uppercase font-semibold tracking-wider hover:bg-nora-wine transition-all"
            >
              Continue Exploring
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

