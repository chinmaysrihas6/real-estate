<?php
/*include 'connect.php';
*/
?>
<!doctype html>
<html lang="en" class="h-full">
 <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Real Estate Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="/_sdk/element_sdk.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&amp;family=Source+Sans+Pro:wght@300;400;600&amp;display=swap" rel="stylesheet">
  <style>
    body {
      box-sizing: border-box;
    }
    .font-display { font-family: 'Playfair Display', serif; }
    .font-body { font-family: 'Source Sans Pro', sans-serif; }
    
    .gradient-gold {
      background: linear-gradient(135deg, #d4af37 0%, #f4e4bc 50%, #d4af37 100%);
    }
    
    .card-hover {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .card-hover:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
    }
    
    .shimmer {
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
      animation: shimmer 2s infinite;
    }
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    .fade-in {
      animation: fadeIn 0.5s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .slide-in {
      animation: slideIn 0.6s ease-out forwards;
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    
    .nav-item {
      position: relative;
      overflow: hidden;
    }
    .nav-item::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #d4af37, #f4e4bc);
      transition: width 0.3s ease;
    }
    .nav-item:hover::after,
    .nav-item.active::after {
      width: 100%;
    }
  </style>
  <style>@view-transition { navigation: auto; }</style>
  <script src="/_sdk/data_sdk.js" type="text/javascript"></script>
 </head>
 <body class="h-full font-body">
  <div id="app" class="h-full overflow-auto" style="background: linear-gradient(180deg, #fdfbf7 0%, #f8f6f2 50%, #f5f3ee 100%);"><!-- Header -->
   <header class="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-amber-300/40 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <div class="flex items-center justify-between h-16 sm:h-20">
      <div class="flex items-center gap-3">
       <div class="w-10 h-10 sm:w-12 sm:h-12 gradient-gold rounded-lg flex items-center justify-center shadow-lg">
        <svg class="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" fill="currentColor" viewbox="0 0 24 24"><path d="M12 3L4 9v12h16V9l-8-6zm0 2.5L18 10v9H6v-9l6-4.5z" /> <rect x="10" y="14" width="4" height="5" />
        </svg>
       </div>
       <div>
        <h1 id="company-name" class="font-display text-lg sm:text-xl font-bold text-gray-800">Crown Estates</h1>
        <p class="text-xs text-amber-700 hidden sm:block">Premium Property Holdings</p>
       </div>
      </div>
      <nav class="hidden md:flex items-center gap-8"><button onclick="showDashboard()" class="nav-item text-gray-700 hover:text-gray-900 py-2 transition-colors active" id="nav-dashboard">Dashboard</button> <button onclick="showAllProperties()" class="nav-item text-gray-700 hover:text-gray-900 py-2 transition-colors" id="nav-properties">All Properties</button>
      </nav><button id="mobile-menu-btn" onclick="toggleMobileMenu()" class="md:hidden p-2 text-gray-800">
       <svg class="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
       </svg></button>
     </div>
    </div><!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden bg-white/95 border-t border-amber-300/40">
     <div class="px-4 py-3 space-y-2"><button onclick="showDashboard(); toggleMobileMenu();" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-amber-50 rounded-lg">Dashboard</button> <button onclick="showAllProperties(); toggleMobileMenu();" class="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-amber-50 rounded-lg">All Properties</button>
     </div>
    </div>
   </header><!-- Main Content -->
   <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><!-- Dashboard View -->
    <div id="dashboard-view"><!-- Title Section -->
     <div class="text-center mb-10 fade-in">
      <h2 id="dashboard-title" class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">Portfolio Dashboard</h2>
      <p class="text-gray-600 text-lg">Manage and explore premium real estate investments</p>
      <div class="w-24 h-1 gradient-gold mx-auto mt-4 rounded-full"></div>
     </div><!-- Stats Overview -->
     <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      <div class="bg-white rounded-xl p-4 sm:p-6 border border-amber-200 card-hover shadow-md">
       <div class="flex items-center gap-3 mb-2">
        <div class="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
         <svg class="w-5 h-5 text-amber-600" fill="currentColor" viewbox="0 0 24 24">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
         </svg>
        </div><span class="text-gray-600 text-sm">Total Properties</span>
       </div>
       <p class="text-2xl sm:text-3xl font-display font-bold text-gray-800">24</p>
      </div>
      <div class="bg-white rounded-xl p-4 sm:p-6 border border-emerald-200 card-hover shadow-md">
       <div class="flex items-center gap-3 mb-2">
        <div class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
         <svg class="w-5 h-5 text-emerald-600" fill="currentColor" viewbox="0 0 24 24">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
         </svg>
        </div><span class="text-gray-600 text-sm">Total Value</span>
       </div>
       <p class="text-2xl sm:text-3xl font-display font-bold text-emerald-600">$48.5M</p>
      </div>
      <div class="bg-white rounded-xl p-4 sm:p-6 border border-blue-200 card-hover shadow-md">
       <div class="flex items-center gap-3 mb-2">
        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
         <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewbox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
         </svg>
        </div><span class="text-gray-600 text-sm">Holders</span>
       </div>
       <p class="text-2xl sm:text-3xl font-display font-bold text-gray-800">4</p>
      </div>
      <div class="bg-white rounded-xl p-4 sm:p-6 border border-purple-200 card-hover shadow-md">
       <div class="flex items-center gap-3 mb-2">
        <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
         <svg class="w-5 h-5 text-purple-600" fill="currentColor" viewbox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
         </svg>
        </div><span class="text-gray-600 text-sm">Avg. ROI</span>
       </div>
       <p class="text-2xl sm:text-3xl font-display font-bold text-purple-600">12.4%</p>
      </div>
     </div><!-- Two Column Layout -->
     <div class="grid lg:grid-cols-2 gap-8"><!-- Property Holders Section -->
      <div class="bg-white rounded-2xl p-6 border border-amber-200 slide-in shadow-lg">
       <div class="flex items-center gap-3 mb-6">
        <div class="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-md">
         <svg class="w-6 h-6 text-gray-900" fill="currentColor" viewbox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
         </svg>
        </div>
        <div>
         <h3 class="font-display text-xl font-bold text-gray-800">Property Holders</h3>
         <p class="text-gray-500 text-sm">Click to view portfolio</p>
        </div>
       </div>
       <div class="space-y-3" id="holders-list"><!-- Holder cards rendered by JS -->
       </div>
      </div><!-- Property Categories Section -->
      <div class="bg-white rounded-2xl p-6 border border-amber-200 slide-in shadow-lg" style="animation-delay: 0.2s;">
       <div class="flex items-center gap-3 mb-6">
        <div class="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center shadow-md">
         <svg class="w-6 h-6 text-gray-900" fill="currentColor" viewbox="0 0 24 24">
          <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
         </svg>
        </div>
        <div>
         <h3 class="font-display text-xl font-bold text-gray-800">Property Categories</h3>
         <p class="text-gray-500 text-sm">Browse by type</p>
        </div>
       </div>
       <div class="grid grid-cols-2 gap-4" id="categories-grid"><!-- Category cards rendered by JS -->
       </div>
      </div>
     </div>
    </div><!-- Properties View (Hidden by default) -->
    <div id="properties-view" class="hidden">
     <div class="mb-8"><button onclick="showDashboard()" class="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors mb-4">
       <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
       </svg> Back to Dashboard </button>
      <h2 id="view-title" class="font-display text-3xl sm:text-4xl font-bold text-gray-800 mb-2"></h2>
      <p id="view-subtitle" class="text-gray-600"></p>
      <div class="w-20 h-1 gradient-gold mt-4 rounded-full"></div>
     </div>
     <div id="properties-grid" class="property-grid"><!-- Properties rendered by JS -->
     </div>
    </div>
   </main><!-- Footer -->
   <footer class="border-t border-amber-200 mt-12 bg-white/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
     <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
       <div class="w-8 h-8 gradient-gold rounded-lg flex items-center justify-center shadow-md">
        <svg class="w-4 h-4 text-gray-900" fill="currentColor" viewbox="0 0 24 24">
         <path d="M12 3L4 9v12h16V9l-8-6z" />
        </svg>
       </div><span class="font-display text-gray-800 font-semibold">Crown Estates</span>
      </div>
      <p class="text-gray-500 text-sm">© 2024 Premium Property Holdings. All rights reserved.</p>
     </div>
    </div>
   </footer>
  </div>
  <script>
    // Data
    const holders = [
      {
        id: 1,
        name: "Alexander Sterling",
        avatar: "AS",
        color: "from-amber-500 to-orange-600",
        totalValue: "$15.2M",
        properties: 8,
        portfolio: [
          { id: 1, name: "Sunset Villa Estate", type: "Villa", location: "Beverly Hills, CA", value: "$4.5M", area: "8,500 sq ft", image: "🏛️", status: "Occupied" },
          { id: 2, name: "Marina Bay Plot", type: "Plot", location: "Miami, FL", value: "$2.8M", area: "12,000 sq ft", image: "🏗️", status: "Development" },
          { id: 3, name: "Highland Acres", type: "Land", location: "Colorado Springs, CO", value: "$1.9M", area: "50 acres", image: "🌄", status: "Available" },
          { id: 4, name: "Tech Park Investment", type: "Investment", location: "Austin, TX", value: "$3.2M", area: "25,000 sq ft", image: "📈", status: "Leased" },
          { id: 5, name: "Coastal Retreat Villa", type: "Villa", location: "San Diego, CA", value: "$2.8M", area: "5,200 sq ft", image: "🏖️", status: "Available" }
        ]
      },
      {
        id: 2,
        name: "Victoria Blackwood",
        avatar: "VB",
        color: "from-emerald-500 to-teal-600",
        totalValue: "$12.8M",
        properties: 6,
        portfolio: [
          { id: 6, name: "Emerald Gardens Villa", type: "Villa", location: "Napa Valley, CA", value: "$5.1M", area: "10,200 sq ft", image: "🍷", status: "Occupied" },
          { id: 7, name: "Downtown Commercial Plot", type: "Plot", location: "Seattle, WA", value: "$3.4M", area: "8,000 sq ft", image: "🏢", status: "Development" },
          { id: 8, name: "Riverside Ranch Land", type: "Land", location: "Montana", value: "$2.1M", area: "120 acres", image: "🌲", status: "Available" },
          { id: 9, name: "Retail Complex Investment", type: "Investment", location: "Portland, OR", value: "$2.2M", area: "15,000 sq ft", image: "🛍️", status: "Leased" }
        ]
      },
      {
        id: 3,
        name: "Marcus Chen",
        avatar: "MC",
        color: "from-blue-500 to-indigo-600",
        totalValue: "$11.5M",
        properties: 5,
        portfolio: [
          { id: 10, name: "Pacific Heights Villa", type: "Villa", location: "San Francisco, CA", value: "$6.2M", area: "7,800 sq ft", image: "🌉", status: "Occupied" },
          { id: 11, name: "Industrial Zone Plot", type: "Plot", location: "Phoenix, AZ", value: "$1.8M", area: "20,000 sq ft", image: "🏭", status: "Available" },
          { id: 12, name: "Desert Oasis Land", type: "Land", location: "Nevada", value: "$1.5M", area: "80 acres", image: "🏜️", status: "Available" },
          { id: 13, name: "Mixed-Use Investment", type: "Investment", location: "Las Vegas, NV", value: "$2.0M", area: "18,000 sq ft", image: "🎰", status: "Leased" }
        ]
      },
      {
        id: 4,
        name: "Isabella Romano",
        avatar: "IR",
        color: "from-purple-500 to-pink-600",
        totalValue: "$9.0M",
        properties: 5,
        portfolio: [
          { id: 14, name: "Mediterranean Villa", type: "Villa", location: "Santa Barbara, CA", value: "$3.8M", area: "6,500 sq ft", image: "���", status: "Available" },
          { id: 15, name: "Lakefront Plot", type: "Plot", location: "Lake Tahoe, NV", value: "$2.2M", area: "15,000 sq ft", image: "🏔️", status: "Development" },
          { id: 16, name: "Vineyard Land", type: "Land", location: "Sonoma, CA", value: "$1.5M", area: "40 acres", image: "🍇", status: "Occupied" },
          { id: 17, name: "Boutique Hotel Investment", type: "Investment", location: "Carmel, CA", value: "$1.5M", area: "12,000 sq ft", image: "🏨", status: "Leased" }
        ]
      }
    ];

    const categories = [
      { id: "land", name: "Land", icon: "🌄", color: "from-green-600 to-emerald-700", count: 5, description: "Raw land & agricultural" },
      { id: "plot", name: "Plot", icon: "🏗️", color: "from-blue-600 to-cyan-700", count: 6, description: "Development ready" },
      { id: "villa", name: "Villa", icon: "🏛️", color: "from-amber-600 to-orange-700", count: 7, description: "Luxury residences" },
      { id: "investment", name: "Investments", icon: "📈", color: "from-purple-600 to-pink-700", count: 6, description: "Commercial & mixed-use" }
    ];

    // Default config
    const defaultConfig = {
      dashboard_title: "Portfolio Dashboard",
      company_name: "Crown Estates",
      background_color: "#fdfbf7",
      surface_color: "#ffffff",
      text_color: "#1f2937",
      primary_action_color: "#d4af37",
      secondary_action_color: "#92400e",
      font_family: "Playfair Display",
      font_size: 16
    };

    let config = { ...defaultConfig };

    // Render functions
    function renderHolders() {
      const container = document.getElementById('holders-list');
      container.innerHTML = holders.map((holder, index) => `
        <button onclick="showHolderProperties(${holder.id})" 
                class="w-full flex items-center gap-4 p-4 bg-amber-50/50 hover:bg-amber-100/70 rounded-xl border border-amber-200 hover:border-amber-400 transition-all duration-300 card-hover group"
                style="animation-delay: ${index * 0.1}s;">
          <div class="w-12 h-12 bg-gradient-to-br ${holder.color} rounded-xl flex items-center justify-center font-display font-bold text-white text-lg shadow-lg">
            ${holder.avatar}
          </div>
          <div class="flex-1 text-left">
            <h4 class="font-display font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">${holder.name}</h4>
            <p class="text-gray-600 text-sm">${holder.properties} properties • ${holder.totalValue}</p>
          </div>
          <svg class="w-5 h-5 text-amber-600 group-hover:text-amber-700 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      `).join('');
    }

    function renderCategories() {
      const container = document.getElementById('categories-grid');
      container.innerHTML = categories.map((cat, index) => `
        <button onclick="showCategoryProperties('${cat.id}')" 
                class="relative overflow-hidden p-5 bg-gradient-to-br ${cat.color} rounded-xl card-hover group"
                style="animation-delay: ${index * 0.1}s;">
          <div class="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
          <div class="relative z-10">
            <span class="text-4xl mb-3 block">${cat.icon}</span>
            <h4 class="font-display font-bold text-white text-lg mb-1">${cat.name}</h4>
            <p class="text-white/70 text-xs mb-2">${cat.description}</p>
            <span class="inline-block bg-white/20 px-2 py-1 rounded-full text-xs text-white font-semibold">${cat.count} properties</span>
          </div>
        </button>
      `).join('');
    }

    function renderPropertyCard(property) {
      const statusColors = {
        'Available': 'bg-emerald-100 text-emerald-700 border-emerald-300',
        'Occupied': 'bg-blue-100 text-blue-700 border-blue-300',
        'Development': 'bg-amber-100 text-amber-700 border-amber-300',
        'Leased': 'bg-purple-100 text-purple-700 border-purple-300'
      };
      
      return `
        <div class="bg-white rounded-xl overflow-hidden border border-gray-200 card-hover fade-in shadow-md">
          <div class="h-40 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center text-6xl">
            ${property.image}
          </div>
          <div class="p-5">
            <div class="flex items-start justify-between mb-3">
              <span class="px-2 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700 border border-amber-300">${property.type}</span>
              <span class="px-2 py-1 text-xs font-semibold rounded-full border ${statusColors[property.status]}">${property.status}</span>
            </div>
            <h4 class="font-display font-bold text-gray-800 text-lg mb-2">${property.name}</h4>
            <p class="text-gray-600 text-sm flex items-center gap-1 mb-4">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              ${property.location}
            </p>
            <div class="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>
                <p class="text-xs text-gray-500">Value</p>
                <p class="font-display font-bold text-emerald-600 text-lg">${property.value}</p>
              </div>
              <div class="text-right">
                <p class="text-xs text-gray-500">Area</p>
                <p class="text-gray-800 font-semibold">${property.area}</p>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // Navigation functions
    function showDashboard() {
      document.getElementById('dashboard-view').classList.remove('hidden');
      document.getElementById('properties-view').classList.add('hidden');
      document.getElementById('nav-dashboard').classList.add('active');
      document.getElementById('nav-properties').classList.remove('active');
    }

    function showHolderProperties(holderId) {
      const holder = holders.find(h => h.id === holderId);
      if (!holder) return;
      
      document.getElementById('view-title').textContent = `${holder.name}'s Portfolio`;
      document.getElementById('view-subtitle').textContent = `${holder.properties} properties valued at ${holder.totalValue}`;
      document.getElementById('properties-grid').innerHTML = holder.portfolio.map(renderPropertyCard).join('');
      
      document.getElementById('dashboard-view').classList.add('hidden');
      document.getElementById('properties-view').classList.remove('hidden');
      document.getElementById('nav-dashboard').classList.remove('active');
      document.getElementById('nav-properties').classList.add('active');
    }

    function showCategoryProperties(categoryId) {
      const category = categories.find(c => c.id === categoryId);
      if (!category) return;
      
      const allProperties = holders.flatMap(h => h.portfolio);
      const filteredProperties = allProperties.filter(p => p.type.toLowerCase() === categoryId || 
        (categoryId === 'investment' && p.type === 'Investment'));
      
      document.getElementById('view-title').textContent = `${category.name} Properties`;
      document.getElementById('view-subtitle').textContent = `${filteredProperties.length} ${category.description.toLowerCase()} properties`;
      document.getElementById('properties-grid').innerHTML = filteredProperties.map(renderPropertyCard).join('');
      
      document.getElementById('dashboard-view').classList.add('hidden');
      document.getElementById('properties-view').classList.remove('hidden');
      document.getElementById('nav-dashboard').classList.remove('active');
      document.getElementById('nav-properties').classList.add('active');
    }

    function showAllProperties() {
      const allProperties = holders.flatMap(h => h.portfolio);
      
      document.getElementById('view-title').textContent = 'All Properties';
      document.getElementById('view-subtitle').textContent = `${allProperties.length} properties in portfolio`;
      document.getElementById('properties-grid').innerHTML = allProperties.map(renderPropertyCard).join('');
      
      document.getElementById('dashboard-view').classList.add('hidden');
      document.getElementById('properties-view').classList.remove('hidden');
      document.getElementById('nav-dashboard').classList.remove('active');
      document.getElementById('nav-properties').classList.add('active');
    }

    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    }

    // Config change handler
    async function onConfigChange(newConfig) {
      config = { ...defaultConfig, ...newConfig };
      
      // Update text content
      document.getElementById('dashboard-title').textContent = config.dashboard_title || defaultConfig.dashboard_title;
      document.getElementById('company-name').textContent = config.company_name || defaultConfig.company_name;
      
      // Update font
      const fontFamily = config.font_family || defaultConfig.font_family;
      document.querySelectorAll('.font-display').forEach(el => {
        el.style.fontFamily = `${fontFamily}, serif`;
      });
      
      // Update font size
      const baseSize = config.font_size || defaultConfig.font_size;
      document.documentElement.style.fontSize = `${baseSize}px`;
    }

    // Capabilities
    function mapToCapabilities(cfg) {
      return {
        recolorables: [
          {
            get: () => cfg.background_color || defaultConfig.background_color,
            set: (value) => { cfg.background_color = value; window.elementSdk.setConfig({ background_color: value }); }
          },
          {
            get: () => cfg.surface_color || defaultConfig.surface_color,
            set: (value) => { cfg.surface_color = value; window.elementSdk.setConfig({ surface_color: value }); }
          },
          {
            get: () => cfg.text_color || defaultConfig.text_color,
            set: (value) => { cfg.text_color = value; window.elementSdk.setConfig({ text_color: value }); }
          },
          {
            get: () => cfg.primary_action_color || defaultConfig.primary_action_color,
            set: (value) => { cfg.primary_action_color = value; window.elementSdk.setConfig({ primary_action_color: value }); }
          },
          {
            get: () => cfg.secondary_action_color || defaultConfig.secondary_action_color,
            set: (value) => { cfg.secondary_action_color = value; window.elementSdk.setConfig({ secondary_action_color: value }); }
          }
        ],
        borderables: [],
        fontEditable: {
          get: () => cfg.font_family || defaultConfig.font_family,
          set: (value) => { cfg.font_family = value; window.elementSdk.setConfig({ font_family: value }); }
        },
        fontSizeable: {
          get: () => cfg.font_size || defaultConfig.font_size,
          set: (value) => { cfg.font_size = value; window.elementSdk.setConfig({ font_size: value }); }
        }
      };
    }

    function mapToEditPanelValues(cfg) {
      return new Map([
        ["dashboard_title", cfg.dashboard_title || defaultConfig.dashboard_title],
        ["company_name", cfg.company_name || defaultConfig.company_name]
      ]);
    }

    // Initialize
    renderHolders();
    renderCategories();

    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
      });
    }
  </script>
 <script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9c1f1e58c4ab47d6',t:'MTc2OTA4NTYxMy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>