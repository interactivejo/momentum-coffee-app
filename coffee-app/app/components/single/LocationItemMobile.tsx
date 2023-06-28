'use client';
import React from 'react'

interface LocationItemProps {
    onClick: () => void;
    label: string;
}

const LocationItemMobile: React.FC<LocationItemProps> = ({
    onClick,
    label
}) => {
  return (
    <div
        className='
        select-none
        cursor-pointer
        hover:bg-[#27004B]
        hover:text-white
        text-center
        uppercase
        font-Futura
        font-semibold
        text-sm
        py-2
        transition
    '>{label}</div>
  )
}

export default LocationItemMobile