import React, { useEffect, useRef, useState } from "react";
import { GrAppleAppStore } from "react-icons/gr";

const CategoryNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    "Categories by Brand"
  );
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
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0 flex items-center justify-between">
      <div>
        {/* Categories Dropdown */}
        <div className="relative hidden sm:block flex-shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center bg-black text-white rounded-xl px-5 py-4 hover:bg-gray-800 transition-colors"
          >
            <span className="w-32 text-xs md:text-sm whitespace-nowrap">
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
      </div>
      <div>Nav links</div>
      <div
        className="flex items-center justify-center gap-5 cursor-pointer bg-black text-white pl-14 pr-8 py-3 text-sm 
  rounded-tl-[8px] rounded-tr-[50px] 
  rounded-bl-[50px] rounded-br-[8px]"
      >
        <GrAppleAppStore className="text-xl" />

        <div className="">
          <p>Get 50% off on the App</p>
          <p>Download Now</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
