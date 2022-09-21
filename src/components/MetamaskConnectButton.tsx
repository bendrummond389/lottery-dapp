import { Button } from "@mui/material";
import { initalizeMetamask } from "../contexts/metamask.utils";


function MetamaskConnectButton() {
  return (
    <>
      <Button variant="contained" color="primary" onClick={initalizeMetamask}> Connect to MetaMask </Button>
    </>
  );
}

export default MetamaskConnectButton;
