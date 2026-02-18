import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Leaf } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-emerald-700 text-white' : 'bg-white text-emerald-800'}`}>
              <Leaf className="w-6 h-6" />
            </div>
            <div className={`font-serif font-bold text-2xl tracking-tight ${isScrolled ? 'text-stone-900' : 'text-white'}`}>
              HJM <span className={isScrolled ? 'text-emerald-700' : 'text-emerald-400'}>Landscaping</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                  isScrolled ? 'text-stone-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+447000000000"
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                isScrolled 
                  ? 'border-emerald-600 text-emerald-700 hover:bg-emerald-50' 
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-semibold">07700 900 000</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg text-stone-400 hover:text-stone-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen 
              ? <X className={`w-6 h-6 ${isScrolled ? 'text-stone-900' : 'text-white'}`} /> 
              : <Menu className={`w-6 h-6 ${isScrolled ? 'text-stone-900' : 'text-white'}`} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-stone-100 shadow-xl p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-stone-700 font-medium p-2 hover:bg-emerald-50 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
              href="tel:+447000000000"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-700 text-white rounded-lg font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
        </div>
      )}
    </header>
  );
};
