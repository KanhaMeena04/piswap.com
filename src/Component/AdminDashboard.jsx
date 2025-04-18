import React, { useState } from 'react';

const AdminDashboard = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'buy', user: 'user1@example.com', amount: '100 PI', price: '0.9 USDT', status: 'pending' },
    { id: 2, type: 'sell', user: 'user2@example.com', amount: '50 PI', price: '1.1 USDT', status: 'completed' },
  ]);

  const [coins, setCoins] = useState([
    { symbol: 'PI', buyPrice: '0.9', sellPrice: '1.1', description: 'Pi Network Cryptocurrency' },
    { symbol: 'DOGE', buyPrice: '0.15', sellPrice: '0.17', description: 'Dogecoin' },
    { symbol: 'P2P', buyPrice: '1.2', sellPrice: '1.4', description: 'P2P Token' },
  ]);

  const [editingCoin, setEditingCoin] = useState(null);

  const handleUpdateCoin = (coin) => {
    setCoins(prevCoins => 
      prevCoins.map(c => 
        c.symbol === coin.symbol ? coin : c
      )
    );
    setEditingCoin(null);
  };

  const handleStatusChange = (transactionId, newStatus) => {
    setTransactions(prevTransactions =>
      prevTransactions.map(t =>
        t.id === transactionId ? { ...t, status: newStatus } : t
      )
    );
  };

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    backgroundImage: null,
    punchline: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      backgroundImage: file
    }));
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-[#1E1E3F] text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <button 
              onClick={onClose}
              className="hover:text-gray-300 bg-transparent border-none text-white cursor-pointer flex items-center gap-2"
            >
              <span>Close</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Form Fields */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter title"
              />
            </div>

            {/* Subtitle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subtitle <span className="text-red-500">*</span>
              </label>
              <textarea
                name="subtitle"
                value={formData.subtitle}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter subtitle"
              />
            </div>

            {/* Background Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Background image <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <div className="text-sm text-gray-500 mb-2">Currently:</div>
                <div className="flex items-center gap-4">
                  <label className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                    <span>Choose File</span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept="image/*"
                    />
                  </label>
                  <span className="text-sm text-gray-500">
                    {formData.backgroundImage ? formData.backgroundImage.name : 'No file chosen'}
                  </span>
                </div>
              </div>
            </div>

            {/* Punchline */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Punchline <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="punchline"
                value={formData.punchline}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter punchline"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button 
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Save
            </button>
            <button 
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
            <button 
              className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Save and add another
            </button>
            <button 
              className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Save and continue editing
            </button>
            <button 
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 