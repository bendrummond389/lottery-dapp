import { ethers } from "ethers";
import { ReactElement, useContext } from "react";
import React, { useState } from "react";
import { MetamaskStateContext } from "./metamask.context";

interface Props {
  children: ReactElement;
}

export const useMetamask = () => {
  return useContext(MetamaskStateContext)
};

export const MetamaskProvider: React.FC<Props> = ({ children }) => {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [metamaskAccount, setMetamaskAccount] = useState();

  return (
    <MetamaskStateContext.Provider
      value={{
        metamaskAccount,
        setMetamaskAccount,
        provider,
        setProvider,
      }}
    >
      {children}
    </MetamaskStateContext.Provider>
  );
};
