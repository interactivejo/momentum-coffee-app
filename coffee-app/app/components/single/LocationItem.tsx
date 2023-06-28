'use client';
import React from 'react'

interface LocationItemProps {
    onClick: () => void;
    label: string;
}

const LocationItem: React.FC<LocationItemProps> = ({
    onClick,
    label
}) => {
  return (
    <div
        className='
            cursor-pointer
            hover:bg-[#F15D2A]
            hover:text-white
            text-center
            uppercase
            font-Futura
            font-semibold
            text-sm
            py-2
            transition
        '
    >{label}</div>
  )
}

export default LocationItem