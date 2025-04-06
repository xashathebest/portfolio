import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F196E5] p-8 md:p-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="text-center md:text-left md:w-1/2">
          <img src="/imgs/img1.png" alt="Logo" className="w-24 mx-auto md:mx-0" />
          <p className="mt-4 text-sm text-gray-700">
            Affordable, custom web design that elevates your brand and engages your audience.
          </p>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right md:w-1/2">
          <h2 className="text-lg font-semibold text-blue-600">Stay Connected</h2>
          <p className="text-sm text-gray-700 mt-2">
            Subscribe to our newsletter for updates and offers.
          </p>
          <form className="flex flex-col md:flex-row items-center mt-4 space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              className="w-full md:w-auto px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
            <button className="px-6 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-300 pt-4 text-center">
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
