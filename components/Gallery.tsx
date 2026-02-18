import React from 'react';

const projects = [
  { id: 1, img: 'https://picsum.photos/id/28/600/800', category: 'Design' },
  { id: 2, img: 'https://picsum.photos/id/29/800/600', category: 'Paving' },
  { id: 3, img: 'https://picsum.photos/id/48/600/600', category: 'Turfing' },
  { id: 4, img: 'https://picsum.photos/id/56/800/800', category: 'Fencing' },
  { id: 5, img: 'https://picsum.photos/id/75/600/800', category: 'Driveways' },
  { id: 6, img: 'https://picsum.photos/id/88/800/600', category: 'Paving' },
];

export const Gallery: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-2">Our Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">Recent Transformations</h3>
          </div>
          <button className="hidden md:block text-stone-300 hover:text-white transition-colors pb-1 border-b border-stone-700 hover:border-white">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg cursor-pointer h-80">
              <img 
                src={project.img} 
                alt="Landscaping project" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider mb-1">{project.category}</span>
                <h4 className="text-white text-xl font-bold">Project Ref #{project.id + 100}</h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <button className="text-stone-300 hover:text-white transition-colors pb-1 border-b border-stone-700">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};
