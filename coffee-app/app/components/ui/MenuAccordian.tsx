'use client'

import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
} from "@mui/material";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import YourUsualBlock from "./YourUsualBlock";
import FavoritesBlock from "./FavoritesBlock";
import PastOrdersBlock from "./PastOrdersBlock";

const MenuAccordian = (props: any) => {

    const [toggleChevron, setToggleChevron] = React.useState<boolean>(false)

    const toggleChevronHandler = () => {
        setToggleChevron(!toggleChevron)
    }

  return (
    <div>
      <Accordion className="shadow-none" defaultExpanded={true}>
        <AccordionSummary onClick={toggleChevronHandler}>
          <div className="flex flex-col w-full">
            <div className="flex flex-row gap-4 mb-4 justify-between">
              <div className="flex flex-row gap-4">
                {props.icon}
                <h3 className="font-semibold text-black uppercase text-md font-Futura">
                  {props.title}
                </h3>
              </div>

              {props.chevron === true && <FiChevronDown size={24} className={`text-black ${toggleChevron && 'rotate-180'}`} />}
            </div>
            <Divider />
          </div>
        </AccordionSummary>

        <AccordionDetails>
          {props.title === "Your Usual" && <YourUsualBlock />}
          {props.title === "Favorites" && <FavoritesBlock/>}
          {props.title === "Past Orders" && <PastOrdersBlock/>}
          
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MenuAccordian;
