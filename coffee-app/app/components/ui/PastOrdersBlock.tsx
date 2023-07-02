import React from "react";
import { BiShoppingBag } from "react-icons/bi";

const orders = [
  {
    name: "Iced Latte",
    img: "/images/iced-latte.jpeg",
    date: "1/15/23",
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
    name: "Hot Chocolate",
    img: "/images/iced-latte.jpeg",
    date: "1/16/23",
    info: [
      {
        milk: "",
        ice: "",
        syrup: "",
        syrupQnt: "",
        espresso: "",
      },
    ],
  },
  {
    name: "Iced Apple Cider Chai",
    img: "/images/iced-latte.jpeg",
    date: "1/17/23",
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
  {
    name: "Iced Latte",
    img: "/images/iced-latte.jpeg",
    date: "1/18/23",
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
    name: "Cappuccino",
    img: "/images/iced-latte.jpeg",
    date: "1/19/23",
    info: [
      {
        milk: "",
        ice: "",
        syrup: "",
        syrupQnt: "",
        espresso: "",
      },
    ],
  },

];

const PastOrdersBlock = () => {
  return (
    <div>
      
        {orders.map((item: any) => (
          <div
            key={Math.random()}
            className="font-Futura text-base border-b-[1px] mb-4 pb-4"
          >
            <div className="flex flex-row gap-4 justify-between mb-1">
              <p className="font-semibold lg:font-normal">{item.name}</p>
              <p>{item.date}</p>
            </div>
            
            {item.info.map((info: any) => (
              <div className="text-sm pl-6">
                <p>{info.milk}</p>
                <p>{info.ice}</p>
                <p>{info.syrupQnt} {info.syrup}</p>
                <p>{info.espresso}</p>
              </div>
            ))}
            
          </div>
        ))}
      
    </div>
  );
};

export default PastOrdersBlock;
