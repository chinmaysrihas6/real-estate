const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); // Forces use of Google's DNS

const mongoose = require('mongoose');
require('dotenv').config();
// ... rest of your code
const Holder = require('./models/Property'); // Change this line


const holdersData = [
  {
    name: "Alexander Sterling",
    avatar: "AS",
    color: "from-amber-500 to-orange-600",
    totalValue: "$15.2M",
    propertiesCount: 8,
    portfolio: [
      { 
        name: "Sunset Villa Estate", 
        type: "Villa", 
        location: "Beverly Hills, CA", 
        value: "$4.5M", 
        area: "8,500 sq ft", 
        image: "🏛️", 
        status: "Occupied",
        soldBy: "Sterling Trusts",
        purchaseDate: "15 May 2023",
        stampValue: "$337,500",
        marketValue: "$4,800,000",
        registrationStatus: "Registered",
        saleDate: "Holding",
        buyerName: "N/A",
        documents: {
          saleDeed: "#",
          ec: "#",
          linkDocument: "#",
          mou: "#",
          agreementOfSale: "#"
        }
      }
    ]
  }
];
const seedDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in .env");
    }

    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected! Seeding data...");

    await Holder.deleteMany({}); 
    await Holder.insertMany(holdersData);

    console.log("🌱 Database Seeded Successfully!");
  } catch (err) {
    console.error("❌ Seeding Error:", err.message);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();