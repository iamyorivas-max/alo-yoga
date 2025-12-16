import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-neutral-600 sm:hidden cursor-pointer" />
            <span className="hidden sm:block text-xs font-bold tracking-widest uppercase cursor-pointer">Shop</span>
          </div>
          
          <div className="text-xl font-bold tracking-tighter text-center">
            LUXEMOTION
          </div>

          <div className="flex items-center">
            <ShoppingBag className="h-5 w-5 text-neutral-900 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;