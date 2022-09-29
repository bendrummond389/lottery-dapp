import { ethers } from "ethers";
import { ContractAddress } from "../constants/contract.constants";
import LotteryAbi from "../abis/Lottery.json";
import TokenAbi from "../abis/MockToken.json";

const MINTAMMOUNT = 200e18;

export const ethereum = window.ethereum;



export const initalizeMetamask = async () => {
    if (ethereum.isConnected) {
      await ethereum.request({ method: "eth_requestAccounts" });
    } else {
      alert("Please install MetaMask");
    }

    ethereum.on("chainChanged", () => {
      window.location.reload();
    });
    ethereum.on("accountsChanged", () => {
      window.location.reload();
    });
    ethereum.on("disconnect", () => {
      window.location.reload();
    });

};

export const getAccounts = async () => {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  console.log(accounts[0]);
  return accounts[0];
};

export const getLotteryContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const lotteryContract = new ethers.Contract(
    ContractAddress.LOTTERY_ADDRESS,
    LotteryAbi.abi,
    signer
  );
  return lotteryContract;
};

export const getTokenContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const tokenContract = new ethers.Contract(
    ContractAddress.TOKEN_ADDRESS,
    TokenAbi.abi,
    signer
  );
  return tokenContract;
};

export const getBalance = async () => {
  const lotteryContract = await getLotteryContract();
  lotteryContract.getBalance().then((balance: any) => {
    return balance;
  });
};

export const mintToken = async () => {
  const tokenContract = await getTokenContract();
  const address = await getAccounts();
  console.log(tokenContract);

  try {
    tokenContract.mint(address, MINTAMMOUNT.toString());
  } catch (e) {
    console.error(e);
  }
};
