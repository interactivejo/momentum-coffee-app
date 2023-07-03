import React from 'react'
import {Drawer, IconButton} from '@mui/material'
import { useState } from 'react'
import SideDrawerBox from './SideDrawerBox'

const SideDrawer = (props: any) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
        <IconButton 
            sx={{":hover": {
                backgroundColor: 'transparent',
                color: '#F15D2A', }
            }}
            size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
            {props.icon}
        </IconButton>
        
        <Drawer
            anchor='right'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
        >

            <SideDrawerBox 
                header={props.header}
                label={props.label}
                setIsDrawerOpen={setIsDrawerOpen}
            />

        </Drawer>
    
    </>
    
  )
}

export default SideDrawer