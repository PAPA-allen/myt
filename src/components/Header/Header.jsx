import React from "react";
import food1 from "../../assets/food1.png";

export const Header = () => {
  return (
    <div className="w-full p-4">
      <div className=" max-h-[500px] relative">
        {/* overlay */}
        <div className="absolute w-full h-full text-gray-300 bg-black/30 flex flex-col max-h-[500] justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-green-400">
            Tasty <span className="font-bold text-white">FOODS</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            You Can <span className="font-bold text-green-400">TRUST</span>
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src={food1}
          alt="food"
        />
      </div>
    </div>
  );
};
