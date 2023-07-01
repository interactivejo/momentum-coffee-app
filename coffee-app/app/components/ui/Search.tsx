import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  return (
    <div className='
      lg:border-[1px]
      border-black
      lg:px-4
      lg:py-2
      rounded-2xl
      flex
      flex-row
      items-center
    '>
      <FiSearch size={20} className='lg:mr-2'/>
      <input 
        type='search'
        placeholder='Search'
        className='
          focus:outline-none
          font-Futura
          w-full
          placeholder-[#9E9E9E]
          font-medium
          hidden
          lg:block
        '
      />
    </div>


  )
}

export default Search