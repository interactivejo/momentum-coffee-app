'use client';
import React from 'react'
import Container from './Container'
import Logo from '../ui/Logo'
import Hours from '../single/Hours'
import Greeting from '../single/Greeting'
import LocationSelector from '../single/LocationSelector';
import Search from '../ui/Search';

const Navbar = () => {
  return (
    <>
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        
        <Container>
          <div className="flex flex-row items-center justify-between gap-4">
            <div className="flex flex-row items-center gap-4">
              <Logo />
              <Greeting />
            </div>

            <div className="flex flex-row items-center gap-4">
              <Hours />
              <LocationSelector />

              <p className='uppercase font-Obviously font-semibold text-sm cursor-pointer hover:text-[#F15D2A] transition hidden lg:block'
                onClick={() => console.log('sign out')}
              >Sign Out</p>

              <Search />
            </div>
          </div>

        </Container>

      </div>
      
      
    </div>
    
  </>
  );
}

export default Navbar