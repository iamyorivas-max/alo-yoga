import React from 'react';
import { ColorVariant } from '../types';
import { IMAGES } from '../constants';

interface ColorShowcaseProps {
  selectedColor: ColorVariant;
  onColorChange: (color: ColorVariant) => void;
}

const ColorShowcase: React.FC<ColorShowcaseProps> = ({ selectedColor, onColorChange }) => {
  return (
    <section id="colors" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Two Iconic Shades</h2>
          <p className="text-neutral-500 text-sm tracking-wide">SAME FIT. SAME COMFORT. CHOOSE YOUR VIBE.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* White Option */}
          <div 
            className={`group cursor-pointer relative ${selectedColor === 'white' ? 'ring-2 ring-neutral-900 ring-offset-4' : 'opacity-80 hover:opacity-100'}`}
            onClick={() => onColorChange('white')}
          >
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-white">
              <img 
                src={IMAGES.TOGGLE_WHITE.url} 
                alt={IMAGES.TOGGLE_WHITE.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium">Cloud White</h3>
              <p className="text-xs text-neutral-500 mt-1">Crisp, clean, and versatile.</p>
            </div>
          </div>

          {/* Black Option */}
          <div 
            className={`group cursor-pointer relative ${selectedColor === 'black' ? 'ring-2 ring-neutral-900 ring-offset-4' : 'opacity-80 hover:opacity-100'}`}
            onClick={() => onColorChange('black')}
          >
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-white">
              <img 
                src={IMAGES.TOGGLE_BLACK.url} 
                alt={IMAGES.TOGGLE_BLACK.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium">Midnight Black</h3>
              <p className="text-xs text-neutral-500 mt-1">Sleek, timeless, and bold.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorShowcase;