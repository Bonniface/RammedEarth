import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark text-[#f3ebe7] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info */}
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              Let's build something <span className="text-primary">timeless</span>.
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md">
              Discuss your vision with our architects. Whether it's a residential villa or a commercial landmark, we bring the earth to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 text-sm text-gray-400 mb-12">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span>hello@rammedearth.co</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">call</span>
                <span>+1 (555) 012-3456</span>
              </div>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">Pinterest</a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10 backdrop-blur-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">First Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane" 
                    className="w-full bg-transparent border-b border-gray-600 focus:border-primary px-0 py-2 outline-none transition-colors placeholder-gray-700 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe" 
                    className="w-full bg-transparent border-b border-gray-600 focus:border-primary px-0 py-2 outline-none transition-colors placeholder-gray-700 text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                <input 
                  type="email" 
                  placeholder="jane@example.com" 
                  className="w-full bg-transparent border-b border-gray-600 focus:border-primary px-0 py-2 outline-none transition-colors placeholder-gray-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Project Type</label>
                <select className="w-full bg-transparent border-b border-gray-600 focus:border-primary px-0 py-2 outline-none transition-colors text-gray-400">
                  <option className="bg-background-dark">Residential</option>
                  <option className="bg-background-dark">Commercial</option>
                  <option className="bg-background-dark">Landscape</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Message</label>
                <textarea 
                  placeholder="Tell us about your land and vision..." 
                  className="w-full bg-transparent border-b border-gray-600 focus:border-primary px-0 py-2 outline-none transition-colors placeholder-gray-700 min-h-[100px] text-white"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-[#d64a05] text-white font-bold py-4 rounded-lg mt-4 transition-colors">
                Send Inquiry
              </button>
            </form>
          </div>

        </div>
        
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>© 2024 Rammed Earth Co. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};