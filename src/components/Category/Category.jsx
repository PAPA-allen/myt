import React from "react";
import { categories } from "../../data/data";

export const Category = () => {
  console.log(categories);
  return (
    <div className="max-w-full px-4 py-12">
      <h1 className="text-green-400 font-bold text-3xl text-center">
        Top Rated Menu Items
      </h1>
      {/* categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl p-4 flex justify-between items-center"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img className="w-10" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
