import React from 'react';

const CategoryShowcase = ({title, image, alt}) => {
    return (
        <div className="p-3 bg-white shadow w-fit rounded-lg">
              <h2 className="font-semibold">Men</h2>
              <div className="flex gap-3 justify-self-start pt-2 items-center">
                <div className="bg-sky-200 rounded-md w-24">
                  <img
                    className="w-32 mx-auto"
                    src="https://i.ibb.co/60k4RHFR/eyeglass.png"
                    alt="Men's glass"
                  />
                </div>
                <div className="bg-sky-200 rounded-md w-24">
                  <img
                    className="w-32 mx-auto"
                    src="https://i.ibb.co/60k4RHFR/eyeglass.png"
                    alt="Men's glass"
                  />
                </div>
                <div className="bg-sky-200 rounded-md w-24">
                  <img
                    className="w-32 mx-auto"
                    src="https://i.ibb.co/60k4RHFR/eyeglass.png"
                    alt="Men's glass"
                  />
                </div>
              </div>
            </div>
    );
};

export default CategoryShowcase;