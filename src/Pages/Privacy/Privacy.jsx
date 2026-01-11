import React from 'react';
import { Shield, Lock, Eye, FileText, Database, UserCheck, Mail } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Shield className="h-12 w-12 text-amber-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Privacy Policy
            </h1>
          </div>
          <p className="text-gray-600">
            Last Updated: March 15, 2024
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-10 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-4">
            Welcome to LocalChefBazaar. We are committed to protecting your personal 
            information and your right to privacy. This Privacy Policy explains how we 
            collect, use, disclose, and safeguard your information when you use our 
            platform.
          </p>
          <p className="text-gray-700">
            By using LocalChefBazaar, you agree to the collection and use of information 
            in accordance with this policy.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-6">
            <Database className="h-8 w-8 text-amber-600" />
            <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Full name and contact details</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Email address and phone number</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Delivery address and location data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Payment information (processed securely)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Order history and preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Device and browser information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>IP address and location data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">•</span>
                  <span>Cookies and tracking technologies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-6">
            <Eye className="h-8 w-8 text-amber-600" />
            <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">For Customers</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span>Process orders and payments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span>Facilitate food delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span>Send order updates and notifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span>Provide customer support</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">For Chefs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span>Verify chef credentials and kitchen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span>Process earnings and payments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span>Facilitate order management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">✓</span>
                    <span>Provide business analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Data Sharing */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-6">
            <UserCheck className="h-8 w-8 text-amber-600" />
            <h2 className="text-2xl font-bold text-gray-900">Data Sharing & Disclosure</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <p className="text-gray-700 mb-4">
              We may share your information in the following circumstances:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <FileText className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">With Chefs</h4>
                  <p className="text-gray-700 text-sm">
                    Necessary customer information is shared with chefs to fulfill orders 
                    (name, delivery address, contact details).
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <FileText className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Service Providers</h4>
                  <p className="text-gray-700 text-sm">
                    With trusted third parties who assist in platform operations, 
                    payment processing, and delivery services.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <FileText className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Legal Requirements</h4>
                  <p className="text-gray-700 text-sm">
                    When required by law or to protect our rights, users, or the public.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-6">
            <Lock className="h-8 w-8 text-amber-600" />
            <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Secure Storage</h4>
                <p className="text-green-700 text-sm">
                  We implement industry-standard security measures to protect your 
                  personal information. All payment information is encrypted and 
                  processed through secure payment gateways.
                </p>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Access Control</h4>
                <p className="text-blue-700 text-sm">
                  Access to personal information is restricted to authorized personnel 
                  only, who are required to keep the information confidential.
                </p>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">Data Retention</h4>
                <p className="text-amber-700 text-sm">
                  We retain personal information only for as long as necessary to 
                  fulfill the purposes outlined in this policy, unless a longer 
                  retention period is required by law.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Access & Correction</h3>
              <p className="text-gray-700 text-sm">
                You can access and update your personal information through your account settings.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Data Deletion</h3>
              <p className="text-gray-700 text-sm">
                You may request deletion of your personal information, subject to legal obligations.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Opt-Out</h3>
              <p className="text-gray-700 text-sm">
                You can opt out of marketing communications at any time by clicking unsubscribe.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Cookies</h3>
              <p className="text-gray-700 text-sm">
                You can control cookies through your browser settings.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Data Portability</h3>
              <p className="text-gray-700 text-sm">
                You can request a copy of your data in a structured, machine-readable format.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Complaints</h3>
              <p className="text-gray-700 text-sm">
                You have the right to lodge a complaint with data protection authorities.
              </p>
            </div>
          </div>
        </div>

        {/* Children's Privacy */}
        <div className="mb-10 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Children's Privacy</h2>
          <p className="text-gray-700">
            LocalChefBazaar is not intended for children under 18 years of age. 
            We do not knowingly collect personal information from children under 18. 
            If you are a parent or guardian and believe your child has provided us 
            with personal information, please contact us.
          </p>
        </div>

        {/* Changes to Policy */}
        <div className="mb-10 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 mb-3">
            We may update this Privacy Policy from time to time. We will notify you of 
            any changes by posting the new Privacy Policy on this page and updating the 
            "Last Updated" date.
          </p>
          <p className="text-gray-700">
            You are advised to review this Privacy Policy periodically for any changes. 
            Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-amber-600" />
              <span className="text-gray-700">privacy@localchefbazaar.com</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <FileText className="h-5 w-5 text-amber-600" />
              <span className="text-gray-700">
                LocalChefBazaar Privacy Team
                <br />
                123 Food Street, Culinary City, CC 10001
              </span>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>This Privacy Policy was last updated on January 15, 2026</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;