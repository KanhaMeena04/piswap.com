import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo1.png';

import i1 from '../Images/icon1.svg'
import i2 from '../Images/icon2.svg'
import i3 from '../Images/icon3.svg'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email) {
            setEmailError('Email cannot be empty.');
            return;
        }
        // Add your login logic here
        console.log('Logging in with', email, password);
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        // Add your forgot password logic here
        console.log('Forgot password for:', email);
    };

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white rounded-3xl p-8 w-[400px] relative">
                    {/* Close button */}
                    <Link to="/" className="absolute right-6 top-6 text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </Link>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className={`w-full px-4 py-3 rounded-lg border ${emailError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-blue-500`}
                                placeholder="Email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailError('');
                                }}
                            />
                            {emailError && (
                                <p className="mt-1 text-sm text-red-500">{emailError}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-2">
                                Your Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                onClick={handleForgotPassword}
                                className="text-green-600 hover:text-green-800 text-sm"
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
        </>
    );
}

export default Login; 