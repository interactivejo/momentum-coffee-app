import React from 'react'
import {Divider, Box} from '@mui/material'
import FavoritesBlock from '../ui/FavoritesBlock'
import Image from 'next/image'
import ButtonPrimary from '../ui/ButtonPrimary'
import PastOrdersBlock from '../ui/PastOrdersBlock'
import {BsArrowLeft} from 'react-icons/bs'
import {GrClose} from 'react-icons/gr'

const SideDrawerBox = (props: any) => {

  let cart
  let favs
  let history

  if(props.header === 'Review Order') {
    cart = props.header
  } else if (props.header === 'Favorites') {
    favs = props.header
  } else if (props.header === 'Order History') {
    history = props.header
  } else {
    ''
  }

  return (
      <Box sx={{
        width: 400, 
        padding: 4, 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'space-between',
        }}>

        <div className='h-full'>
          {props.label === 'Bag' && 
            <div className='flex flex-col items-center justify-center w-full h-full'>
              <div className='flex flex-row justify-between w-full'>
                <div className='flex flex-row items-center gap-2'>
                  <BsArrowLeft size={20} className='text-lg text-[#F15D2A]' onClick={() => props.setIsDrawerOpen(false)}/>
                  <p className='text-[#F15D2A] font-Futura font-semibold'>Back</p>
                </div>
                <GrClose size={18} className='text-lg text-[#F15D2A]' onClick={() => props.setIsDrawerOpen(false)}/>
              </div>

              <div className='flex flex-col items-center justify-center h-full'>
                <Image 
                  src='/images/empty-cart-img.png'
                  alt='coffee bag'
                  width={300}
                  height={300}
                  className='mb-8'
                />
                 <div className='flex flex-col items-center gap-8'>
                <h3 className='text-4xl font-semibold uppercase font-ObviouslyNarrow'>Oh No!</h3>
                <p className='text-xl text-center leading-2 font-Futura'>Looks like you haven't added anything to your cart yet</p>
                <ButtonPrimary cta='View Full Menu' />
              </div>
              </div>

             

            </div>
          }

          {props.label === 'Favs' && 
            <div>
              <h2 className='mb-4 text-2xl font-semibold uppercase font-Obviously'>{props.header}</h2>
              <Divider sx={{marginBottom: '2rem'}} />
              <FavoritesBlock/>
            </div>         
          }

          {props.label === 'History' &&
            <div>
              <h2 className='mb-4 text-2xl font-semibold uppercase font-Obviously'>{props.header}</h2>
              <Divider sx={{marginBottom: '2rem'}} />
              <PastOrdersBlock/>
            </div>
          }


          {/* <h2 className='mb-4 text-2xl font-semibold uppercase font-Obviously'>{props.header}</h2>
          <Divider sx={{marginBottom: '2rem'}} /> */}
        </div>

      </Box>
    

  )
}

export default SideDrawerBox