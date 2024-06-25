// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../Images/logo1.png'; // Adjust the path as per your actual folder structure

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8 mr-2" />
          {/* <Link to="/" className="text-red-500 text-xl font-bold">DevStartt</Link> */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-red-500 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-red-500 transition duration-300">About</Link>
          <Link to="/contact" className="hover:text-red-500 transition duration-300">Contact</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <FaTimes className="w-6 h-6 text-red-500" />
            ) : (
              <FaBars className="w-6 h-6 text-red-500" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link to="/" className="block text-red-500 hover:text-white transition duration-300">Home</Link>
            <Link to="/about" className="block text-red-500 hover:text-white transition duration-300">About</Link>
            <Link to="/contact" className="block text-red-500 hover:text-white transition duration-300">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
