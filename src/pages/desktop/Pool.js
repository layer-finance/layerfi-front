import { useState } from "react";
import styled from "styled-components";
import Header from "../../component/desktop/Header";
import Sidebar from "../../component/desktop/Sidebar";
import PoolHeader from "../../component/desktop/Pool/PoolHeader";
import PoolElement from "../../component/desktop/Pool/PoolElement";

function Pool({ history }) {
  const [poolArr, serPoolArr] = useState([
    {
      Pool: "Layer Fi",
      detail: "LF /ETH",
      Stake: "0 LF",
      APY: "0%",
      Earned: "0 LF",
      Approve: "0LP"
    },
    {
      Pool: "Stable Fi",
      detail: "USDT / ETH",
      Stake: "0 USDT",
      APY: "0%",
      Earned: "0 USDT",
      Approve: "0LP"
    }
  ]);
  const approve = e => {
    history.push("/NET Stake");
  };

  return (
    <PoolArea>
      <Header />
      <Sidebar state="Pool" history={history} />
      <Main>
        <PoolHeader />
        <PoolElement poolArr={poolArr} approveClick={approve} />
      </Main>
    </PoolArea>
  );
}
export default Pool;

const PoolArea = styled.div`
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
  flex-direction: column;
  justify-content: space-between;
  flex: auto;
  top: 120px;
  left: 400px;
  height: 75%;
  width: 70%;
  border-radius: 18px;
  background: #282828;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.25);
`;
