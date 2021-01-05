import styled from "styled-components";
import { useState } from "react";
import Header from "../../component/mobile/Header";
import Sidebar from "../../component/mobile/Sidebar";
import Card from "../../component/desktop/Overview/Card";
import Chart from "../../component/desktop/Overview/Chart";

function OverviewMb({ history }) {
  const [totalValue, setTotalValue] = useState(0);
  const [cardObj, setCardObj] = useState({
    url: "/assets/card.png",
    name: "Silver Membership Card",
    date: "2/30",
    money: "50,000 LF"
  });

  const Data = [
    { x: "BLACK", y: 18 },
    { x: "GOLD", y: 23 },
    { x: "SILVER", y: 28 },
    { x: "BRONZE", y: 33 }
  ];
  return (
    <OverviewArea>
      <Header str="Overview" />
      <Sidebar state="Overview" history={history} />
      <Main>
        <TotalValue>
          <MainH2>
            <h2>Total Value</h2>
          </MainH2>
          <MoneyImg src="/assets/totalvalue_img.png" />
          <DollarTotalvalue>
            <p>
              <img id="dollar" src="assets/$.png" /> {totalValue}
            </p>
          </DollarTotalvalue>
        </TotalValue>
        <TokenInformation>
          <MainH2>
            <h2>Token Information</h2>
          </MainH2>
          <img id="chart" src="/assets/chart.png" />
        </TokenInformation>
        <CardIssueAmount>
          <MainH2>
            <h2>Card Issue Amount</h2>
          </MainH2>
          <Card obj={cardObj} />
          {/* <Chart Data={Data} width={320} height={180} /> */}
          <img id="graph" src="/assets/Overview_graph.png" />
        </CardIssueAmount>
      </Main>
    </OverviewArea>
  );
}
export default OverviewMb;
const OverviewArea = styled.div`
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
  z-index: 1;
  display: flex;
  width: 100%;
`;
const TotalValue = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  jusify-content: space-around;
  border-radius: 10px;
  background: #282828;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.25);
  margin-top: 20px;
`;
const MainH2 = styled.div`
  width: 100%;
  h2 {
    margin-top: 8px;
    padding-left: 23px;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 44px;
    /* or 183% */
    color: #ffffff;
  }
`;
const MoneyImg = styled.img`
  width: 48.08px;
  height: 36.09px;
`;
const DollarTotalvalue = styled.div`
  p {
    margin: 0px;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 52px;
    /* identical to box height, or 92% */

    text-align: center;
    letter-spacing: 0.5px;

    color: #ffffff;
  }
  img {
    width: 10px;
    height: 20px;
  }
`;
const TokenInformation = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 10px;
  background: #282828;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.25);
  img {
    margin-bottom: 15px;
  }
  #chart {
    width: 280px;
    height: 280px;
  }
`;
const CardIssueAmount = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 10px;
  background: #282828;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.25);
  #graph {
    width: 319px;
    height: 184px;
  }
`;
