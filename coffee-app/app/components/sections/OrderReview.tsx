"use client";
import React from "react";
import LineCount from "../ui/LineCount";
import Image from "next/image";
import OrderReviewCard from "../ui/OrderReviewCard";
import ButtonPrimary from "../ui/ButtonPrimary";
import OrderStep from "../ui/OrderStep";
import CancelOrder from "../modals/CancelOrder";

let status = "Order Received";

const OrderReview = (props: any) => {
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-8">
      <div className="flex flex-col items-center justify-center w-full lg:flex-row font-Futura">
        <p className="flex mb-2 lg:flex-row lg:mb-0">
          Order #{props.orderNumber}
          <span className={`"
            ${status === 'Ready' && 'hidden lg:hidden'}
            ${status === 'Preparing' && 'hidden lg:flex px-2'}
            ${status === 'Order Received' && 'hidden lg:flex px-2'}
          "`}>|</span>
        </p>
        <div className={`${status === 'Ready' && 'hidden'}`}>
            <LineCount lineOrder={props.lineOrder} status={status}/>
        </div>
        
      </div>

      <h2 className="text-2xl font-semibold leading-8 text-center lg:text-4xl font-ObviouslyNarrow">
        {status === 'Order Received' && 'Your order has been received & should be ready to brew soon!'}
        {status === 'Preparing' && 'Your drink is brewing!'}
        {status === 'Ready' && 'Your drinks are ready!'}
      </h2>

      <OrderStep label="Order Received" status={status} />

      <div className="grid grid-cols-1 gap-8 lg:pt-8 lg:grid-cols-2">
        <OrderReviewCard />
        <OrderReviewCard />
      </div>

      <div className="flex flex-row gap-8">
        <div className={`${status === 'Preparing' || status === 'Ready' && 'hidden'}`}>
            <ButtonPrimary cta="Edit Order" />
        </div>
        
        <div className={`${status === 'Ready' && 'hidden'}`}>
           <CancelOrder />
        </div>
        
      </div>
    </div>
  );
};

export default OrderReview;
