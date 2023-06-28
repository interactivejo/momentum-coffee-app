import React from 'react'
import LocationItemMobile from './LocationItemMobile'


const LocationDropdownMobile = () => {
  return (
    <div className='
        absolute
        bg-white
        border-[1px]
        border-[#27004B]
        text-[#27004B]
        w-full
        z-20
        shadow-sm
        bottom-[3.7rem]
        select-none
      '>

        <div>
            <>
              <LocationItemMobile
                label='Austin'
                onClick={() => console.log('Austin')}
              />
              <LocationItemMobile
                label='Dallas'
                onClick={() => console.log('Dallas')}
              />
              <LocationItemMobile
                label='Ft. Worth'
                onClick={() => console.log('Ft. Worth')}
              />
            </>
            
        </div>

        
      </div>
  )
}

export default LocationDropdownMobile