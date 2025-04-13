import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { CiAt } from "react-icons/ci";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 xl:px-0 pt-10 pb-5">
        <div className="md:flex items-center justify-between">
          {/* Left side */}
          <div className="mb-10 md:mb-0">
            <img
              className="w-36 mb-8"
              src="https://i.ibb.co/9kYq236f/company-logo.png"
              alt="Try Now"
            />
            <p className="flex items-center justify-start gap-2 text-base mb-3">
              <SlLocationPin /> <span>30 Buttonwood St.Pataskala OH 43062</span>
            </p>
            <p className="flex items-center justify-start gap-2 text-base mb-3">
              <BsTelephone /> <span>(+1)-613-333-0101</span>
            </p>
            <p className="flex items-center justify-start gap-2 text-base mb-5">
              <MdEmail /> <span>admin@trynow.com</span>
            </p>
            <div className="flex items-center justify-start gap-5">
              <FaTwitter className="text-3xl" />
              <IoLogoYoutube className="text-3xl" />
              <FaInstagram className="text-3xl" />
            </div>
          </div>
          {/* Right side */}
          <div className="md:flex items-center md:gap-3 lg:gap-36">
            {/* Column 1 */}
            <div className="mb-6">
              <h2 className="uppercase">Categories</h2>
              <ul className="text-white/60 mt-3 space-y-2 font-light">
                <li className="hover:text-white/90 transition-all duration-200 cursor-pointer">
                  Men's Eyeglasses
                </li>
                <li className="hover:text-white/90 transition-all duration-200 cursor-pointer">
                  Women's Eyeglasses
                </li>
                <li className="hover:text-white/90 transition-all duration-200 cursor-pointer">
                  Baby's Eyeglasses
                </li>
                <li className="hover:text-white/90 transition-all duration-200 cursor-pointer">
                  Young Eyeglasses
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="mb-6">
              <h2 className="uppercase">Categories</h2>
              <ul className="text-white/60 mt-3 space-y-2 font-light">
                <li className="hover:text-white/90 transition-all duration-200 cursor-pointer">
                  Men's Eyeglasses
                </li>
                <li className="hover:text-white/90 transition-all duration-200 cursor-pointer">
                  Women's Eyeglasses
                </li>
                <li className="hover:text-white/90 transition-all duration-200 cursor-pointer">
                  Baby's Eyeglasses
                </li>
                <li className="hover:text-white/90 transition-all duration-200 cursor-pointer">
                  Young Eyeglasses
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="mb-6">
              <h2 className="uppercase">Categories</h2>
              <ul className="text-white/60 mt-3 space-y-2 font-light">
                <li className="hover:text-white/90 transition-all duration-200 cursor-pointer">
                  Men's Eyeglasses
                </li>
                <li className="hover:text-white/90 transition-all duration-200 cursor-pointer">
                  Women's Eyeglasses
                </li>
                <li className="hover:text-white/90 transition-all duration-200 cursor-pointer">
                  Baby's Eyeglasses
                </li>
                <li className="hover:text-white/90 transition-all duration-200 cursor-pointer">
                  Young Eyeglasses
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* horizontal line */}
      <div className="border-t border-gray-700 w-full h-1 pb-5"></div>
      {/* Footer Text */}
      <div className="md:flex items-center justify-between max-w-screen-xl mx-auto px-4 xl:px-0 pb-4">
        <div className="flex items-center justify-center md:justify-start gap-1 pb-4 md:pb-0">
          <AiOutlineCopyright />
          2020 Try Now Eyeglasses Shop
        </div>
        <div className="flex justify-center md:justify-start">
          <img
            className="w-52"
            src="https://i.ibb.co/7xCdpNtm/ssl.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
