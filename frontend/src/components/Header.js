import React from 'react';

const Header = ({ onSearch, onShowDashboard, onShowProperties }) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-gold rounded-lg flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L4 9v12h16V9l-8-6zm0 2.5L18 10v9H6v-9l6-4.5z" />
                <rect x="10" y="14" width="4" height="5" />
              </svg>
            </div>
            <div>
              <h1 className="font-display text-lg sm:text-xl font-bold text-amber-100">Optimus Capital</h1>
              <p className="text-xs text-amber-600/80 hidden sm:block">Premium Property Holdings</p>
            </div>
          </div>

          <div className="flex items-center gap-4 flex-1 max-w-md ml-20 mr-0">
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Search properties..." 
                className="w-full bg-slate-800/80 border border-amber-400/30 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400/60"
                onChange={(e) => onSearch(e.target.value)}
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={onShowDashboard} className="nav-item text-amber-100/80 hover:text-amber-100 py-2">Dashboard</button>
            <button onClick={onShowProperties} className="nav-item text-amber-100/80 hover:text-amber-100 py-2">All Properties</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;



/*


<header class="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-amber-900/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div class="flex items-center justify-between h-16 sm:h-20">
      <div class="flex items-center gap-3">
       <div class="w-10 h-10 sm:w-12 sm:h-12 gradient-gold rounded-lg flex items-center justify-center shadow-lg">
        <svg class="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" fill="currentColor" viewbox="0 0 24 24"><path d="M12 3L4 9v12h16V9l-8-6zm0 2.5L18 10v9H6v-9l6-4.5z" /> <rect x="10" y="14" width="4" height="5" />
        </svg>
       </div>
       <div>
        <h1 id="company-name" class="font-display text-lg sm:text-xl font-bold text-amber-100">Optimus Capital</h1>
        <p class="text-xs text-amber-600/80 hidden sm:block">Premium Property Holdings</p>
       </div>
      </div>
      <div class="flex items-center gap-4 flex-1 max-w-md ml-20 mr-0">
       <div class="relative flex-1"><input type="text" id="search-input" placeholder="Search properties by name, location, or type..." class="w-full bg-slate-800/80 border border-amber-400/30 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:border-amber-400/60 transition-colors" oninput="handleSearch(this.value)">
        <svg class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
       </div>
      </div>
      <nav class="hidden md:flex items-center gap-8"><button onclick="showDashboard()" class="nav-item text-amber-100/80 hover:text-amber-100 py-2 transition-colors active" id="nav-dashboard">Dashboard</button> <button onclick="showAllProperties()" class="nav-item text-amber-100/80 hover:text-amber-100 py-2 transition-colors" id="nav-properties">All Properties</button>
      </nav><button id="mobile-menu-btn" onclick="toggleMobileMenu()" class="md:hidden p-2 text-amber-100">
       <svg class="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
       </svg></button>
     </div>
    </div><!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-black/90 border-t border-amber-900/30">
     <div class="px-4 py-3 space-y-2"><button onclick="showDashboard(); toggleMobileMenu();" class="block w-full text-left px-3 py-2 text-amber-100/80 hover:text-amber-100 hover:bg-amber-900/20 rounded-lg">Dashboard</button> <button onclick="showAllProperties(); toggleMobileMenu();" class="block w-full text-left px-3 py-2 text-amber-100/80 hover:text-amber-100 hover:bg-amber-900/20 rounded-lg">All Properties</button>
     </div>
    </div>
   </header>
   */