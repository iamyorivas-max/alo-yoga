import React, { useState, useEffect } from 'react';
import { ColorVariant } from '../types';

interface StickyCTAProps {
  selectedColor: ColorVariant;
  onColorChange: (color: ColorVariant) => void;
  onBuy: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ selectedColor, onColorChange, onBuy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 600px)
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-neutral-200 p-4 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Product Info (Desktop only) */}
        <div className="hidden sm:flex flex-col">
          <span className="font-bold text-sm">LuxeMotion Jacket</span>
          <span className="text-xs text-neutral-500">$128.00 • Free Shipping</span>
        </div>

        {/* Controls */}
        <div className="flex gap-4 w-full sm:w-auto items-center">
          
          {/* Color Selector Mini */}
          <div className="flex gap-2 mr-2">
            <button 
                onClick={() => onColorChange('white')}
                className={`w-8 h-8 rounded-full border border-neutral-200 bg-neutral-100 ${selectedColor === 'white' ? 'ring-2 ring-neutral-900 ring-offset-1' : ''}`}
                aria-label="Select White"
            />
            <button 
                onClick={() => onColorChange('black')}
                className={`w-8 h-8 rounded-full border border-neutral-200 bg-neutral-900 ${selectedColor === 'black' ? 'ring-2 ring-neutral-900 ring-offset-1' : ''}`}
                aria-label="Select Black"
            />
          </div>

          <button 
            onClick={onBuy}
            className="flex-1 sm:flex-none bg-neutral-900 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-neutral-800 transition-colors"
          >
            Add to Bag - $128
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;