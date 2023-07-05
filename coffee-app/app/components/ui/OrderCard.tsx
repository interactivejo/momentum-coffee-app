import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import { BsFlagFill } from 'react-icons/bs'

const OrderCard = (props: any) => {



  return (
    <div className='bg-[#F9F7FB]'>
        
        <div className='flex flex-row justify-between font-Futura border-b-[1px] p-4'>
            <p className=''>Order ready for 
                <span className='ml-1 font-semibold'>{props.name}</span>
            </p>

            <p>{props.createdAt} | #{props.orderNumber}</p>
        </div>

        <div className='flex flex-col items-start gap-4 p-4'>

            <div className='flex flex-row items-center justify-between w-full gap-4'>
               <h3 className='font-ObviouslyNarrow font-semibold text-[#27004B] text-3xl mb-2'>{props.order}</h3>
               <BsFlagFill size={20} className='text-[#F15D2A] cursor-pointer' />
            </div>
            
            
            {props.customizations.map((customization: any) => (
              <ul key={Math.random()} className='font-Futura'>
                <li>{customization.milk}</li>
                <li>{customization.ice}</li>
                <li>{customization.syrupQnt} pump(s) {customization.syrup}</li>
                <li>{customization.espresso}</li>
              </ul>
            ))}

            <ButtonPrimary cta='Start Order' />
           
        </div>

    </div>
  )
}

export default OrderCard