import React from "react";
import Image from "next/image";
import ButtonPrimary from "../ui/ButtonPrimary";
import { GrClose } from "react-icons/gr";
import BackButton from "../ui/BackButton";
import { Checkbox, Divider } from "@mui/material";
import BagOrderCard from "../ui/BagOrderCard";
import LineCount from "../ui/LineCount";

let cartStatus = "guest";

const BagSidebar = (props: any) => {
  return (
    <div className="h-full">
      {cartStatus === "empty" ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-row justify-between w-full">
            <BackButton
              setIsDrawerOpen={props.setIsDrawerOpen}
              trigger="SideDrawer"
            />
            <GrClose
              size={18}
              className="text-lg text-[#F15D2A] cursor-pointer"
              onClick={() => props.setIsDrawerOpen(false)}
            />
          </div>

          <div className="flex flex-col items-center justify-center h-full">
            <Image
              src="/images/empty-cart-img.png"
              alt="coffee bag"
              width={300}
              height={300}
              className="mb-8"
            />
            <div className="flex flex-col items-center gap-8">
              <h3 className="text-4xl font-semibold uppercase font-ObviouslyNarrow">
                Oh No!
              </h3>
              <p className="text-xl text-center leading-2 font-Futura">
                Looks like you haven't added anything to your cart yet
              </p>
              <ButtonPrimary
                cta="View Full Menu"
                link="/"
                setIsDrawerOpen={props.setIsDrawerOpen}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex flex-row items-center justify-between gap-4 mb-4">
              <h2 className="text-3xl font-semibold uppercase font-ObviouslyNarrow leading-[100%]">
                Review Order
              </h2>
              <GrClose
                size={18}
                className="text-lg text-[#F15D2A] cursor-pointer"
                onClick={() => props.setIsDrawerOpen(false)}
              />
            </div>
            <Divider sx={{ marginBottom: "2rem" }} />
          </div>

          <div className="flex flex-col h-full gap-8 overflow-scroll">
            <BagOrderCard />
            <BagOrderCard />
          </div>

          {cartStatus === "user" && (
            <div className="flex flex-col items-center gap-4 pt-4">
              <div className="mb-8">
                <div className="flex flex-row items-center">
                  <Checkbox />
                  <p className="font-Futura">Text me when it's ready!</p>
                </div>
                <div className="flex flex-row items-center">
                  <Checkbox />
                  <p className="font-Futura">Slack me when it's ready!</p>
                </div>
              </div>

              <ButtonPrimary cta="Place Order" link="/order" />
              <LineCount lineOrder="3" />
            </div>
          )}

          {cartStatus === "guest" && (
            <div className="flex flex-col items-center max-w-full gap-4 pt-4">
              {/* <div className="mb-8">
                <div className="flex flex-row items-center w-full">
                  <div>
                    <Checkbox
                      sx={{
                        padding: ".5rem",
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-Futura grow">Text me when it's ready!</p>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="XXX-XXX-XXXX"
                      className="grow-0 border-b-[1px] border-[#27004B] font-Futura text-base placeholder:text-center placeholder:text-[#E7E7E7] focus:outline-none"
                    />
                  </div>
                </div>
              </div> */}

              <ButtonPrimary cta="Place Order" link="/order" />
              <LineCount lineOrder="3" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BagSidebar;
