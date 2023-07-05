'use client'
import React from 'react'
import Search from '../ui/Search'
import ButtonPrimary from '../ui/ButtonPrimary'

const MenuHeader = (props: any) => {
  return (
    <div className="flex flex-row justify-between gap-4 mb-8">
        <h2 className="font-ObviouslyNarrow uppercase text-3xl text-[#27004B] font-semibold">
          {props.title}
        </h2>
        <div className="hidden gap-4 lg:flex lg:flex-row">
            {props.downloadButton && <ButtonPrimary 
                cta="Download Report"
            />}
            
          <Search />
        </div>
        
      </div>
  )
}

export default MenuHeader