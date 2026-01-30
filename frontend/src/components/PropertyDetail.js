import React, { useState } from 'react';

const PropertyDetail = ({ property, onClose, onEdit }) => {
  const [showPdfList, setShowPdfList] = useState(false);

  if (!property) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      {/* The Main Container */}
      <div className="relative w-full max-w-2xl bg-[#0f111a] rounded-[2rem] border-2 border-amber-500/30 overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] transition-all duration-500">
        
        {!showPdfList ? (
          /* SECTION 1: PROPERTY DETAILS (GOLD STYLE) */
          <div className="animate-fade-in">
            {/* Top Header Section */}
            <div className="bg-gradient-to-r from-amber-900/40 to-transparent p-8 border-b border-amber-500/10">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-display font-bold text-white mb-2">{property.name}</h2>
                  <p className="text-amber-500 flex items-center gap-2">
                    <span className="text-xs">📍</span> {property.location}
                  </p>
                </div>
                <button onClick={onClose} className="text-amber-100/50 hover:text-white text-2xl">✕</button>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* Purchase Details Section */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 bg-amber-500/20"></div>
                  <h3 className="text-amber-500 font-display font-bold uppercase tracking-widest text-sm">Purchase Details</h3>
                  <div className="h-px flex-1 bg-amber-500/20"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <DetailItem label="Property Sold By" value={property.soldBy || "Premier Estates"} />
                  <DetailItem label="Date of Purchase" value={property.purchaseDate || "12 Jan 2022"} />
                  <DetailItem label="Stamp Value" value={property.stampValue || "$450,000"} />
                  <DetailItem label="Market Value" value={property.marketValue || property.value} />
                  <div className="col-span-2">
                    <DetailItem label="Registration Status" value="Registered" isStatus />
                  </div>
                </div>
              </div>

              {/* Sale Details Section */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px flex-1 bg-amber-500/20"></div>
                  <h3 className="text-amber-500 font-display font-bold uppercase tracking-widest text-sm">Sale Details</h3>
                  <div className="h-px flex-1 bg-amber-500/20"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <DetailItem label="Date of Sale" value={property.saleDate || "N/A"} />
                  <DetailItem label="Amount" value={property.saleAmount || "Holding"} />
                  <div className="col-span-2">
                    <DetailItem label="Name of Buyer" value={property.buyerName || "Current Asset"} />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer PDF Trigger */}
            <div className="p-8 pt-0 flex justify-center">
              <button 
                onClick={() => setShowPdfList(true)}
                className="px-10 py-3 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white font-bold shadow-lg transform transition hover:scale-105 active:scale-95"
              >
                PDF REPORT
              </button>
            
            {/* NEW UPDATE BUTTON */}
            <button 
                onClick={() => onEdit(property)} // Pass current property to edit handler
                className="ml-8 px-10 py-3 rounded-full font-bold text-white shadow-lg hover:scale-105 transition-all uppercase tracking-widest text-sm border-2 border-amber-500 bg-amber-500/10 hover:bg-amber-500"
            >
                Update Details
            </button>
            </div>
          </div>
        ) : (
          /* SECTION 2: PDF LIST INTERFACE (LIGHT MODERN STYLE) */
          <div className="bg-white animate-slide-up">
             {/* PDF Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-xl font-bold text-slate-800">Document Vault</h3>
                <button 
                    onClick={() => setShowPdfList(false)}
                    className="text-slate-400 hover:text-slate-600 flex items-center gap-1 text-sm font-bold"
                >
                    ← BACK
                </button>
            </div>

            <div className="p-8 space-y-4">
              {[
                "Sale Deed",
                "EC (Encumbrance Certificate)",
                "Link Document",
                "MOU",
                "Agreement of Sale"
              ].map((doc, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100"
                >
                  <span className="text-slate-700 font-semibold">
                    {index + 1}) {doc}
                  </span>
                  
                  <button 
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-[#8be3f3] to-[#b386f7] text-slate-800 font-bold text-xs shadow-sm hover:brightness-105 transition-all active:scale-95"
                    onClick={() => alert(`Opening ${doc}...`)}
                  >
                    PDF
                  </button>
                  <button 
                    onClick={() => onEdit(property)} // Now onEdit is defined!
                    className="px-10 py-3 rounded-full font-bold text-black border-2 border-amber-500 bg-amber-500/10 hover:bg-amber-500 uppercase tracking-widest text-sm transition-all"
                  >
                      Update Details
                  </button>
                </div>
              ))}
            </div>

            {/* Simple Close for the whole modal */}
            <div className="p-6 pt-0 flex justify-center">
                <button onClick={onClose} className="text-slate-400 text-xs font-bold hover:text-slate-600">
                    CLOSE MODAL
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper Component
const DetailItem = ({ label, value, isStatus }) => (
  <div className="flex flex-col">
    <span className="text-[10px] text-amber-700 font-bold uppercase tracking-tighter">{label}</span>
    <span className={`text-lg font-medium ${isStatus ? 'text-emerald-400' : 'text-amber-100'}`}>
      {value}
    </span>
  </div>
);

export default PropertyDetail;