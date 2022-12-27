import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiFillTag,
} from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiCardPickup } from "react-icons/gi";

export const Navbar = () => {
  const [sidebar, setSideBar] = useState(false);
  return (
    <div className="w-full mx-auto flex items-center p-4 justify-between">
      {/* left side */}
      <div className="items-center flex">
        <div onClick={() => setSideBar(true)} className="cursor-pointer">
          <AiOutlineMenu size={27} />
        </div>
        <h1 className="mx-2 text-xl sm:text-1xl lg:text-2xl">
          FOOD <span className="font-bold">COT</span>
        </h1>
        <div className="hidden lg:flex bg-gray-300 rounded-full p-1">
          <p className="bg-black text-white rounded-full items-center w-[60px]">
            <CiDeliveryTruck size={30} className="p-0 mx-3 mt-1" />
          </p>
          <p className="p-2 items-center">
            <GiCardPickup size={20} className=" mx-2 mt-1" />
          </p>
        </div>
      </div>
      {/* search input */}
      <div className="bg-gray-200 w-[200px] sm:w-[400px] lg:w-[500px] flex items-center rounded-full px-2">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="search here"
          className="bg-transparent focus:outline-none p-2 w-full"
        />
      </div>
      <button className="border border-black rounded-full hidden md:flex items-center px-2 hover:bg-black hover:text-white">
        <AiOutlineShoppingCart className="mr-1" />
        <p className="p-2">Cart</p>
      </button>

      {/*mobile menu */}
      {sidebar && (
        <div className="bg-black/70 fixed w-full z-10 h-screen left-0 top-0"></div>
      )}

      {/*sidebar*/}
      <div
        className={
          sidebar
            ? "top-0 left-0 fixed w-[250px] bg-white z-10 h-screen duration-300 "
            : "top-0 left-[-100%] fixed w-[250px] bg-white z-10 h-screen duration-300 "
        }
      >
        <GrClose
          onClick={() => setSideBar(false)}
          className="absolute top-4 right-4 cursor-pointer duration-400"
        />
        <h2 className="text-xl p-4">
          FOOD <span className="font-bold">COT</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-3 flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-3 flex">
              <MdFavorite size={25} className="mr-4" />
              Favorites
            </li>
            <li className="text-xl py-3 flex">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl py-3 flex">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-3 flex">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="text-xl py-3 flex">
              <BsFillSaveFill size={25} className="mr-4" />
              best One
            </li>
            <li className="text-xl py-3 flex">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
