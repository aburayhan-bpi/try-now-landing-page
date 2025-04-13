import React from "react";
import EyeglassSlider from "../../components/EyeglassSlider";
import SectionHeading from "../../components/common/SectionHeading";

const Home = () => {
  const categoryGlassCase = [
    {
      _id: 1,
      title: "Men",
      images: [
        "https://i.ibb.co/60k4RHFR/eyeglass.png",
        "https://i.ibb.co/60k4RHFR/eyeglass.png",
        "https://i.ibb.co/60k4RHFR/eyeglass.png",
        "https://i.ibb.co/60k4RHFR/eyeglass.png",
      ],
      alt: "Men's glass",
    },
    {
      _id: 2,
      title: "Women",
      images: [
        "https://i.ibb.co/60k4RHFR/eyeglass.png",
        "https://i.ibb.co/60k4RHFR/eyeglass.png",
        "https://i.ibb.co/60k4RHFR/eyeglass.png",
        "https://i.ibb.co/60k4RHFR/eyeglass.png",
      ],
      alt: "Women's glass",
    },
    {
      _id: 3,
      title: "Baby",
      images: [
        "https://i.ibb.co/60k4RHFR/eyeglass.png",
        "https://i.ibb.co/60k4RHFR/eyeglass.png",
        "https://i.ibb.co/60k4RHFR/eyeglass.png",
        "https://i.ibb.co/60k4RHFR/eyeglass.png",
      ],
      alt: "Baby's glass",
    },
    {
      _id: 4,
      title: "Young Fashion",
      images: [
        "https://i.ibb.co/60k4RHFR/eyeglass.png",
        "https://i.ibb.co/60k4RHFR/eyeglass.png",
        "https://i.ibb.co/60k4RHFR/eyeglass.png",
        "https://i.ibb.co/60k4RHFR/eyeglass.png",
      ],
      alt: "Young Fashion's glass",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0">
      <div className="py-7">
        <EyeglassSlider />
      </div>

      {/* Eyeglasses Category Section */}
      <div className="mb-40">
        <SectionHeading title={"Eyeglasses Categories"} />

        <div className=" flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Sidebar */}
          <div
            style={{
              backgroundImage: `url('https://i.ibb.co/rRQ33t2Y/glass-bg.jpg')`,
            }}
            className="relative bg-cover bg-center shadow-lg border rounded-lg p-4 bg-white w-64 flex flex-col mx-auto md:hidden lg:block"
          >
            <div className="absolute inset-0 bg-gray-500 bg-opacity-30 rounded-md"></div>
            <h2 className="text-2xl font-semibold mb-3 text-center">
              Eyeglasses
            </h2>

            <div className="flex flex-col gap-3 w-full mx-auto">
              <img
                className="w-fit mx-auto rounded-md relative top-12"
                src="https://i.ibb.co/7NTb6XvD/glass-side1.jpg"
                alt=""
              />
              <div className="flex items-center justify-center gap-3 mt-14">
                <img
                  className="w-[100px] mx-auto rounded-md relative"
                  src="https://i.ibb.co/d4Zs0KQn/glass-side2.jpg"
                  alt=""
                />
                <img
                  className="w-[100px] mx-auto rounded-md relative"
                  src="https://i.ibb.co/tpX07JyN/glass-side3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
            {categoryGlassCase.map((category) => (
              <div
                key={category?._id}
                className="p-3 bg-white shadow-lg rounded-lg flex flex-col"
              >
                <h2 className="font-semibold mb-2 text-lg">
                  {category?.title}
                </h2>
                <div className="flex  justify-center gap-3 items-center pt-2">
                  {category?.images.map((image, index) => (
                    <div
                      key={index}
                      className={`${
                        category?.title === "Men"
                          ? "bg-sky-100"
                          : category?.title === "Women"
                          ? "bg-gray-200"
                          : "bg-gray-300"
                      }  rounded-md p-2 cursor-pointer hover:shadow-md transition-all duration-300`}
                    >
                      <img
                        className="w-24 mx-auto"
                        src={image}
                        alt={category?.alt}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
