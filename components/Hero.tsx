import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ColorVariant } from '../types';
import { IMAGES } from '../constants';

interface HeroProps {
  selectedColor: ColorVariant;
  onColorChange: (color: ColorVariant) => void;
  onScrollToBuy: () => void;
}

const Hero: React.FC<HeroProps> = ({ selectedColor, onColorChange, onScrollToBuy }) => {
  const activeImage = selectedColor === 'white' ? IMAGES.HERO_WHITE : IMAGES.HERO_BLACK;

  return (
    <div className="relative w-full min-h-[90vh] sm:min-h-screen flex flex-col md:flex-row">
      {/* Mobile Image (First on mobile) */}
      <div className="md:hidden w-full h-[60vh] relative overflow-hidden">
        <img 
          src={activeImage.url} 
          alt={activeImage.alt} 
          className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        />
        {/* Mobile Scarcity Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-sm">
          Limited Stock
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-10 md:px-16 lg:px-24 bg-white z-10">
        <div className="mb-4 flex items-center gap-2">
            <div className="flex">
                {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-4 h-4 text-neutral-900 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                ))}
            </div>
            <span className="text-xs font-medium text-neutral-500">4.9/5 (1,240+ Reviews)</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-4">
          The Jacket You’ll Wear Everywhere.
        </h1>
        <p className="text-lg text-neutral-600 mb-8 max-w-md font-light">
          Studio to street. Experience the perfect blend of ultra-soft comfort and modern structure.
        </p>

        {/* Desktop Color Selection (Hidden on Mobile initially to keep hero clean) */}
        <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                Select Color: <span className="text-neutral-900">{selectedColor}</span>
            </p>
            <div className="flex space-x-4">
                <button 
                    onClick={() => onColorChange('white')}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${selectedColor === 'white' ? 'border-neutral-900' : 'border-neutral-200'}`}
                    aria-label="Select Cloud White"
                >
                    <div className="w-8 h-8 rounded-full bg-neutral-100 border border-neutral-200"></div>
                </button>
                <button 
                    onClick={() => onColorChange('black')}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${selectedColor === 'black' ? 'border-neutral-900' : 'border-neutral-200'}`}
                    aria-label="Select Midnight Black"
                >
                    <div className="w-8 h-8 rounded-full bg-neutral-900"></div>
                </button>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onScrollToBuy}
            className="w-full sm:w-auto bg-neutral-900 text-white px-8 py-4 rounded-full font-medium tracking-wide text-sm hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
          >
            CHOOSE YOUR SIZE
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-neutral-200 font-medium tracking-wide text-sm hover:border-neutral-900 transition-colors">
            SEE THE FILM
          </button>
        </div>
      </div>

      {/* Desktop Image Side */}
      <div className="hidden md:block w-1/2 relative h-screen">
        <img 
          src={activeImage.url} 
          alt={activeImage.alt} 
          className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out"
        />
        <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur px-4 py-2 text-xs font-bold tracking-widest uppercase">
          Best Seller
        </div>
      </div>
    </div>
  );
};

export default Hero;