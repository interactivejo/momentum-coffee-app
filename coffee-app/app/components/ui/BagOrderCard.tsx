import React from "react";
import Image from "next/image";
import { TbEdit } from "react-icons/tb";
import {
  AiOutlineHeart,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

const BagOrderCard = () => {
  return (
    <div>
      <div className="bg-[#F4F2F6] flex flex-row">
        <div className="w-[65%] p-4">
          <h3 className="mb-4 text-[1.75rem] font-bold uppercase font-ObviouslyNarrow text-[#27004B]">
            {" "}
            Iced Latte
          </h3>
          <div className="text-xs font-Futura">
            <p>Whole Milk</p>
            <p>Regular Ice</p>
            <p>4 Pump(s) Sugar Free Vanilla Syrup</p>
            <p>4 Espresso Shots</p>
          </div>
        </div>

        <div className="w-[35%] flex flex-col justify-between">
          <div className="relative flex flex-col justify-start w-full h-full align-middle xl:justify-center">
            <Image
              className=" border-[#27004B] border-l-2"
              src="/images/iced-latte.jpeg"
              alt="Iced Latte"
              fill={true}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex flex-row justify-end gap-4 pt-2">
          <TbEdit size={24} className="text-[#F15D2A]" />

          <AiOutlineHeart size={24} className="text-[#F15D2A]" />

          <div className="flex flex-row gap-2">
            <AiOutlineMinusCircle size={24} className="text-[#F15D2A]" />
            <p className="text-lg font-semibold font-Futura leading-[130%]">
              1
            </p>
            <AiOutlinePlusCircle size={24} className="text-[#F15D2A]" />
          </div>

          <FiTrash2 size={24} className="text-[#F15D2A]" />
        </div>
      </div>
    </div>
  );
};

export default BagOrderCard;
