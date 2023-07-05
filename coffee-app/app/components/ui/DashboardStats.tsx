import React from 'react'

const DashboardStats = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 lg:py-4 border-[1px] rounded-xl'>
        <div className='border-r-[1px] px-4 border-b-[1px] py-4 lg:border-b-0 lg:py-0 flex flex-col items-center'>
            <h4 className='text-xl font-semibold uppercase font-ObviouslyNarrow'>
                Orders Today
            </h4>
            <h5 className='text-6xl font-semibold font-ObviouslyNarrow text-[#F26524] mb-4'>
                23
            </h5>
            <p className='text-center font-Futura'>
                21% more than last month
            </p>
        </div>

        <div className='border-r-[1px] px-4 border-b-[1px] py-4 lg:border-b-0 lg:py-0 flex flex-col items-center'>
            <h4 className='text-xl font-semibold uppercase font-ObviouslyNarrow'>
                Orders This Month
            </h4>
            <h5 className='text-6xl font-semibold font-ObviouslyNarrow text-[#F26524] mb-4'>
                98
            </h5>
            <p className='text-center font-Futura'>
                21% more than last month
            </p>
        </div>

        <div className='border-r-[1px] px-4 border-b-[1px] py-4 lg:border-b-0 lg:py-0 flex flex-col items-center'>
            <h4 className='text-xl font-semibold uppercase font-ObviouslyNarrow'>
                Trending Drink
            </h4>
            <h5 className='text-5xl font-semibold font-ObviouslyNarrow text-[#F26524] mb-4 uppercase text-center'>
                Mocha Latte
            </h5>
        </div>

        <div className='border-r-[1px] px-4 border-b-[1px] py-4 lg:border-b-0 lg:py-0 flex flex-col items-center'>
            <h4 className='text-xl font-semibold uppercase font-ObviouslyNarrow'>
                Customers Today
            </h4>
            <h5 className='text-6xl font-semibold font-ObviouslyNarrow text-[#F26524] mb-4'>
                20
            </h5>
        </div>
        
    </div>
  )
}

export default DashboardStats