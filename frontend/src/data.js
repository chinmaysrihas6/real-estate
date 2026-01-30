/*
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
          { id: 14, name: "Mediterranean Villa", type: "Villa", location: "Santa Barbara, CA", value: "$3.8M", area: "6,500 sq ft", image: "🌺", status: "Available" },
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


    // data.js
export const holders = [
  {
    id: 1,
    name: "Alexander Sterling",
    avatar: "AS",
    color: "from-amber-500 to-orange-600",
    totalValue: "$15.2M",
    propertiesCount: 8,
    portfolio: [
      { 
        id: 1, 
        name: "Sunset Villa Estate", 
        type: "Villa", 
        location: "Beverly Hills, CA", 
        value: "$4.5M", 
        area: "8,500 sq ft", 
        image: "🏛️", 
        status: "Occupied",
        purchaseDate: "2023-05-15", // New Field
        purchasedFrom: "Sterling Trusts", // New Field
        stampDuty: "7.5%", // New Field
        pdfUrl: "/documents/sunset_villa.pdf" // Path in /public/documents
      },
      // ... Add others here following the same pattern
    ]
  },
  {
    id: 2,
    name: "Victoria Blackwood",
    avatar: "VB",
    color: "from-emerald-500 to-teal-600",
    totalValue: "$12.8M",
    propertiesCount: 6,
    portfolio: [
       { id: 6, name: "Emerald Gardens Villa", type: "Villa", location: "Napa Valley, CA", value: "$5.1M", area: "10,200 sq ft", image: "🍷", status: "Occupied", purchaseDate: "2022-11-20", purchasedFrom: "Napa Land Corp", stampDuty: "8%", pdfUrl: "/documents/emerald_gardens.pdf" },
    ]
  }
];

export const categories = [
  { id: "land", name: "Land", icon: "🌄", color: "from-green-600 to-emerald-700", count: 5, description: "Raw land & agricultural" },
  { id: "plot", name: "Plot", icon: "🏗️", color: "from-blue-600 to-cyan-700", count: 6, description: "Development ready" },
  { id: "villa", name: "Villa", icon: "🏛️", color: "from-amber-600 to-orange-700", count: 7, description: "Luxury residences" },
  { id: "investment", name: "Investments", icon: "📈", color: "from-purple-600 to-pink-700", count: 6, description: "Commercial & mixed-use" }
];
*/
export const holders = [
  {
    id: 1,
    name: "Alexander Sterling",
    avatar: "AS",
    color: "from-amber-500 to-orange-600",
    totalValue: "$15.2M",
    propertiesCount: 8,
    portfolio: [
      { 
        id: 1, 
        name: "Sunset Villa Estate", 
        type: "Villa", 
        location: "Beverly Hills, CA", 
        value: "$4.5M", 
        area: "8,500 sq ft", 
        image: "🏛️", 
        status: "Occupied",
        // Golden Card Fields
        soldBy: "Sterling Trusts",
        purchaseDate: "15 May 2023",
        stampValue: "$337,500", // 7.5% of 4.5M
        marketValue: "$4,800,000",
        registrationStatus: "Registered",
        saleDate: "Holding",
        buyerName: "N/A",
        // PDF Vault Documents
        documents: {
          "Sale Deed": "/documents/as_villa_sale_deed.pdf",
          "EC (Encumbrance Certificate)": "/documents/as_villa_ec.pdf",
          "Link Document": "/documents/as_villa_link.pdf",
          "MOU": "/documents/as_villa_mou.pdf",
          "Agreement of Sale": "/documents/as_villa_agreement.pdf"
        }
      }
    ]
  },
  {
    id: 2,
    name: "Victoria Blackwood",
    avatar: "VB",
    color: "from-emerald-500 to-teal-600",
    totalValue: "$12.8M",
    propertiesCount: 6,
    portfolio: [
       { 
         id: 6, 
         name: "Emerald Gardens Villa", 
         type: "Villa", 
         location: "Napa Valley, CA", 
         value: "$5.1M", 
         area: "10,200 sq ft", 
         image: "🍷", 
         status: "Occupied",
         soldBy: "Napa Land Corp",
         purchaseDate: "20 Nov 2022",
         stampValue: "$408,000",
         marketValue: "$5,300,000",
         registrationStatus: "Registered",
         saleDate: "Holding",
         buyerName: "N/A",
         documents: {
          "Sale Deed": "/documents/vb_villa_sale_deed.pdf",
          "EC (Encumbrance Certificate)": "/documents/vb_villa_ec.pdf",
          "Link Document": "/documents/vb_villa_link.pdf",
          "MOU": "/documents/vb_villa_mou.pdf",
          "Agreement of Sale": "/documents/vb_villa_agreement.pdf"
        }
      },
    ]
  }
];

export const categories = [
  { id: "land", name: "Land", icon: "🌄", color: "from-green-600 to-emerald-700", count: 5, description: "Raw land & agricultural" },
  { id: "plot", name: "Plot", icon: "🏗️", color: "from-blue-600 to-cyan-700", count: 6, description: "Development ready" },
  { id: "villa", name: "Villa", icon: "🏛️", color: "from-amber-600 to-orange-700", count: 7, description: "Luxury residences" },
  { id: "investment", name: "Investments", icon: "📈", color: "from-purple-600 to-pink-700", count: 6, description: "Commercial & mixed-use" }
];

