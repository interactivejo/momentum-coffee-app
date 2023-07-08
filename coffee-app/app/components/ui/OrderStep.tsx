"use client";
import React from "react";
import Image from "next/image";

const OrderStep = (props: any) => {

  return (
    <div className="grid w-full grid-cols-5 py-8">
      <div className="flex flex-col items-center justify-center gap-2">
        <h3 className="m-auto text-base leading-[110%] lg:text-2xl font-semibold text-center font-ObviouslyNarrow uppercase mb-4 text-[#27004B]">
          {props.label}
        </h3>

        <div className="w-16 h-16 lg:w-28 lg:h-28">
          <div className="relative flex flex-col justify-start w-full h-full align-middle xl:justify-center">
            <Image
              src="/images/order-received.svg"
              alt="Order Received"
              fill={true}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-full px-2 pt-10">
        <div
          className={`"w-full h-[2px] lg:h-[4px]
        ${
          props.status === "Preparing" || props.status === "Ready"
            ? "bg-[#27004B]"
            : "bg-[#D9D9D9]"
        }
        "`}
        ></div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <h3
          className={`"m-auto text-base leading-[110%] lg:text-2xl font-semibold text-center font-ObviouslyNarrow uppercase mb-4
        ${
          props.status === "Preparing" || props.status === "Ready"
            ? "text-[#27004B]"
            : "text-[#D9D9D9]"
        }
    "`}
        >
          Preparing
        </h3>

        <div className="w-16 h-16 lg:w-28 lg:h-28">
          <div className="relative flex flex-col justify-start w-full h-full align-middle xl:justify-center">
            <Image
              src={props.status === 'Order Received' ? '/images/preparing-grey.svg' : '/images/preparing.svg'}
              alt="Preparing"
              fill={true}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-full px-2 pt-10">
        <div
          className={`"w-full h-[2px] lg:h-[4px]
        ${props.status === "Ready" ? "bg-[#27004B]" : "bg-[#D9D9D9]"}
        "`}
        ></div>
      </div>

      <div className="flex flex-col items-center justify-center gap-2">
        <h3
          className={`"m-auto text-base leading-[110%] lg:text-2xl font-semibold text-center font-ObviouslyNarrow uppercase mb-4
        ${props.status === "Ready" ? "text-[#27004B]" : "text-[#D9D9D9]"}
    "`}
        >
          Ready
        </h3>

        <div className="w-16 h-16 lg:w-28 lg:h-28">
          <div className="relative flex flex-col justify-start w-full h-full align-middle xl:justify-center">
            <Image
              src={props.status === 'Order Received' || props.status === 'Preparing' ? '/images/ready-grey.svg' : '/images/ready.svg'}
              alt="Ready"
              fill={true}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStep;
