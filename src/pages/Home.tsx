import { Button, Card, Container, Link, Typography } from "@mui/material";
import { initalizeMetamask } from "../contexts/metamask.utils";

function Home() {
  return (
    <Container >
      <Card >
        <Typography variant="h2" align="center">
          Welcome to Felix Chen's lottery for children
        </Typography>
        <Typography variant="h4" align="center">
          It's gambling, but for kids!
        </Typography>
      </Card>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Card>
          <Link href="/" underline="none">
            <Typography variant="body1">
              How to Buy Ethereum with mommy's credit card
            </Typography>
          </Link>
        </Card>
        <Card>
          <Link href="/mainpage" underline="none">
            <Typography variant="h6">To uncle Felix's wacky lottery</Typography>
          </Link>
        </Card>
        <Card>
          <Button onClick={initalizeMetamask}>
            <Typography variant="h6" >Connect to Metamask</Typography>
          </Button>
        </Card>
      </Container>
    </Container>
  );
}

export default Home;
