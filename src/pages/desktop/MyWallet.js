import styled from "styled-components";
import Header from "../../component/desktop/Header";
import Sidebar from "../../component/desktop/Sidebar";
import Balance from "../../component/desktop/MyWallet/Balance";
import Transactions from "../../component/desktop/MyWallet/Transactions";

import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../action/wallet";

import Web3 from "web3";
import Web3Modal, { local } from "web3modal";

import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "f5d74ff5fe8046cebb9aa1f913017e2b"
    }
  }
};

const web3Modal = new Web3Modal({
  network: "mainnet",
  cacheProvider: true,
  providerOptions
});

const providerConfig =
  "https://mainnet.infura.io/v3/f5d74ff5fe8046cebb9aa1f913017e2b";

function MyWallet({ history }) {
  const dispatch = useDispatch();
  const [localWallet, setLocalWallet] = useState({
    account: undefined,
    provider: new Web3.providers.HttpProvider(providerConfig),
    web3: new Web3(new Web3.providers.HttpProvider(providerConfig))
  });

  const { wallet } = useSelector(state => state.wallet);

  const connectWallet = async () => {
    const provider = await web3Modal.connect();
    const web3 = await new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];
    const account =
      address.substr(0, 6) +
      "..." +
      address.substr(address.length - 6, address.length);
    dispatchWallet({ web3, provider, account, address });
  };

  const dispatchWallet = useCallback(
    ({ account, web3, provider, address }) => {
      setLocalWallet({
        provider: provider,
        web3: web3,
        address: address,
        account: account
      });
      dispatch(
        actions.connectWallet({
          web3: web3,
          account: account,
          address: address,
          provider: provider
        })
      );
    },
    [localWallet, dispatch]
  );
  function Greeting() {
    if (wallet.address)
      return (
        <Main>
          <Balance />
          <Transactions />
        </Main>
      );
    else
      return (
        <Main>
          <ConnectWallet onClick={connectWallet}>
            <img src="./assets/pop-up.png" />
          </ConnectWallet>
        </Main>
      );
  }
  return (
    <MyWalletArea>
      <Header />
      <Sidebar state="My Wallet" history={history} />
      <Greeting />
    </MyWalletArea>
  );
}

export default MyWallet;

const MyWalletArea = styled.div`
  position: absolute;
  left: -0.73%;
  right: 0.73%;
  top: 0%;
  bottom: 0%;
  background: rgba(0, 0, 0, 0.75);
`;
const Main = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex: auto;
  top: 120px;
  left: 400px;
  height: 550px;
  width: 788px;
`;
const ConnectWallet = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  img {
    width: 720px;
    height: 400px;
    margin: auto auto;
  }
`;
