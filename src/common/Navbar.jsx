import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAVIGATION } from "../constants/appConfig";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#0D0D0D] to-[#1A1A1A] text-[#E6E6E6] sticky top-0 z-50 shadow-lg border-b border-[#333333]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* justify-start use kiya gaya hai taake elements kareeb rahein */}
        <div className="flex justify-start items-center h-20">

          {/* Logo - Iska margin right (mr-12) set kiya hai gap control karne ke liye */}
          <Link to="/" className="flex items-center mr-12 shrink-0">
            <img
              src="/g1.png"
              alt="AI Huda Logo"
              className="w-50 h-30 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-lg"
            />
          </Link>

          {/* Desktop Navigation - ml-auto ko hata kar fixed gap diya hai */}
          <ul className="hidden lg:flex space-x-10 items-center">
            {NAVIGATION.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-[#E6E6E6] hover:text-[#F4C430] transition-colors duration-300 font-semibold text-sm relative group uppercase tracking-wider"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-[#F4C430] to-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button - Isko end par rakhne ke liye ml-auto use kiya hai */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden ml-auto text-[#F4C430] hover:text-[#D4AF37] transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-[#333333] animate-in slide-in-from-top duration-300">
            <ul className="flex flex-col space-y-4 pt-4">
              {NAVIGATION.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[#E6E6E6] hover:text-[#F4C430] transition-colors py-2 block text-sm font-medium border-l-2 border-transparent hover:border-[#F4C430] pl-3"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;