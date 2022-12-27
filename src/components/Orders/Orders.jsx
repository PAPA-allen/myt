import React from "react";
import food2 from "../../assets/food2.png";
import food3 from "../../assets/food3.png";
import food4 from "../../assets/food4.png";
import food5 from "../../assets/food5.png";
import food6 from "../../assets/food6.png";
import food7 from "../../assets/food7.png";

export const Orders = () => {
  return (
    <div className="p-4 mx-auto py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
      {/* Cards */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute rounded-xl bg-black/50 w-full h-full text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sweet Meals</p>
          <p className="px-2">finger licking</p>
          <button className="border border-black w-20 rounded-full hover:bg-black hover:text-white absolute mx-2 bottom-4 hover:scale-125">
            Order
          </button>
        </div>
        <img
          className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"
          src={food2}
          alt="second food"
        />
      </div>
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute rounded-xl bg-black/50 w-full h-full text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sweet Meals</p>
          <p className="px-2">finger licking</p>
          <button className="border border-black w-20 rounded-full hover:bg-black hover:text-white absolute mx-2 bottom-4 hover:scale-125">
            Order
          </button>
        </div>
        <img
          className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"
          src={food3}
          alt="third food"
        />
      </div>
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute rounded-xl bg-black/50 w-full h-full text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sweet Meals</p>
          <p className="px-2">finger licking</p>
          <button className="border border-black w-20 rounded-full hover:bg-black hover:text-white absolute mx-2 bottom-4 hover:scale-125">
            Order
          </button>
        </div>
        <img
          className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"
          src={food4}
          alt="second food"
        />
      </div>
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute rounded-xl bg-black/50 w-full h-full text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sweet Meals</p>
          <p className="px-2">finger licking</p>
          <button className="border border-black w-20 rounded-full hover:bg-black hover:text-white absolute mx-2 bottom-4 hover:scale-125">
            Order
          </button>
        </div>
        <img
          className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"
          src={food5}
          alt="third food"
        />
      </div>
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute rounded-xl bg-black/50 w-full h-full text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sweet Meals</p>
          <p className="px-2">finger licking</p>
          <button className="border border-black w-20 rounded-full hover:bg-black hover:text-white absolute mx-2 bottom-4 hover:scale-125">
            Order
          </button>
        </div>
        <img
          className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"
          src={food6}
          alt="second food"
        />
      </div>
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute rounded-xl bg-black/50 w-full h-full text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sweet Meals</p>
          <p className="px-2">finger licking</p>
          <button className="border border-black w-20 rounded-full hover:bg-black hover:text-white absolute mx-2 bottom-4 hover:scale-125">
            Order
          </button>
        </div>
        <img
          className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"
          src={food7}
          alt="second food"
        />
      </div>
    </div>
  );
};
