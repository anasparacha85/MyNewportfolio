import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaCommentDots, FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "About", icon: <FaUser />, path: "/about" },
    { name: "Projects", icon: <FaBriefcase />, path: "/projects" },
    { name: "Contact", icon: <FaEnvelope />, path: "/contact" },
   
  ];

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Hamburger Button for Small Screens */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center justify-center w-10 h-10 bg-gray-700 text-white rounded-full md:hidden"
      >
        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar for Larger Screens */}
      <div
        className={`fixed right-4 top-1/3 flex flex-col space-y-4 transition-transform duration-300 md:translate-x-0  ${
          isMenuOpen ? "block translate-x-0" : "translate-x-full hidden"
        } md:block`}
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 p-2 rounded-full transition-all duration-300 ${
              location.pathname === item.path ? "bg-yellow-500" : "bg-gray-700"
            } ${activeIndex === index ? "w-32" : "w-12"} `}
            onClick={() => handleItemClick(index)}
          >
            <Link to={item.path} className="flex items-center space-x-2 text-white">
              <span className="text-lg">{item.icon}</span>
              {activeIndex === index && <span className="text-sm">{item.name}</span>}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
