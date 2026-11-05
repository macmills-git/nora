import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, Lock, Mail } from 'lucide-react';
import { UserProfile } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignIn: (user: UserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSignIn }) => {
  const [tab, setTab] = useState<'signin' | 'register'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const displayName = tab === 'signin' ? (email.split('@')[0] || 'Member') : (name || 'Member');
    const initials = displayName
      .split(' ')
      .map(n => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    onSignIn({
      name: displayName,
      email: email || 'concierge@noraskincare.com',
      tier: 'NŌRA Club · VIP Rouge',
      initials: initials || 'VIP'
    });
    onClose();
  };

  const handleDemoSignIn = () => {
    onSignIn({
      name: 'Elena Vance',
      email: 'elena.vance@noraskincare.com',
      tier: 'Barrier Club · VIP Rouge Member',
      initials: 'EV'
    });
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-md w-full bg-[#FAF4F6] rounded-3xl overflow-hidden shadow-2xl border border-nora-pink/50 animate-in zoom-in-95 duration-200 p-6 sm:p-8 text-nora-wine"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/70 hover:bg-white text-nora-wine flex items-center justify-center transition-colors shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Brand Header */}
        <div className="text-center mb-6 space-y-1">
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-nora-burgundy font-semibold">
            NŌRA CLIENT PORTAL
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-nora-wine">
            {tab === 'signin' ? 'Welcome Back' : 'Create Protocol Account'}
          </h3>
          <p className="text-xs text-nora-dusty max-w-xs mx-auto">
            {tab === 'signin'
              ? 'Access your saved barrier prescriptions, orders, and complimentary refill rituals.'
              : 'Join the NŌRA barrier collective for complimentary sample unboxings and priority dispatch.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-white/80 p-1 rounded-full border border-nora-pink/40 mb-6">
          <button
            onClick={() => setTab('signin')}
            className={`flex-1 py-1.5 text-xs font-sans font-medium rounded-full transition-all ${
              tab === 'signin'
                ? 'bg-nora-burgundy text-white shadow-xs font-semibold'
                : 'text-nora-dusty hover:text-nora-wine'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setTab('register')}
            className={`flex-1 py-1.5 text-xs font-sans font-medium rounded-full transition-all ${
              tab === 'register'
                ? 'bg-nora-burgundy text-white shadow-xs font-semibold'
                : 'text-nora-dusty hover:text-nora-wine'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* Quick Demo Sign In Button */}
        <div className="mb-5">
          <button
            onClick={handleDemoSignIn}
            className="w-full bg-white hover:bg-nora-blush/40 border border-nora-pink/80 py-2.5 px-4 rounded-xl text-xs font-sans text-nora-wine font-medium transition-all flex items-center justify-between group shadow-2xs"
          >
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-nora-pink/40 text-nora-burgundy text-[10px] font-bold flex items-center justify-center">
                EV
              </span>
              <span className="text-left">
                <span className="block font-semibold">1-Click VIP Demo</span>
                <span className="text-[10px] text-nora-dusty">Sign in as Elena Vance</span>
              </span>
            </div>
            <Sparkles className="w-3.5 h-3.5 text-nora-burgundy group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="relative flex py-2 items-center mb-5">
          <div className="flex-grow border-t border-nora-pink/40"></div>
          <span className="flex-shrink mx-3 text-[10px] font-mono uppercase text-nora-dusty/80">
            Or with email
          </span>
          <div className="flex-grow border-t border-nora-pink/40"></div>
        </div>

        {/* Standard Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {tab === 'register' && (
            <div>
              <label className="block text-[11px] font-sans font-medium text-nora-wine mb-1 text-left">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Elena Vance"
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-nora-pink/60 text-xs text-nora-wine placeholder:text-nora-dusty/50 focus:outline-none focus:ring-1 focus:ring-nora-burgundy transition-all"
              />
            </div>
          )}

          <div>
            <label className="block text-[11px] font-sans font-medium text-nora-wine mb-1 text-left">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="client@noraskincare.com"
                className="w-full px-3.5 py-2 pl-9 rounded-xl bg-white border border-nora-pink/60 text-xs text-nora-wine placeholder:text-nora-dusty/50 focus:outline-none focus:ring-1 focus:ring-nora-burgundy transition-all"
              />
              <Mail className="w-3.5 h-3.5 text-nora-dusty absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-sans font-medium text-nora-wine mb-1 text-left">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-3.5 py-2 pl-9 rounded-xl bg-white border border-nora-pink/60 text-xs text-nora-wine placeholder:text-nora-dusty/50 focus:outline-none focus:ring-1 focus:ring-nora-burgundy transition-all"
              />
              <Lock className="w-3.5 h-3.5 text-nora-dusty absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-nora-burgundy hover:bg-nora-wine text-white py-2.5 rounded-xl text-xs font-sans tracking-wider uppercase font-semibold transition-all shadow-xs flex items-center justify-center gap-1.5 active:scale-95 mt-2"
          >
            <span>{tab === 'signin' ? 'Sign In to NŌRA' : 'Complete Registration'}</span>
            <ArrowRight className="w-3.5 h-3.5 text-nora-pink" />
          </button>
        </form>

        {/* Benefits Footnote */}
        <div className="mt-5 pt-3 border-t border-nora-pink/30 flex items-center justify-center gap-3 text-[10px] text-nora-dusty">
          <span className="flex items-center gap-1">
            <Check className="w-3 h-3 text-nora-burgundy" /> Encrypted Vault
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Check className="w-3 h-3 text-nora-burgundy" /> Complimentary Refills
          </span>
        </div>

      </div>
    </div>
  );
};

