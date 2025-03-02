import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path.toLowerCase());
    setIsOpen(false); // Close mobile menu on navigation
  };

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-serif font-bold cursor-pointer" onClick={() => handleNavigation("home")}>
          Keshav Threads
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {["Home", "About", "Brands", "More"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-gray-400 transition duration-300"
              onClick={() => handleNavigation(item)}
            >
              {item}
            </li>
          ))}
          <button
            className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-500 transition duration-300"
            onClick={() => handleNavigation("login")}
          >
            Login
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <FiMenu className="text-white w-8 h-8" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-2/3 sm:w-1/2 md:w-1/3 bg-gray-800 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-xl flex flex-col`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-5">
          <button onClick={() => setIsOpen(false)}>
            <FiX className="text-white w-8 h-8" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <ul className="flex flex-col items-center space-y-6 text-lg">
          {["Home", "About", "Brands", "More"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-gray-400 transition duration-300"
              onClick={() => handleNavigation(item)}
            >
              {item}
            </li>
          ))}
          <button
            className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-500 transition duration-300"
            onClick={() => handleNavigation("login")}
          >
            Login
          </button>
        </ul>
      </div>

      {/* Background Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
