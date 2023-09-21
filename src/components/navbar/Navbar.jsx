import React, { useState } from 'react';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="border-b-2 border-b-gray-800">
      <div className="flex justify-between items-center p-4 lg:px-20">
        <div className="text-xl font-bold">
          get<span className="text-purplePink">linked</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-button"
          onClick={toggleMobileMenu}
          className="text-white lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:flex-row justify-center gap-10 items-center">
          <a href="#">Timeline</a>
          <a href="#">Overview</a>
          <a href="#">FAQs</a>
          <a className="" href="#">
            Contact
          </a>

          <a
            className="bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-2 ml-10 border-transparent rounded"
            href="/"
          >
            Register
          </a>
        </div>
      </div>

      {/* Mobile Menu (Conditional) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col items-center py-4">
            <a href="#">Timeline</a>
            <a href="#">Overview</a>
            <a href="#">FAQs</a>
            <a className="" href="#">
              Contact
            </a>
            <a
              className="bg-gradient-to-r from-pink-500 to-purple-500 mt-4 px-8 py-2 border-transparent rounded"
              href="/"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
