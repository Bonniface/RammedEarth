import React from 'react';
import { PROCESS_STEPS } from '../constants';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Methodology</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Our Process</h3>
          </div>
          <p className="max-w-md text-gray-600 dark:text-gray-300 mt-4 md:mt-0">
            A blend of ancient technique and modern engineering, resulting in walls that tell the story of the land.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step) => (
            <div key={step.id} className="group flex flex-col gap-4">
              <div className="overflow-hidden rounded-xl aspect-[4/3] relative">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  aria-label={step.title}
                  style={{ backgroundImage: `url("${step.imageUrl}")` }}
                >
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 left-4 size-10 bg-white/90 dark:bg-black/80 backdrop-blur flex items-center justify-center rounded-full font-serif font-bold text-lg text-gray-900 dark:text-white">
                  {step.id}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};