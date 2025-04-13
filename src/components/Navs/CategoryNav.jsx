import React, { useEffect, useRef, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { GrAppleAppStore } from "react-icons/gr";
import { TfiClose } from "react-icons/tfi";

import HomeLinks from "./HomeLinks";
import ShopLinks from "./ShopLinks";
import EyeGlassLinks from "./EyeGlassLinks";
import { NavLink } from "react-router-dom";

const CategoryNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Categories by Brand");
  const dropdownRef = useRef(null);

  const categories = [
    { id: 1, name: "Categories by Brand" },
    { id: 2, name: "Dragon" },
    { id: 3, name: "Titan" },
    { id: 4, name: "Hugo Boss" },
    { id: 5, name: "Gucci" },
    { id: 6, name: "Oakley" },
    { id: 7, name: "Emillio Puccini" },
    { id: 8, name: "Puma" },
    { id: 9, name: "Ray Ban" },
    { id: 10, name: "Oakley Youth" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const NavigationLinks = () => (
    <>
      <HomeLinks />
      <ShopLinks />
      <EyeGlassLinks />
      <NavLink to="/about-us">
        <li className="list-none w-fit text-xs md:text-sm whitespace-nowrap">
          About Us
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between">
      <div>
        {/* Categories Dropdown */}
        <div className="relative block flex-shrink-0" ref={dropdownRef}>
          <button
            aria-haspopup="true"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center bg-black text-white rounded-xl px-5 py-4 hover:bg-gray-800 transition-colors"
          >
            <span className="w-32 text-xs md:text-sm whitespace-nowrap">
              {selectedCategory}
            </span>
            <svg
              className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-200">
              <div className="py-1">
                {categories.map((categ) => (
                  <p
                    role="menuitem"
                    key={categ.id}
                    onClick={() => {
                      setSelectedCategory(categ.name);
                      setIsOpen(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                  >
                    {categ.name}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        {/* Menu Toggle Icon for Mobile */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-8 h-8 cursor-pointer md:hidden"
        >
          <TfiClose
            className={`absolute transition-all duration-300 text-3xl ${
              menuOpen ? "opacity-100 scale-100 rotate-0 pointer-events-auto" : "opacity-0 scale-50 rotate-90 pointer-events-none"
            }`}
          />
          <CiMenuFries
            className={`absolute transition-all duration-300 text-3xl ${
              menuOpen ? "opacity-0 scale-50 rotate-90 pointer-events-none" : "opacity-100 scale-100 rotate-0 pointer-events-auto"
            }`}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex absolute md:relative right-5 w-52 bg-gray-200 items-center justify-center gap-7 border">
          <NavigationLinks />
        </div>

        {/* Mobile Menu */}
        <div className={`absolute left-36 w-52 bg-gray-200 items-center justify-center gap-7 border md:hidden ${menuOpen ? "flex flex-col" : "hidden"}`}>
          <NavigationLinks />
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center gap-5 cursor-pointer bg-black text-white pl-14 pr-8 py-3 text-sm rounded-tl-[8px] rounded-tr-[50px] rounded-bl-[50px] rounded-br-[8px]">
        <GrAppleAppStore className="text-xl" />
        <div>
          <p>Get 50% off on the App</p>
          <p>Download Now</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
