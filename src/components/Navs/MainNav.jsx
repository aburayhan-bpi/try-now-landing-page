import React, { useState, useRef, useEffect } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const dropdownRef = useRef(null);

  const categories = [
    { id: 1, name: "All Categories" },
    { id: 2, name: "Dragon" },
    { id: 3, name: "Titan" },
    { id: 4, name: "Hugo Boss" },
    { id: 5, name: "Gucci" },
    { id: 6, name: "Oakley" },
  ];

  // Close dropdown when clicking outside
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

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 xl:px-0 py-4 md:flex items-center justify-between gap-4">
        {/* Company Logo */}
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <img
            className="w-36 mx-auto md:mx-0"
            src="./images/company_logo.png"
            alt="Try Now"
          />
        </div>

        {/* Category & Searchbar */}
        <div className="flex-1 min-w-0 mx-0 md:mx-4">
          <div className="flex w-full max-w-2xl mx-auto" ref={dropdownRef}>
            {/* Categories Dropdown */}
            <div className="relative hidden sm:block flex-shrink-0">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center bg-black text-white px-3 py-2 rounded-l-lg hover:bg-gray-800 transition-colors"
              >
                <span className="w-24 text-xs md:text-sm whitespace-nowrap">
                  {selectedCategory}
                </span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
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

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                  <div onClick={() => setIsOpen(!isOpen)} className="py-1">
                    {categories.map((categ) => (
                      <p
                        key={categ.id}
                        onClick={() => setSelectedCategory(categ.name)}
                        className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                      >
                        {categ.name}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Search Input */}
            <div className="relative flex-grow">
              <input
                className="w-full bg-gray-100 py-2 px-4 focus:outline-none sm:rounded-none rounded-l-lg sm:rounded-l-none"
                type="text"
                name="search"
                placeholder="Search all products"
              />
            </div>

            {/* Search Button */}
            <button className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800 transition-colors">
              <IoSearch className="text-lg" />
            </button>
          </div>
        </div>

        {/* Icons Group - Right side */}
        <div className="hidden lg:flex items-center justify-end gap-4 mt-4 md:mt-0 flex-shrink-0">
          <div className="relative group">
            <div className="flex items-center cursor-pointer">
              <FaRegUser className="text-xl text-gray-600 hover:text-black transition-colors" />
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
            </div>
          </div>

          <div className="relative cursor-pointer">
            <MdFavoriteBorder className="text-xl hover:text-black transition-colors" />
            <span className="absolute -top-2 -right-1 w-5 h-5 bg-sky-400 text-white text-xs flex items-center justify-center rounded-full">
              2
            </span>
          </div>

          <div className="relative cursor-pointer">
            <CiShoppingBasket className="text-xl hover:text-black transition-colors" />
            <span className="absolute -top-2 -right-1 w-5 h-5 bg-sky-400 text-white text-xs flex items-center justify-center rounded-full">
              3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
