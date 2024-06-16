import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gradient-to-r from-blue-500 to-teal-400 text-white p-4 flex justify-between items-center shadow-lg">
    <h1 className="text-2xl font-bold">My Portfolio</h1>
    <nav>
      <Link to="/" className="mx-2 hover:text-gray-200">Home</Link>
      <Link to="/projects" className="mx-2 hover:text-gray-200">Projects</Link>
      <Link to="/skills" className="mx-2 hover:text-gray-200">Skills</Link>
      <Link to="/contact" className="mx-2 hover:text-gray-200">Contact</Link>
    </nav>
  </header>
);

export default Header;
