import React from "react";
import Search from "../ui/Search";
import MenuEditBlock from "../ui/MenuEditBlock";
import { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import MenuHeader from "../layout/MenuHeader";
import AddNewItem from "../modals/AddNewItem";

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

const MenuEdit = () => {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index: number) => {
    setToggleState(index);
    console.log(index);
  };

  return (
    <div>
      <MenuHeader 
        title="Edit Menu"
      />

      <div className="flex flex-row gap-8">
        <div className="lg:min-w-[12rem] min-w-[8rem] lg:pl-8 flex flex-col lg:gap-8 gap-4">
          {menu.categories.map((category) => (
            <div
              key={category.index}
              className="text-[#9D9D9D]"
              onClick={() => toggleTab(category.index)}
            >
              <h3
                className={`${
                  toggleState === category.index && "text-[#27004B]"
                } cursor-pointer font-ObviouslyNarrow text-lg lg:text-2xl uppercase font-semibold `}
              >
                {category.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="w-full">
          {menu.categories.map((category) => (
            <div key={Math.random()}>
              {toggleState === category.index && (
                <div key={Math.random()} className="grid grid-cols-1 gap-8 md:grid-cols-2 md: lg:grid-cols-3">
                  {category.items.map((item) => (
                    <div key={Math.random()}>
                      <MenuEditBlock title={item.name} image={item.img} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <AddNewItem />
          
        </div>
      </div>
    </div>
  );
};

export default MenuEdit;
