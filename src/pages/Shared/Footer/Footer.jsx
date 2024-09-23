import React from 'react';
import { FaLinkedin, FaYoutube, FaTiktok, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        
        {/* Top Section: Logo and Social Media */}
        <div className="flex flex-wrap justify-between items-center py-8">
          <div className="my-auto">
            <h1 className="text-4xl font-bold">Alada</h1>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="#" aria-label="LinkedIn" className="text-black p-1 bg-yellow-500 rounded-full text-xl">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="YouTube" className="text-black p-1 bg-yellow-500 rounded-full text-xl">
              <FaYoutube />
            </a>
            <a href="#" aria-label="TikTok" className="text-black p-1 bg-yellow-500 rounded-full text-xl">
              <FaTiktok />
            </a>
            <a href="#" aria-label="Instagram" className="text-black p-1 bg-yellow-500 rounded-full text-xl">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Twitter" className="text-black p-1 bg-yellow-500 rounded-full text-xl">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Facebook" className="text-black p-1 bg-yellow-500 rounded-full text-xl">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="font-bold text-lg mb-4">Shop</h2>
            <ul className="space-y-2">
              <li className='hover:underline hover:text-yellow-500'>Fruits & Vegetables</li>
              <li className='hover:underline hover:text-yellow-500'>Dairy Products</li>
              <li className='hover:underline hover:text-yellow-500'>Bakery</li>
              <li className='hover:underline hover:text-yellow-500'>Meat & Seafood</li>
              <li className='hover:underline hover:text-yellow-500'>Beverages</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="font-bold text-lg mb-4">Customer Service</h2>
            <ul className="space-y-2">
              <li className='hover:underline hover:text-yellow-500'>Contact Us</li>
              <li className='hover:underline hover:text-yellow-500'>FAQs</li>
              <li className='hover:underline hover:text-yellow-500'>Returns</li>
              <li className='hover:underline hover:text-yellow-500'>Delivery Information</li>
              <li className='hover:underline hover:text-yellow-500'>Privacy Policy</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="font-bold text-lg mb-4">Recipes</h2>
            <ul className="space-y-2">
              <li className='hover:underline hover:text-yellow-500'>Healthy Recipes</li>
              <li className='hover:underline hover:text-yellow-500'>Quick Meals</li>
              <li className='hover:underline hover:text-yellow-500'>Family Favorites</li>
              <li className='hover:underline hover:text-yellow-500'>Seasonal Recipes</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h2 className="font-bold text-lg mb-4">About Us</h2>
            <ul className="space-y-2">
              <li className='hover:underline hover:text-yellow-500'>Our Story</li>
              <li className='hover:underline hover:text-yellow-500'>Sustainability</li>
              <li className='hover:underline hover:text-yellow-500'>Careers</li>
              <li className='hover:underline hover:text-yellow-500'>Partnerships</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h2 className="font-bold text-lg mb-4">Join Our Community</h2>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest deals and recipes.
            </p>
            <button className="lg:px-4 lg:py-2 bg-white text-black border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white rounded-lg">
              Sign Up
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
          <p>Privacy Policy | Terms | Don't Sell My Info</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
