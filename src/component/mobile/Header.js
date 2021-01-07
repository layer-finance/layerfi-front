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

function Header({ str }) {
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
      ".." +
      address.substr(address.length - 4, address.length);
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
      <a></a>
      <a>{str}</a>
      <WalletBtn onClick={connectWallet}>
        <a>{wallet.account ? wallet.account : "CONNECT"}</a>
        <WalletImg src="/assets/wallet.png" />
      </WalletBtn>
    </HeaderArea>
  );
}
export default Header;
const HeaderArea = styled.div`
  width: 100%;
  height: 50px;
  font-family: ABeeZee;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 1px;
  background: #282828;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    width: 150px;
    margin-right: auto;
    margin-left: 5px;
  }
`;

const WalletBtn = styled.button`
  display: flex;
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
  margin-right: 10px;
  a {
    margin: auto auto;
  }
`;
const WalletImg = styled.img`
  margin: auto auto;
  margin-left: auto;
  margin-right: 5px;
  width: 24px;
  height: 22px;
`;
