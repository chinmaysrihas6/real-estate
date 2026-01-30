import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import './index.css';

// Components
import PropertyForm from './components/AddPropertyForm';
import Header from './components/Header';
import HolderList from './components/HolderList';
import CategoryList from './components/CategoryList';
import PropertyCard from './components/PropertyCard';
import PropertyDetail from './components/PropertyDetail';

// 1. Theme Defaults (Make sure this is outside the App function)
const defaultConfig = {
  dashboard_title: "Portfolio Dashboard",
  company_name: "Optimus Capital",
  background_color: "#0f0f0f",
  surface_color: "#1a1a2e",
  text_color: "#fef3c7",
  font_family: "Playfair Display",
  font_size: 16
};


function App() {
  // --- 1. Navigation & Data State ---
  const [view, setView] = useState('dashboard');
  const [viewTitle, setViewTitle] = useState('All Properties');
  const [viewSubtitle, setViewSubtitle] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState(new Set());
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [baseProperties, setBaseProperties] = useState([]);
 const [isFormOpen, setIsFormOpen] = useState(false);
 const [editingProperty, setEditingProperty] = useState(null);

const handleEditInitiated = (property) => {
    setEditingProperty(property); // Set the property to be updated
    setSelectedProperty(null);    // Close the detail view
    setIsFormOpen(true);          // Open the form
};

  // NEW: Add these two for the backend
  const [holders, setHolders] = useState([]); 
  const [loading, setLoading] = useState(true);

  // --- 2. Theme State ---
  const [config, setConfig] = useState(defaultConfig);

  // --- 3. Effects ---
  useEffect(() => {
    document.documentElement.style.fontSize = `${config.font_size}px`;
    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange: (newCfg) => setConfig(prev => ({ ...prev, ...newCfg })),
      });
    }
  }, [config.font_size]);

  // NEW: Fetch Data from your Backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/holders');
        const data = await response.json();
        setHolders(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading automatic data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // --- 4. Updated Data Logic ---
  // We use [holders] as a dependency so it recalculates when the fetch finishes
  const allProperties = useMemo(() => {
    return holders.flatMap(h => h.portfolio || []);
  }, [holders]); 

  const displayProperties = useMemo(() => {
    let list = baseProperties.length > 0 ? baseProperties : allProperties;
    if (searchQuery) {
      return allProperties.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return list;
  }, [searchQuery, baseProperties, allProperties]);

  // --- 5. Handlers ---
  const showHolderProperties = (holder) => {
    setBaseProperties(holder.portfolio);
    setViewTitle(`${holder.name}'s Portfolio`);
    setViewSubtitle(`${holder.portfolio.length} properties valued at ${holder.totalValue}`);
    setView('properties');
  };
  // ------------------------------------

  const showDashboard = () => { 
    setView('dashboard'); 
    setSearchQuery(''); 
  };

  return (
    <div 
      className="min-h-screen relative overflow-x-hidden text-white"
      style={{ 
        /* Changed from backgroundColor to backgroundImage */
        backgroundImage: 'linear-gradient(180deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)', 
        fontFamily: config.font_family,
        color: config.text_color 
      }}
    >
      {/* Ambient Glow Background Effect - This will now sit ON TOP of your new gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-amber-900/10 blur-[120px] pointer-events-none" />
      
      {/* Rest of your Header and Main content... */}
      
      <Header 
        companyName={config.company_name}
        onSearch={(q) => { setSearchQuery(q); setView('properties'); setViewTitle('Search Results'); }} 
        onShowDashboard={showDashboard}
        onShowProperties={() => { 
          setBaseProperties(allProperties); 
          setViewTitle('All Properties'); 
          setView('properties'); 
        }}
      />

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-4"> 
        {view === 'dashboard' ? (
          <div className="fade-in">
            {/* 2. Reduce mb-12 to mb-6 and add mt-2 */}
            <div className="text-center mb-6 mt-2"> 
              {/* 3. Reduce mb-3 to mb-1 */}
              <h2 className="font-display text-4xl font-bold mb-1 tracking-normal">Portfolio Dashboard</h2>
              
              {/* 4. Reduce mb-5 to mb-3 */}
              <p className="text-amber-600/80 text-base font-body mb-3">Manage and explore premium real estate investments</p>
              
              <div className="w-24 h-1 gradient-gold mx-auto rounded-full"></div>
            </div>
            
            

            {/* Stats Cards */}
            {/* 2. STATS CARDS SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {/* Card 1: Total Properties */}
              <div className="p-6 rounded-2xl border border-white/5 backdrop-blur-sm card-hover bg-gradient-to-br from-[#78350f4d] to-[#451a0380]">
                <div className="flex items-center gap-4 mb-3">
                  {/* Icon Container */}
                  <div className="p-2 bg-amber-500/10 rounded-lg shadow-inner">
                    <span className="text-amber-500">🏢</span>
                  </div>
                  
                  <p className="text-amber-600/80 text-sm font-semibold tracking-widest">
                    Total Properties
                  </p>
                </div>
                
                <h3 className="text-4xl font-display font-bold text-white tracking-tight">
                  24
                </h3>
              </div>

              {/* Card 2: Total Value */}
              <div className="p-6 rounded-2xl border border-white/5 backdrop-blur-sm card-hover bg-gradient-to-br from-[#064e3b4d] to-[#022c2280] hover:border-[#065f464d]">
                <div className="flex items-center gap-4 mb-3">
                  {/* Icon Container with subtle emerald glow */}
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <span className="text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">💰</span>
                  </div>
                  
                  <p className="text-emerald-500/80 text-sm font-semibold tracking-widest">
                    Total Value
                  </p>
                </div>
                
                <h3 className="text-4xl font-display font-bold text-emerald-400 tracking-tight">
                  $48.5M
                </h3>
              </div>

              {/* Card 3: Holders */}
              <div className="p-6 rounded-2xl border border-white/5 backdrop-blur-sm card-hover bg-gradient-to-br from-[#1e3a8a4d] to-[#17255480] hover:border-[#1e40af4d]">
                <div className="flex items-center gap-4 mb-3">
                  {/* Icon Container with subtle blue glow */}
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <span className="text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">👤</span>
                  </div>
                  
                  <p className="text-blue-500/80 text-sm font-semibold tracking-widest">
                    Holders
                  </p>
                </div>
                
                <h3 className="text-4xl font-display font-bold text-blue-400 tracking-tight">
                  4
                </h3>
              </div>

              {/* Card 4: Avg. ROI */}
              <div className="p-6 rounded-xl border border-[#6b21a84d] backdrop-blur-sm card-hover bg-gradient-to-br from-[#581c874d] to-[#3b076480]">
                <div className="flex items-center gap-4 mb-3">
                  {/* Icon Container with purple glow */}
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <span className="text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">📈</span>
                  </div>
                  
                  <p className="text-purple-500/80 text-sm font-semibold tracking-widest">
                    Avg. ROI
                  </p>
                </div>
                
                <h3 className="text-4xl font-display font-bold text-purple-400 tracking-tight">
                  12.4%
                </h3>
              </div>
              </div>
             
            <div className="grid lg:grid-cols-2 gap-8 mt-10">
              <HolderList onSelectHolder={showHolderProperties} />
              <CategoryList onSelectCategory={(catId) => {
                  const filtered = allProperties.filter(p => p.type.toLowerCase() === catId.toLowerCase());
                  setBaseProperties(filtered);
                  setViewTitle(`${catId.toUpperCase()} Properties`);
                  setViewSubtitle(`${filtered.length} total holdings found`);
                  setView('properties');
              }} />
            </div>
          </div>
        ) : (
          /* CLEANED PROPERTIES VIEW */
          <div className="fade-in">
            <div className="flex justify-between items-start mb-6">
              <div>
                <button onClick={showDashboard} className="text-amber-400 mb-2 flex items-center gap-2">← Back</button>
                <h2 className="font-display text-3xl font-bold text-amber-100">{viewTitle}</h2>
                <p className="opacity-70">{viewSubtitle}</p>
              </div>

              {/* THE "NEW" BUTTON */}
              <button 
                onClick={() => setIsFormOpen(true)}
                className="px-6 py-2 border-2 border-amber-500 text-amber-500 font-bold rounded-md hover:bg-amber-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.3)] z-50"
                style={{ fontFamily: 'monospace', fontSize: '1.2rem', letterSpacing: '2px' }}
              > 
                ADD
              </button>
            </div>

            <div className="property-grid">
              {displayProperties.map(prop => (
                <PropertyCard key={prop.id} property={prop} onOpenDetail={setSelectedProperty} />
              ))}
            </div>
          </div>
        )}

      </main>
      {/* Footer Section */}
      <footer className="w-full bg-black/50 border-t border-amber-900/30 mt-12 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left Side: Brand Logo & Name */}
          {/* Left Side: Brand Logo & Name */}
          <div className="flex items-center gap-4">
            
            {/* The House Symbol - Updated to w-8, h-8, rounded-lg */}
            <div 
              className="flex items-center justify-center w-8 h-8 rounded-lg shadow-lg"
              style={{ 
                background: 'linear-gradient(135deg, #d4af37 0%, #f4e4bc 50%, #d4af37 100%)',
                width: '2rem',  /* w-8 */
                height: '2rem'  /* h-8 */
              }}
            >
              {/* House Icon - matches the shape in image_3f895b.png */}
              <svg 
                className="w-5 h-5 text-black" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M3 9.5L12 3L21 9.5V21H15V15H9V21H3V9.5Z" />
              </svg>
            </div>
            
            {/* Brand Text - Updated to Amber-100 and Semi-bold */}
            <span 
              className="font-display text-xl font-semibold tracking-normal"
              style={{ color: 'rgb(254 243 199)' }} /* text-amber-100 */
            >
              Optimus Capital
            </span>
          </div>

          {/* Right Side: Copyright Text */}
          <div className="text-center sm:text-right">
            <p className="text-amber-500/70 text-sm font-body tracking-wider transition-colors hover:text-amber-400">
              © 2024 Premium Property Holdings. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
      {/* MODALS - Placed at the very bottom for correct layering */}

      {/* 1. Detail View */}
      {selectedProperty && (
          <PropertyDetail 
              property={selectedProperty} 
              onClose={() => setSelectedProperty(null)}
              onEdit={handleEditInitiated} 
          />
      )}

      {/* 2. The Form (Handles both Add and Update) */}
      {isFormOpen && (
          <PropertyForm 
              initialData={editingProperty} 
              onClose={() => {
                  setIsFormOpen(false);
                  setEditingProperty(null);
              }} 
          />
      )}

    </div>
  );
} // Closed App function properly

export default App;