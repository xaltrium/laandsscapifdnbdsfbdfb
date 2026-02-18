import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    location: 'Chester',
    text: 'HJM transformed our boggy garden into a stunning patio area we can use year-round. The attention to drainage was impressive.',
    rating: 5
  },
  {
    id: '2',
    name: 'David Thorne',
    location: 'Wirral',
    text: 'Professional from start to finish. The team was polite, tidy, and the new fencing looks solid as a rock. Highly recommended.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily & Tom',
    location: 'North Wales',
    text: 'We asked for a low-maintenance garden and the artificial turf they installed is fantastic. The dogs love it too!',
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-emerald-100 fill-current" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-stone-600 mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-stone-900">{t.name}</p>
                <p className="text-sm text-stone-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
