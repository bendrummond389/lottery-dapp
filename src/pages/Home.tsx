import { Card, Container, Link, Typography } from "@mui/material";

function Home() {
  return (
    <Container >
      <Card sx={{ backgroundImage: "none" }}>
        <Typography variant="h2" align="center">
          Welcome to Felix Chen's lottery for kids
        </Typography>
        <Typography variant="h4" align="center">
          It's gambling, but for children!
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
            <Typography variant="h5">
              How to Buy Ethereum with mommy's credit card
            </Typography>
          </Link>
        </Card>
        <Card>
          <Link href="/mainpage" underline="none">
            <Typography variant="h5">To uncle Felix's wacky lottery</Typography>
          </Link>
        </Card>
      </Container>
    </Container>
  );
}

export default Home;
