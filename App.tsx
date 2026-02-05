import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Sustainability } from './components/Sustainability';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Process />
        <Sustainability />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  );
}

export default App;