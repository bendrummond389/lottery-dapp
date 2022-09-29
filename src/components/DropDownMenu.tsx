import { Box, Button, Menu, MenuItem } from "@mui/material";
import React from "react";

export interface Props {
  ticketQuantity: number;
  setTicketQuantity: React.Dispatch<React.SetStateAction<number>>;
}

function DropDownMenu(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { ticketQuantity, setTicketQuantity } = props;

  const [open, setOpen] = React.useState<boolean>(false);
  const TicketOptions = () => {
    const numberArray = Array.from({ length: 10 }, (_, i) => i + 1);
    return numberArray.map((x) => (
      <MenuItem
        onClick={() => {
          setTicketQuantity(x);
          setOpen(false);
        }}
        key={x}
        sx={{ width: 100, display: 'flex', justifyContent: 'center' }}
      >
        {x}
      </MenuItem>
    ));
  };
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  return (
    <Box sx={{ marginRight: "auto" }}>
      <Button onClick={handleClick} sx={{ width: 100 }}>
        {ticketQuantity}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {TicketOptions()}
      </Menu>
    </Box>
  );
}

export default DropDownMenu;
