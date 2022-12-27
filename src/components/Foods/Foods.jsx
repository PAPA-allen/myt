import React, { useState } from "react";
import { data } from "../../data/data";

export const Foods = () => {
  const [foods, setFoods] = useState(data);

  //filter type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  //filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="w-full m-auto px-4 py-12">
      <h1 className="text-green-500 font-bold text-4xl items-center text-center">
        Top Rated Menu Items
      </h1>

      {/* filter row */}
      <div className="flex flex-col lg:flex-row justify-between p-4">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-500 m-2">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border border-black rounded-full flex items-center px-2 hover:bg-black hover:text-white "
            >
              All
            </button>
            <button
              onClick={() => filterType("burgur")}
              className=" m-1 border border-black rounded-full md:flex items-center px-2 hover:bg-black hover:text-white"
            >
              Burgurs
            </button>
            <button
              onClick={() => filterType("pizza")}
              className=" m-1 border border-black rounded-full  md:flex items-center px-2 hover:bg-black hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className=" m-1 border border-black rounded-full  md:flex items-center px-2 hover:bg-black hover:text-white"
            >
              salad
            </button>
            <button
              onClick={() => filterType("bread")}
              className=" m-1 border border-black rounded-full  md:flex items-center px-2 hover:bg-black hover:text-white"
            >
              Bread
            </button>
          </div>
        </div>
        {/* filter price */}
        <div>
          <p className="font-bold font-gray-500 ">Filter Price</p>
          <div className="flex justify-between max-w-[300px] w-full ">
            <button
              onClick={() => filterPrice("$5")}
              className="m-1 border border-black rounded-full  md:flex items-center px-2 hover:bg-black hover:text-white "
            >
              $5
            </button>
            <button
              onClick={() => filterPrice("$15")}
              className=" m-1 border border-black rounded-full  md:flex items-center px-2 hover:bg-black hover:text-white "
            >
              $15
            </button>
            <button
              onClick={() => filterPrice("$35")}
              className="m-1 border border-black rounded-full  md:flex items-center px-2 hover:bg-black hover:text-white "
            >
              $35
            </button>
          </div>
        </div>
      </div>

      {/* display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-2xl rounded-lg hover:scale-110 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-green-400 text-white rounded-full p-2">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
