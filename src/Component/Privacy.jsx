// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-12">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-[#1E293B] mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-600">
          <p className="leading-relaxed">
            This Privacy Policy describes how Piswap P2P Trading ("Piswap P2P," "we," "us," or "our") collects, uses, shares, and protects your personal information...
          </p>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">1. Information We Collect</h2>
            <div className="space-y-4 pl-4">
              <p>
                <span className="font-medium">(a) Information You Provide:</span> When you register for an account, use our platform, or communicate with us, we may collect personal information such as your name, email address, phone number, and any other information you choose to provide
              </p>
              <p>
                <span className="font-medium">(b) Automatically Collected Information:</span> We may automatically collect certain information about your device and usage of the Piswap P2P, including your IP address, browser type, operating system, and interactions with our platform.
              </p>
              <p>
                <span className="font-medium">(c) Cookies and Similar Technologies:</span> We may use cookies, web beacons, and other tracking technologies to collect information about your browsing activities and preferences. You can control the use of cookies through your browser settings, but disabling cookies may affect your ability to access certain features of the Piswap P2P.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">2. Use of Information</h2>
            <div className="space-y-4 pl-4">
              <p>
                <span className="font-medium">(a)</span> We may use the information we collect for various purposes, including: Providing and improving the Piswap P2P; Communicating with you about your account and our services; Personalizing your experience on the platform; Analyzing usage trends and preferences; Preventing fraud ensuring the security of our platform; and Complying with legal and regulatory requirements.
              </p>
              <p>
                <span className="font-medium">(b)</span> We may combine the information we collect from you with information we receive from third parties to help us personalize your experience and improve our services.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">3. Sharing of Information</h2>
            <div className="space-y-4 pl-4">
              <p>
                <span className="font-medium">(a)</span> We may share your personal information with third parties under the following circumstances: With your consent; With service providers who assist us in operating the Piswap P2P; In response to a legal request or when required by law; To protect the rights, property, or safety of Piswap P2P, our users, or others; or In connection with a merger, acquisition, or sale of assets.
              </p>
              <p>
                <span className="font-medium">(b)</span> We may share aggregated or anonymized information that does not directly identify you with third parties for analytical or marketing purposes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">4. Data Retention</h2>
            <p className="pl-4">
              We will retain your personal information for as long as necessary to fulfill the purposes for which it was collected unless a longer retention period is required or permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">5. Your Rights and Choices</h2>
            <div className="space-y-4 pl-4">
              <p>
                <span className="font-medium">(a)</span> You may access, update, or delete your account information at any time by logging into your account settings.
              </p>
              <p>
                <span className="font-medium">(b)</span> You may opt out of receiving promotional communications from us by following the instructions provided in such communications or by contacting us directly.
              </p>
              <p>
                <span className="font-medium">(c)</span> You may control the use of cookies and similar technologies through your browser settings.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">6. Security</h2>
            <p className="pl-4">
              We take reasonable measures to protect the security of your personal information and to prevent unauthorized access, use, or disclosure. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">7. Children's Privacy</h2>
            <p className="pl-4">
              The Piswap P2P is not intended for use by children under the age of 18. We do not knowingly collect personal information from children under the age of 18 without parental consent. If you believe that we may have collected personal information from a child under the age of 18, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">8. Changes to this Privacy Policy</h2>
            <p className="pl-4">
              We may update this Privacy Policy from time to time by posting a revised version on the Piswap P2P. The revised Privacy Policy will be effective as of the date indicated in the updated policy. Your continued use of the Athene P2P after the effective date of the revised Privacy Policy constitutes your acceptance of the changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
