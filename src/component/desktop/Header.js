import styled from "styled-components";
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

function Header() {
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

  return (
    <HeaderArea>
      {/* <WalletBtn onClick={connectWallet}>
      {Wallet.text} */}
      <WalletBtn onClick={connectWallet}>
        <a>{wallet.account ? wallet.account : "Connect Wallet"}</a>
        <WalletImg src="/assets/wallet.png" />
      </WalletBtn>

      <SnsArea>
        <Icon
          onClick={() => {
            window.open("https://twitter.com/Layer_Finance", "_blank");
          }}
        >
          <img src="/assets/twitter.png" alt="twitter" />
        </Icon>
        <Icon
          onClick={() => {
            window.open("https://t.me/LayerFiofficial", "_blank");
          }}
        >
          <img src="/assets/telegram.png" alt="telegram" />
        </Icon>
        <Icon
          onClick={() => {
            window.open("https://github.com/layer-finance", "_blank");
          }}
        >
          <img src="/assets/github.png" alt="github" />
        </Icon>
        <Icon
          onClick={() => {
            window.open("https://medium.com/@LayerFi", "_blank");
          }}
        >
          <img src="/assets/medium.png" alt="medium" />
        </Icon>
      </SnsArea>
    </HeaderArea>
  );
}
export default Header;

const HeaderArea = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  top: 0px;
  background-color: #282828;
  box-shadow: 0px 20px 70px rgba(0, 0, 0, 0.25);
  flex-direction: row-reverse;
  align-items: center;
`;
const SnsArea = styled.div`
  display: inline-flex;
  width: 175px;
`;
const Icon = styled.div`
  margin: 5%;
`;
const WalletBtn = styled.button`
  margin-left: 22px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  width: 150px;
  height: 34px;
  border-radius: 17px;
  border: 0px;
  background: linear-gradient(0deg, #1f7fb6, #1f7fb6);
  box-shadow: 0px 10px 20px rgba(59, 45, 143, 0.3);
  font-family: Cairo;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 26px;
  /* identical to box height */
  color: #ffffff;
  a {
    margin: auto auto;
  }
`;
const WalletImg = styled.img`
  margin: auto auto;
  margin-left: auto;
  margin-right: 10px;
  width: 24px;
  height: 22px;
`;
