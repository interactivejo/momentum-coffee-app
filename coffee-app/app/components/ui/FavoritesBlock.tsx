"use client";
import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import ButtonPrimary from "./ButtonPrimary";
import Image from "next/image";

const favorites = [
  {
    name: "Iced Latte",
    img: "/images/iced-latte.jpeg",
    info: [
      {
        milk: "Skim Milk",
        ice: "Light Ice",
        syrup: "Vanilla",
        syrupQnt: "2 Pumps",
        espresso: "",
      },
    ],
  },
  {
    name: "Iced Apple Cider Chai",
    img: "/images/iced-latte.jpeg",
    info: [
      {
        milk: "2% Milk",
        ice: "Light Ice",
        syrup: "",
        syrupQnt: "",
        espresso: "",
      },
    ],
  },
];

const FavoritesBlock = () => {
  return (
    <div>
      <div className="hidden lg:block ">
        {favorites.map((item, index) => (
          <div
            key={index}
            className="flex flex-row gap-4 mb-4 bg-[#F4F2F6] px-4 py-6 items-center justify-between"
          >
            <AiFillHeart size={40} className="text-[#F15D2A]" />
            <h3 className="text-2xl font-bold uppercase font-ObviouslyNarrow text-[#27004B] leading-[100%] mb-[.25rem] text-center w-full">
              {item.name}
            </h3>
            <p className="uppercase font-Futura font-semibold underline hover:text-[#F15D2A] cursor-pointer transition">
              Edit
            </p>
            <BiShoppingBag
              size={40}
              className="text-black cursor-pointer hover:text-[#F15D2A] transition"
            />
          </div>
        ))}
      </div>

      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-0 h-full">
        {favorites.map((item, index) => (
          <div className="flex flex-col justify-center items-center">
            <div
              key={index}
              className="bg-[#F4F2F6] px-4 py-8 flex flex-row gap-4 w-full"
            >
              <div className="relative w-1/2 min-h-[8rem]">
                <Image
                  src={item.img}
                  alt={item.name}
                    fill={true}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="w-full">
                <div className="flex flex-row gap-2 justify-between">
                  <h3 className="text-2xl font-bold uppercase font-ObviouslyNarrow text-[#27004B] leading-[100%] mb-[1rem] w-full">
                    {item.name}
                  </h3>
                  <AiFillHeart size={24} className="text-[#F15D2A]" />
                </div>

                <div>
                {item.info.map((item) => (
                            <ul key={1} className="mb-2">
                                <li key={1} className='text-sm text-black font-Futura flex flex-row justify-between gap-2 leading-6'>
                                    <span className='w-full'>{item.milk}</span>
                                </li>
                                <li key={1} className='text-sm  text-black font-Futura flex flex-row justify-between gap-2 leading-6'>
                                 
                                    <span className='w-full'>{item.ice}</span>
                                </li>
                                <li key={1} className='text-sm  text-black font-Futura flex flex-row justify-between gap-2 leading-6'>
                                  
                                    <span className='w-full'>{item.syrupQnt} {item.syrup}</span>
                                </li>
                                <li key={1} className='text-sm text-black font-Futura flex flex-row justify-between gap-2 leading-6'>
                                   
                                    <span className='w-full'>{item.espresso}</span>
                                </li>
                                
                            </ul>
                        ))}
                  <p className="uppercase font-Futura font-semibold underline hover:text-[#F15D2A] cursor-pointer transition text-sm">
                    Edit
                  </p>
                </div>
              </div>
            </div>

            <div className="relative top-[-1rem]">
              <ButtonPrimary cta="Add to Cart" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesBlock;
