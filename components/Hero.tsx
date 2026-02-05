import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat" 
          aria-label="Cinematic view of a modern rammed earth villa in a desert landscape at sunset" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYu5ZR8qtY6f76ZkXrKEenvdx09lYomvsh-xyD_u6GsUY6Ho_gTW02wxYiMtKvvJ7xJ93LGW5lViWtbuZMAOSyF6YMk0x58gBc2EhMr2T5o3gFNAjlSigu44B1NszshTP0KqF8V_OdlkE9K-_vn9nmZd2U8txqSzn6e_LO3dlYsSNleWAYV16UttpEiuwTZI_elDax3hxrsyyI03JTrQkft8LHn6XzYa3eV1bJdfeTsLYkPiZirs5b2vHSaQqpJkxEZpQ5Ax7wmKnL")' }}
        >
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/60"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <div className="animate-fade-in-up">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight tracking-tight mb-6">
            Ancient Earth,<br /> Modern Living
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-light text-gray-100 mb-10">
            Timeless sustainable architecture for the avant-garde. We craft homes that breathe with the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-[#d64a05] text-white px-8 py-3.5 rounded-lg font-bold text-base transition-all transform hover:scale-105">
              Book a Consultation
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3.5 rounded-lg font-medium text-base transition-all">
              View Projects
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce cursor-pointer" onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="material-symbols-outlined !text-3xl">keyboard_arrow_down</span>
      </div>
    </div>
  );
};