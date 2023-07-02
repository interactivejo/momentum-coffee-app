import { Divider, MenuItem } from '@mui/material'
import React from 'react'
import MenuItemBlock from './MenuItemBlock'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FiChevronDown } from 'react-icons/fi';


const MenuCategoryBlock = (props: any) => {
  
  return (
    <>
       
      <div className='lg:mb-4 font-Futura lg:hidden'>
      <Accordion defaultExpanded={true} sx={{
        boxShadow: 'none',
      }}>
        <AccordionSummary
          expandIcon={<FiChevronDown size={24} className='text-black' />}
          sx={{
            padding: '0px',
            borderBottom: '1px solid #E5E5E5',
          }}
        >
          <Typography
            sx={{
              fontSize: '1.25rem',
              fontFamily: 'futura-pt',
              fontWeight: '450',
              color: '#000',
            }}
          >
            {props.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: '0px',
          }}
        >
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:mt-8 pt-6'>
          {props.items.map((item: any) => (
            <MenuItemBlock
              key={Math.random()}
              name={item.name}
              image={item.img}
            />
            ))}
        </div>
        </AccordionDetails>
      </Accordion>
      
      </div>




      <div className='mb-12 hidden lg:block'>
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