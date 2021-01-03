import styled from "styled-components";
import Header from "../../component/mobile/Header";
import Sidebar from "../../component/mobile/Sidebar";
import Balance from "../../component/mobile/MyWallet/Balance";
import Transactions from "../../component/mobile/MyWallet/Transactions";

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

function MyWalletMb({ history }) {
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
      <Header str="My Wallet" />
      <Sidebar state="My Wallet" history={history} />
      <Greeting />
    </MyWalletArea>
  );
}
export default MyWalletMb;
const MyWalletArea = styled.div`
  position: absolute;
  left: -0.73%;
  right: 0.73%;
  top: 0%;
  bottom: 0%;
  overflow-y: auto;
  background: #181818;
`;
const Main = styled.div`
  position: absolute;
  left: 0px;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  display: flex;
  width: 100%;
`;
const ConnectWallet = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  img {
    width: 480px;
    height: 300px;
    margin: auto auto;
  }
`;
