import styled from "styled-components";
import { useState } from "react";
import Header from "../../component/desktop/Header";
import Sidebar from "../../component/desktop/Sidebar";
import Card from "../../component/desktop/Overview/Card";
import Chart from "../../component/desktop/Overview/Chart";

function Overview({ history }) {
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
      <Header />
      <Sidebar state="Overview" history={history} />
      <Main>
        <Infos>
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
        </Infos>
        <CardIssueAmount>
          <MainH2>
            <h2>Card Issue Amount</h2>
          </MainH2>
          <Card obj={cardObj} width={380} height={250} />
          {/* <Chart Data={Data} /> */}
          <img id="graph" src="/assets/Overview_graph.png" />
        </CardIssueAmount>
      </Main>
    </OverviewArea>
  );
}

export default Overview;

const OverviewArea = styled.div`
  position: absolute;
  left: -0.73%;
  right: 0.73%;
  min-height: 1000px;
  top: 0%;
  bottom: 0%;
  background: rgba(0, 0, 0, 0.75);
`;
const Main = styled.div`
  position: absolute;
  display: flex;
  top: 120px;
  left: 400px;
  height: 800px;
  width: 792px;
  max-height: 800px;
`;
const Infos = styled.div`
  display: flex;
  width: 380px;
  margin-right: 33px;
  height: 100%;
  flex-direction: column;
  flex: auto;
`;
const TotalValue = styled.div`
  display: flex;
  width: 380px;
  height: 250px;
  flex-direction: column;
  align-items: center;
  border-radius: 18px;
  background: #282828;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.25);
`;
const MainH2 = styled.div`
  h2 {
    margin-top: 8px;
    padding-left: 23px;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 44px;
    /* or 183% */
    color: #ffffff;
  }
`;

const MoneyImg = styled.img`
  width: 64px;
  height: 55px;
`;
const DollarTotalvalue = styled.div`
  p {
    margin: 0px;
    margin-top: 19px;
    margin-bottom: 32px;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 56.9191px;
    line-height: 52px;
    /* identical to box height, or 92% */

    text-align: center;
    letter-spacing: 0.5px;

    color: #ffffff;
  }
`;
const TokenInformation = styled.div`
  display: flex;
  align-content: space-between;
  align-items: center;
  flex-direction: column;

  width: 380px;
  height: 380px;
  margin-top: 18px;
  border-radius: 18px;
  background: #282828;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.25);
  #chart {
    margin-top: 0px;
    width: 280px;
    height: 280px;
  }
`;
const CardIssueAmount = styled.div`
  display: flex;
  width: 370px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  height: 580px;
  border-radius: 18px;
  background: #282828;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.25);
  #graph {
    width: 367px;
    height: 247px;
  }
`;
