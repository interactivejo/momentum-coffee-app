'use client'
import Link from "next/link";
import React from "react";

const ButtonPrimary = (props: any) => {
  return (
    <div className={`
    ${props.disabled ? 'bg-[#D9D9D9]' : 'bg-[#F15D2A]'}
      text-white 
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
      `}
      onClick={() => props.setIsDrawerOpen(false)}
      >
        {props.link ?
          <Link href={props.link}>
            {props.cta}
          </Link>
          :
          props.cta
        }
        
    </div>
  );
};

export default ButtonPrimary;
