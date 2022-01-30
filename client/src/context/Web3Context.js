import React, { createContext, useState, useEffect } from "react";
import contract from "../contracts/Transactions.json";
import getWeb3 from "../getWeb3";

export const Web3Context = createContext();

function Web3ContextProvider(props) {
  const [web3, setweb3] = useState(null);
  const [accts, setaccts] = useState(null);
  const [ins, setins] = useState(null);

  async function web3Fetch() {
    try {
      const web3Instance = await getWeb3();
      const accounts = await web3Instance.eth.getAccounts();
      const networkId = await web3Instance.eth.net.getId();
      const deployedNetwork = contract.networks[networkId];
      const instance = new web3Instance.eth.Contract(
        contract.abi,
        deployedNetwork && deployedNetwork.address
      );
      setins(instance);
      setweb3(web3Instance);
      setaccts(accounts);
    } catch (err) {
      console.error("Unable to start web3 provider, ", err);
    }
  }

  useEffect(() => {
    web3Fetch();
  }, []);

  return (
    <Web3Context.Provider value={{ web3, accts, ins }}>
      {props.children}
    </Web3Context.Provider>
  );
}

export default Web3ContextProvider;
