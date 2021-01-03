import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { LF_ADDRESS, ERC20_ABI } from "../../../lib/contracts";

function Balance() {
  const { wallet } = useSelector(state => state.wallet);
  const { web3, provider, address } = wallet;

  const LF_CONTRACT = web3
    ? new web3.eth.Contract(ERC20_ABI, LF_ADDRESS)
    : undefined;

  const getAmount = async address => {
    if (!LF_CONTRACT) return 0;
    const lf = await LF_CONTRACT.methods.balanceOf(address).call();
    const eth = await web3.eth.getBalance(address);
    setBalance({
      eth: parseFloat(web3.utils.fromWei(eth, "ether")),
      lf: parseFloat(web3.utils.fromWei(lf, "ether"))
    });
  };

  const [balance, setBalance] = useState({
    eth: 0,
    lf: 0
  });

  useEffect(() => {
    getAmount(address);
  }, [address]);

  return (
    <BalanceArea>
      <Header>
        <p>Balance</p>
      </Header>
      <BalanceMain>
        <img src="/assets/NFT Card.png" />
        <InfoBar>
          <InfoBarEle>
            <h2>ETH Balance</h2>
            <p>
              {balance.eth > 1000000
                ? parseInt(balance.eth)
                : balance.eth.toPrecision(6)}
              ETH
            </p>
          </InfoBarEle>
          <VerticalLine />
          <InfoBarEle>
            <h2>LF AMOUNT</h2>
            <p>
              {balance.lf > 1000000
                ? parseInt(balance.lf)
                : balance.lf.toPrecision(6)}
              LF
            </p>
          </InfoBarEle>
        </InfoBar>
      </BalanceMain>
    </BalanceArea>
  );
}
export default Balance;

const BalanceArea = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #282828;
  box-shadow: 0px 40px 80px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  margin-top: 30px;
`;
const Header = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 18px 18px 0px 0px;
  p {
    margin: 0px;
    margin-left: 20px;
    line-height: 53px;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    letter-spacing: 0.5px;
    color: #ffffff;
  }
`;
const BalanceMain = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  img {
    width: 100%;
    height: 100%;
  }
  margin-bottom: 30px;
`;
const InfoBar = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 18px;
  background: #383838;
  box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.25);
`;
const InfoBarEle = styled.div`
  height: 100%;
  align-items: center;
  justify-content: center;
  h2 {
    margin-top: 30px;
    font-size: 11px;
    text-align: center;
    letter-spacing: 1.5px;

    text-transform: uppercase;

    color: #ffffff;

    mix-blend-mode: normal;
    opacity: 0.5;
  }
  p {
    font-size: 24px;
    line-height: 44px;
    /* identical to box height, or 183% */

    text-align: center;
    letter-spacing: 1px;

    color: #ffffff;
  }
`;
const VerticalLine = styled.div`
  background: rgba(255, 255, 255, 0.07);
  height: 50%;
  width: 10px;
`;
