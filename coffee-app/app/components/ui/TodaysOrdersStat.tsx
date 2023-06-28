import React from 'react'

interface TodaysOrdersStatProps {
  label: string;
  stat: string;
}

const TodaysOrdersStat: React.FC<TodaysOrdersStatProps> = ({label, stat}) => {
  return (
    <div className='bg-[#F6F6F6] lg:p-4 flex flex-row lg:gap-4 items-center gap-2 p-2'>
        <p className='font-Futura font-bold lg:text-4xl text-[#F15D2A] text-xl'>{stat}</p>
        <p className='font-Futura font-bold lg:text-lg text-sm'>{label}</p>
    </div>
  )
}

export default TodaysOrdersStat