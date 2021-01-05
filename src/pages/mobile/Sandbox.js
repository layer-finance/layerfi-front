import styled from "styled-components";
import Header from "../../component/mobile/Header";
import Sidebar from "../../component/mobile/Sidebar";

import SelectAProject from "../../component/mobile/Sandbox/SelectAProject";
import Rasied from "../../component/mobile/Sandbox/Raised";
import SaleCapTokenRatio from "../../component/mobile/Sandbox/SaleCapTokenRatio";
import AmountETH from "../../component/mobile/Sandbox/AmountETH";
import TokenInfoBase from "../../component/mobile/Sandbox/TokenInfoBase";
import { useState } from "react";

function SandboxMb({ history }) {
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
    <SandboxArea>
      <Header str="Sandbox" />
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
    </SandboxArea>
  );
}
export default SandboxMb;

const SandboxArea = styled.div`
  position: absolute;
  left: -0.73%;
  right: 0.73%;
  top: 0%;
  bottom: 0%;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.75);
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
const SandBoxArea = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  border-radius: 18px;
  background: #282828;
  box-shadow: 0px 40px 80px rgba(0, 0, 0, 0.25);
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
const TokenInfo = styled.div`
  margin-top: 30px;
  margin-botoom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  border-radius: 18px;
  background: #282828;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.25);
`;
