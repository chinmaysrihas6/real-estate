import React from 'react';
import { categories } from '../data';

const CategoryList = ({ onSelectCategory }) => {
  return (
    /* 1. The Outer Card Container (Matches Property Holders design) */
    <div className="w-full max-w-full mx-auto bg-[#0f111a]/40 px-8 py-8 rounded-3xl border border-white/5 backdrop-blur-md">      
      {/* 2. Section Header with Gold Icon */}
      <div className="flex items-center gap-3 mb-8">
        <div 
          className="flex items-center justify-center w-12 h-12 rounded-xl shadow-lg"
          style={{ 
            background: 'linear-gradient(135deg, #d4af37 0%, #f4e4bc 50%, #d4af37 100%)',
            width: '3rem',
            height: '3rem'
          }}
        >
          {/* Grid Icon Symbol */}
          <span className="text-black text-xl">⠿</span>
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-white tracking-wide leading-none">
            Property Categories
          </h3>
          <p className="text-amber-600/60 text-sm font-body mt-1">Browse by type</p>
        </div>
      </div>

      {/* 3. The Grid Container */}
      <div className="grid grid-cols-2 gap-6">
        {categories.map((cat) => (
          <button 
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            /* Updated to match p-8 and rounded-3xl from your reference */
            className={`relative overflow-hidden p-2 bg-gradient-to-br ${cat.color} rounded-3xl card-hover group text-center flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.02] shadow-xl`}
          >
            <div className="relative z-10">
              {/* Larger Icon */}
              <span className="text-3xl mb-4 block drop-shadow-lg transition-transform group-hover:scale-110">
                {cat.icon}
              </span>
              
              <h4 className="font-display font-bold text-white text-2xl mb-1">
                {cat.name}
              </h4>
              
              <p className="text-white/80 text-sm mb-6 font-body">
                {cat.description}
              </p>
              
              {/* Property Count Pill */}
              <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full text-sm text-white font-semibold">
                {cat.count} properties
              </span>
            </div>
            
            {/* Subtle Inner Glow on Hover */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;