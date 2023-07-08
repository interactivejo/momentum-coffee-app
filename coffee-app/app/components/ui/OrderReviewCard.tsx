import React from 'react'

const OrderReviewCard = () => {
  return (
    <div className='bg-[#F4F2F6] p-4 flex flex-row gap-4 lg:gap-8'>
        <div>
            <h2 className='text-[#27004B] font-ObviouslyNarrow text-xl lg:text-3xl font-semibold leading-[100%]'>Iced Latte</h2>
        </div>

        <div>
            <ul className='text-sm leading-5 font-Futura lg:text-base'>
                <li>Whole Milk</li>
                <li>Regular Ice</li>
                <li>4 Pumps Sugar Free Vanilla Syrup</li>
                <li>4 Espresso Shots</li>
            </ul>
        </div>
        
    </div>
  )
}

export default OrderReviewCard