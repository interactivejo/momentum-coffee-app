import React from "react";
import { Divider, Box } from "@mui/material";
import FavoritesBlock from "../ui/FavoritesBlock";
import Image from "next/image";
import ButtonPrimary from "../ui/ButtonPrimary";
import PastOrdersBlock from "../ui/PastOrdersBlock";
import { BsArrowLeft } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import BackButton from "../ui/BackButton";
import BagSidebar from "../nav/BagSidebar";

const SideDrawerBox = (props: any) => {
  let cart;
  let favs;
  let history;

  if (props.header === "Review Order") {
    cart = props.header;
  } else if (props.header === "Favorites") {
    favs = props.header;
  } else if (props.header === "Order History") {
    history = props.header;
  } else {
    ("");
  }

  return (
    <Box
      sx={{
        width: 400,
        padding: 4,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "@media (max-width: 1024px)": {
          width: "100vw",
        },
      }}
    >
      <div className="h-full">
        {props.label === "Bag" && (
          <BagSidebar setIsDrawerOpen={props.setIsDrawerOpen} />
        )}

        {props.label === "Favs" && (
          <div>
            <h2 className="mb-4 text-2xl font-semibold uppercase font-Obviously">
              {props.header}
            </h2>
            <Divider sx={{ marginBottom: "2rem" }} />
            <FavoritesBlock />
          </div>
        )}

        {props.label === "History" && (
          <div>
            <h2 className="mb-4 text-2xl font-semibold uppercase font-Obviously">
              {props.header}
            </h2>
            <Divider sx={{ marginBottom: "2rem" }} />
            <PastOrdersBlock />
          </div>
        )}
      </div>
    </Box>
  );
};

export default SideDrawerBox;
