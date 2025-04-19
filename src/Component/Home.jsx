import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../Images/logo12.png'
import main1 from '../Images/image1.jpg';
import main2 from '../Images/image2.jpg';
import main3 from '../Images/image3.jpg';
import main4 from '../Images/image4.jpg';
import main5 from '../Images/image5.jpg';

import w1 from '../Images/work1.svg';
import w2 from '../Images/work2.svg';
import w3 from '../Images/work3.svg';

import e1 from '../Images/earn1.webp'
import e2 from '../Images/earn2.webp'
import e3 from '../Images/earn3.webp'

import i1 from '../Images/icon1.svg'
import i2 from '../Images/icon2.svg'
import i3 from '../Images/icon3.svg'

// Coin icons
import piIcon from '../Images/coins/pilogo1.png'
import dogeIcon from '../Images/coins/doge.svg'
import p2pIcon from '../Images/coins/p2p.svg'
import oceanIcon from '../Images/coins/ocean.svg'
import sdaIcon from '../Images/coins/sda.svg'
import lionIcon from '../Images/coins/lion.svg'
import gemIcon from '../Images/coins/gem.svg'
import EmailConfirmation from './EmailConfirmation';
import Register from './Register';
import CryptoRegister from './CryptoRegister';
import AdminDashboard from './AdminDashboard';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSellMode, setIsSellMode] = useState(false);
  const [activeGuide, setActiveGuide] = useState('buy'); // 'buy' or 'sell'
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showEmailConfirmation, setShowEmailConfirmation] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [showCryptoRegister, setShowCryptoRegister] = useState(false);
  const [showSwapPopup, setShowSwapPopup] = useState(false);
  const [showTransactionPopup, setShowTransactionPopup] = useState(false);
  const [showCountrySelector, setShowCountrySelector] = useState(false);
  const [swapAmount, setSwapAmount] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [showCopyToast, setShowCopyToast] = useState(false);
  const [showSubmitToast, setShowSubmitToast] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'India',
    flag: '🇮🇳',
    code: 'IN'
  });
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [walletId] = useState('0x1234567890abcdef1234567890abcdef12345678');
  const [transactions, setTransactions] = useState([
    {
      seller: "Kumar Rahul",
      rating: 5,
      transactions: "96 Transactions",
      price: "0.8 USDT",
      available: "94,892.39 PI",
      limit: "5 - 10,000 USDT",
      transactionId: "TX78945612",
      time: "2024-03-19 14:30"
    },
    {
      seller: "cory84",
      rating: 1,
      transactions: "0 Transaction",
      price: "0.206 USDT",
      available: "177 PI",
      limit: "5 - 36.461 USDT",
      transactionId: "TX45612378",
      time: "2024-03-19 14:25"
    },
    {
      seller: "GHERBIABDALHAMID",
      rating: 0,
      transactions: "0 Transaction",
      price: "0.205 USDT",
      available: "763.67 PI",
      limit: "5 - 156.552 USDT",
      transactionId: "TX96325874",
      time: "2024-03-19 14:20"
    },
    {
      seller: "zainminhas@gmail.com",
      rating: 0,
      transactions: "0 Transaction",
      price: "0.2 USDT",
      available: "100 PI",
      limit: "5 - 20 USDT",
      transactionId: "TX15975364",
      time: "2024-03-19 14:15"
    }
  ]);

  const faqRef = useRef(null);
  const navigate = useNavigate();

  const countries = [
    { name: 'India', flag: '🇮🇳', code: 'IN' },
    { name: 'United States', flag: '🇺🇸', code: 'US' },
    { name: 'United Kingdom', flag: '🇬🇧', code: 'GB' },
    { name: 'Canada', flag: '🇨🇦', code: 'CA' },
    { name: 'Australia', flag: '🇦🇺', code: 'AU' },
    { name: 'Germany', flag: '🇩🇪', code: 'DE' },
    { name: 'France', flag: '🇫🇷', code: 'FR' },
    { name: 'Japan', flag: '🇯🇵', code: 'JP' },
    { name: 'China', flag: '🇨🇳', code: 'CN' },
    { name: 'Brazil', flag: '🇧🇷', code: 'BR' }
  ];

  const handleModeToggle = (mode) => {
    setIsSellMode(mode === 'sell');
  };

  const buySteps = [
    {
      title: "1. Place an Order",
      description: "Once you place a P2P order, the crypto asset will be escrowed by Piswap P2P.",
      image: w1
    },
    {
      title: "2. Pay the Seller",
      description: "Send money to the seller via the suggested payment methods. Complete the fiat transaction and notify the seller on Piswap P2P.",
      image: w2
    },
    {
      title: "3. Receive Crypto",
      description: "Once the seller confirms receipt of the money, the escrowed crypto will be released to you.",
      image: w3
    }
  ];

  const sellSteps = [
    {
      title: "1. List Your Crypto",
      description: "Create a sell order and your crypto will be securely escrowed by Piswap P2P.",
      image: w1
    },
    {
      title: "2. Confirm Payment",
      description: "Once the buyer sends payment via your preferred method, verify the payment receipt.",
      image: w2
    },
    {
      title: "3. Release Crypto",
      description: "After confirming payment, release the crypto to complete the transaction.",
      image: w3
    }
  ];

  const faqData = [
    {
      question: "What is P2P exchange?",
      answer: "P2P (Peer-to-Peer) exchange is a decentralized marketplace where users can trade cryptocurrencies directly with each other. It allows buyers and sellers to interact directly without intermediaries, offering flexible payment methods and competitive prices."
    },
    {
      question: "Which cryptocurrencies are supported in the Piswap P2P?",
      answer: "Piswap P2P supports multiple cryptocurrencies including PI, DOGE, P2P, OCEAN, SDA, LION, and GEM. Each cryptocurrency can be traded with various payment methods and competitive market rates."
    },
    {
      question: "Why is Piswap P2P better than other P2P marketplaces?",
      answer: "Piswap P2P offers enhanced security, lower fees, wider payment options, and faster transaction times. Our escrow service ensures safe trades, while our user-friendly interface makes trading simple for both beginners and experienced users."
    },
    {
      question: "As a P2P trader, how am I protected?",
      answer: "Your security is our priority. We use an escrow service to hold funds during transactions, implement strict KYC procedures, provide 24/7 customer support, and offer dispute resolution services to ensure safe and secure trading."
    }
  ];

  const scrollToFaq = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAdminClick = () => {
    setShowAdminPanel(true);
  };

  const handleCopyWallet = async () => {
    try {
      await navigator.clipboard.writeText(walletId);
      setShowCopyToast(true);
      setTimeout(() => setShowCopyToast(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleTransactionSubmit = () => {
    const newTransaction = {
      seller: "Your Name",
      rating: 0,
      transactions: "0 Transaction",
      price: `${swapAmount} USDT`,
      available: `${(parseFloat(swapAmount) || 0) * 5} PI`,
      limit: `5 - ${swapAmount} USDT`,
      transactionId: transactionId,
      time: new Date().toLocaleString()
    };

    setTransactions([newTransaction, ...transactions]);
    setShowTransactionPopup(false);
    setSwapAmount('');
    setTransactionId('');
    setShowSubmitToast(true);
    setTimeout(() => setShowSubmitToast(false), 2000);
  };

  return (
    <div className="relative">
      <div className='bg-gradient-to-b from-[#4B0082] to-[#663399] min-h-screen py-4 md:py-8'>
        {/* Marquee Section */}
        <div className="w-full overflow-hidden whitespace-nowrap bg-[#4B0082] text-yellow-500 py-2 mb-4 md:mb-6 text-sm md:text-base">
          <div className="animate-marquee flex space-x-16">
            <p>Total Transaction Volume: ATH: 126M GEM: 6T USDT: 25M Other: 18T</p>
            <p>Total Commission: ATH: 3.2M GEM: 127B USDT: 1.3M</p>
            <p>Total USDT Withdrawn: 22M</p>
            <p>Total USDT Deposited: 30M</p>
            <p>Total Users: 964K</p>
            <p>Total Transactions: 430K</p>

            {/* Duplicate for seamless loop */}
            <p>Total Transaction Volume: ATH: 126M GEM: 6T USDT: 25M Other: 18T</p>
            <p>Total Commission: ATH: 3.2M GEM: 127B USDT: 1.3M</p>
            <p>Total USDT Withdrawn: 22M</p>
            <p>Total USDT Deposited: 30M</p>
            <p>Total Users: 964K</p>
            <p>Total Transactions: 430K</p>
          </div>
        </div>

        {/* Main Container */}
        <div className="w-full max-w-7xl mx-auto px-4">
          {/* Navigation Bar */}
          <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-white rounded-2xl shadow-lg mb-4 md:mb-8">
            {/* Left side - Logo and Brand */}
            <div className="flex items-center gap-4">
              <img src={logo} alt="logo" className="w-20 md:w-24 h-auto" />
              <span className="bold text-yellow-500">PiSawp Network</span>
            </div>

            {/* Right side - Buttons and Menu */}
            <div className="flex items-center gap-4">
              {/* Login Button */}
              <button 
                onClick={() => setShowLoginPopup(true)} 
                className="bold text-yellow-500 hover:text-[#663399] transition-colors"
              >
                Login
              </button>

              {/* Mobile Menu Button */}
              <div className="relative md:hidden">
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-center p-2 text-[#4B0082]"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                    <button 
                      onClick={() => setShowRegisterPopup(true)}
                      className="w-full text-left px-4 py-2 text-[#4B0082] hover:bg-gray-100"
                    >
                      Register
                    </button>
                    <div className="border-t border-gray-200 my-2"></div>
                    <div className="max-h-60 overflow-y-auto">
                      {countries.map((country) => (
                        <button
                          key={country.code}
                          onClick={() => {
                            setSelectedCountry(country);
                            setIsOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-[#4B0082] hover:bg-gray-100 flex items-center gap-2 ${
                            selectedCountry.code === country.code ? 'bg-gray-100' : ''
                          }`}
                        >
                          <span className="text-xl">{country.flag}</span>
                          <span className="text-sm font-medium">{country.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Desktop Buttons */}
              <div className="hidden md:flex items-center gap-4">
                <button 
                  onClick={() => setShowRegisterPopup(true)}
                  className="bg-[#4B0082] text-white px-4 py-2 rounded-full hover:bg-[#663399] transition"
                >
                  Register
                </button>
                <div className="relative">
                  <button 
                    onClick={() => setShowCountrySelector(!showCountrySelector)}
                    className="flex items-center justify-center gap-2 px-4 py-2 border border-[#4B0082] rounded-lg text-[#4B0082] hover:bg-gray-100"
                  >
                    <span className="text-xl">{selectedCountry.flag}</span>
                    <span className="text-sm font-medium">{selectedCountry.name}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Desktop Country Dropdown */}
                  {showCountrySelector && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                      <div className="max-h-60 overflow-y-auto">
                        {countries.map((country) => (
                          <button
                            key={country.code}
                            onClick={() => {
                              setSelectedCountry(country);
                              setShowCountrySelector(false);
                            }}
                            className={`w-full text-left px-4 py-2 text-[#4B0082] hover:bg-gray-100 flex items-center gap-2 ${
                              selectedCountry.code === country.code ? 'bg-gray-100' : ''
                            }`}
                          >
                            <span className="text-xl">{country.flag}</span>
                            <span className="text-sm font-medium">{country.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>

          {/* User Guide Button */}
          <div className="flex justify-end mb-4 md:mb-8 px-4">
            <button 
              onClick={scrollToFaq}
              className="bg-yellow-400 text-[#4B0082] px-4 py-2 rounded-full hover:bg-yellow-300 transition"
            >
              User Guide
            </button>
          </div>

          {/* Main Banner Section - Hidden on Mobile */}
          <div className="mb-4 md:mb-8 px-4 hidden md:block">
            <img src={main1} alt="Main Banner" className="w-full h-auto rounded-2xl shadow-lg" />
          </div>

          {/* Image Grid Section - Outside the box */}
          <div className="flex md:grid md:grid-cols-4 gap-4 p-4 overflow-x-auto pb-4 mx-4">
            <div className="flex-none w-[280px] md:w-auto relative group overflow-hidden rounded-lg">
              <img 
                src={main2} 
                alt="Trading Image 1" 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <div className="flex-none w-[280px] md:w-auto relative group overflow-hidden rounded-lg">
              <img 
                src={main3} 
                alt="Trading Image 2" 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <div className="flex-none w-[280px] md:w-auto relative group overflow-hidden rounded-lg">
              <img 
                src={main4} 
                alt="Trading Image 3" 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
            <div className="flex-none w-[280px] md:w-auto relative group overflow-hidden rounded-lg">
              <img 
                src={main5} 
                alt="Trading Image 4" 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          </div>

          {/* Trading Box Container */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mx-4">
            {/* Trading Section */}
            <div className="px-4 md:px-8 py-4 md:py-6">
              {/* Buy/Sell and Coins Section */}
              <div className="flex flex-col md:flex-row items-center justify-start mb-6 border-b border-[#9370DB] pb-4 space-y-4 md:space-y-0">
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                  <button 
                    onClick={() => handleModeToggle('buy')}
                    className="relative px-8 md:px-12 py-2.5 font-medium transition-colors shadow-sm w-full md:w-auto bg-[#9370DB] text-white flex items-center justify-center"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)',
                      borderRadius: '8px'
                    }}
                  >
                    <span className="relative z-10">Swap Coin</span>
                  </button>

                  <div className="relative w-full md:w-64 order-2 md:order-none">
                    <input 
                      type="text" 
                      placeholder="Enter amount" 
                      value={swapAmount}
                      onChange={(e) => setSwapAmount(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">USDT</span>
                  </div>

                  <button 
                    onClick={() => setShowSwapPopup(true)}
                    className="flex items-center justify-center gap-2 px-8 md:px-12 py-2.5 rounded-lg whitespace-nowrap transition-colors w-full md:w-auto bg-[#0B1426] text-white hover:bg-gray-800 order-3"
                  >
                    <img src={piIcon} alt="PI" className="w-5 h-5" />
                    <span>Swap</span>
                  </button>
                </div>
              </div>

              {/* Table Section */}
              <div className="border-t border-gray-100 overflow-x-auto">
                {/* Table Content */}
                <div className="min-w-[600px] md:min-w-0">
                  {/* Table Header */}
                  <div className="hidden md:grid md:grid-cols-5 py-4 border-b border-gray-200">
                    <div className="text-gray-500 font-medium px-4">Buyer Name</div>
                    <div className="text-gray-500 font-medium px-4">Price</div>
                    <div className="text-gray-500 font-medium px-4">Coin Quantity</div>
                    <div className="text-gray-500 font-medium px-4">Transaction ID</div>
                    <div className="text-gray-500 font-medium px-4">Time</div>
                  </div>

                  {transactions.map((item, index) => (
                    <div key={index}>
                      {/* Mobile View */}
                      <div className="block md:hidden bg-white rounded-lg mb-4 p-4 shadow-lg hover:bg-gray-50">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-gray-900 font-medium">{item.seller}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < item.rating ? "text-yellow-400" : "text-gray-200"}>
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-500 text-sm mb-3">{item.transactions}</p>
                          
                          <div className="flex justify-between items-center mb-3">
                            <div>
                              <span className="text-xl font-medium text-gray-900">{item.price.split(' ')[0]}</span>
                              <span className="ml-1 text-gray-500">{item.price.split(' ')[1]}</span>
                            </div>
                          </div>

                          <div className="space-y-1 mb-4">
                            <p>
                              <span className="text-gray-900">{item.available}</span>
                            </p>
                            <p className="text-gray-500">{item.limit}</p>
                            <p className="text-gray-900">ID: {item.transactionId}</p>
                            <p className="text-gray-500">{item.time}</p>
                          </div>
                        </div>
                      </div>

                      {/* Desktop View */}
                      <div className="hidden md:grid md:grid-cols-5 py-4 border-b border-gray-100 hover:bg-gray-50">
                        <div className="px-4">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-900 font-medium">{item.seller}</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < item.rating ? "text-yellow-400" : "text-gray-200"}>
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-500 text-sm">{item.transactions}</p>
                        </div>
                        <div className="px-4 flex items-center">
                          <div>
                            <span className="text-xl font-medium text-gray-900">{item.price.split(' ')[0]}</span>
                            <span className="ml-1 text-gray-500">{item.price.split(' ')[1]}</span>
                          </div>
                        </div>
                        <div className="px-4 flex flex-col justify-center">
                          <p className="text-gray-900">{item.available}</p>
                          <p className="text-gray-500">{item.limit}</p>
                        </div>
                        <div className="px-4 flex flex-col justify-center">
                          <p className="text-gray-900">{item.transactionId}</p>
                        </div>
                        <div className="px-4 flex flex-col justify-center">
                          <p className="text-gray-500">{item.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How P2P Works Section */}
      <div className="w-full max-w-7xl mx-auto px-4 bg-white mt-8 md:mt-12">
        <h1 className="text-2xl md:text-3xl font-bold p-4 md:p-6">How P2P Works</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 md:mt-6">
          <button 
            onClick={() => setActiveGuide('buy')}
            className={`px-5 py-2 rounded-3xl transition-colors font-bold ${
              activeGuide === 'buy'
                ? 'bg-neutral-800 text-white'
                : 'border-2 text-black hover:bg-blue-400'
            }`}
          >
            How to Buy
          </button>

          <button 
            onClick={() => setActiveGuide('sell')}
            className={`px-5 py-2 rounded-3xl transition-colors font-bold ${
              activeGuide === 'sell'
                ? 'bg-neutral-800 text-white'
                : 'border-2 text-black hover:bg-green-700'
            }`}
          >
            How to Sell
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-10 mt-6 md:mt-10 px-4">
          {(activeGuide === 'buy' ? buySteps : sellSteps).map((step, index) => (
            <div key={index} className="text-left w-full md:w-1/3">
              <img src={step.image} alt={step.title} className="w-20 md:w-24 h-auto mx-auto md:mx-0" />
              <h1 className="text-lg font-bold mt-4 text-center md:text-left">{step.title}</h1>
              <p className="text-gray-600 mt-2 text-center md:text-left font-bold">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div ref={faqRef} className="w-full max-w-7xl mx-auto px-4 bg-white mt-8 md:mt-12 py-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">FAQ About P2P Trading</h1>
        {faqData.map((faq, index) => (
          <div 
            key={index}
            className="border-b border-gray-500 py-4"
          >
             <div 
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
            >
              <p className="text-lg font-bold">{faq.question}</p>
              <span className="text-2xl font-bold transition-transform duration-200" style={{
                transform: expandedFaq === index ? 'rotate(45deg)' : 'rotate(0deg)'
              }}>
                +
              </span>
            </div>
            {expandedFaq === index && (
              <div className="mt-4 text-gray-600 pr-8 animate-fadeIn font-bold">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-[#4B0082] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="flex justify-center w-full md:justify-start md:w-auto mb-4 md:mb-0">
              <img src={logo} alt="logo" className="w-28 md:w-36 h-auto" />
            </div>

            {/* Links and Social Icons */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 font-bold text-sm md:text-base">
                <p>PiSawp Network</p>
                <Link to="/Privacy" className="hover:underline cursor-pointer">Privacy Policy</Link>
                <Link to="/terms-of-use" className="hover:underline cursor-pointer">Terms of Use</Link>
                <button 
                  onClick={handleAdminClick}
                  className="bg-transparent border-none text-white cursor-pointer hover:text-gray-300"
                >
                  Admin Panel
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4">
                <a 
                  href="https://twitter.com/PiSwap_Network" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <img src={i1} alt="Twitter" className="w-[30px] md:w-[35px] h-auto" />
                </a>
                <a 
                  href="https://t.me/PiSwap_Network" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <img src={i2} alt="Telegram" className="w-[30px] md:w-[35px] h-auto" />
                </a>
                <a 
                  href="https://discord.gg/PiSwap" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gray-900 p-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <img src={i3} alt="Discord" className="w-[30px] md:w-[35px] h-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Login Popup */}
      {showLoginPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred Background */}
          <div 
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setShowLoginPopup(false)}
          ></div>
          
          {/* Login Form */}
          <div className="relative bg-white rounded-[32px] p-8 w-[400px] shadow-xl">
            {/* Close Button */}
            <button 
              onClick={() => setShowLoginPopup(false)}
              className="absolute right-6 top-6 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Login Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-[20px] font-medium text-gray-900 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
                  placeholder="Email"
                />
              </div>

              <div>
                <label className="block text-[20px] font-medium text-gray-900 mb-2">
                  Your Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
                  placeholder="Password"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setShowLoginPopup(false);
                    setShowEmailConfirmation(true);
                  }}
                  className="text-[#40E0B5] hover:text-[#3acca3] text-sm font-medium"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-100 text-gray-800 py-3 rounded-full hover:bg-gray-200 transition-colors font-medium text-lg"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Email Confirmation Popup */}
      {showEmailConfirmation && (
        <EmailConfirmation
          onClose={() => {
            setShowEmailConfirmation(false);
            setShowLoginPopup(true);
          }}
          onSubmit={(email) => {
            console.log('Email confirmation submitted:', email);
            setShowEmailConfirmation(false);
          }}
        />
      )}

      {/* Register Popup */}
      {showRegisterPopup && (
        <Register
          onClose={() => setShowRegisterPopup(false)}
        />
      )}

      {/* Crypto Register Popup */}
      {showCryptoRegister && (
        <CryptoRegister
          onClose={() => setShowCryptoRegister(false)}
        />
      )}

      {/* Admin Panel Modal */}
      {showAdminPanel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4 my-6">
            <AdminDashboard onClose={() => setShowAdminPanel(false)} />
          </div>
        </div>
      )}

      {/* Swap Confirmation Popup */}
      {showSwapPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred Background */}
          <div 
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setShowSwapPopup(false)}
          ></div>
          
          {/* Swap Form */}
          <div className="relative bg-white rounded-[32px] p-8 w-[400px] shadow-xl">
            {/* Close Button */}
            <button 
              onClick={() => setShowSwapPopup(false)}
              className="absolute right-6 top-6 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Swap Form Content */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center text-gray-900">Confirm Swap</h2>
              
              <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Amount</span>
                  <span className="text-gray-900 font-medium">{swapAmount} USDT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">You will receive</span>
                  <span className="text-gray-900 font-medium">{(parseFloat(swapAmount) || 0) * 5} PI</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Exchange Rate</span>
                  <span className="text-gray-900 font-medium">1 USDT = 5 PI</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    setShowSwapPopup(false);
                    setShowTransactionPopup(true);
                  }}
                  className="w-full bg-[#4B0082] text-white py-3 rounded-full hover:bg-[#663399] transition-colors font-medium text-lg"
                >
                  Confirm Swap
                </button>
                <button
                  onClick={() => setShowSwapPopup(false)}
                  className="w-full bg-gray-100 text-gray-800 py-3 rounded-full hover:bg-gray-200 transition-colors font-medium text-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Transaction Details Popup */}
      {showTransactionPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Blurred Background */}
          <div 
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setShowTransactionPopup(false)}
          ></div>
          
          {/* Transaction Form */}
          <div className="relative bg-white rounded-[32px] p-8 w-[500px] shadow-xl">
            {/* Close Button */}
            <button 
              onClick={() => setShowTransactionPopup(false)}
              className="absolute right-6 top-6 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Transaction Form Content */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center text-gray-900">Transaction Details</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-[16px] font-medium text-gray-700 mb-2">
                    Wallet Address
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={walletId}
                      readOnly
                      className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-600"
                    />
                    <button
                      onClick={handleCopyWallet}
                      className="px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    Please send <span className="font-bold">{swapAmount} USDT</span> to the wallet address above. 
                    After completing the transaction, enter the transaction ID below.
                  </p>
                </div>

                <div>
                  <label className="block text-[16px] font-medium text-gray-700 mb-2">
                    Transaction ID
                  </label>
                  <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                    placeholder="Enter your transaction ID"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[#4B0082]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleTransactionSubmit}
                  disabled={!transactionId}
                  className={`w-full py-3 rounded-full font-medium text-lg ${
                    transactionId 
                      ? 'bg-[#4B0082] text-white hover:bg-[#663399]' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  } transition-colors`}
                >
                  Submit Transaction
                </button>
                <button
                  onClick={() => setShowTransactionPopup(false)}
                  className="w-full bg-gray-100 text-gray-800 py-3 rounded-full hover:bg-gray-200 transition-colors font-medium text-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notifications */}
      {showCopyToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-out">
          Wallet address copied successfully!
        </div>
      )}

      {showSubmitToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-out">
          Transaction submitted successfully!
        </div>
      )}

      {/* Add this to your existing styles or create a new CSS file */}
      <style jsx>{`
        @keyframes fade-in-out {
          0% { opacity: 0; transform: translateY(20px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(20px); }
        }
        .animate-fade-in-out {
          animation: fade-in-out 2s ease-in-out forwards;
        }
      `}</style>

    </div>
  );
};

export default Home;