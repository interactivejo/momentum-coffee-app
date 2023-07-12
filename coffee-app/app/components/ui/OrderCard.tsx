import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import { BsFlagFill } from 'react-icons/bs'

const OrderCard = (props: any) => {

  const [cardStatus, setCardStatus] = React.useState('New')

  console.log(cardStatus)

  return (
    <div className={
      `
      ${cardStatus === 'New' && 'bg-[#F9F7FB]'} 
      ${cardStatus === 'Started' && 'bg-[#C5B7D2]' }
      ${cardStatus === 'Ready' && 'bg-[#27004B]' }
      ${cardStatus === 'Done' && 'hidden' }
      `}>
        
        <div className='flex flex-row justify-between font-Futura border-b-[1px] p-4'>
            <p className={`${cardStatus === 'Ready' && 'text-white'}`}>Order ready for 
                <span className='ml-1 font-semibold'>{props.name}</span>
            </p>

            <p className={`${cardStatus === 'Ready' && 'text-white'}`}>{props.createdAt} | #{props.orderNumber}</p>
        </div>

        <div className='flex flex-col items-start gap-4 p-4'>

            <div className='flex flex-row items-center justify-between w-full gap-4'>
               <h3 className={`font-ObviouslyNarrow font-semibold text-[#27004B] text-3xl mb-2 ${cardStatus === "Ready" && 'text-white'}`}>{props.order}</h3>
               <BsFlagFill size={20} className='text-[#F15D2A] cursor-pointer' />
            </div>
            
            
            {props.customizations.map((customization: any) => (
              <ul key={Math.random()} className={`font-Futura ${cardStatus === 'Ready' && 'text-white'}`}>
                <li>{customization.milk}</li>
                <li>{customization.ice}</li>
                <li>{customization.syrupQnt} pump(s) {customization.syrup}</li>
                <li>{customization.espresso}</li>
              </ul>
            ))}

            {cardStatus === 'New' && (
              <div onClick={() => setCardStatus("Started")}>
                <ButtonPrimary cta='Start Order' />
              </div>
            )}

            {cardStatus === 'Started' && (
              <div onClick={() => setCardStatus("Ready")}>
                <ButtonPrimary cta='Ready' />
              </div>
            )}

            {cardStatus === 'Ready' && (
              <div className='flex flex-row justify-between w-full gap-4'
                onClick={() => setCardStatus("Done")}>
                <ButtonPrimary cta='Complete' />
                <ButtonPrimary cta='Remind' secondary={true} />
              </div>
            )}
            
            
           
        </div>

    </div>
  )
}

export default OrderCard