'use client';
import { SlLocationPin } from 'react-icons/sl'
import { FiChevronDown } from 'react-icons/fi'
import LocationDropdownMobile from './LocationDropdownMobile';
import { useCallback, useState } from 'react';

const LocationSelectorMobile = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  return (
    <div className='relative'>
      
      <div 
        onClick={toggleOpen}
        className='
        flex 
        flex-row 
        gap-4 
        justify-between 
        p-3
        hover:shadow-md
        cursor-pointer
        transition
        select-none
        '>
        <SlLocationPin size={20} className='text-white'/>
        <p className='text-white uppercase font-Futura text-sm font-semibold'>Location</p>
        <FiChevronDown size={20} className={`text-white ${isOpen && 'rotate-180'}`}/>
      </div>

    {isOpen && <div className='transition'><LocationDropdownMobile /></div>}
      

    </div>
  )
}

export default LocationSelectorMobile