import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdDashboardCustomize, MdKeyboardArrowDown } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { GrAppleAppStore } from "react-icons/gr";
import { CiMenuFries } from "react-icons/ci";

const ResponsiveNavbar = () => {
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [mobileEyeglassOpen, setMobileEyeglassOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
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
    <nav className="flex items-center justify-between w-full relative h-auto max-w-screen-xl px-4 xl:px-0 mx-auto">
      <div>
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
          {isOpen && (
            <div className="absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-200">
              <div className="py-1">
                {categories.map((categ) => (
                  <p
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

      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
        <span className="group flex items-center gap-[3px] hover:text-[#3B9DF8] relative cursor-pointer">
          Home
          <MdKeyboardArrowDown className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
          <article className="p-2 bg-white  absolute top-[24px] z-[-1] w-max group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
            <ul>
              <li className="py-1">Home Option 1</li>
              <li className="py-1">Home Option 2</li>
              <li className="py-1">Home Option 3</li>
              <li className="py-1">Home Option 4</li>
            </ul>
          </article>
        </span>

        <span className="group flex items-center gap-[3px] hover:text-[#3B9DF8] relative cursor-pointer">
          Shop
          <MdKeyboardArrowDown className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
          <article className="p-2 bg-white  absolute top-[24px] z-[-1] w-max group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
            <ul>
              <li className="py-1">Shop Option 1</li>
              <li className="py-1">Shop Option 2</li>
              <li className="py-1">Shop Option 3</li>
              <li className="py-1">Shop Option 4</li>
            </ul>
          </article>
        </span>

        <span className="group flex items-center gap-[3px] hover:text-[#3B9DF8] relative cursor-pointer">
          Eyeglassess
          <MdKeyboardArrowDown className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
          <article className="p-2 bg-white  absolute top-[24px] z-[-1] w-max group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
            <ul>
              <li className="py-1">Eyeglassess Option 1</li>
              <li className="py-1">Eyeglassess Option 2</li>
              <li className="py-1">Eyeglassess Option 3</li>
              <li className="py-1">Eyeglassess Option 4</li>
            </ul>
          </article>
        </span>

        <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">
          about us
        </li>
      </ul>

      <div>
        <div className="hidden lg:flex items-center justify-center gap-5 cursor-pointer bg-black text-white pl-14 pr-8 py-3 text-sm rounded-tl-[8px] rounded-tr-[50px] rounded-bl-[50px] rounded-br-[8px]">
          <GrAppleAppStore className="text-xl" />
          <div>
            <p>Get 50% off on the App</p>
            <p>Download Now</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        className="md:hidden block text-2xl text-gray-700"
      >
        <CiMenuFries />
      </button>

      <aside
        className={` ${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : " opacity-0 z-[-1]"
        } md:hidden bg-sky-100 p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}
      >
        <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">
          <li
            onClick={() => setMobileHomeOpen(!mobileHomeOpen)}
            className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]"
          >
            Home
            <IoIosArrowDown
              className={`${
                mobileHomeOpen ? "rotate-[180deg]" : "rotate-0"
              } text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`}
            />
          </li>
          {mobileHomeOpen && (
            <div className="group font-[500] ml-6">
              <ul className="flex flex-col gap-[7px] text-[#424242]">
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  Home Option 1
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  Home Option 2
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  Home Option 3
                </li>
              </ul>
            </div>
          )}
          <li
            onClick={() => setMobileShopOpen(!mobileShopOpen)}
            className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]"
          >
            Shop
            <IoIosArrowDown
              className={`${
                mobileShopOpen ? "rotate-[180deg]" : "rotate-0"
              } text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`}
            />
          </li>
          {mobileShopOpen && (
            <div className="group font-[500] ml-6">
              <ul className="flex flex-col gap-[7px] text-[#424242]">
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  Shop Option 1
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  Shop Option 2
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  Shop Option 3
                </li>
              </ul>
            </div>
          )}
          <li
            onClick={() => setMobileEyeglassOpen(!mobileEyeglassOpen)}
            className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]"
          >
            Eyeglassess
            <IoIosArrowDown
              className={`${
                mobileEyeglassOpen ? "rotate-[180deg]" : "rotate-0"
              } text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`}
            />
          </li>
          {mobileEyeglassOpen && (
            <div className="group font-[500] ml-6">
              <ul className="flex flex-col gap-[7px] text-[#424242]">
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  Eyeglassess Option 1
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  Eyeglassess Option 2
                </li>
                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                  Eyeglassess Option 3
                </li>
              </ul>
            </div>
          )}
          <li className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
            About Us
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default ResponsiveNavbar;
