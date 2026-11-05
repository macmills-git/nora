import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import { products } from './data/products';
import { Product, CartItem, ViewMode, UserProfile } from './types';

import { Navbar } from './components/Navbar';
import { EditorialHero } from './components/EditorialHero';
import { EditorialStatement } from './components/EditorialStatement';
import { EditorialStepGrid } from './components/EditorialStepGrid';
import { EditorialScienceMetrics } from './components/EditorialScienceMetrics';
import { EditorialPillars } from './components/EditorialPillars';
import { PolaroidBanner } from './components/PolaroidBanner';
import { StoreGrid } from './components/StoreGrid';
import { PackagingUnboxing } from './components/PackagingUnboxing';
import { PDPView } from './components/PDPView';
import { CartDrawer } from './components/CartDrawer';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';

export function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('ceramide-barrier-cream');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: products[0], // Ceramide Barrier Cream
      quantity: 1,
      isSubscription: false
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isGiftWrapSelected, setIsGiftWrapSelected] = useState<boolean>(true);
  const [wishlistCount, setWishlistCount] = useState<number>(2);

  // Authentication State (Unauthenticated by default)
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleNavigate = (view: ViewMode) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentView('pdp');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product, quantity = 1, isSubscription = false) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id && item.isSubscription === isSubscription);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id && item.isSubscription === isSubscription
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, isSubscription }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const selectedProduct = products.find(p => p.id === selectedProductId) || products[0];
  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAF4F6] text-nora-wine antialiased selection:bg-nora-pink selection:text-nora-burgundy">
      
      {/* Sticky Header with Dynamic Sign In / Profile Switcher */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        wishlistCount={wishlistCount}
        user={user}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onSignOut={() => setUser(null)}
      />

      {/* Main View Switcher */}
      <main className={`flex-1 ${currentView !== 'home' ? 'pt-20' : ''}`}>
        {currentView === 'home' && (
          <>
            {/* 1. Exact Reference 1 Top: "Skin —— understood." Editorial Hero */}
            <EditorialHero />

            {/* 2. Exact Reference 1 Section 2: Parenthetical Philosophy Statement */}
            <EditorialStatement />

            {/* 3. Exact Reference 1 Section 3: Asymmetrical Photo Grid + Points /01 - /06 */}
            <EditorialStepGrid />

            {/* 4. Panoramic Polaroid Banner (replaces Clinical Pillars on Landing) */}
            <PolaroidBanner
              onExploreCollection={() => {
                handleNavigate('store');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 5. Signature Collection (Landing: 2 Rows) */}
            <StoreGrid
              products={products}
              onSelectProduct={handleSelectProduct}
              onAddToCart={handleAddToCart}
              isLandingPage={true}
              onSeeCollection={() => {
                handleNavigate('store');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 6. Luxury Packaging & Unboxing Suite (Drawer Box + Wax Seal) */}
            <PackagingUnboxing
              isGiftWrapSelected={isGiftWrapSelected}
              onToggleGiftWrap={() => setIsGiftWrapSelected(!isGiftWrapSelected)}
            />
          </>
        )}

        {currentView === 'store' && (
          <StoreGrid
            products={products}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            isLandingPage={false}
          />
        )}

        {currentView === 'pdp' && (
          <PDPView
            product={selectedProduct}
            allProducts={products}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onBackToStore={() => handleNavigate('store')}
          />
        )}

        {currentView === 'science' && (
          <div className="pb-16">
            <EditorialStatement />
            <EditorialStepGrid />
            <EditorialScienceMetrics
              onExploreCollection={() => {
                handleNavigate('store');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <EditorialPillars
              onSelectProduct={handleSelectProduct}
              products={products}
            />
          </div>
        )}
      </main>

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        isGiftWrapSelected={isGiftWrapSelected}
        onToggleGiftWrap={() => setIsGiftWrapSelected(!isGiftWrapSelected)}
      />

      {/* Client Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSignIn={(loggedInUser) => setUser(loggedInUser)}
      />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}

export default App;
