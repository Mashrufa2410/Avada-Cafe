import React from "react";
import Logo from "../../assets/Logo.webp";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-screen w-72 bg-[#121315] text-white flex flex-col items-center px-6 py-[50px]">
      {/* Logo */}
      <div className="mb-12">
        <img src={Logo} alt="Cafe Avada" className="w-[95px] h-[170px]" />
      </div>

      {/* Navigation Links */}
      <nav className="w-full">
        {[
          { to: "/", text: "Home" },
          { to: "/about", text: "About Us" },
          { to: "/menu", text: "Food & Drink" },
          { to: "/story", text: "Our Story" },
          { to: "/locations", text: "Locations" },
          { to: "/contact", text: "Contact" },
        ].map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `block py-4 text-center border-t border-gray-700 uppercase font-small tracking-wide transition ${
                isActive ? "text-[#ad885e]" : "text-gray-400 hover:text-white"
              }`
            }
          >
            {link.text}
          </NavLink>
        ))}
      </nav>

      {/* Divider Line */}
      <hr className="w-full border-gray-700" />

      {/* Social Media Icons */}
      <div className="mt-auto flex space-x-5 pb-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-gray-500 hover:text-white text-xl" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-gray-500 hover:text-white text-xl" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="text-gray-500 hover:text-white text-xl" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
