import React from 'react';
import { SUSTAINABILITY_CARDS } from '../constants';

export const Sustainability: React.FC = () => {
  return (
    <section id="sustainability" className="py-24 bg-[#eae4e0] dark:bg-[#2a1c15]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Sustainable Impact</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Building with rammed earth isn't just an aesthetic choice—it's a commitment to performance and ecological responsibility.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUSTAINABILITY_CARDS.map((card, index) => (
            <div key={index} className="bg-background-light dark:bg-background-dark p-8 rounded-xl shadow-sm border border-transparent hover:border-primary/20 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined">{card.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};