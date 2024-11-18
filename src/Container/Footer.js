import React from 'react';
import { 
  FaLinkedin, 
  FaYoutube, 
  FaInstagram, 
  FaTwitter, 
  FaFacebook, 
  FaEnvelope, 
  FaPhone 
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full mt-7 bg-white">
      {/* Rainbow Line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 via-orange-500 via-red-500 via-purple-500 to-blue-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-pink-600">Makerble</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy & Cookies</a></li>
            </ul>
          </div>

          {/* Organizations Section */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-900 uppercase">ORGANISATIONS</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Control Panel</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Discover the Marketplace</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Create Organisation Account</a></li>
            </ul>
          </div>

          {/* Your Account Section */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-900 uppercase">YOUR ACCOUNT</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Library</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Profile</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Projects</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Help</a></li>
            </ul>
          </div>

          {/* Explore Section */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-900 uppercase">EXPLORE</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Metrics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Networks</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Strategies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Projects</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Surveys</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Tips</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Vouchers</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-gray-900 uppercase">FOLLOW THE MAKERBLE STORY</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-700">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-red-600 hover:text-red-700">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-700">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-500">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <FaEnvelope className="w-4 h-4" />
              <a href="mailto:contact@makerble.com" className="hover:text-gray-800">contact@makerble.com</a>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaPhone className="w-4 h-4" />
              <a href="tel:02081234567" className="hover:text-gray-800">020 8123 4567</a>
            </div>
            
          </div>
          <div className="text-gray-500 text-sm my-4">© Makerble 2023</div>
        </div>
      </div>
    </footer>
  );
}