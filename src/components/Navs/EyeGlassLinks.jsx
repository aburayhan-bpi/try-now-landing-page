import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const EyeGlassLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const categories = [
    { id: 1, name: "Eyeglassess Option 1" },
    { id: 2, name: "Eyeglassess Option 2" },
    { id: 3, name: "Eyeglassess Option 3" },
    { id: 4, name: "Eyeglassess Option 4" },
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

  return (
    <div
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="relative flex-shrink-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center py-2 rounded-l-lg transition-colors"
        >
          <span className="w-fit text-xs md:text-sm whitespace-nowrap">
            {/* <NavLink to="/"> */}
            <li className="list-none">Eyeglassess</li>
            {/* </NavLink> */}
          </span>
          <svg
            className={`w-4 h-4 ml-1 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
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

        <div
          className={`absolute left-0 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-200 transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0 scale-100 visible"
              : "opacity-0 translate-y-2 scale-95 invisible"
          }`}
        >
          <div className="py-1">
            {categories.map((categ) => (
              <p
                key={categ.id}
                className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
              >
                {categ.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyeGlassLinks;
