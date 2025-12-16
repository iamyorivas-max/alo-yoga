import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ColorShowcase from './components/ColorShowcase';
import Benefits from './components/Benefits';
import LifestyleFeature from './components/LifestyleFeature';
import FabricDetails from './components/FabricDetails';
import FitGuide from './components/FitGuide';
import SocialProof from './components/SocialProof';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';
import { ColorVariant } from './types';

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<ColorVariant>('white');

  const handleColorChange = useCallback((color: ColorVariant) => {
    setSelectedColor(color);
  }, []);

  const handleScrollToBuy = () => {
    const element = document.getElementById('buy-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBuy = () => {
    alert(`Added ${selectedColor} jacket to cart!`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero 
          selectedColor={selectedColor} 
          onColorChange={handleColorChange} 
          onScrollToBuy={handleScrollToBuy}
        />
        
        <ColorShowcase 
          selectedColor={selectedColor} 
          onColorChange={handleColorChange} 
        />
        
        <Benefits />
        
        <LifestyleFeature />
        
        <FabricDetails />
        
        <FitGuide />
        
        <SocialProof />
        
        {/* Final Conversion Section */}
        <section id="buy-section" className="py-24 bg-white text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Don't Miss Out.</h2>
          <p className="text-neutral-500 mb-8 max-w-lg mx-auto">
            Limited quantities available for this season drop. Secure your size before they're gone.
          </p>
          <div className="flex justify-center gap-4 mb-4">
            <span className={`px-4 py-2 border rounded cursor-pointer transition-colors ${selectedColor === 'white' ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-white text-neutral-900 border-neutral-200'}`} onClick={() => handleColorChange('white')}>Cloud White</span>
            <span className={`px-4 py-2 border rounded cursor-pointer transition-colors ${selectedColor === 'black' ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-white text-neutral-900 border-neutral-200'}`} onClick={() => handleColorChange('black')}>Midnight Black</span>
          </div>
          <button 
            onClick={handleBuy}
            className="w-full max-w-md bg-neutral-900 text-white text-lg font-bold py-5 rounded-full hover:bg-neutral-800 transition-all transform active:scale-95 shadow-lg"
          >
            GET YOURS NOW - $128
          </button>
          <p className="mt-4 text-xs font-bold text-red-600 uppercase tracking-widest animate-pulse">
            Low Stock in Medium & Large
          </p>
        </section>
      </main>

      <Footer />
      
      <StickyCTA 
        selectedColor={selectedColor} 
        onColorChange={handleColorChange} 
        onBuy={handleBuy}
      />
    </div>
  );
};

export default App;