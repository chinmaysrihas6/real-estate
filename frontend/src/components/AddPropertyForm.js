import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddPropertyForm = ({ property, onClose, initialData, onEdit }) => {
    // 1. Text Data State
    const [formData, setFormData] = useState({
        propertyName: '',
        propertySoldBy: '',
        dateOfPurchase: '',
        address: '',
        registrationStatus: 'registered',
        stampValue: '',
        marketValue: '',
        dateOfSale: '',
        amount: '',
        nameOfBuyer: ''
    });

    // 2. Multi-PDF State
    const [documents, setDocuments] = useState({
        saleDeed: null,
        ec: null,
        linkDocument: null,
        mou: null,
        agreementOfSale: null
    });

    // 3. Load existing data if editing
    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleFileChange = (e, type) => {
        setDocuments(prev => ({ ...prev, [type]: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        
        // Append all text fields
        Object.keys(formData).forEach(key => data.append(key, formData[key]));
        
        // Append all PDFs (if selected)
        Object.keys(documents).forEach(key => {
            if (documents[key]) data.append(key, documents[key]);
        });

        try {
            const endpoint = initialData 
                ? `http://localhost:5000/api/properties/update/${initialData._id}`
                : 'http://localhost:5000/api/properties/add';
            
            await axios.post(endpoint, data);
            alert(initialData ? "Updated Successfully! ✨" : "Added Successfully! 🚀");
            if (onClose) onClose();
        } catch (err) {
            console.error(err);
            alert("Error saving property details.");
        }
    };

    return (
        <div className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-[#fffdf5] text-[#5d4037] p-8 md:p-12 rounded-sm max-w-4xl w-full relative border-t-[10px] border-[#d4af37] shadow-2xl my-auto">
                
                <button onClick={onClose} className="absolute top-4 right-6 text-[#5d4037] hover:text-red-600 text-4xl font-bold transition-transform hover:scale-110">
                    ✕
                </button>

                <form onSubmit={handleSubmit} className="space-y-12 font-serif">
                    
                    {/* PURCHASE DETAILS */}
                    <section>
                        <h3 className="text-center font-bold text-[#8b5e3c] text-2xl mb-8 tracking-[0.2em] italic underline underline-offset-8">purchase details</h3>
                        <div className="space-y-6 text-lg">
                            <div className="flex gap-2 items-end">
                                <span className="whitespace-nowrap">property sold by -</span>
                                <input value={formData.propertySoldBy} className="border-b border-black/20 bg-transparent flex-1 outline-none pb-1" onChange={e => setFormData({...formData, propertySoldBy: e.target.value})} />
                            </div>
                            <div className="flex gap-2 items-end">
                                <span className="whitespace-nowrap">name of the property -</span>
                                <input value={formData.propertyName} className="border-b border-black/20 bg-transparent flex-1 outline-none pb-1" onChange={e => setFormData({...formData, propertyName: e.target.value})} required />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                <div className="flex gap-2 items-end">
                                    <span className="whitespace-nowrap text-sm">date of purchase -</span>
                                    <input type="date" value={formData.dateOfPurchase} className="border-b border-black/20 bg-transparent flex-1 outline-none pb-1 text-sm" onChange={e => setFormData({...formData, dateOfPurchase: e.target.value})} />
                                </div>
                                <div className="flex gap-2 items-end">
                                    <span className="whitespace-nowrap text-sm">stamp value -</span>
                                    <input value={formData.stampValue} className="border-b border-black/20 bg-transparent flex-1 outline-none pb-1 text-sm" onChange={e => setFormData({...formData, stampValue: e.target.value})} />
                                </div>
                                <div className="flex gap-2 items-end">
                                    <span className="whitespace-nowrap text-sm">address -</span>
                                    <input value={formData.address} className="border-b border-black/20 bg-transparent flex-1 outline-none pb-1 text-sm" onChange={e => setFormData({...formData, address: e.target.value})} />
                                </div>
                                <div className="flex gap-2 items-end">
                                    <span className="whitespace-nowrap text-sm">market value -</span>
                                    <input value={formData.marketValue} className="border-b border-black/20 bg-transparent flex-1 outline-none pb-1 text-sm" onChange={e => setFormData({...formData, marketValue: e.target.value})} />
                                </div>
                            </div>
                            <div className="flex gap-2 items-center italic text-base opacity-90">
                                <span>regestred/unregistered -</span>
                                <select value={formData.registrationStatus} className="bg-transparent border-none outline-none font-bold underline cursor-pointer" onChange={e => setFormData({...formData, registrationStatus: e.target.value})}>
                                    <option value="registered">Registered</option>
                                    <option value="unregistered">Unregistered</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* SALE DETAILS */}
                    <section>
                        <h3 className="text-center font-bold text-[#8b5e3c] text-2xl mb-8 tracking-[0.2em] italic underline underline-offset-8">sale details</h3>
                        <div className="space-y-6 text-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                <div className="flex gap-2 items-end">
                                    <span className="whitespace-nowrap text-sm">date of sale -</span>
                                    <input type="date" value={formData.dateOfSale} className="border-b border-black/20 bg-transparent flex-1 outline-none pb-1 text-sm" onChange={e => setFormData({...formData, dateOfSale: e.target.value})} />
                                </div>
                                <div className="flex gap-2 items-end">
                                    <span className="whitespace-nowrap text-sm">amount -</span>
                                    <input value={formData.amount} className="border-b border-black/20 bg-transparent flex-1 outline-none pb-1 text-sm" onChange={e => setFormData({...formData, amount: e.target.value})} />
                                </div>
                            </div>
                            <div className="flex gap-2 items-end">
                                <span className="whitespace-nowrap">name of buyer -</span>
                                <input value={formData.nameOfBuyer} className="border-b border-black/20 bg-transparent flex-1 outline-none pb-1" onChange={e => setFormData({...formData, nameOfBuyer: e.target.value})} />
                            </div>
                        </div>
                    </section>

                    {/* MULTI-PDF DOCUMENT LIST */}
                    <section className="bg-black/5 p-6 rounded-lg border-2 border-dashed border-[#d4af37]/30">
                        <h4 className="font-bold text-[#8b5e3c] mb-4 uppercase text-sm tracking-widest">Document Vault (PDF)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { id: 'saleDeed', label: '1) Sale Deed' },
                                { id: 'ec', label: '2) EC (Encumbrance Certificate)' },
                                { id: 'linkDocument', label: '3) Link Document' },
                                { id: 'mou', label: '4) MOU' },
                                { id: 'agreementOfSale', label: '5) Agreement of Sale' }
                            ].map(doc => (
                                <div key={doc.id} className="flex flex-col gap-1">
                                    <span className="text-xs font-semibold">{doc.label}</span>
                                    <input 
                                        type="file" 
                                        accept=".pdf" 
                                        className="text-xs file:bg-[#d4af37]/20 file:border-none file:px-3 file:py-1 file:rounded file:text-[#5d4037]"
                                        onChange={(e) => handleFileChange(e, doc.id)}
                                    />
                                    {initialData?.[doc.id] && <span className="text-[10px] text-green-600 font-bold">✓ Existing Document Stored</span>}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SUBMIT BUTTON */}
                    <div className="flex justify-center pt-6">
                        <button 
                            type="submit" 
                            className="px-16 py-3 rounded-full font-bold text-gray-700 shadow-2xl hover:scale-105 transition-all uppercase tracking-[0.3em] text-xl"
                            style={{ 
                                background: 'linear-gradient(to right, #add8e6, #c792ea)',
                                boxShadow: '0 8px 25px rgba(199, 146, 234, 0.4)'
                            }}
                        >
                            {initialData ? 'UPDATE' : 'SUBMIT'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPropertyForm;