import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const Register = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Blurred Background */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Register Form Container */}
      <div className="relative bg-white rounded-[32px] w-[440px] shadow-xl max-h-[90vh] flex flex-col">
        {/* Header Section - Fixed */}
        <div className="px-8 pt-8 pb-4">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute right-6 top-6 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 className="text-[32px] font-bold text-[#1E293B]">
            Register
          </h2>
        </div>

        {/* Scrollable Form Section */}
        <div className="flex-1 overflow-y-auto px-8 pb-8">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-[16px] font-medium text-[#1E293B]">
                Your Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 text-[#64748B] text-[15px] placeholder-[#64748B]"
                placeholder="Email"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[16px] font-medium text-[#1E293B]">
                Your Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 text-[#64748B] text-[15px] placeholder-[#64748B]"
                placeholder="Password"
              />
              {/* Password Requirements */}
              <div className="mt-2 space-y-2">
                <div className="flex items-center gap-2">
                  <input type="radio" disabled className="w-4 h-4 border-2 border-[#94A3B8] rounded-full appearance-none checked:border-[6px] checked:border-blue-500" />
                  <span className="text-[14px] text-[#64748B]">Length is from 8 to 32 characters.</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" disabled className="w-4 h-4 border-2 border-[#94A3B8] rounded-full appearance-none checked:border-[6px] checked:border-blue-500" />
                  <span className="text-[14px] text-[#64748B]">Must contain at least one lowercase letter.</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" disabled className="w-4 h-4 border-2 border-[#94A3B8] rounded-full appearance-none checked:border-[6px] checked:border-blue-500" />
                  <span className="text-[14px] text-[#64748B]">Must contain at least one uppercase letter.</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" disabled className="w-4 h-4 border-2 border-[#94A3B8] rounded-full appearance-none checked:border-[6px] checked:border-blue-500" />
                  <span className="text-[14px] text-[#64748B]">Must contain at least one number.</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" disabled className="w-4 h-4 border-2 border-[#94A3B8] rounded-full appearance-none checked:border-[6px] checked:border-blue-500" />
                  <span className="text-[14px] text-[#64748B]">Must contain at least one special character.</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[16px] font-medium text-[#1E293B]">
                Enter Password Again
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 text-[#64748B] text-[15px] placeholder-[#64748B]"
                placeholder="Enter Password Again"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[16px] font-medium text-[#1E293B]">
                Country
              </label>
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 text-[#64748B] text-[15px] appearance-none bg-white"
              >
                <option value="">Country</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-[16px] font-medium text-[#1E293B]">
                Invite Code (Not require)
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 text-[#64748B] text-[15px] placeholder-[#64748B]"
                placeholder="Invite Code"
              />
            </div>

            <div className="w-full">
              <ReCAPTCHA
                sitekey="your-recaptcha-site-key"
                className="transform scale-[0.85] origin-left"
              />
            </div>

            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                className="w-4 h-4 border-2 border-[#94A3B8] rounded appearance-none checked:bg-blue-500 checked:border-blue-500"
              />
              <span className="text-[14px] text-[#64748B]">Connect Athene app</span>
            </div>

            <div className="flex items-start gap-2">
              <input 
                type="checkbox" 
                className="w-4 h-4 border-2 border-[#94A3B8] rounded appearance-none checked:bg-blue-500 checked:border-blue-500 mt-1"
              />
              <span className="text-[14px] text-[#64748B]">
                By clicking "Register", you agree with <a href="/terms" className="text-[#1E293B]">Terms of Service</a> and <a href="/privacy" className="text-[#1E293B]">Privacy Policy</a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#E9EDF4] text-[#1E293B] py-3 rounded-full hover:bg-gray-200 transition-colors font-medium text-[15px]"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register; 