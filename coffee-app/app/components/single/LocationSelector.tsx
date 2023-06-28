'use client';
import { SlLocationPin } from 'react-icons/sl'
import { FiChevronDown } from 'react-icons/fi'
import LocationDropdown from './LocationDropdown';
import { useCallback, useState } from 'react';

const LocationSelector = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  return (
    <div className='lg:block hidden relative'>
      
      <div 
        onClick={toggleOpen}
        className='
        bg-[#F15D2A] 
        flex 
        flex-row 
        gap-4 
        justify-between 
        p-3
        hover:shadow-md
        cursor-pointer
        transition
        border-[1px]
        border-[#F15D2A]
        select-none
        '>
        <SlLocationPin size={20} className='text-white'/>
        <p className='text-white uppercase font-Futura text-sm font-semibold'>Location</p>
        <FiChevronDown size={20} className={`text-white ${isOpen && 'rotate-180'}`}/>
      </div>

    {isOpen && <div className='transition'><LocationDropdown /></div>}
      

    </div>
  )
}

export default LocationSelector