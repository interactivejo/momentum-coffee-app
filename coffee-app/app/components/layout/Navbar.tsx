'use client';
import React from 'react'
import Container from './Container'
import Logo from '../ui/Logo'
import Hours from '../nav/Hours'
import Greeting from '../nav/Greeting'
import LocationSelector from '../nav/LocationSelector';
import Search from '../ui/Search';
import IconGroup from '../nav/IconGroup';

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex flex-row items-center justify-between gap-4">
              <div className="flex flex-row items-center gap-4">
                <Logo />
                <div className='hidden lg:block'>
                  <Greeting />
                </div>
                
              </div>

              <div className="flex flex-row items-center gap-4">
                <div className="hidden xl:block">
                  <Hours />
                </div>

                <div className="hidden lg:block">
                  <LocationSelector />
                </div>

                <div className="hidden lg:block">
                  <IconGroup />
                </div>

                <p
                  className="uppercase font-Obviously font-semibold text-sm cursor-pointer hover:text-[#F15D2A] transition hidden lg:block"
                  onClick={() => console.log("sign out")}
                >
                  Sign Out
                </p>

                <div className='block lg:hidden'>
                  <Search />
                </div>
                
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Navbar