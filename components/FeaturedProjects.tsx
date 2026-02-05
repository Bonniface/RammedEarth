import React from 'react';
import { PROJECTS } from '../constants';

export const FeaturedProjects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
          <a href="#" className="hidden md:flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all">
            View all projects <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className={`group relative rounded-xl overflow-hidden ${project.size === 'large' ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                aria-label={project.title}
                style={{ backgroundImage: `url("${project.imageUrl}")` }}
              >
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
              
              <div className={`absolute bottom-0 left-0 w-full ${project.size === 'large' ? 'p-8' : 'p-6'}`}>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-primary text-xs md:text-sm font-bold uppercase tracking-wider mb-1 md:mb-2">{project.location}</p>
                    <h3 className={`text-white font-serif ${project.size === 'large' ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                      {project.title}
                    </h3>
                  </div>
                  {project.size === 'large' && (
                    <button className="bg-white text-black size-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                      <span className="material-symbols-outlined">arrow_outward</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
            <a href="#" className="inline-flex items-center gap-2 text-primary font-bold">
                View all projects <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
        </div>
      </div>
    </section>
  );
};