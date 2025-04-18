import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const EmailConfirmation = ({ onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Blurred Background */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Email Confirmation Form */}
      <div className="relative bg-white rounded-[32px] p-8 w-[400px] shadow-xl">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-400 hover:text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h1 className="text-[28px] font-bold text-gray-900 mb-8">
          Email Confirmation
        </h1>

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

          <div className="w-full">
            <ReCAPTCHA
              sitekey="your-recaptcha-site-key"
              className="transform scale-90 origin-left"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#E9EDF4] text-gray-800 py-3 rounded-full hover:bg-gray-200 transition-colors font-medium text-lg"
          >
            Submit
          </button>

          <div className="flex justify-center space-x-8 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-900 hover:text-gray-600 font-medium"
            >
              Login
            </button>
            <button
              type="button"
              className="text-gray-900 hover:text-gray-600 font-medium"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailConfirmation; 