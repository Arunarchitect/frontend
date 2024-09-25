import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex items-center justify-between py-4 border-b bg-white z-20 relative">
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
        {["/", "/about", "/threed", "/project", "/signin", "/signup"].map((path, index) => (
          <li key={index} className="px-2 md:px-4">
            <Link
              to={path}
              className="text-gray-500 font-semibold hover:text-purple-500"
              onClick={handleLinkClick}
            >
              {path === "/" ? "Home" : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
