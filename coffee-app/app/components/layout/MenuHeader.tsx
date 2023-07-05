'use client'
import React from 'react'
import Search from '../ui/Search'

const MenuHeader = (props: any) => {
  return (
    <div className="flex flex-row justify-between gap-4 mb-8">
        <h2 className="font-ObviouslyNarrow uppercase text-3xl text-[#27004B] font-semibold">
          {props.title}
        </h2>
        <div className="hidden lg:block">
          <Search />
        </div>
        
      </div>
  )
}

export default MenuHeader