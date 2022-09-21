import { ethers } from "ethers";
import { ContractAddress } from "../constants/contract.constants";
import {
  getLotteryContract,
  getTokenContract,
} from "../contexts/metamask.utils";

export const weiToEth = (weiBalance: number) => {
  return parseInt(ethers.utils.formatEther(weiBalance));
};

export const enterLottery = async (ticketQuantity: number) => {
  const lotteryContract = getLotteryContract();
  const tokenContract = getTokenContract();
  const ticketPriceMantissa = await lotteryContract.ticketPrice();
  const approvalAmmount = ticketPriceMantissa.mul(ticketQuantity);
  tokenContract
    .approve(ContractAddress.LOTTERY_ADDRESS, approvalAmmount, {
      gasLimit: 100000,
    })
    .then(lotteryContract.enterLottery(ticketQuantity));
};
