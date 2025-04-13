import React from "react";
import { IoStar } from "react-icons/io5";

const ProductCard = (product = {}) => {

  return (
    <div className="flex flex-col h-full">
      <div className="relative border w-full h-full px-2 py-4 group rounded-lg transition duration-300">
        <div className="bg-gray-200 flex items-center justify-center h-64 p-4 rounded-tl-full rounded-tr-full transition duration-300 group-hover:bg-sky-100">
          <img
            className="w-40 h-40 object-contain transition-transform duration-300"
            src={product?.product?.image}
            alt={product?.title}
          />
        </div>
        <div className="absolute top-10 left-0 bg-black text-white px-5 py-2 rounded-lg">
          {product?.product?.discount} OFF
        </div>
        <div className="mt-3 flex flex-col justify-between flex-grow">
          <h2 className="font-medium text-lg">{product?.product?.title}</h2>
          <p className="text-green-500 font-medium capitalize">
            {product?.product?.availability}
          </p>
          <div className="flex gap-1 items-center mt-2">
            <span className="text-yellow-500 flex items-center justify-center gap-1 mr-1">
              {[...Array(5)].map((_, i) => (
                <IoStar
                  key={i}
                  className={
                    i < product?.product?.rating
                      ? "text-sky-500"
                      : "text-gray-300"
                  }
                />
              ))}
            </span>
            <span className="font-medium">{product?.rating}</span>
          </div>
          <div className="flex gap-2 mt-2 text-sm">
            <span className="line-through text-gray-600 opacity-50">
              {product?.product?.regularPrice}
            </span>
            <span className="font-medium text-sky-500">
              {product?.product?.discountPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
