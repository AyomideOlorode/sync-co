import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <h1 className="text-xl font-bold text-indigo-600">Sync.co</h1>
      <ul className="flex gap-6 text-gray-700">
        <li><a href="#" className="hover:text-indigo-600">Home</a></li>
        <li><a href="#" className="hover:text-indigo-600">About</a></li>
        <li><a href="#" className="hover:text-indigo-600">Projects</a></li>
        <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
