import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const MenuItemBlock = (props: any) => {

  return (
    <Link
      href={`/menu/${props.name}`}>
        <div>
            <div className='w-full min-h-[10rem] mb-4'>
              <Image 
                className='border border-gray-200' 
                src={props.image}
                alt={props.name}
                width={500}
                height={500}
                priority={true}
                />
            </div>
            <p className='text-base text-center text-black'>{props.name}</p>
        </div>
    </Link>
    
    
  )
}

export default MenuItemBlock