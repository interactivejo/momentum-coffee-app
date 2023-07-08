import React from "react";
import { Divider, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import ButtonPrimary from "../ui/ButtonPrimary";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  select: "none",
  ':focus': {
    outline: 'none'
    }
};

const AddNewItem = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="flex flex-row items-center gap-4 pb-8 mt-8">
        <BsPlusCircleFill size={20} className="text-[#F15D2A]" />
        <p
          className="text-lg font-medium underline font-Futura hover:text-[#F15D2A] cursor-pointer"
          onClick={handleOpen}
        >
          Add New Item
        </p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-row justify-between gap-4 mb-2">
            <h2 className="text-4xl font-semibold uppercase font-ObviouslyNarrow">
              Add New Item
            </h2>
            <AiOutlineClose
              size={20}
              className="cursor-pointer"
              onClick={handleClose}
            />
          </div>
          <Divider />

          <div className="flex flex-col gap-8 pt-8">
            <div>
              <p className="mb-2 text-lg font-semibold font-Futura">
                Drink Name
              </p>
              <input
                type="text"
                className="w-full border-[1px] border-[#E7E7E7] p-4 focus:outline-none text-[#27004B] font-ObviouslyNarrow text-2xl font-semibold"
              />
            </div>
            <div>
              <p className="mb-2 text-lg font-semibold font-Futura">
                Description
              </p>
              <input
                type="text"
                className="w-full border-[1px] border-[#E7E7E7] p-4 focus:outline-none text-[#27004B] font-Futura text-base"
              />
            </div>

            <div>
              <p className="mb-2 text-lg font-semibold font-Futura">
                Customizations
              </p>
              <input
                type="text"
                className="w-full border-[1px] border-[#E7E7E7] p-4 focus:outline-none text-[#27004B] font-Futura text-base"
              />
            </div>
           
            <div>
              <p className="mb-2 text-lg font-semibold font-Futura">
                Add-Ons
              </p>
              <input
                type="text"
                className="w-full border-[1px] border-[#E7E7E7] p-4 focus:outline-none text-[#27004B] font-Futura text-base"
              />
            </div>

            <div>
              <p className="mb-2 text-lg font-semibold font-Futura">
                Image
              </p>
              
            </div>
          </div>

          

          <div className="pt-8">
          <Divider />
          <div className="flex flex-row justify-end gap-4 pt-8">
          <ButtonPrimary cta="Cancel" disabled={true}/>
            <ButtonPrimary cta="Save Changes" />
          </div>
          </div>

        </Box>
      </Modal>
    </div>
  );
};

export default AddNewItem;
