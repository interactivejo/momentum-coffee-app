import { Divider, MenuItem } from '@mui/material'
import React from 'react'
import MenuItemBlock from './MenuItemBlock'

const MenuCategoryBlock = (props: any) => {
  
  return (
    <>
       
      <div className='mb-12'>
        <h3 className='mb-4 text-4xl font-semibold text-black uppercase font-ObviouslyNarrow'>{props.title}</h3>
        <Divider />
      
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 mt-8'>
          {props.items.map((item: any) => (
            <MenuItemBlock
              key={Math.random()}
              name={item.name}
              image={item.img}
            />
            ))}
        </div>
        
      </div>
      
    </>
  )
}

export default MenuCategoryBlock