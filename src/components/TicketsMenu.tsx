import { Box, Button, Container, Modal, Typography } from "@mui/material";
import React from "react";
import { enterLottery } from "../apis/blockchain";
import DropDownMenu from "./DropDownMenu";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  display: "flex",
  flexDirection: "row",
  justifyContents: "center",
  borderRadius: 2,
  boxShadow: 24,
  padding: 4,
};

export const TicketsMenu = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [ticketQuantity, setTicketQuantity] = React.useState<number>(1);
  const props = { ticketQuantity, setTicketQuantity };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        <Typography>Buy Tickets</Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <DropDownMenu {...props} />
          <Button
            onClick={() => {
              enterLottery(ticketQuantity);
            }}
          >
            <Typography>Buy Tickets</Typography>
          </Button>
        </Box>
      </Modal>
    </Container>
  );
};
