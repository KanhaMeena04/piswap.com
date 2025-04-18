import React, { useState } from 'react';

const CryptoRegister = ({ onClose }) => {
  const [currentStep] = useState(1);

  return (
    <div className="fixed inset-0 bg-[#F8FAFC] bg-opacity-95 flex justify-center items-center z-50">
      <div className="bg-white rounded-3xl w-[500px] relative flex flex-col max-h-[90vh]">
        {/* Header Section - Fixed */}
        <div className="p-8 pb-0">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute right-6 top-6 text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 className="text-[32px] font-bold text-[#1E293B] mb-8">
            Register to list Cryptocurrency Listing
          </h2>

          {/* Stepper */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                currentStep >= 1 ? 'bg-[#1E293B] text-white' : 'border-2 border-gray-300 text-gray-400'
              }`}>
                1
              </div>
              <span className={`mt-2 text-base font-semibold ${
                currentStep >= 1 ? 'text-[#1E293B]' : 'text-gray-400'
              }`}>Basic Information</span>
            </div>
            <div className="flex-1 h-[2px] mx-4 bg-gray-200">
              <div className={`h-full bg-[#1E293B] transition-all duration-300`} style={{
                width: currentStep > 1 ? '100%' : '0%'
              }}></div>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                currentStep >= 2 ? 'bg-[#1E293B] text-white' : 'border-2 border-gray-300 text-gray-400'
              }`}>
                2
              </div>
              <span className={`mt-2 text-base font-semibold ${
                currentStep >= 2 ? 'text-[#1E293B]' : 'text-gray-400'
              }`}>Add Details</span>
            </div>
            <div className="flex-1 h-[2px] mx-4 bg-gray-200">
              <div className={`h-full bg-[#1E293B] transition-all duration-300`} style={{
                width: currentStep > 2 ? '100%' : '0%'
              }}></div>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                currentStep >= 3 ? 'bg-[#1E293B] text-white' : 'border-2 border-gray-300 text-gray-400'
              }`}>
                3
              </div>
              <span className={`mt-2 text-base font-semibold ${
                currentStep >= 3 ? 'text-[#1E293B]' : 'text-gray-400'
              }`}>Complete</span>
            </div>
          </div>
        </div>

        {/* Scrollable Form Section */}
        <div className="flex-1 overflow-y-auto px-8">
          <form className="space-y-8">
            <div>
              <label className="block text-[20px] font-semibold text-[#1E293B] mb-3">
                Project Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-gray-200 focus:outline-none focus:border-[#1E293B] text-gray-600 text-lg"
                placeholder="Project Name"
              />
            </div>

            <div>
              <label className="block text-[20px] font-semibold text-[#1E293B] mb-3">
                Cryptocurrency Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-gray-200 focus:outline-none focus:border-[#1E293B] text-gray-600 text-lg"
                placeholder="Cryptocurrency Name"
              />
            </div>

            <div>
              <label className="block text-[20px] font-semibold text-[#1E293B] mb-3">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-[#F8FAFC] border border-gray-200 focus:outline-none focus:border-[#1E293B] text-gray-600 text-lg"
                placeholder="Email"
              />
            </div>

            {/* Additional fields can be added here */}
            <div className="h-4"></div> {/* Spacing for scroll content */}
          </form>
        </div>

        {/* Footer Section with Button - Fixed */}
        <div className="p-8 pt-4 border-t border-gray-100">
          <button
            type="submit"
            className="w-full bg-[#1E293B] text-white py-4 rounded-lg hover:bg-[#2d3748] transition-colors font-semibold text-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoRegister; 