import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Reset menu when location changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Function to handle navigation to sections on the home page
  const handleSectionClick = (sectionId) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={`top-0 left-0 z-50 w-screen h-16 fixed transition-transform duration-300 xl:top-8 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="pt-4 mx-3 h-full flex justify-between items-center xl:w-4/5 xl:mx-auto 
        md:p-2 md:bg-[#030F1F] lg:bg-[#030F1F] xl:bg-[#030F1F] md:rounded-2xl lg:rounded-2xl xl:p-8 md:pt-10 ">
          <div>
            <Link to="/">
              <img src="/imgs/img1.png" alt="Logo" className="w-20" />
            </Link>
          </div>
          {/* Hamburger Icon */}
          <div>
            <img
              src="/imgs/img2.png"
              alt="Hamburger"
              className="w-10 md:hidden lg:hidden xl:hidden cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          {/* Desktop Menu */}
          <div className="text-white gap-5 pr-60 md:pr-16 lg:pr-24 xl:pr-40 hidden md:flex lg:flex xl:flex items-center justify-center">
            <ul className="flex gap-10 ml-24 items-center">
              <li>
                <Link to="/" className="hover:text-[#F7CB45] transition-all duration-300">Home</Link>
              </li>
              <li>
                <Link to="/works" className="hover:text-[#F7CB45] transition-all duration-300">Works</Link>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="hover:text-[#F7CB45] transition-all duration-300"
                  onClick={(e) => handleSectionClick('services')}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#aboutme" 
                  className="hover:text-[#F7CB45] transition-all duration-300"
                  onClick={(e) => handleSectionClick('aboutme')}
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="hover:text-[#F7CB45] transition-all duration-300"
                  onClick={(e) => handleSectionClick('testimonials')}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="/imgs/img25.pdf" 
                  className="hover:text-[#F7CB45] transition-all duration-300" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
          <button className="bg-white text-[#030F1F] p-3 px-5 rounded-3xl hidden md:block lg:block xl:block hover:bg-[#F7CB45] transition-all duration-300">
            Contact
          </button>
        </div>
      </nav>
      <SideNav menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
