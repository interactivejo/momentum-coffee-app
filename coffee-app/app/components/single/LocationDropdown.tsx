import React from 'react'
import LocationItem from './LocationItem'

const LocationDropdown = () => {
  return (
    <div className='
        absolute
        bg-white
        border-[1px]
        border-[#F15D2A]
        text-[#F15D2A]
        w-full
        z-20
        shadow-sm
        select-none
      '>

        <div>
            <>
                <LocationItem 
                    label='Austin' 
                    onClick={() => {}} 
                />
                <LocationItem 
                    label='Dallas' 
                    onClick={() => {}} 
                />
                <LocationItem 
                    label='Ft. Worth' 
                    onClick={() => {}} 
                />
            </>
            
        </div>

        
      </div>
  )
}

export default LocationDropdown