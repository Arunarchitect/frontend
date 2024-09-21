import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="flex items-center justify-between py-4 border-b">
      <Link to="/" className="px-2 lg:px-0 uppercase font-bold text-purple-800">
        MODELFLICK
      </Link>
      <Search />
      
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-purple-600 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <div className={`block w-6 h-0.5 bg-purple-600 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
        <div className={`block w-6 h-0.5 bg-purple-600 my-1 transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></div>
        <div className={`block w-6 h-0.5 bg-purple-600 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
      </button>

      {/* Menu Items */}
      <ul ref={menuRef} className={`md:flex md:items-center md:static absolute bg-white w-full md:w-auto transition-all duration-300 ease-in-out ${isOpen ? "top-16" : "top-[-200px]"}`}>
        <li className="px-2 md:px-4">
          <Link
            to="/"
            className="text-purple-600 font-semibold hover:text-purple-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li className="px-2 md:px-4">
          <Link
            to="/about"
            className="text-gray-500 font-semibold hover:text-purple-500"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </li>
        <li className="px-2 md:px-4">
          <Link
            to="/threed"
            className="text-gray-500 font-semibold hover:text-purple-500"
            onClick={() => setIsOpen(false)}
          >
            3D view
          </Link>
        </li>
        <li className="px-2 md:px-4">
          <Link
            to="/project"
            className="text-gray-500 font-semibold hover:text-purple-500"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
