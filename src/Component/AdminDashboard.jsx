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

  const handleDeleteCoin = (symbol) => {
    setCoins(prevCoins => prevCoins.filter(c => c.symbol !== symbol));
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

  // Marquee Content State
  const [marqueeContent, setMarqueeContent] = useState([
    { id: 1, text: 'Total Transaction Volume: ATH: 126M GEM: 6T USDT: 25M Other: 18T' },
    { id: 2, text: 'Total Commission: ATH: 3.2M GEM: 127B USDT: 1.3M' },
    { id: 3, text: 'Total USDT Withdrawn: 22M' },
    { id: 4, text: 'Total USDT Deposited: 30M' },
    { id: 5, text: 'Total Users: 964K' },
    { id: 6, text: 'Total Transactions: 430K' },
  ]);

  const [newMarqueeText, setNewMarqueeText] = useState('');

  // Marquee Management Functions
  const handleAddMarqueeText = () => {
    if (newMarqueeText.trim()) {
      setMarqueeContent(prev => [
        ...prev,
        { id: Date.now(), text: newMarqueeText }
      ]);
      setNewMarqueeText('');
    }
  };

  const handleDeleteMarqueeText = (id) => {
    setMarqueeContent(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateMarqueeText = (id, newText) => {
    setMarqueeContent(prev =>
      prev.map(item =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
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

          {/* Coin Management Section */}
          <div className="mb-8 mt-8">
            <h2 className="text-xl font-bold mb-4">Coin Price Management</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Symbol</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Buy Price (USDT)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sell Price (USDT)</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {coins.map((coin) => (
                    <tr key={coin.symbol}>
                      {editingCoin?.symbol === coin.symbol ? (
                        <>
                          <td className="px-6 py-4 whitespace-nowrap">{coin.symbol}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              type="number"
                              value={editingCoin.buyPrice}
                              onChange={(e) => setEditingCoin({...editingCoin, buyPrice: e.target.value})}
                              className="border rounded px-2 py-1 w-24"
                              step="0.01"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              type="number"
                              value={editingCoin.sellPrice}
                              onChange={(e) => setEditingCoin({...editingCoin, sellPrice: e.target.value})}
                              className="border rounded px-2 py-1 w-24"
                              step="0.01"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              type="text"
                              value={editingCoin.description}
                              onChange={(e) => setEditingCoin({...editingCoin, description: e.target.value})}
                              className="border rounded px-2 py-1 w-full"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap space-x-2">
                            <button
                              onClick={() => handleUpdateCoin(editingCoin)}
                              className="text-green-600 hover:text-green-900"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => setEditingCoin(null)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Cancel
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="px-6 py-4 whitespace-nowrap">{coin.symbol}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{coin.buyPrice}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{coin.sellPrice}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{coin.description}</td>
                          <td className="px-6 py-4 whitespace-nowrap space-x-2">
                            <button
                              onClick={() => setEditingCoin(coin)}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteCoin(coin.symbol)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Marquee Content Management Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Marquee Content Management</h2>
            <div className="space-y-4">
              {/* Add New Marquee Text */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMarqueeText}
                  onChange={(e) => setNewMarqueeText(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter new marquee text"
                />
                <button
                  onClick={handleAddMarqueeText}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Add
                </button>
              </div>

              {/* Marquee Text List */}
              <div className="space-y-2">
                {marqueeContent.map((item) => (
                  <div key={item.id} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <input
                      type="text"
                      value={item.text}
                      onChange={(e) => handleUpdateMarqueeText(item.id, e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => handleDeleteMarqueeText(item.id)}
                      className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button 
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              onClick={() => {
                // Save all changes to backend
                console.log('Saving changes:', { coins, marqueeContent });
              }}
            >
              Save All Changes
            </button>
            <button 
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 