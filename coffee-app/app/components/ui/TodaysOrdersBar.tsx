import React from 'react'
import TodaysOrdersStat from './TodaysOrdersStat'

const TodaysOrdersBar: React.FC = () => {
  return (
    <div className='py-4 flex lg:flex-row justify-between border-b-[1px] items-center flex-col w-full'>
        <div>
          <h2 className='font-Futura uppercase font-bold text-2xl mb-4'>
            Today's Orders
        </h2>  
        </div>

        <div className='flex flex-row gap-4 lg:gap-8'>
            <TodaysOrdersStat 
              label='New Orders'
              stat='3'
            />
            <TodaysOrdersStat 
              label='In Progress'
              stat='1'
            />
            <TodaysOrdersStat 
              label='Ready for Pickup'
              stat='1'
            />
        </div>
        
    </div>
  )
}

export default TodaysOrdersBar