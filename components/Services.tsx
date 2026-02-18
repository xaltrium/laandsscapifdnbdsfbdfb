import React from 'react';
import { ServiceItem } from '../types';
import { Shovel, Fence, Trees, Ruler, LayoutGrid, Flower2 } from 'lucide-react';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Patios & Paving',
    description: 'Bespoke natural stone, porcelain, and concrete paving solutions designed to extend your living space outdoors.',
    iconName: 'LayoutGrid',
    imageUrl: 'https://picsum.photos/id/124/800/600'
  },
  {
    id: '2',
    title: 'Fencing & Decking',
    description: 'Secure and stylish boundary fencing and timber or composite decking areas for entertaining.',
    iconName: 'Fence',
    imageUrl: 'https://picsum.photos/id/204/800/600'
  },
  {
    id: '3',
    title: 'Turfing & Artificial Grass',
    description: 'Premium rolled lawn turfing or low-maintenance, realistic artificial grass installations.',
    iconName: 'Trees',
    imageUrl: 'https://picsum.photos/id/431/800/600'
  },
  {
    id: '4',
    title: 'Garden Design',
    description: 'Full 3D CAD garden design services to visualize your dream garden before work begins.',
    iconName: 'Ruler',
    imageUrl: 'https://picsum.photos/id/292/800/600'
  },
  {
    id: '5',
    title: 'Driveways',
    description: 'Durable block paving, resin-bound, and gravel driveways that add curb appeal to your home.',
    iconName: 'Shovel',
    imageUrl: 'https://picsum.photos/id/155/800/600'
  },
  {
    id: '6',
    title: 'Planting Schemes',
    description: 'Expert soft landscaping and planting plans tailored to your soil type and light conditions.',
    iconName: 'Flower2',
    imageUrl: 'https://picsum.photos/id/306/800/600'
  }
];

const IconMap: Record<string, React.ElementType> = {
  LayoutGrid, Fence, Trees, Ruler, Shovel, Flower2
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-emerald-700 font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">Comprehensive Landscaping Services</h3>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = IconMap[service.iconName];
            return (
              <div key={service.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-emerald-900/0 transition-colors z-10"></div>
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm z-20">
                    <Icon className="w-6 h-6 text-emerald-700" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-emerald-700 transition-colors">{service.title}</h4>
                  <p className="text-stone-600 leading-relaxed flex-grow">{service.description}</p>
                  <div className="mt-6 pt-6 border-t border-stone-100">
                    <span className="text-sm font-semibold text-emerald-600 group-hover:text-emerald-800 flex items-center gap-1 cursor-pointer">
                      Learn more <span className="text-lg">→</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
