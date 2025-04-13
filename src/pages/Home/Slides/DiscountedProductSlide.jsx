import React, { useState } from "react";
import ProductCard from "../../../components/common/ProductCard";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const DiscountedProductSlide = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const slidesToShow = 4;

  const totalSlides = Math.ceil(products.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  return (
    <div>
      {/* Product Slider */}
      <div className="mt-10 relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: transitionEnabled
              ? "transform 500ms ease-in-out"
              : "none",
          }}
        >
          {products.map((product) => (
            <div
              key={product._id}
              className="w-64 h-full flex-shrink-0 px-3"
              // style={{ width: `${100 / slidesToShow}%` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {totalSlides > 1 && (
          <>
            <div
              onClick={prevSlide}
              className="absolute left-0 top-1/2 cursor-pointer -translate-y-1/2 p-3 rounded-full z-10 transition-all duration-300 hover:scale-150"
              aria-label="Previous slide"
            >
              <SlArrowLeft />
            </div>
            <div
              onClick={nextSlide}
              className="absolute right-0 top-1/2 cursor-pointer -translate-y-1/2  p-3 rounded-full z-10 transition-all duration-300 hover:scale-150"
              aria-label="Next slide"
            >
              <SlArrowRight />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DiscountedProductSlide;
