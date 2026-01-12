import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  ChefHat, 
  CheckCircle,
  MessageSquare,
  User
} from 'lucide-react';
import { Link } from 'react-router';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    contactType: 'general'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        contactType: 'general'
      });
    }, 3000);
  };

  const contactOptions = [
    {
      id: 'general',
      label: 'General Inquiry',
      description: 'Questions about the platform'
    },
    {
      id: 'chef',
      label: 'Become a Chef',
      description: 'Join as a home cook'
    },
    {
      id: 'support',
      label: 'Customer Support',
      description: 'Help with orders or issues'
    },
    {
      id: 'business',
      label: 'Business Inquiry',
      description: 'Partnership opportunities'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-50 to-base-500">
     

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-base-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-base-600 max-w-2xl mx-auto">
            Have questions about LocalChefBazaar? Whether you're a home cook wanting to join 
            our platform or a customer looking for delicious homemade meals, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-base-100 rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-base-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-base-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base-900">Email</h3>
                    <p className="text-base-600">support@localchefbazaar.com</p>
                    <p className="text-sm text-base-500">We respond within 24 hours</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-base-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base-900">Phone</h3>
                    <p className="text-base-600">+880 187654397</p>
                    <p className="text-sm text-base-500">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="bg-base-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base-900">Location</h3>
                    <p className="text-base-600">123 Food Street</p>
                    <p className="text-base-600">MirPur1, Dhaka </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-base-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base-900">Support Hours</h3>
                    <p className="text-base-600">Sunday - Friday: 7AM - 11PM</p>
                    <p className="text-base-600">Saturday: 9AM - 11PM</p>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="bg-base-100 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-base-900 mb-6">Common Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-base-900 mb-2">
                    How do I become a chef on LocalChefBazaar?
                  </h3>
                  <p className="text-base-600 text-sm">
                    Sign up on our platform, complete your profile, and submit your kitchen 
                    for verification. We'll guide you through the process step by step.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base-900 mb-2">
                    How are orders delivered?
                  </h3>
                  <p className="text-base-600 text-sm">
                    Chefs handle delivery directly or through our delivery partners. 
                    Delivery options are shown when you place an order.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-base-900 mb-2">
                    What safety standards do you follow?
                  </h3>
                  <p className="text-base-600 text-sm">
                    All chefs must meet local health department requirements and our 
                    platform's food safety guidelines before they can start selling.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-base-100 rounded-2xl shadow-lg p-8 sticky top-8">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="h-8 w-8 text-amber-600" />
                <h2 className="text-2xl font-bold text-base-900">Send us a Message</h2>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-base-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-base-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-base-700 mb-2">
                      <div className="flex items-center">
                        <User size={16} className="mr-2" />
                        Your Name
                      </div>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-base-700 mb-2">
                      <div className="flex items-center">
                        <Mail size={16} className="mr-2" />
                        Email Address
                      </div>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Contact Type */}
                  <div>
                    <label className="block text-sm font-medium text-base-700 mb-3">
                      What can we help you with?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {contactOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, contactType: option.id }))}
                          className={`p-4 rounded-lg border text-left transition-all ${
                            formData.contactType === option.id
                              ? 'border-amber-500 bg-base-50 ring-2 ring-amber-200'
                              : 'border-gray-200 hover:border-amber-300'
                          }`}
                        >
                          <div className="font-medium text-base-900 mb-1">
                            {option.label}
                          </div>
                          <div className="text-sm text-base-600">
                            {option.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-base-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-base-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-base-100 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                  </button>

                  <p className="text-center text-sm text-base-500">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-base-100 rounded-xl p-6 text-center border border-gray-200 hover:border-amber-300 transition-colors">
            <ChefHat className="h-10 w-10 text-amber-600 mx-auto mb-4" />
            <h3 className="font-semibold text-base-900 mb-2">Become a Chef</h3>
            <p className="text-base-600 text-sm mb-4">
              Start earning from your kitchen
            </p>
            <Link to='/dashboard/myProfile' className="text-amber-600 hover:text-amber-700 font-medium text-sm">
              Apply Now →
            </Link>
          </div>

          <div className="bg-base-100 rounded-xl p-6 text-center border border-gray-200 hover:border-amber-300 transition-colors">
            <Mail className="h-10 w-10 text-amber-600 mx-auto mb-4" />
            <h3 className="font-semibold text-base-900 mb-2">Email Support</h3>
            <p className="text-base-600 text-sm mb-4">
              Get help with your account
            </p>
            <a 
              href="mailto:support@localchefbazaar.com"
              className="text-amber-600 hover:text-amber-700 font-medium text-sm"
            >
              support@localchefbazaar.com
            </a>
          </div>

          
        </div>
      </main>

      
    </div>
  );
};

export default ContactUsPage;