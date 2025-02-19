import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      {/* Top Section: Logo & Social Links */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide">PrimeThreads</h1>

        {/* Social Media */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaYoutube size={24} />
          </a>
        </div>
      </div>

      {/* Middle Section: Links & Newsletter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Shop</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Shipping & Returns</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Order Tracking</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400 mb-4">Get exclusive deals and updates!</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md text-black"
            />
            <button className="bg-red-500 px-4 py-2 rounded-r-md hover:bg-red-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} PrimeThreads. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
