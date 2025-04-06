import React from "react";

const SideNav = ({ menuOpen, toggleMenu }) => {
  return (
    <div
      className={` fixed top-0 left-0 h-screen w-2/3 bg-[#FEF8F8] border-2 border-black transition-transform duration-700 ease-in-out ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      } lg:hidden`}
      style={{ color: "#F196E5", zIndex: 100 }}
    >
      <div className="p-6 scroll-smooth">
        <button
          className="text-[#F196E5] text-xl font-bold mb-6"
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
            <a href="#" className="block border-2 border-[#F196E5] p-2 active:text-white active:bg-[#F196E5]" >Home</a>
          </li>
          <li>
            <a href="#services" className="block border-2 border-[#F196E5] p-2 active:text-white active:bg-[#F196E5]" >Services</a>
          </li>
          <li>
            <a href="#aboutme" className="block border-2 border-[#F196E5] p-2 active:text-white active:bg-[#F196E5]">About Me</a>
          </li>
          <li>
            <a href="#testimonials" className="block border-2 border-[#F196E5] p-2 active:text-white active:bg-[#F196E5]" >Testimonials</a>
          </li>
          <li>
            <a href="/imgs/img25.pdf" className="block border-2 border-[#F196E5] p-2 active:text-white active:bg-[#F196E5]" >Resume</a>
          </li>
          <li>
            <a href="#" className="block border-2 border-black bg-[#F7CB45] p-2  mt-52 text-black">Learn More</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;