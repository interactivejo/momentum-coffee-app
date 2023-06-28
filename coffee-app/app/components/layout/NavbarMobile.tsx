import React from "react";
import Container from "./Container";
import HoursMobile from "../single/HoursMobile";
import LocationSelectorMobile from "../single/LocationSelectorMobile";

const NavbarMobile = () => {
  return (
    <div
      className="
        text-white
        fixed
        lg:hidden 
        w-full 
        z-10 
        shadow-sm
        bg-[#27004B]
        py-4
        bottom-0"
    >
      <Container>
        
        <div className="
          flex
          flex-row
          items-center
          justify-between
          gap-4
        ">
            <LocationSelectorMobile />
            <HoursMobile />
        </div>

        
    
    </Container>
    </div>
  );
};

export default NavbarMobile;
