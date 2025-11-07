import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-primary">FarmFresh</h1>
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#home" className="hover:text-primary transition">Home</a>
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#products" className="hover:text-primary transition">Products</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-4 p-4 text-gray-700 font-medium">
            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#products" onClick={() => setOpen(false)}>Products</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

