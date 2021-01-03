import styled from "styled-components";
import Header from "../../component/desktop/Header";
import Sidebar from "../../component/desktop/Sidebar";

import SelectAProject from "../../component/desktop/Sandbox/SelectAProject";
import Rasied from "../../component/desktop/Sandbox/Rasied";
import SaleCapTokenRatio from "../../component/desktop/Sandbox/SaleCapTokenRatio";
import AmountETH from "../../component/desktop/Sandbox/AmountETH";
import TokenInfoBase from "../../component/desktop/Sandbox/TokenInfoBase";
import { useState } from "react";

function Sandbox({ history }) {
  const [project, setProject] = useState({
    tokenInfo: {
      TokenSaleSchedule: "In Jenuary",
      Softcap: "1,000,000 LF",
      Hardcap: "2,000,000 LF",
      Individualcap: "100,000 LF"
    },
    saleCap: "1,000 ETH",
    tokenRatio: { token: "1ETH", ratio: "2000" }
  });
  const [rasied, setRasied] = useState(0);
  const [amountETH, setAmountETH] = useState(0);

  return (
    <SandArea>
      <Header />
      <Sidebar state="Sandbox" history={history} />
      <Main>
        <SandBoxArea>
          <CompoHeader>
            <p>SandBox</p>
          </CompoHeader>
          <SelectAProject />
          <Rasied setRasied={setRasied} />
          <Line />
          <SaleCapTokenRatio
            saleCap={project.saleCap}
            tokenRatio={project.tokenRatio}
          />
          <AmountETH setAmountETH={setAmountETH} />
        </SandBoxArea>
        <TokenInfo>
          <CompoHeader>
            <p>Token Info</p>
          </CompoHeader>
          <TokenInfoBase tokenInfo={project.tokenInfo} />
        </TokenInfo>
      </Main>
    </SandArea>
  );
}
export default Sandbox;

const SandArea = styled.div`
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
  height: 553px;
  width: 790px;
`;
const SandBoxArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  border-radius: 18px;
  margin-right: 33.33px;
  background: #282828;
  box-shadow: 0px 40px 80px rgba(0, 0, 0, 0.25);
`;
const TokenInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  border-radius: 18px;
  background: #282828;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.25);
`;
const CompoHeader = styled.div`
  height: 54px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #333333;
  border-radius: 18px 18px 0px 0px;
  p {
    margin: 0px;
    line-height: 53px;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    letter-spacing: 0.5px;
    color: #ffffff;
  }
`;
const Line = styled.div`
  background: rgba(255, 255, 255, 0.15);
  width: 80%;
  height: 4.4px;
`;
