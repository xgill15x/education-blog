import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-teal-700 text-white py-4 shadow-md">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto flex justify-between items-center flex-wrap">
        <button className="text-2xl font-bold hover:text-gray-200">
          The Education Club
        </button>

        <button
          className="sm:hidden flex items-center space-x-2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <nav
          className={`w-full sm:w-auto ${
            isMenuOpen ? "block" : "hidden"
          } sm:block`}
        >
          <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:justify-end">
            <li>
              <button className="hover:text-gray-200">Home</button>
            </li>
            <li>
              <button className="hover:text-gray-200">Resources</button>
            </li>
            <li>
              <button className="hover:text-gray-200">About</button>
            </li>
            <li>
              <button className="hover:text-gray-200">Contact</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
