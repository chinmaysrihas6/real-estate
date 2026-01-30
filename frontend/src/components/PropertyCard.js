import React from 'react';

const PropertyCard = ({ property, onOpenDetail }) => {
  const statusColors = {
    'Available': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    'Occupied': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Development': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    'Leased': 'bg-purple-500/20 text-purple-400 border-purple-500/30'
  };

  return (
    <div 
      onClick={() => onOpenDetail(property)}
      className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 rounded-xl overflow-hidden border border-gray-700/50 card-hover fade-in cursor-pointer"
    >
      <div className="h-40 bg-gradient-to-br from-gray-700/50 to-gray-800/50 flex items-center justify-center text-6xl">
        {property.image}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">{property.type}</span>
          <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${statusColors[property.status]}`}>{property.status}</span>
        </div>
        <h4 className="font-display font-bold text-amber-100 text-lg mb-2">{property.name}</h4>
        <p className="text-amber-600/60 text-sm flex items-center gap-1 mb-4">
          📍 {property.location}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
          <div>
            <p className="text-xs text-amber-600/60">Value</p>
            <p className="font-display font-bold text-emerald-400 text-lg">{property.value}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-amber-600/60">Area</p>
            <p className="text-amber-100 font-semibold">{property.area}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;