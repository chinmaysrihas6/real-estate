const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: String,
    value: String,
    type: String, // Land, Villa, Plot, etc.
    status: String,
    
    // --- CLOUDINARY FIELDS ---
    image: { type: String },          // This stores the secure_url (e.g., https://res.cloudinary.com/...)
    cloudinaryId: { type: String },   // This stores the public_id for future edits/deletes
    // -------------------------

    soldBy: String,
    purchaseDate: String,
    stampValue: String,
    marketValue: String,
    registrationStatus: String,
    saleDate: String,
    buyerName: String,
    saleAmount: String,
    
    documents: {
        saleDeed: String,
        ec: String,
        linkDocument: String,
        mou: String,
        agreementOfSale: String
    }
}, { timestamps: true }); // Good practice to track when records are created

module.exports = mongoose.model('Property', propertySchema);