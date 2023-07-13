'use client'
import Link from "next/link";
import React from "react";

const ButtonPrimary = (props: any) => {
  return (
    <div className={`
    ${props.disabled ? 'bg-[#D9D9D9]' : 'bg-[#F15D2A]'}
    ${props.secondary ? 'bg-white' : 'bg-[#F15D2A]'}
      rounded-none 
      font-Futura
      uppercase
      font-semibold
      py-2
      lg:px-8
      px-6
      text-sm
      cursor-pointer
      hover:shadow-md
      hover:scale-105
      transition
      text-center
      min-w-[10rem]
      `}
  
      onClick={() => props.setIsDrawerOpen && props.setIsDrawerOpen(false)}
      >
        {props.link ?
          <Link className={props.secondary ? 'text-black' : 'text-white'} href={props.link}>
            {props.cta}
          </Link>
          :
          <span className={props.secondary ? 'text-black' : 'text-white'}>
            {props.cta}
          </span>
        }
        
    </div>
  );
};

export default ButtonPrimary;
