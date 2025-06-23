import React from "react";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaFileAlt,
  FaBlog,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-[#0F0F1E] text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-purple-500">SYLVESTER</h1>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li className="flex items-center space-x-1">
              <FaHome />
              <a href="#hero">Home</a>
            </li>
            <li className="flex items-center space-x-1">
              <FaUser />
              <a href="#about">About</a>
            </li>
            <li className="flex items-center space-x-1">
              <FaProjectDiagram />
              <a href="#projects">Projects</a>
            </li>
            <li className="flex items-center space-x-1">
              <FaFileAlt />
              <a href="#resume">Resume</a>
            </li>
            <li className="flex items-center space-x-1">
              <FaBlog />
              <a href="#blogs">Blogs</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
