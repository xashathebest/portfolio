import React, { useState } from "react";

const Footer = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({
    email: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.target);
    formData.append('form-name', 'newsletter');
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ email: '' });
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer className="w-full bg-gradient-to-b from-[#F196E5] to-[#f8c0ee] p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <img src="/imgs/img1.png" alt="Logo" className="w-24 mx-auto md:mx-0" />
            <p className="mt-4 text-sm text-gray-700">
              Affordable, custom web design that elevates your brand and engages your audience.
            </p>
            <p className="mt-2 text-sm text-gray-700">
              Email: exssasha@gmail.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-sm text-gray-600 hover:text-yellow-500 transition">Services</a></li>
              <li><a href="#works" className="text-sm text-gray-600 hover:text-yellow-500 transition">Works</a></li>
              <li><a href="#testimonials" className="text-sm text-gray-600 hover:text-yellow-500 transition">Testimonials</a></li>
              <li><a href="#contact" className="text-sm text-gray-600 hover:text-yellow-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Stay Updated</h3>
            <p className="text-sm text-gray-700 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form
              name="newsletter"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              netlify
              onSubmit={handleSubmit}
              className="flex flex-col space-y-3"
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <input type="hidden" name="bot-field" />
              
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white"
                placeholder="Enter your email"
              />
              <button 
                type="submit"
                disabled={formStatus === 'submitting'}
                className="px-6 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition transform hover:scale-105 disabled:opacity-50"
              >
                {formStatus === 'submitting' ? 'Subscribing...' : 'Subscribe'}
              </button>
              
              {formStatus === 'success' && (
                <div className="text-center text-sm text-green-600 animate-fade-in">
                  Thank you for subscribing!
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="text-center text-sm text-red-600">
                  There was an error. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.facebook.com/share/1BcdzU8V8a/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-500 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Shah Rukh Khan D. Biao. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
