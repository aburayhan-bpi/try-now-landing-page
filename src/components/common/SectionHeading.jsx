import React from "react";

const SectionHeading = ({title ='Default Title'}) => {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="flex items-center w-full max-w-md">
        <span className="flex-grow border-t border-gray-300"></span>
        <h2 className="mx-4 text-2xl md:text-3xl font-bold text-[#0b132a]">
          {title}
        </h2>
        <span className="flex-grow border-t border-gray-300"></span>
      </div>
    </div>
  );
};

export default SectionHeading;
