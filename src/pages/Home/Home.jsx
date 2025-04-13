import React, { useState } from "react";
import EyeglassSlider from "../../components/EyeglassSlider";
import SectionHeading from "../../components/common/SectionHeading";
import ProductCard from "../../components/common/ProductCard";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import AllProductSlide from "./Slides/AllProductSlide";
import BestSellProductSlide from "./Slides/BestSellProductSlide";
import DiscountedProductSlide from "./Slides/DiscountedProductSlide";
import NewProductSlide from "./Slides/NewProductSlide";
import { TbCoin, TbTruckDelivery } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const slidesToShow = 4;
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
  const products = [
    {
      _id: 1,
      title: "Gucci Eyeglasses",
      image: "https://i.ibb.co/Gvkjmd0g/eyeglass3.png",
      availability: "in stock",
      rating: 3,
      regularPrice: "$5.45",
      discountPrice: "$3.53",
      discount: "14%",
    },
    {
      _id: 2,
      title: "Ray-Ban Classic Wayfarer",
      image: "https://i.ibb.co/60k4RHFR/eyeglass.png",
      availability: "in stock",
      rating: 5,
      regularPrice: "$120.00",
      discountPrice: "$99.00",
      discount: "18%",
    },
    {
      _id: 3,
      title: "Oakley Men’s Metal Frame",
      image: "https://i.ibb.co/Gvkjmd0g/eyeglass3.png",
      availability: "out of stock",
      rating: 4,
      regularPrice: "$150.00",
      discountPrice: "$129.99",
      discount: "13%",
    },
    {
      _id: 4,
      title: "Prada Rectangular Eyeglasses",
      image: "https://i.ibb.co/Gvkjmd0g/eyeglass3.png",
      availability: "in stock",
      rating: 4,
      regularPrice: "$220.00",
      discountPrice: "$189.99",
      discount: "14%",
    },
    {
      _id: 5,
      title: "Versace Men’s Designer Glasses",
      image: "https://i.ibb.co/60k4RHFR/eyeglass.png",
      availability: "in stock",
      rating: 5,
      regularPrice: "$270.00",
      discountPrice: "$215.50",
      discount: "20%",
    },
    {
      _id: 6,
      title: "Burberry Square Optical Glasses",
      image: "https://i.ibb.co/60k4RHFR/eyeglass.png",
      availability: "limited stock",
      rating: 4,
      regularPrice: "$180.00",
      discountPrice: "$159.99",
      discount: "11%",
    },
    {
      _id: 7,
      title: "Tom Ford FT5401 Eyeglasses",
      image: "https://i.ibb.co/60k4RHFR/eyeglass3.png",
      availability: "in stock",
      rating: 5,
      regularPrice: "$350.00",
      discountPrice: "$299.99",
      discount: "14%",
    },
    {
      _id: 8,
      title: "Persol PO3007V Eyeglasses",
      image: "https://i.ibb.co/60k4RHFR/eyeglass.png",
      availability: "in stock",
      rating: 4,
      regularPrice: "$230.00",
      discountPrice: "$199.00",
      discount: "13%",
    },
  ];

  const totalSlides = Math.ceil(products.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 xl:px-0">
        <div className="py-7">
          <EyeglassSlider />
        </div>
        {/* Eyeglasses Category Section */}
        <div className="mb-14">
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
        {/* Flash Sale Section */}
        <div className="mb-10">
          <SectionHeading title={"Flash Sale"} />
          {/* Timer */}
          <div className="md:flex items-center justify-between max-w-2xl rounded-full border px-6 py-4">
            <h2 className="text-lg text-center mb-4 md:text-3xl md:text-left md:mb-0 font-bold">
              Deal of The Day
            </h2>
            <div className="md:flex items-center justify-center gap-3">
              <span className="font-normal flex justify-center items-center mb-2 md:block md:mb-0">
                End in:{" "}
              </span>
              <div className="flex items-center justify-center gap-3">
                <div className="px-3 pt-5 pb-3 bg-sky-600 text-white rounded-lg">
                  00D
                </div>
                <div className="px-3 pt-5 pb-3 bg-sky-600 text-white rounded-lg">
                  00H
                </div>
                <div className="px-3 pt-5 pb-3 bg-sky-600 text-white rounded-lg">
                  00M
                </div>
                <div className="px-3 pt-5 pb-3 bg-sky-600 text-white rounded-lg">
                  00S
                </div>
              </div>
            </div>
          </div>

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
        {/* All Products */}
        <SectionHeading title={"All Products"} />
        <div>
          <AllProductSlide products={products} />
        </div>
        {/* Best Selling */}
        <SectionHeading title={"Best Selling"} />
        <div>
          <BestSellProductSlide products={products} />
        </div>
        {/* Discounted Offer */}
        <SectionHeading title={"Discounted Offer"} />
        <div>
          <DiscountedProductSlide products={products} />
        </div>
        {/* New Arrival */}
        <SectionHeading title={"New Arrival"} />
        <div>
          <NewProductSlide products={products} />
        </div>
        {/* Top Brands */}
        <SectionHeading title={"Top Brands"} />
        <div className="flex flex-wrap items-center justify-evenly mb-10">
          <img
            className="w-28 grayscale opacity-60"
            src="https://i.ibb.co/kgPNpf4W/police.png"
            alt=""
          />
          <img
            className="w-28 grayscale opacity-60"
            src="https://i.ibb.co/1f0bJ2q9/rayban.png"
            alt=""
          />
          <img
            className="w-28 grayscale opacity-60"
            src="https://i.ibb.co/zW6bpxDR/gucci.png"
            alt=""
          />
          <img
            className="w-28 grayscale opacity-60"
            src="https://i.ibb.co/bjpFvxjY/boss.png"
            alt=""
          />
          <img
            className="w-28 grayscale opacity-60"
            src="https://i.ibb.co/tTmQyntM/carrera.png"
            alt=""
          />
          <img
            className="w-28 grayscale opacity-60"
            src="https://i.ibb.co/HD37Bzsw/icarus-eyewear.png"
            alt=""
          />
        </div>

        {/* Newsletter Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between bg-black text-white px-10 py-5 rounded-full">
            <h2 className="text-2xl font-semibold w-full hidden md:block">
              Join Our Newsletter
            </h2>
            <div className="relative w-full">
              <input
                className="rounded-full p-3 w-full text-black outline-none px-4"
                type="email"
                required
              />
              <button className="absolute top-2 right-4 rounded-full px-5 py-1 bg-black text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* Extra Text */}
        <div className="md:flex items-center justify-between mb-12 space-y-3 md:space-y-0">
          <p className="flex items-center justify-center gap-3">
            <TbTruckDelivery className="text-xl" />{" "}
            <span>Free delivery for order over $70</span>
          </p>
          <p className="flex items-center justify-center gap-3">
            <CiDiscount1 className="text-xl" />{" "}
            <span>Daily Mega Discounts</span>
          </p>
          <p className="flex items-center justify-center gap-3">
            <TbCoin className="text-xl" /> <span>Best price on the market</span>
          </p>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-black text-white">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
