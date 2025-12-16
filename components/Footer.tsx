import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h3 className="text-2xl font-bold tracking-tighter mb-6">LUXEMOTION</h3>
        <p className="text-neutral-400 text-sm mb-8 text-center max-w-md">
          Premium activewear designed for the modern lifestyle. <br/>
          Free shipping on all US orders over $100.
        </p>
        <div className="flex gap-8 text-xs text-neutral-500 uppercase tracking-widest">
          <a href="#" className="hover:text-white">Shipping</a>
          <a href="#" className="hover:text-white">Returns</a>
          <a href="#" className="hover:text-white">Contact</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
        <p className="mt-12 text-xs text-neutral-600">© 2024 LuxeMotion. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;