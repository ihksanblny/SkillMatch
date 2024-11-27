import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-20">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-blue-600 text-3xl font-bold">
            SkillMatch
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button className="text-gray-700 text-lg hover:text-blue-600 transition-all">
              Freelancers
            </button>
            <button className="text-gray-700 text-lg hover:text-blue-600 transition-all">
              Projects
            </button>
            <button className="text-gray-700 text-lg hover:text-blue-600 transition-all">
              Post a Job
            </button>
            <button className="text-gray-700 text-lg hover:text-blue-600 transition-all">
              Pricing
            </button>
            <button className="text-gray-700 text-lg hover:text-blue-600 transition-all">
              About Us
            </button>
            {/* Updated Login button */}
            <button className="text-gray-700 text-lg hover:text-blue-600 transition-all">
              Login
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={toggleMobileMenu} className="md:hidden text-blue-600 text-3xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-gray-700 py-4 space-y-4">
          <button className="block text-lg text-center hover:text-blue-600 transition-all">
            Freelancers
          </button>
          <button className="block text-lg text-center hover:text-blue-600 transition-all">
            Projects
          </button>
          <button className="block text-lg text-center hover:text-blue-600 transition-all">
            Post a Job
          </button>
          <button className="block text-lg text-center hover:text-blue-600 transition-all">
            Pricing
          </button>
          <button className="block text-lg text-center hover:text-blue-600 transition-all">
            About Us
          </button>
          {/* Updated Login button for mobile */}
          <button className="block text-lg text-center hover:text-blue-600 transition-all w-full">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
