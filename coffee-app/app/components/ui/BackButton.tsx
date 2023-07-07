import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = (props: any) => {
  return (
    <div>
      {props.href ? (
        <div>
          <Link
            href={props.href}
            className="flex flex-row items-center gap-2 cursor-pointer"
          >
            <BsArrowLeft size={20} className="text-lg text-[#F15D2A]" />
            <p className="text-[#F15D2A] font-Futura font-semibold">Back</p>
          </Link>
        </div>
      ) : (
        <div
          className="flex flex-row items-center gap-2 cursor-pointer"
          onClick={() => props.setIsDrawerOpen(false)}
        >
          <BsArrowLeft size={20} className="text-lg text-[#F15D2A]" />
          <p className="text-[#F15D2A] font-Futura font-semibold">Back</p>
        </div>
      )}
    </div>
  );
};

export default BackButton;
