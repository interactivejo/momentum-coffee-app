import React from 'react'
import {Divider, Box} from '@mui/material'
// import FavoritesBlock from './FavoritesBlock'

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
    <Box sx={{width: 400, padding: 4}}>
        <h2 className='mb-4 text-2xl font-semibold uppercase'>{props.header}</h2>
        <Divider sx={{marginBottom: '2rem'}} />

        {/* {favs && <FavoritesBlock />} */}
         

    </Box>
  )
}

export default SideDrawerBox