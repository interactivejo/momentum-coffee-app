import React from 'react'
import { FiSearch } from 'react-icons/fi'

const Search = () => {
  return (
    <div className='
        block
        cursor-pointer
        hover:shadow-lg
        rounded-full
        p-2
        lg:hidden'>
            
        <FiSearch size={24}/>
    </div>
  )
}

export default Search