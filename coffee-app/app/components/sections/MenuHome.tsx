"use client";
import React from "react";
import MenuCategoryBlock from "../ui/MenuCategoryBlock";
import { useState } from "react";
import Greeting from "../nav/Greeting";

const menu = {
  categories: [
    {
      index: 2,
      title: "Seasonal",
      items: [
        {
          index: 1,
          name: "Apple Cider Chai",
          img: "/images/hot-tea.jpeg",
        },
        {
          index: 2,
          name: "Iced Apple Cider Chai",
          img: "/images/iced-tea.jpeg",
        },
        {
          index: 3,
          name: "White Chocolate Coconut Latte",
          img: "/images/hot-latte.jpeg",
        },
        {
          index: 4,
          name: "Iced White Chocolate Coconut Latte",
          img: "/images/iced-latte.jpeg",
        },
        {
          index: 5,
          name: "Pumpkin Spice Latte",
          img: "/images/hot-latte.jpeg",
        },
        {
          index: 6,
          name: "Iced Pumpkin Spice Latte",
          img: "/images/iced-latte.jpeg",
        },
        {
          index: 7,
          name: "Hazelnut Mocha",
          img: "/images/hot-mocha.jpeg",
        },
        {
          index: 8,
          name: "Iced Hazelnut Mocha",
          img: "/images/iced-mocha.jpeg",
        },
      ],
    },
    {
      index: 3,
      title: "Hot Coffee",
      items: [
        {
          index: 1,
          name: "Drip Coffee (Panther City Blend)",
          img: "/images/drip-coffee.jpeg",
        },
        {
          index: 2,
          name: "Espresso (Panther City Blend)",
          img: "/images/espresso.jpeg",
        },
        {
          index: 3,
          name: "Double Espresso (Panther City Blend)",
          img: "/images/espresso.jpeg",
        },
        {
          index: 4,
          name: "Latte",
          img: "/images/hot-latte.jpeg",
        },
        {
          index: 5,
          name: "Cappuccino",
          img: "/images/hot-latte.jpeg",
        },
        {
          index: 6,
          name: "Cortado",
          img: "/images/cortado.jpeg",
        },
        {
          index: 7,
          name: "Traditional Macchiato",
          img: "/images/hot-latte.jpeg",
        },
        {
          index: 8,
          name: "Americano",
          img: "/images/drip-coffee.jpeg",
        },
        {
          index: 9,
          name: "Sons Latte",
          img: "/images/hot-latte.jpeg",
        },
        {
          index: 10,
          name: "Mocha",
          img: "/images/hot-mocha.jpeg",
        },
      ],
    },
    {
      index: 4,
      title: "Iced Coffees",
      items: [
        {
          index: 1,
          name: "Cold Brew",
          img: "/images/cold-brew.jpeg",
        },
        {
          index: 2,
          name: "Iced Americano",
          img: "/images/iced-americano.jpeg",
        },
        {
          index: 3,
          name: "Iced Latte",
          img: "/images/iced-latte.jpeg",
        },
      ],
    },
    {
      index: 5,
      title: "Hot Teas",
      items: [
        {
          index: 1,
          name: "Chai Tea Latte",
          img: "/images/hot-tea.jpeg",
        },
        {
          index: 2,
          name: "Matcha Latte",
          img: "/images/hot-tea.jpeg",
        },
        {
          index: 3,
          name: "London Fog",
          img: "/images/hot-tea.jpeg",
        },
        {
          index: 4,
          name: "Mint Tea",
          img: "/images/hot-tea.jpeg",
        },
        {
          index: 5,
          name: "Chamomile Tea",
          img: "/images/hot-tea.jpeg",
        },
        {
          index: 6,
          name: "Passion Fruit Tea",
          img: "/images/hot-tea.jpeg",
        },
        {
          index: 7,
          name: "Green Tea",
          img: "/images/hot-tea.jpeg",
        },
        {
          index: 8,
          name: "Chai Tea",
          img: "/images/hot-tea.jpeg",
        },
        {
          index: 9,
          name: "English Breakfast Tea",
          img: "/images/hot-tea.jpeg",
        },
        {
          index: 10,
          name: "Earl Grey Tea",
          img: "/images/hot-tea.jpeg",
        },
        {
          index: 11,
          name: "Strawberry Hibiscus Tea",
          img: "/images/hot-tea.jpeg",
        },
        {
          index: 12,
          name: "Ginger Snap Tea",
          img: "/images/hot-tea.jpeg",
        },
        {
          index: 13,
          name: "Revive Tea",
          img: "/images/hot-tea.jpeg",
        },
        {
          index: 14,
          name: "White Space Tea",
          img: "/images/hot-tea.jpeg",
        },
        {
          index: 15,
          name: "Plum Blossom Tea",
          img: "/images/hot-tea.jpeg",
        },
      ],
    },
    {
      index: 6,
      title: "Iced Teas",
      items: [
        {
          index: 1,
          name: "Iced Chai Tea Latte",
          img: "/images/iced-latte.jpeg",
        },
        {
          index: 2,
          name: "Iced Matcha Latte",
          img: "/images/iced-matcha.jpeg",
        },
        {
          index: 3,
          name: "Iced London Fog",
          img: "/images/iced-tea.jpeg",
        },
        {
          index: 4,
          name: "Iced Mint Tea",
          img: "/images/iced-tea.jpeg",
        },
        {
          index: 5,
          name: "Iced Chamomile Tea",
          img: "/images/iced-tea.jpeg",
        },
        {
          index: 6,
          name: "Iced Passion Fruit Tea",
          img: "/images/iced-tea.jpeg",
        },
        {
          index: 7,
          name: "Iced Green Tea",
          img: "/images/iced-tea.jpeg",
        },
        {
          index: 8,
          name: "Iced Chai Tea",
          img: "/images/iced-tea.jpeg",
        },
        {
          index: 9,
          name: "Iced English Breakfast Tea",
          img: "/images/iced-tea.jpeg",
        },
        {
          index: 10,
          name: "Iced Earl Grey Tea",
          img: "/images/iced-tea.jpeg",
        },
        {
          index: 11,
          name: "Iced Strawberry Hibiscus Tea",
          img: "/images/iced-tea-red.jpeg",
        },
        {
          index: 12,
          name: "Iced Ginger Snap Tea",
          img: "/images/iced-tea.jpeg",
        },
        {
          index: 13,
          name: "Iced Revive Tea",
          img: "/images/iced-tea.jpeg",
        },
        {
          index: 14,
          name: "Iced White Space Tea",
          img: "/images/iced-tea.jpeg",
        },
        {
          index: 15,
          name: "Iced Plum Blossom Tea",
          img: "/images/iced-tea.jpeg",
        },
      ],
    },
    {
      index: 7,
      title: "Other",
      items: [
        {
          index: 1,
          name: "Hot Chocolate",
          img: "/images/hot-chocolate.jpeg",
        },
        {
          index: 2,
          name: "Chocolate Milk",
          img: "/images/iced-mocha.jpeg",
        },
      ],
    },
  ],
};

const MenuHome = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: any) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="mb-4 lg:hidden">
        <Greeting />
      </div>

      <div className="flex flex-row gap-8 mb-2 lg:mb-10 text-lg lg:justify-between overflow-none justify-start text-[#9E9E9E] lg:pt-2">
        <div
          className={`${
            toggleState === 1 && "text-black font-semibold"
          } cursor-pointer font-Futura`}
          onClick={() => toggleTab(1)}
        >
          <span className="hidden lg:inline-block lg:mr-1">Full</span>Menu
          <div className={`${toggleState === 1 && "h-1 bg-[#27004B]"}`}></div>
        </div>

        <div
          className={`${
            toggleState === 2 && "text-black font-semibold"
          } cursor-pointer font-Futura lg:hidden block`}
          onClick={() => toggleTab(2)}
        >
          Favorites
          <div className={`${toggleState === 2 && "h-1 bg-[#27004B]"}`}></div>
        </div>

        <div
          className={`${
            toggleState === 3 && "text-black font-semibold"
          } cursor-pointer font-Futura lg:hidden block`}
          onClick={() => toggleTab(3)}
        >
          Past Orders
          <div className={`${toggleState === 3 && "h-1 bg-[#27004B]"}`}></div>
        </div>

        {menu.categories.map((category) => (
          <div
            className={`${
              toggleState === category.index && "text-black font-semibold"
            } cursor-pointer font-Futura hidden lg:block `}
            key={Math.random()}
            onClick={() => toggleTab(category.index)}
          >
            {category.title}
            <div
              className={`${
                toggleState === category.index && "h-1 bg-[#27004B] font-Futura"
              }`}
            ></div>
          </div>
        ))}
      </div>

      {toggleState === 1 && (
        <div className="">
          {menu.categories.map((category) => (
            <MenuCategoryBlock
              key={Math.random()}
              title={category.title}
              toggleState={toggleState}
              items={category.items}
            />
          ))}
        </div>
      )}

      {toggleState === 2 && <div className="lg:hidden">Favorites</div>}

      {toggleState === 3 && <div className="lg:hidden">Past Orders</div>}

      {toggleState != 1 && (
        <div className="hidden lg:block">
          <MenuCategoryBlock
            title={menu.categories[toggleState - 2].title}
            items={menu.categories[toggleState - 2].items}
            toggleState={toggleState}
          />
        </div>
      )}
    </div>
  );
};

export default MenuHome;
