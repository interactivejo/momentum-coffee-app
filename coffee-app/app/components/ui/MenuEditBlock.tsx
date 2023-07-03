import React from 'react'

const MenuEditBlock = (props: any) => {
  return (
    <div className='bg-[#F9F7FB] p-4 h-full flex flex-col gap-8 justify-between'>
        <h4 className='text-2xl font-semibold uppercase font-ObviouslyNarrow text-[#27004B] text-center'>{props.title}</h4>
        <div className='flex flex-row justify-between gap-4 text-base font-medium font-Futura max-w-[80%] m-auto w-full md:max-w-[100%] lg:max-w-[80%]'>
            <p className='cursor-pointer hover:text-[#F15D2A] transition underline'>Edit</p>
            <p className='cursor-pointer hover:text-[#F15D2A] transition underline'>Delete</p>
            <p className='cursor-pointer hover:text-[#F15D2A] transition underline text-center'>Out of Stock</p>
        </div>
    </div>
  )
}

export default MenuEditBlock