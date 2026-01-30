const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// Links your backend to your Cloudinary account using the .env values
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Sets up the storage folder in Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'real_estate_docs',
    resource_type: 'auto', // IMPORTANT: This allows PDFs, Docs, and Images
    allowed_formats: ['pdf', 'jpg', 'png', 'jpeg'], // Add pdf here
  },
});

const upload = multer({ storage: storage });

module.exports = { cloudinary, upload };