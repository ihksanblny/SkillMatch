import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isFreelancersDropdownOpen, setFreelancersDropdownOpen] = useState(false);

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
          <div className="relative group">
    <button className="text-gray-700 text-lg hover:text-blue-600 transition-all">
      Freelancers
    </button>
    {/* Dropdown Menu */}
    <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-10">
      <a
        href="#"
        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
      >
        Web Development
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
      >
        Graphic Designers
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
      >
        Content Writers
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
      >
        Digital Marketing
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
      >
        Animation
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
      >
        Photoghrapy
      </a>
    </div>
  </div>
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
    {/* Freelancers Dropdown */}
    <div>
      <button
        onClick={() => setFreelancersDropdownOpen(!isFreelancersDropdownOpen)}
        className="block text-lg text-left px-4 hover:text-blue-600 transition-all w-full"
      >
        Freelancers
      </button>
      {isFreelancersDropdownOpen && (
        <div className="pl-8 mt-2 space-y-2">
          <button className="block text-sm text-left hover:text-blue-600 transition-all">
            Web Development
          </button>
          <button className="block text-sm text-left hover:text-blue-600 transition-all">
            Graphic Designers
          </button>
          <button className="block text-sm text-left hover:text-blue-600 transition-all">
            Content Writers
          </button>
          <button className="block text-sm text-left hover:text-blue-600 transition-all">
            Digital Marketing
          </button>
          <button className="block text-sm text-left hover:text-blue-600 transition-all">
            Animation
          </button>
          <button className="block text-sm text-left hover:text-blue-600 transition-all">
            Photoghrapy
          </button>
        </div>
      )}
    </div>

    {/* Other Menu Items */}
    <button className="block text-lg text-left px-4 hover:text-blue-600 transition-all w-full">
      Projects
    </button>
    <button className="block text-lg text-left px-4 hover:text-blue-600 transition-all w-full">
      Post a Job
    </button>
    <button className="block text-lg text-left px-4 hover:text-blue-600 transition-all w-full">
      Pricing
    </button>
    <button className="block text-lg text-left px-4 hover:text-blue-600 transition-all w-full">
      About Us
    </button>
    {/* Updated Login button for mobile */}
    <button className="block text-lg text-left px-4 hover:text-blue-600 transition-all w-full">
      Login
    </button>
  </div>
)}
    </nav>
  );
};

export default Navbar;
