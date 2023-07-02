'use client'
import React from "react";

const ButtonPrimary = (props: any) => {
  return (
    <button className="
      text-white 
      rounded-none 
      bg-[#F15D2A]
      font-Futura
      uppercase
      font-semibold
      py-2
      px-4
      xl:px-6
      text-sm

      hover:shadow-md
      hover:scale-105
      transition
      ">
      {props.cta}
    </button>
  );
};

export default ButtonPrimary;
