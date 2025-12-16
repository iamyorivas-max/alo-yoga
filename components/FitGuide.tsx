import React from 'react';
import { Ruler, Maximize } from 'lucide-react';
import { IMAGES } from '../constants';

const FitGuide: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Images Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src={IMAGES.FIT_FULL_BODY_1.url} 
              alt={IMAGES.FIT_FULL_BODY_1.alt}
              className="w-full h-auto rounded-lg object-cover"
            />
            <div className="mt-12">
               <img 
                src={IMAGES.FIT_FULL_BODY_2.url} 
                alt={IMAGES.FIT_FULL_BODY_2.alt}
                className="w-full h-auto rounded-lg object-cover"
              /> 
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-6">Find Your Perfect Fit</h2>
            <p className="text-neutral-600 mb-8">
              Designed with a relaxed, slightly cropped silhouette that hits right at the hip. 
              Perfect for layering over high-waisted leggings or denim.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4">
                <Ruler className="w-6 h-6 text-neutral-400" />
                <div>
                  <h4 className="font-bold text-sm uppercase mb-1">True to Size</h4>
                  <p className="text-xs text-neutral-500">Order your standard size for a comfortable, relaxed fit.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Maximize className="w-6 h-6 text-neutral-400" />
                <div>
                  <h4 className="font-bold text-sm uppercase mb-1">Stretch Friendly</h4>
                  <p className="text-xs text-neutral-500">Ribbed cuffs and hem provide flexibility without losing shape.</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-100">
              <h4 className="font-bold text-sm uppercase mb-2">Model Stats</h4>
              <p className="text-sm text-neutral-600">
                Model is 5'9" and wears a size Small.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FitGuide;