import styled from "styled-components";
import { useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";

import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "7a615246e88c4081a263552f80cf3060"
    }
  }
};

const web3Modal = new Web3Modal({
  network: "mainnet",
  cacheProvider: true,
  providerOptions
});

const providerConfig =
  "https://mainnet.infura.io/v3/7a615246e88c4081a263552f80cf3060";

function Header() {
  const [Wallet, setWallet] = useState({
    text: "Connect Wallet",
    provider: new Web3.providers.HttpProvider(providerConfig),
    web3: new Web3(new Web3.providers.HttpProvider(providerConfig))
  });

  const connectWallet = async () => {
    const provider = await web3Modal.connect();
    const web3 = await new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setWallet({
      web3: web3,
      text:
        account.substr(0, 6) +
        "..." +
        account.substr(account.length - 6, account.length)
    });
  };
  return (
    <HeaderArea>
      <WalletBtn onClick={connectWallet}>
        {Wallet.text}
        <WalletImg src="/assets/wallet.png" />
      </WalletBtn>

      <SnsArea>
        <Icon>
          <img src="/assets/twitter.png" alt="twitter" />
        </Icon>
        <Icon>
          <img src="/assets/telegram.png" alt="telegram" />
        </Icon>
        <Icon>
          <img src="/assets/github.png" alt="github" />
        </Icon>
        <Icon>
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
`;
const WalletImg = styled.img`
  margin-left: 5px;
  width: 24px;
  height: 22px;
`;
