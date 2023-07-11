"use client";
import Container from "@/app/components/layout/Container";
import BackButton from "@/app/components/ui/BackButton";
import { Divider, FormControl, InputLabel } from "@mui/material";
import Image from "next/image";
import { MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import * as React from "react";
import { FiChevronDown } from "react-icons/fi";


export default function MenuHome() {
  const [select, setSelect] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
  };

  return (
    <Container>
      <div className="mb-4">
        <BackButton href="/" />
      </div>
      <div className="flex flex-row justify-between w-full gap-12">
        <div className="w-[55%]">
          <div className="flex flex-col gap-8 mb-8">
            <h1 className="text-5xl font-semibold font-ObviouslyNarrow">
              Iced Latte
            </h1>
            <p className="font-Futura">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              exercitationem tempore sunt adipisci ex magni! Natus at laborum
              eum quaerat sunt quibusdam, dolorem esse, nam sint, dolor optio
              adipisci magni!
            </p>
            <Divider />
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-semibold uppercase font-ObviouslyNarrow">
              Customizations
            </h2>

            <FormControl
              sx={{
                width: "100%",
              }}
            >
              <InputLabel
                sx={{
                  color: "#000000",
                  fontFamily: "Futura",
                  textTransform: "uppercase",
                  "&.Mui-focused": {
                    color: "#000000",
                  },
                }}
              >
                Milk
              </InputLabel>
              <Select
                IconComponent={FiChevronDown}
                labelId="milk-customization"
                id="milk-customization"
                value={select}
                label="Select"
                onChange={handleChange}
                sx={{
                  borderRadius: "0px",
                  fontFamily: "Futura",
                  "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                    borderColor: "#000000",
                  },

                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #000000 !important",
                    borderRadius: "0px",
                  },
                  "& .css-skycg5-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                    {
                      color: "#000000 !important",
                    },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      "& .MuiMenuItem-root": {
                        paddingTop: ".75rem",
                        paddingBottom: ".75rem",
                        fontFamily: "Futura",

                      },
                      "& .MuiMenuItem-root.Mui-selected": {
                        backgroundColor: "#F4F2F6",
                      },
                      "& .MuiMenuItem-root:hover": {
                        backgroundColor: "#F15D2A"
                      },
                      "& .MuiMenuItem-root.Mui-selected:hover": {
                        backgroundColor: "#F15D2A"
                      },
                      '& .css-6hp17o-MuiList-root-MuiMenu-list': {
                        paddingTop: '0px',
                        paddingBottom: '0px',
                        border: '1px solid #000000',
                        borderRadius: '0px',
                      },
                      "&.css-ak6gk7-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
                        backgroundColor: "#000000 !important",
                      },
                    }
                  }
                }}
                variant="outlined"
              >
                <MenuItem value={"No Milk"}>No Milk</MenuItem>
                <MenuItem value={"Whole Milk"}>Whole Milk</MenuItem>
                <MenuItem value={"Almond Milk"}>Almond</MenuItem>
                <MenuItem value={"Oat Milk"}>Coconut</MenuItem>
                <MenuItem value={"Soy Milk"}>Breve (Half & Half)</MenuItem>
              </Select>
            </FormControl>

            
          </div>
        </div>

        <div className="relative flex flex-col justify-start w-[45%] min-h-[70vh] align-middle xl:justify-center">
          <Image
            className="border-[1px]"
            src="/images/iced-latte.jpeg"
            alt="Iced Latte"
            fill={true}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </Container>
  );
}
