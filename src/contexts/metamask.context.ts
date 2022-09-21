import { ethers } from "ethers";
import React from "react";

export interface MetamaskContextType {
  metamaskAccount: undefined;
  setMetamaskAccount: CallableFunction;
  provider: ethers.providers.Web3Provider | undefined;
  setProvider: CallableFunction;
}

export const MetamaskStateContext: React.Context<MetamaskContextType> =
  React.createContext({
    metamaskAccount: undefined,
    setMetamaskAccount: (() => {}) as CallableFunction,
    provider: undefined,
    setProvider: (() => {}) as CallableFunction,
  } as MetamaskContextType);
