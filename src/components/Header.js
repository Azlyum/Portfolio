import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white p-4 flex justify-between">
    <h1 className="text-2xl">My Portfolio</h1>
    <nav>
      <Link to="/" className="mx-2">Home</Link>
      <Link to="/projects" className="mx-2">Projects</Link>
      <Link to="/skills" className="mx-2">Skills</Link>
      <Link to="/contact" className="mx-2">Contact</Link>
    </nav>
  </header>
);

export default Header;
