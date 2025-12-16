import React from 'react';
import { Check } from 'lucide-react';
import { IMAGES, BENEFITS_LIST } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
              Engineered for <br/>
              <span className="text-neutral-400 italic font-serif">Effortless Comfort</span>
            </h2>
            <p className="text-neutral-600 mb-8 leading-relaxed font-light">
              We reimagined the classic sherpa jacket with technical precision. 
              It’s not just about looking good—it’s about how it makes you feel moving through your day.
            </p>
            
            <ul className="space-y-4">
              {BENEFITS_LIST.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-neutral-900 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-neutral-800 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden">
              <img 
                src={IMAGES.BENEFITS_LIFESTYLE.url} 
                alt={IMAGES.BENEFITS_LIFESTYLE.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/50">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">Performance Tested</p>
                <p className="text-sm font-medium">"The only layer I need for post-workout errands."</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;