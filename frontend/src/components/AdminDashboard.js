import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleUpload = async () => {
        if (!file) return alert("Please select a PDF first!");
        
        const formData = new FormData();
        formData.append('pdf', file); // This MUST match upload.single('pdf') in your server.js

        setUploading(true);
        try {
            const res = await axios.post('http://localhost:5000/api/upload', formData);
            console.log("Global PDF Link:", res.data.pdfUrl);
            alert("Document safely stored in the cloud! 📄");
        } catch (err) {
            console.error("Upload failed", err);
            alert("Upload failed. Check if server is running.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <h2>Admin: Upload Property Documents</h2>
            <input 
                type="file" 
                accept=".pdf" 
                onChange={(e) => setFile(e.target.files[0])} 
            />
            <button onClick={handleUpload} disabled={uploading}>
                {uploading ? "Uploading to Cloud..." : "Upload PDF"}
            </button>
        </div>
    );
};

export default AdminDashboard;