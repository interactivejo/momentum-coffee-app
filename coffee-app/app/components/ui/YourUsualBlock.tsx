import React from 'react'
import { Divider, Grid, } from '@mui/material'
import Image from 'next/image'
import ButtonPrimary from './ButtonPrimary'

const YourUsualBlock = () => {

    const usual = {
            name: 'Iced Latte',
            img: '/images/iced-latte.jpeg',
            info: [
                {
                    milk: 'Whole Milk',
                    ice: 'Light Ice',
                    syrup: 'Vanilla',
                    syrupQnt: '4 Pumps',
                    espresso: 'Double Extra Shot',
                }
            ]
        }
    

  return (
    <div className=''>
        <Grid container spacing={2}
        sx={{
            width: '100%',
        }}>
            <Grid item xs={5}>
                <div className='flex flex-col align-middle xl:justify-center h-full justify-start w-full relative'>
                    <Image
                        className=''
                        src={usual.img}
                        alt={usual.name}
                        fill={true}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
            </Grid>
            <Grid item xs={7}
            sx={{
                 
            }}>
                <div>
                    <h3 className='mb-4 text-[1.75rem] font-bold uppercase font-ObviouslyNarrow text-[#27004B]'>{usual.name}</h3>
                    <div className='mb-4'>
                        {usual.info.map((item) => (
                            <ul key={Math.random()}>
                                <li key={Math.random()} className='text-[18px] text-black font-Futura flex flex-row justify-between gap-2 leading-6'>
                                    <span className=''>•</span>
                                    <span className='w-full'>{item.milk}</span>
                                </li>
                                <li key={Math.random()} className='text-[18px] text-base text-black font-Futura flex flex-row justify-between gap-2 leading-6'>
                                    <span className=''>•</span>
                                    <span className='w-full'>{item.ice}</span>
                                </li>
                                <li key={Math.random()} className='text-[18px] text-base text-black font-Futura flex flex-row justify-between gap-2 leading-6'>
                                    <span className=''>•</span>
                                    <span className='w-full'>{item.syrupQnt} {item.syrup}</span>
                                </li>
                                <li key={Math.random()} className='text-[18px] text-base text-black font-Futura flex flex-row justify-between gap-2 leading-6'>
                                    <span className=''>•</span>
                                    <span className='w-full'>{item.espresso}</span>
                                </li>
                                
                            </ul>
                        ))}
                    </div>
                    <ButtonPrimary cta='Add To Cart' />
                </div>
            </Grid>
        </Grid>


    </div>
  )
}

export default YourUsualBlock