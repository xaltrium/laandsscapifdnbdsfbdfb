import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/landcaping-team-uk.jpg" 
          alt="HJM Landscaping team" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up">
            <div className="flex text-amber-400">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="text-stone-200 text-sm font-medium tracking-wide">UK's Trusted Landscapers</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 animate-fade-in-up delay-100">
            Crafting Nature <br/>
            <span className="text-emerald-400">Into Luxury.</span>
          </h1>
          
          <p className="text-xl text-stone-200 mb-8 leading-relaxed max-w-lg animate-fade-in-up delay-200">
            HJM Landscaping transforms ordinary outdoor spaces into breathtaking sanctuaries. Specialist paving, decking, and garden design across the UK.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-900/20"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-semibold rounded-lg transition-all flex items-center justify-center"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-white/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};
