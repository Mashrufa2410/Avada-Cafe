import React from "react";
import Logo from "../../assets/Logo.webp";
import { FaFacebook, FaInstagram, FaYoutube, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-72 bg-[#272a2e] text-white flex flex-col items-center px-12 py-16 font-[Poppins]">
      {/* Logo */}
      <div className="mb-8">
        <img src={Logo} alt="Cafe Avada" className="w-[100px]" />
      </div>

      {/* Navigation Links */}
      <nav className="w-full text-[14px] tracking-wide uppercase">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `py-4 block border-b border-gray-700 text-center w-full ${
              isActive ? "text-yellow-400" : "text-white"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `py-4 block border-b border-gray-700 text-center w-full ${
              isActive ? "text-yellow-400" : "text-white"
            }`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            `py-4 block border-b border-gray-700 text-center w-full ${
              isActive ? "text-yellow-400" : "text-white"
            }`
          }
        >
          Food & Drink
        </NavLink>
        <NavLink
          to="/story"
          className={({ isActive }) =>
            `py-4 block border-b border-gray-700 text-center w-full ${
              isActive ? "text-yellow-400" : "text-white"
            }`
          }
        >
          Our Story
        </NavLink>
        <NavLink
          to="/locations"
          className={({ isActive }) =>
            `py-4 block border-b border-gray-700 text-center w-full ${
              isActive ? "text-yellow-400" : "text-white"
            }`
          }
        >
          Locations
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `py-4 block text-center w-full ${
              isActive ? "text-yellow-400" : "text-white"
            }`
          }
        >
          Contact
        </NavLink>
      </nav>

      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-auto pb-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-gray-400 hover:text-white text-xl" />
        </a>
        <a href="#" className="cursor-pointer">
          <FaTimes className="text-gray-400 hover:text-white text-xl" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-400 hover:text-white text-xl" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-gray-400 hover:text-white text-xl" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
