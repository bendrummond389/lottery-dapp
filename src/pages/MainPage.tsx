import { Card, Container, Link, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { weiToEth } from "../apis/blockchain";
import { TicketsMenu } from "../components/TicketsMenu";
import { getLotteryContract } from "../contexts/metamask.utils";

function MainPage() {
  const [jackpot, setJackpot] = React.useState<number>(0);
  const [ticketPrice, setTicketPrice] = React.useState<number>(0);

  const getContractData = async () => {
    const contract = getLotteryContract();
    contract.currentPool().then((pool: number) => {
      setJackpot(pool);
    });
    contract.ticketPrice().then((price: number) => {
      setTicketPrice(price);
    });
  };

  useEffect(() => {
    getContractData();
  }, []);

  return (
    <Container>
      <Card>
        <Typography variant="h3" align="center">
          Felix's Wacky Lottery
        </Typography>
      </Card>
      <Container sx={{ display: "flex", flexDirection: "row" }}>
        <Container sx={{ width: "100%" }}>
          <Card sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h4">Current Jackpot</Typography>
            <Typography variant="h5">{weiToEth(jackpot)} MOK</Typography>
          </Card>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4">Ticket Price</Typography>
            <Typography variant="h5">{weiToEth(ticketPrice)} MOK</Typography>
            <TicketsMenu />
          </Card>
        </Container>
        <Card>
          <Link
            underline="none"
            href="https://ropsten.etherscan.io/address/0xb8ec1fe513a3efb0e880e167f81a06eefc9a4a7b#code"
          >
            <Typography variant="h5">Lottery Contract on Etherscan</Typography>
          </Link>
          <Link
            underline="none"
            href="https://ropsten.etherscan.io/token/0xf3c6d0b4352414ce308906252fac32d276189222"
          >
            <Typography variant="h5">Token Contract on Etherscan</Typography>
          </Link>
        </Card>
      </Container>
    </Container>
  );
}

export default MainPage;
