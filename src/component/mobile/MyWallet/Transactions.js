import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import axios from "axios";
import { List } from "@material-ui/core";

function Transactions() {
  const { wallet } = useSelector(state => state.wallet);
  const { web3, provider, address } = wallet;

  const [txList, setTxList] = useState([]);

  const getTxList = async () => {
    if (!address) return [];
    const ret = await axios.get(
      "https://api.etherscan.io/api?module=account&action=tokentx&address=" +
        address +
        "&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=XAHHUFHKKK6RHEXEPEY8I45NCYYPPEBA6Z"
    );
    setTxList(ret.data.result);
  };

  useEffect(() => {
    getTxList(address);
  }, [address]);
  const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  function TransactionElement({ tx }) {
    const TransactionInfo = tx => {
      if (!web3 || !tx) return 0;
      const rawValue = parseFloat(web3.utils.fromWei(tx.value, "ether"));
      const value =
        rawValue > 1000000 ? parseInt(rawValue) : rawValue.toPrecision(6);
      const symbol = tx.tokenSymbol;
      const info = address.toLowerCase() == tx.to ? "RECEIVED" : "SENT";
      return `${value} ${symbol} ${info}`;
    };
    return (
      <TransactionEle>
        <LeftLine>
          <ImgCircle>
            <img src="/assets/Transaction_icon.png" />
          </ImgCircle>
          <VerticalLine />
        </LeftLine>
        <Content>
          <ContentText>
            <h2>
              {tx ? longEnUSFormatter.format(new Date(tx.timeStamp * 1000)) : 0}
            </h2>
            <p>{TransactionInfo(tx)}</p>
          </ContentText>
          <ButtonArea
            onClick={() =>
              tx
                ? window.open("https://etherscan.io/tx/" + tx.hash, "_black")
                : {}
            }
          >
            <ButtonStyle>
              MORE
              <img src="/assets/MoreButtonIcon.png" />
            </ButtonStyle>
          </ButtonArea>
          <HorizontalLine />
        </Content>
      </TransactionEle>
    );
  }

  return (
    <TransactionArea>
      <Header>
        <p>Transactions</p>
      </Header>
      <TransactionList>
        {txList.map((tx, i) => {
          return <TransactionElement tx={tx} key={i} />;
        })}
      </TransactionList>
    </TransactionArea>
  );
}
export default Transactions;
const TransactionArea = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background: #282828;
  box-shadow: 0px 40px 80px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const TransactionList = styled.div`
  margin-left: 70px;
  width: 100%;
  height: 30vh;
  overflow: auto;
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
const TransactionEle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  height: 170px;
  overflow-y: auto;
`;
const LeftLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
const ImgCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: rgba(221, 167, 110, 0.0001);
  border: 2px solid #272727;
  box-sizing: border-box;
  border-radius: 50%;
`;
const VerticalLine = styled.div`
  background: rgba(255, 255, 255, 0.07);
  height: 70%;
  width: 7px;
  border-radius: 10px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  height: 100%;
  width: 100%;
  justify-content: space-around;
`;
const ContentText = styled.div`
  display: flex;
  height: 40px;
  flex-direction: column;

  h2 {
    font-family: Avenir;
    font-style: normal;
    font-weight: 900;
    font-size: 11px;
    letter-spacing: 1.5px;
    line-height: 11px;
    text-transform: uppercase;
    margin: 0px;

    color: #666666;
  }
  p {
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    /* or 160% */
    margin: 10px;
    letter-spacing: 1px;
    margin-left: 0px;
    margin-right: 0px;
    color: #ffffff;
  }
`;
const ButtonArea = styled.div`
  height: 35.35px;
  width: 115.57px;
`;
const ButtonStyle = styled.button`
  border: none;
  width: 100%;
  height: 100%;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    0deg,
    #622ec3 -1.79%,
    #4d65db 31.82%,
    #379aee 65.21%,
    #53e9f6 103.57%,
    #13ccd7 103.57%
  );
  box-shadow: 0px 15px 25px rgba(59, 45, 143, 0.4);
  font-family: ABeeZee;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  letter-spacing: 1px;
  color: #ffffff;
`;
const HorizontalLine = styled.div`
  background: rgba(255, 255, 255, 0.07);
  width: 95%;
  height: 5px;
  margin-bottom: 20px;
`;
