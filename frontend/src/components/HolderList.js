import React from 'react';
import { holders } from '../data';

const HolderList = ({ onSelectHolder }) => {
  return (
    /* Main Container using your gray-950/90 spec and mb-6 */
    <div className="p-6 rounded-2xl border border-white/5 bg-gradient-to-b from-transparent to-[#030712e6] backdrop-blur-md mb-6">
      
      {/* Header Section: Integrated .flex, .items-center, and .gap-3 */}
      {/* Header Section */}
        <div className="flex items-center gap-3 mb-6 animate-slide-in">
        
        {/* The Gold Icon Box - Updated with your exact specs */}
        <div 
            className="flex items-center justify-center w-12 h-12 rounded-xl shadow-lg"
            style={{ 
            background: 'linear-gradient(135deg, #d4af37 0%, #f4e4bc 50%, #d4af37 100%)',
            width: '3rem',  /* w-12 */
            height: '3rem'  /* h-12 */
            }}
        >
            <span className="text-black text-xl">👤</span>
        </div>

        <div>
           <h3 className="font-display text-2xl font-bold text-gradient-gold">Property Holders</h3>
            <p className="text-amber-600/60 text-sm font-body mt-1">
            Click to view portfolio
            </p>
        </div>
        </div>

      {/* List Container */}
      <div className="space-y-4">
        {holders.map((holder, index) => (
          <div 
            key={holder.id}
            onClick={() => onSelectHolder(holder)}
            className="group flex items-center justify-between p-4 mb-4 rounded-xl border border-gray-700/50 bg-gray-800/50 card-hover cursor-pointer relative overflow-hidden transition-all duration-400 hover:translate-x-1 hover:border-amber-500/30"
            >
            {/* The Highlight Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center gap-4 relative z-10">
                {/* Avatar Block - Squircle with initials */}
                <div 
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-display font-bold text-lg shadow-lg transition-transform group-hover:scale-105 ${holder.colorClass}`}
                style={{
                    /* Using a gradient that matches Image 1's "AS" symbol */
                    background: holder.gradient || 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                    flexShrink: 0 // Prevents the box from squishing
                }}
                >
                {/* Forced rendering of initials */}
                <span className="leading-none select-none">
                    {holder.initials || "AS"} 
                </span>
                </div>

                <div>
                <h4 className="font-display text-lg text-white group-hover:text-amber-200 transition-colors">
                    {holder.name}
                </h4>
                {/* Side-by-side properties and value with dot separator */}
                <p className="text-sm font-body flex items-center gap-1.5 mt-0.5">
                    <span className="text-amber-600/70">{holder.propertiesCount} properties</span>
                    <span className="text-gray-600 font-bold">•</span>
                    <span className="text-amber-500/90">${holder.netWorth}M</span>
                </p>
                </div>
            </div>

            {/* Chevron Arrow */}
            <div className="relative z-10 text-gray-500 group-hover:text-amber-500 transition-all group-hover:translate-x-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default HolderList;