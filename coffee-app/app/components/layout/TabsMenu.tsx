"use client";
import React from "react";
import { useState } from "react";
import Dashboard from "../sections/Dashboard";
import OrderHistory from "../sections/OrderHistory";
import MenuEdit from "../sections/MenuEdit";
import CurrentOrders from "../sections/CurrentOrders";

const TabsMenu = (props: any) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="flex flex-row gap-8 mb-8 lg:mb-10 text-lg lg:text-base xl:text-lg overflow-none justify-start text-[#9E9E9E] lg:pt-2">
        {props.tabs.map((tab: any) => (
          <div
            className={`${
              toggleState === tab.index && "text-black font-semibold"
            } cursor-pointer font-Futura`}
            key={Math.random()}
            onClick={() => toggleTab(tab.index)}
          >
            {tab.title}
            <div
              className={`${
                toggleState === tab.index && "h-1 bg-[#27004B] font-Futura"
              }`}
            ></div>
          </div>
        ))}
      </div>

      {toggleState === 1 && (
        <div>{props.tabs[0].title === "Dashboard" && <Dashboard />}</div>
      )}
      {toggleState === 1 && (
        <div>{props.tabs[0].title === "Current Orders" && <CurrentOrders/>}</div>
      )}

      {toggleState === 2 && (
        <div>{props.tabs[1].title === "Order History" && <OrderHistory />}</div>
      )}

      {toggleState === 3 && (
        <div>{props.tabs[2].title === "Menu" && <MenuEdit />}</div>
      )}

      {toggleState === 4 && (
        <div>{props.tabs[3].title === "Dashboard" && <Dashboard/>}</div>
      )}
    </div>
  );
};

export default TabsMenu;
