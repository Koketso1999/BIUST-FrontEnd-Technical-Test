import { useState } from "react";
import blog from "../assets/blog.png";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-cyan-900 text-white p-1 flex justify-between items-center">
      <div className="logo">
        <img src={blog} alt="Logo" className="w-14 h-14" />
      </div>
      <div className="flex items-center">
        {/* <ul className={`flex ${isMenuOpen ? "flex-col" : ""}`}>
          <li className="mr-4">
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/blogs" className="hover:underline">
              All Blogs
            </a>
          </li>
        </ul> */}
        <button
          className="ml-4 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
