import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideNav = ({ menuOpen, toggleMenu }) => {
  const location = useLocation();

  // Function to handle navigation to sections on the home page
  const handleSectionClick = (e, sectionId) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      e.preventDefault();
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <div
      className={` fixed top-0 left-0 h-screen w-2/3 bg-[#FEF8F8] border-2 border-black transition-transform duration-700 ease-in-out ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      } lg:hidden`}
      style={{ color: "#F7CB45", zIndex: 100 }}
    >
      <div className="p-6">
        <button
          className="text-[#F7CB45] text-xl font-bold mb-6"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <ul className="space-y-5 text-lg">
          <li>
            <Link to="/" className="block border-2 border-[#F7CB45] p-2 hover:text-white hover:bg-[#F7CB45] transition-all duration-300">Home</Link>
          </li>
          <li>
            <Link to="/works" className="block border-2 border-[#F7CB45] p-2 hover:text-white hover:bg-[#F7CB45] transition-all duration-300">Works</Link>
          </li>
          <li>
            <a 
              href="#services" 
              className="block border-2 border-[#F7CB45] p-2 hover:text-white hover:bg-[#F7CB45] transition-all duration-300"
              onClick={(e) => handleSectionClick(e, 'services')}
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#aboutme" 
              className="block border-2 border-[#F7CB45] p-2 hover:text-white hover:bg-[#F7CB45] transition-all duration-300"
              onClick={(e) => handleSectionClick(e, 'aboutme')}
            >
              About Me
            </a>
          </li>
          <li>
            <a 
              href="#testimonials" 
              className="block border-2 border-[#F7CB45] p-2 hover:text-white hover:bg-[#F7CB45] transition-all duration-300"
              onClick={(e) => handleSectionClick(e, 'testimonials')}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a 
              href="/imgs/img25.pdf" 
              className="block border-2 border-[#F7CB45] p-2 hover:text-white hover:bg-[#F7CB45] transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <Link to="/works" className="block border-2 border-black bg-[#F7CB45] p-2 mt-52 text-black hover:bg-[#e6b73c] transition-all duration-300">Learn More</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;