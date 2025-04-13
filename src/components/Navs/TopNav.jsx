import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import LanguageDropdown from "./Dropdown/LanguageDropdown";
import CurrencyDropdown from "./Dropdown/CurrencyDropdown";

const TopNav = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0 md:flex items-center justify-between">
      <div className="flex items-center justify-center gap-4">
        {/* Find Store */}
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <IoLocationOutline />
            <p>Find Store</p>
          </div>
          <div className="border border-gray-700 h-3"></div>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <AiOutlineMail />
            <p>admin@trynow.com</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-2">
            {/* Language Dropdown */}
            <div>
              <LanguageDropdown />
            </div>
          </div>
          <div className="border border-gray-700 h-3"></div>
          <div className="flex items-center justify-center gap-2">
            {/* Language Dropdown */}
            <div>
              <CurrencyDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
