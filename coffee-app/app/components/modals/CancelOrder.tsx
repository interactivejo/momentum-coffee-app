import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { GrClose } from "react-icons/gr";
import OrderReviewCard from "../ui/OrderReviewCard";
import ButtonPrimary from "../ui/ButtonPrimary";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50rem",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  "@media (max-width: 1024px)": {
    width: "70%",
  },
  "@media (max-width: 768px)": {
    width: "80%",
  },
  "@media (max-width: 640px)": {
    width: "90%",
  },
  ':focus': {
    outline: 'none'
    }
};

const CancelOrder = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div
        onClick={handleOpen}
        className="
            bg-[#F15D2A] 
            px-6 
            py-2 
            text-sm 
            font-semibold 
            text-center 
            text-white 
            uppercase 
            transition 
            rounded-none 
            cursor-pointer 
            font-Futura 
            lg:px-8 
            hover:shadow-md 
            hover:scale-105"
      >
        Cancel Order
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex flex-row justify-end sm">
              <GrClose
                size={18}
                className="text-lg text-[#F15D2A] cursor-pointer"
                onClick={handleClose}
              />
            </div>
            <div>
              <h2 className="mb-12 text-2xl font-semibold text-center lg:text-4xl md:text-3xl font-ObviouslyNarrow">
                Are you sure you want to cancel?
              </h2>

              <div className="flex flex-col items-center max-w-md gap-12 m-auto">
                <div className="flex flex-col items-center gap-4">
                  <OrderReviewCard />
                  <ButtonPrimary cta="Cancel Order" />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <OrderReviewCard />
                  <ButtonPrimary cta="Cancel Order" />
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default CancelOrder;
