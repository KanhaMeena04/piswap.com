import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
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

        <h1 className="text-3xl font-bold text-[#1E293B] mb-8">Terms of Use</h1>
        
        <div className="space-y-8 text-gray-600">
          <p className="leading-relaxed">
            These Terms govern your use of the Piswap P2P Trading platform. Please read them carefully.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">1. Acceptance of Terms</h2>
            <p className="pl-4">
              By accessing or using our platform, you agree to be bound by these Terms of Use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">2. User Eligibility</h2>
            <p className="pl-4">
              You must be at least 18 years old and have the legal capacity to enter into a binding agreement to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">3. Account Registration</h2>
            <p className="pl-4">
              Users must provide accurate, current, and complete information during registration and keep their account information updated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">4. Prohibited Activities</h2>
            <p className="pl-4">
              Users agree not to engage in any unlawful activities, including money laundering, fraud, or any actions that violate applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">5. Platform Usage</h2>
            <p className="pl-4">
              Users are responsible for maintaining the confidentiality of their login credentials and for all activities that occur under their account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">6. Transaction Terms</h2>
            <p className="pl-4">
              All transactions are subject to verification and approval by the platform. We reserve the right to refuse any transaction that appears suspicious.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">7. Intellectual Property</h2>
            <p className="pl-4">
              All content on the platform, including logos, designs, and text, is the property of Piswap and protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">8. Privacy</h2>
            <p className="pl-4">
              Your use of the platform is also governed by our Privacy Policy, which outlines how we collect and use your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">9. Dispute Resolution</h2>
            <p className="pl-4">
              Any disputes arising from the use of the platform will be resolved through binding arbitration in accordance with applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">10. Limitation of Liability</h2>
            <p className="pl-4">
              Athene will not be held liable for any indirect, incidental, or consequential damages arising out of your use of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">11. Modification of Terms</h2>
            <p className="pl-4">
              We reserve the right to modify these Terms at any time. Continued use of the platform constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">12. Contact Us</h2>
            <p className="pl-4">
              For any questions or concerns regarding these Terms, please contact our support team through the Help section.
            </p>
          </section>

          {/* Back to Top Button */}
          <div className="text-center pt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[#1E293B] hover:text-blue-600 font-medium"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
