import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Menu, X, LogOut } from 'lucide-react';
import { ViewMode, UserProfile } from '../types';

interface NavbarProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode) => void;
  cartCount: number;
  onOpenCart: () => void;
  wishlistCount: number;
  user: UserProfile | null;
  onOpenAuthModal: () => void;
  onSignOut: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  cartCount,
  onOpenCart,
  user,
  onOpenAuthModal,
  onSignOut,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomeTop = currentView === 'home' && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomeTop
          ? 'bg-transparent text-white'
          : 'bg-white/75 backdrop-blur-sm text-nora-wine shadow-[0_2px_15px_rgba(120,20,48,0.06)]'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-14 h-16 flex items-center justify-between">
        
        {/* Left Side: Brand Name NŌRA */}
        <div className="flex items-center">
          <button
            onClick={() => onNavigate('home')}
            className="focus:outline-none group text-left"
          >
            <span className={`font-sans font-extrabold text-xl sm:text-2xl tracking-tight transition-colors ${
              isHomeTop ? 'text-white hover:text-nora-pink drop-shadow-sm' : 'text-nora-wine hover:text-nora-burgundy'
            }`}>
              NŌRA
            </span>
          </button>
        </div>

        {/* Right Side: Links + Actions */}
        <div className="flex items-center gap-6 sm:gap-8">
          
          {/* Desktop Navlinks */}
          <nav className="hidden md:flex items-center gap-7 text-[13px] font-sans">
            <button
              onClick={() => onNavigate('home')}
              className={`transition-colors tracking-wide ${
                currentView === 'home'
                  ? isHomeTop ? 'text-nora-pink font-bold drop-shadow-xs' : 'text-nora-burgundy font-bold'
                  : isHomeTop ? 'text-white hover:text-nora-pink font-medium drop-shadow-xs' : 'text-nora-wine hover:text-nora-burgundy font-semibold'
              }`}
            >
              Overview
            </button>

            <button
              onClick={() => onNavigate('store')}
              className={`transition-colors tracking-wide ${
                currentView === 'store'
                  ? isHomeTop ? 'text-nora-pink font-bold drop-shadow-xs' : 'text-nora-burgundy font-bold'
                  : isHomeTop ? 'text-white hover:text-nora-pink font-medium drop-shadow-xs' : 'text-nora-wine hover:text-nora-burgundy font-semibold'
              }`}
            >
              Collection
            </button>

            <button
              onClick={() => onNavigate('science')}
              className={`transition-colors tracking-wide ${
                currentView === 'science'
                  ? isHomeTop ? 'text-nora-pink font-bold drop-shadow-xs' : 'text-nora-burgundy font-bold'
                  : isHomeTop ? 'text-white hover:text-nora-pink font-medium drop-shadow-xs' : 'text-nora-wine hover:text-nora-burgundy font-semibold'
              }`}
            >
              The Science
            </button>
          </nav>

          {/* Far Right: Auth / Profile + Cart */}
          <div className="flex items-center gap-3">
            
            {/* If not signed in: Deactivated Sign in button. If signed in: show Profile Avatar */}
            {!user ? (
              <button
                disabled
                aria-disabled="true"
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-sans font-medium tracking-wide shadow-xs cursor-not-allowed opacity-60 pointer-events-none select-none ${
                  isHomeTop
                    ? 'bg-white/10 text-white/70 border border-white/20'
                    : 'bg-nora-burgundy/40 text-white/80'
                }`}
                title="Sign in currently deactivated"
              >
                Sign in
              </button>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    isHomeTop
                      ? 'bg-white/15 hover:bg-white/30 text-white border border-white/20'
                      : 'bg-white/60 hover:bg-white text-nora-wine shadow-xs border border-white/40'
                  }`}
                  title={user.name}
                >
                  {user.initials ? (
                    <span className="text-xs font-bold font-sans tracking-tight">
                      {user.initials}
                    </span>
                  ) : (
                    <User className="w-4 h-4 stroke-[2.2]" />
                  )}
                </button>

                {/* Account Popover Menu */}
                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-nora-pink/50 p-4 text-left z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="pb-3 border-b border-nora-pink/30">
                      <div className="font-serif text-base font-medium text-nora-wine truncate">
                        {user.name}
                      </div>
                      <div className="text-[11px] text-nora-dusty truncate">
                        {user.email}
                      </div>
                      {user.tier && (
                        <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full bg-nora-blush text-nora-burgundy text-[9px] font-mono uppercase font-bold tracking-wider">
                          {user.tier}
                        </span>
                      )}
                    </div>

                    <div className="py-2 space-y-1">
                      <button
                        onClick={() => {
                          onNavigate('store');
                          setProfileMenuOpen(false);
                        }}
                        className="w-full text-left px-2 py-1.5 text-xs text-nora-wine hover:bg-nora-blush/40 rounded-lg transition-colors"
                      >
                        My Prescriptions & Vault
                      </button>
                      <button
                        onClick={() => {
                          onNavigate('store');
                          setProfileMenuOpen(false);
                        }}
                        className="w-full text-left px-2 py-1.5 text-xs text-nora-wine hover:bg-nora-blush/40 rounded-lg transition-colors"
                      >
                        Order Ritual History
                      </button>
                    </div>

                    <div className="pt-2 border-t border-nora-pink/30">
                      <button
                        onClick={() => {
                          onSignOut();
                          setProfileMenuOpen(false);
                        }}
                        className="w-full text-left px-2 py-1.5 text-xs font-semibold text-rose-700 hover:bg-rose-50 rounded-lg transition-colors flex items-center justify-between"
                      >
                        <span>Sign out</span>
                        <LogOut className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Shopping Bag Button */}
            <button
              onClick={onOpenCart}
              className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                isHomeTop
                  ? 'bg-white/15 hover:bg-white/30 text-white border border-white/20'
                  : 'bg-white/60 hover:bg-white text-nora-wine shadow-xs border border-white/40'
              }`}
              title="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
              {cartCount > 0 && (
                <span
                  className={`absolute -top-1 -right-1 w-4 h-4 rounded-full text-[10px] font-bold flex items-center justify-center shadow-sm ${
                    isHomeTop ? 'bg-nora-pink text-nora-burgundy' : 'bg-nora-burgundy text-white'
                  }`}
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-1.5 rounded-full transition-colors ${
                isHomeTop ? 'text-white' : 'text-nora-wine hover:bg-white/40'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl px-6 py-6 space-y-4 shadow-xl text-left text-nora-wine border-t border-nora-pink/30">
          <button
            onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
            className="block w-full text-left font-sans font-medium text-base py-2 border-b border-nora-blush"
          >
            Overview
          </button>
          <button
            onClick={() => { onNavigate('store'); setMobileMenuOpen(false); }}
            className="block w-full text-left font-sans font-medium text-base py-2 border-b border-nora-blush"
          >
            Collection
          </button>
          <button
            onClick={() => { onNavigate('science'); setMobileMenuOpen(false); }}
            className="block w-full text-left font-sans font-medium text-base py-2 border-b border-nora-blush"
          >
            The Science
          </button>

          {/* Mobile Auth button (Deactivated) */}
          <div className="pt-2">
            {!user ? (
              <button
                disabled
                aria-disabled="true"
                className="w-full bg-nora-burgundy/40 text-white/70 py-2.5 rounded-xl text-xs font-sans tracking-wider uppercase font-semibold text-center cursor-not-allowed pointer-events-none select-none"
              >
                Sign in
              </button>
            ) : (
              <div className="flex items-center justify-between text-xs py-2">
                <span className="font-semibold">{user.name}</span>
                <button
                  onClick={() => { onSignOut(); setMobileMenuOpen(false); }}
                  className="text-rose-600 font-semibold"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
