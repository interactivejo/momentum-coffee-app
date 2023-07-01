'use client'

import React, { useState } from 'react';
import { SlLocationPin } from 'react-icons/sl';
import { FiChevronDown } from 'react-icons/fi';

const LocationSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(value)
  };

  const options: string[] = ["Austin", "Dallas", "Fort Worth"];

  return (
    <div className='block relative'>
      <div 
        className='
          bg-[#27004B]
          lg:bg-[#F15D2A]
          flex
          flex-row
          gap-2
          md:gap-4
          justify-between
          lg:p-3
          px-0
          hover:shadow-md
          cursor-pointer
          transition
          border-[1px]
          border-[#27004B]
          lg:border-[#F15D2A]
          select-none
          min-w-[8rem]
          lg:min-w-[12rem]
        ' 
        onClick={toggleDropdown}>
        <SlLocationPin size={20} className='text-white' />
        <p className='text-white uppercase font-Futura text-sm font-semibold border-b-[1px] lg:border-b-0 pb-1 lg:pb-0'>{selectedOption ? selectedOption : "Location"}</p>
        <FiChevronDown size={20} className={`text-white ${isOpen && 'rotate-180'}`}/>
      </div>
      
      {isOpen && (
        <div 
          className='
            absolute
            bottom-[2.8rem]
            lg:bottom-[-6.8rem]
            bg-white
            border-[1px]
            border-[#27004B]
            lg:border-[#F15D2A]
            text-[#27004B]
            lg:text-[#F15D2A]
            w-full
            z-20
            shadow-lg
            select-none
          '>
          <div>
            {options.map((option) => (
              <div
                className='
                  cursor-pointer
                  hover:bg-[#27004B]
                  lg:hover:bg-[#F15D2A]
                  hover:text-white
                  text-center
                  uppercase
                  font-Futura
                  font-semibold
                  text-sm
                  py-2
                  transition
                ' 
                onClick={onOptionClicked(option)} 
                key={Math.random()}>
                {option}
              </div>  
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
