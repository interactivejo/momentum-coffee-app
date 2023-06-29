import React from "react";
import Container from "./Container";
import LocationSelector from "../nav/LocationSelector";
import Hours from "../nav/Hours";

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
            <LocationSelector />
            
            <Hours />
        </div>

        
    
    </Container>
    </div>
  );
};

export default NavbarMobile;
