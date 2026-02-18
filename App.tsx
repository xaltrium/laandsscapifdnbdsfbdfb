import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { LeadForm } from './components/LeadForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <Header />
      
      <main>
        <Hero />
        
        <Services />
        
        {/* Contact/Lead Section - High Priority, so higher up than footer */}
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
          {/* Decorative Pattern Background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
             <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-500 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              
              {/* Text Side */}
              <div>
                <h2 className="text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-2">Contact Us</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">Let's Discuss Your Dream Garden</h3>
                <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                  Ready to transform your outdoor space? Fill out the form to get a free, no-obligation quote. 
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 rounded-lg text-emerald-700">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">Free Consultation</h4>
                      <p className="text-stone-600">We visit your property to understand your vision.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 rounded-lg text-emerald-700">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">Fast Turnaround</h4>
                      <p className="text-stone-600">Detailed quotes provided within 48 hours of visit.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 rounded-lg text-emerald-700">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">AI Project Tips</h4>
                      <p className="text-stone-600">Get an instant, personalized professional tip when you inquire.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="relative">
                 {/* Decorative offset border */}
                <div className="absolute -inset-4 border-2 border-emerald-200 rounded-2xl hidden md:block"></div>
                <div className="relative z-10">
                  <LeadForm />
                </div>
              </div>

            </div>
          </div>
        </section>

        <Gallery />

        <Testimonials />
        
      </main>

      <Footer />
    </div>
  );
}

export default App;
