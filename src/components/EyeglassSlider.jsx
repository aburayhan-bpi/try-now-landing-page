import React, { useEffect, useState } from "react";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";

const slides = [
  {
    title: "NEW FASHION & MODERN EYEGLASSES",
    subtitle: "Coming Soon April",
    image: "https://i.ibb.co/60k4RHFR/eyeglass.png", // Replace with your image
  },
  {
    title: "STYLE MEETS COMFORT",
    subtitle: "Coming Soon April",
    image:
      "https://i.ibb.co/pjmWM8hC/mir-ismamul-karim-Cqbj-EPj6-Q8-unsplash-removebg-preview.png",
  },
  {
    title: "FIND YOUR PERFECT PAIR",
    subtitle: "Coming Soon April",
    image: "https://i.ibb.co/Gvkjmd0g/eyeglass3.png",
  },
];

const EyeglassSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // Changes slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative flex justify-center items-center bg-[#eaf7fe] h-[400px] rounded-xl overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className=" flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left w-full flex-shrink-0"
          >
            <div className="max-w-md">
              <p className="text-[#3B9DF8] text-sm mb-2">{slide.subtitle}</p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                {slide.title}
              </h1>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded-full hover:bg-[#3B9DF8] transition">
                Discover Models →
              </button>
            </div>
            <img
              src={slide.image}
              alt="Eyeglasses"
              className="w-[200px] md:w-[300px] transition-all duration-500"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow Button */}
      <div
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2  p-2 rounded-full transition cursor-pointer"
      >
        <RiArrowLeftWideFill className="text-3xl" />
      </div>

      {/* Right Arrow Button */}
      <div
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2  p-2 rounded-full transition cursor-pointer"
      >
        <RiArrowRightWideFill className="text-3xl" />
      </div>

      <div className="absolute bottom-4 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EyeglassSlider;
