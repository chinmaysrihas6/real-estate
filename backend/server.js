// 1. MUST BE AT THE VERY TOP: Force DNS for your specific network issue
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const { upload } = require('./config/cloudinary'); 
const Holder = require('./models/Property'); 

const app = express();
app.use(cors());
app.use(express.json());

// 2. Connect to MongoDB using the "Long Form" URI from your .env
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ Connected to Property Database (Atlas)'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// 3. API Route to GET data for your React Frontend
app.get('/api/holders', async (req, res) => {
    try {
        const allHolders = await Holder.find(); 
        res.json(allHolders);
    } catch (err) {
        res.status(500).json({ message: "Error fetching data", error: err.message });
    }
});

// 4. API Route for Image Upload
// When you send a file from Postman/React, use the key "image"
app.post('/api/upload', upload.single('pdf'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    
    // req.file.path is the actual URL from Cloudinary
    res.json({ 
      message: "pdf uploaded successfully! 📸",
      pdfUrl: req.file.path 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/properties/add', upload.single('pdf'), async (req, res) => {
    try {
        const { holderName, name, location, value, type } = req.body;
        const pdfUrl = req.file.path; // Cloudinary URL

        const newProperty = {
            name,
            location,
            value,
            type,
            documents: { saleDeed: pdfUrl }
        };

        // This finds the person (e.g., Alexander) and pushes the new property into their portfolio array
        const updatedHolder = await Holder.findOneAndUpdate(
            { name: new RegExp(holderName, 'i') }, 
            { $push: { portfolio: newProperty } },
            { new: true, upsert: true } // Creates the person if they don't exist
        );

        res.status(200).json(updatedHolder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/', (req, res) => {
    res.send('Optimus Capital API is Running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));