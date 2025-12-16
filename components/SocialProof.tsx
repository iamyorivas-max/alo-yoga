import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Loved by the Community</h2>
          <div className="flex justify-center items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-5 h-5 fill-neutral-900 text-neutral-900" />
            ))}
          </div>
          <p className="text-sm text-neutral-500 mt-2">Based on 1,200+ verified reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-neutral-900 text-neutral-900" />
                ))}
              </div>
              <p className="text-neutral-700 italic mb-6 leading-relaxed">"{review.text}"</p>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;