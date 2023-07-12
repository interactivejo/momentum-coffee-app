"use client";
import Container from "@/app/components/layout/Container";
import BackButton from "@/app/components/ui/BackButton";
import { Divider, FormControl, InputLabel } from "@mui/material";
import { MenuItem, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import * as React from "react";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const FormSelect = (props: any) => {
  const [select, setSelect] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value);
  };

  return (
    <div className="flex flex-row gap-4">
      {props.qnty && (
        <div className="flex flex-row items-center gap-2 align-middle">
        <AiOutlineMinusCircle size={24} className="text-[#F15D2A]" />
        <p className="text-lg font-semibold font-Futura leading-[130%]">
          1
        </p>
        <AiOutlinePlusCircle size={24} className="text-[#F15D2A]" />
      </div>
      )}
      
      <div className="w-full">
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
            {props.label}
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
                "& .css-3qbkez-MuiSelect-icon": {
                  color: "#000000",
                  fontSize: "1.5rem",
                },
                "& .css-10q54uo-MuiSelect-icon": {
                  color: "#000000",
                  fontSize: "1.5rem",
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
                    backgroundColor: "#F15D2A",
                  },
                  "& .MuiMenuItem-root.Mui-selected:hover": {
                    backgroundColor: "#F15D2A",
                  },
                  "& .css-6hp17o-MuiList-root-MuiMenu-list": {
                    paddingTop: "0px",
                    paddingBottom: "0px",
                    border: "1px solid #000000",
                    borderRadius: "0px",
                  },
                  "&.css-ak6gk7-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
                    backgroundColor: "#000000 !important",
                  },
                  
                },
              },
            }}
            variant="outlined"
          >
            {props.items.map((item: any) => (
              <MenuItem key={Math.random()} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default FormSelect;
