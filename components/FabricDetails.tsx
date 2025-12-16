import React from 'react';
import { IMAGES } from '../constants';

const FabricDetails: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold tracking-tight uppercase">The Details Matter</h2>
          <div className="w-12 h-1 bg-neutral-900 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="relative group overflow-hidden bg-white">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={IMAGES.FABRIC_TEXTURE.url} 
                alt={IMAGES.FABRIC_TEXTURE.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <h3 className="text-lg font-bold mb-2">Cloud-Like Sherpa</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Our custom-developed synthetic fleece offers superior heat retention while remaining breathable. 
                Soft against the skin, durable against the elements.
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden bg-white">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={IMAGES.FABRIC_DETAIL.url} 
                alt={IMAGES.FABRIC_DETAIL.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <h3 className="text-lg font-bold mb-2">Premium Hardware</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Featuring smooth-glide zippers and reinforced stitching at high-stress points. 
                Every detail is tested for longevity and studio-grade performance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FabricDetails;