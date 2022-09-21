import { Button, Card, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { getLotteryContract } from "../contexts/metamask.utils";

function OwnerPage() {
  const [addressAdd, setAddressAdd] = React.useState<string>("");
  const [addressRemove, setAddressRemove] = React.useState<string>("");

  const lotteryContract = getLotteryContract();
  const handleWithdraw = async () => {
    try {
      await lotteryContract.withdrawlFees();
    } catch (e) {
      console.error(e);
    }
  };
  const handleDraw = async () => {
    try {
      await lotteryContract.draw();
    } catch (e) {
      console.error(e);
    }
  };

  const submitNewAdmin = async () => {
    try {
      lotteryContract.addAdmin(addressAdd);
    } catch (e) {
      console.error(e);
    }
    setAddressAdd("");
  };

  const removeAdmin = async () => {
    try {
        lotteryContract.removeAdmin(addressRemove);

    } catch (e) {
        console.error(e)
    }
    setAddressRemove("");
  }

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Card>
          <Button onClick={handleWithdraw} sx={{ width: 300 }}>
            Withdraw
          </Button>
        </Card>
        <Card>
          <Button onClick={handleDraw} sx={{ width: 300 }}>
            Draw
          </Button>
        </Card>
      </Container>
      <Container sx={{ width: 860 }}>
        <Card>
          <Typography variant="h5">Add new admin</Typography>
          <TextField
            label="Address"
            value={addressAdd}
            onChange={(event) => setAddressAdd(event.target.value)}
          />
          <Button onClick={submitNewAdmin}>Submit new admin</Button>
        </Card>
        <Card>
          <Typography variant="h5">Remove admin</Typography>
          <TextField
            label="Address"
            value={addressRemove}
            onChange={(event) => setAddressRemove(event.target.value)}
          />
          <Button onClick={removeAdmin}>Remove admin</Button>
        </Card>
      </Container>
    </>
  );
}

export default OwnerPage;
