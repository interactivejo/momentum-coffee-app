'use client'
import React from 'react'
import LineCount from '../ui/LineCount'
import Image from 'next/image'
import OrderReviewCard from '../ui/OrderReviewCard'
import ButtonPrimary from '../ui/ButtonPrimary'

const status = 'Order Received'

const OrderReview = (props: any) => {
  return (
    <div className='flex flex-col items-center gap-8'>

        <div className='flex flex-row justify-center w-full font-Futura'>
            <p className='mr-1'>Order #{props.orderNumber} | </p>
            <LineCount lineOrder={props.lineOrder}/>
        </div>

        <h2 className='text-4xl font-semibold text-center font-ObviouslyNarrow'>Your order has been received & should be ready to brew soon!</h2>
    
        <div className='grid w-full grid-cols-5 py-8'>

            <div className='flex flex-col items-center justify-center gap-6'>
                <h3 className='m-auto text-2xl font-semibold text-center font-ObviouslyNarrow text-[#27004B] uppercase'>Order Received</h3>
                <Image 
                    src='/images/order-received.svg'
                    alt='Order Received'
                    width={100}
                    height={100}
                />
            </div>
            
            <div className='flex flex-col justify-center h-full'>
                <div className='w-full h-[4px] bg-[#D9D9D9]'></div>
            </div>
            

            <div className='flex flex-col items-center justify-center gap-6'>
                <h3 className='m-auto text-2xl font-semibold text-center font-ObviouslyNarrow text-[#D9D9D9] uppercase'>Preparing</h3>
                <Image 
                    src='/images/preparing-grey.svg'
                    alt='Order Received'
                    width={120}
                    height={120}
                />
            </div>
        
            <div className='flex flex-col justify-center h-full'>
                <div className='w-full h-[4px] bg-[#D9D9D9]'></div>
            </div>

            <div className='flex flex-col items-center justify-center gap-6'>
                <h3 className='m-auto text-2xl font-semibold text-center font-ObviouslyNarrow text-[#D9D9D9] uppercase'>Ready</h3>
                <Image 
                    src='/images/ready-grey.svg'
                    alt='Order Received'
                    width={120}
                    height={120}
                />
            </div>

        </div>

        <div className='grid grid-cols-2 gap-8 pt-8'>
            <OrderReviewCard />
            <OrderReviewCard />
        </div>

        <div className='flex flex-row gap-8'>
            <ButtonPrimary cta='Edit Order' />
            <ButtonPrimary cta='Cancel Order' />
        </div>
    
    </div>
  )
}

export default OrderReview