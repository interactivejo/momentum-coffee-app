import React from 'react'

const OrderReviewCard = () => {
  return (
    <div className='bg-[#F4F2F6] p-4 flex flex-row gap-8'>
        <div>
            <h2 className='text-[#27004B] font-ObviouslyNarrow text-3xl font-semibold leading-[100%]'>Iced Latte</h2>
        </div>

        <div>
            <ul className='leading-5 font-Futura'>
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