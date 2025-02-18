import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-white font-serif text-2xl cursor-default pl-2">
          Keshav Threads
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden pr-2">
          <button onClick={() => setIsOpen(true)} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16m-7 6h7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-white pr-2">
          <li className="cursor-pointer hover:text-gray-400">Home</li>
          <li className="cursor-pointer hover:text-gray-400">About</li>
          <li className="cursor-pointer hover:text-gray-400">Brands</li>
          <li className="cursor-pointer hover:text-gray-400">More</li>
          <button className="bg-gray-700 px-5 py-2 rounded-lg hover:bg-gray-600 text-white">
            Login
          </button>
        </ul>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg flex flex-col`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-white">
            <svg className="w-8 h-8" fill="white" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <ul className="flex flex-col items-center justify-center flex-1 space-y-6">
          <li className="cursor-pointer hover:text-gray-400 text-lg">Home</li>
          <li className="cursor-pointer hover:text-gray-400 text-lg">About</li>
          <li className="cursor-pointer hover:text-gray-400 text-lg">Brands</li>
          <li className="cursor-pointer hover:text-gray-400 text-lg">More</li>
          <button className="bg-gray-700 px-6 py-2 rounded-lg hover:bg-gray-600 w-40 text-center">
            Login
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
