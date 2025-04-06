import React, { useState, useEffect } from "react";
import SideNav from "./SideNav";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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
            <img src="/imgs/img1.png" alt="Logo" className="w-20" />
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
          <div className="text-white gap-5 pr-60 md:pr-16 lg:pr-24 xl:pr-40 hidden md:flex lg:flex xl:flex ">
            <ul className="flex gap-10">
              <li>
                <a href="#home" className="scroll-smooth">Home</a>
              </li>
              <li>
                <a href="#services" className="scroll-smooth">Services</a>
              </li>
              <li>
                <a href="#aboutme" className="scroll-smooth">About Me</a>
              </li>
              <li>
                <a href="#testimonials" className="scroll-smooth">Testimonials</a>
              </li>
              <li>
                <a href="/imgs/img25.pdf" className="scroll-smooth">Resume</a>  
              </li>
            </ul>
          </div>
          <button className="bg-white text-[#030F1F] p-3 px-5 rounded-3xl hidden md:block lg:block xl:block">
            Contact
          </button>
        </div>
      </nav>
      <SideNav menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
