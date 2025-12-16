import React from 'react';
import { IMAGES } from '../constants';

const LifestyleFeature: React.FC = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] bg-neutral-900 overflow-hidden">
      <img 
        src={IMAGES.EDITORIAL_LARGE.url} 
        alt={IMAGES.EDITORIAL_LARGE.alt}
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24 text-white">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 leading-tight">
            Confidence in Motion
          </h2>
          <p className="text-lg md:text-xl text-neutral-200 font-light max-w-lg">
            Designed for the modern lifestyle. Whether you're heading to the studio, the office, or anywhere in between.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LifestyleFeature;