import styled from "styled-components";
import Header from "../../component/desktop/Header";
import Sidebar from "../../component/desktop/Sidebar";
import NFTCard from "../../component/desktop/NFTStake/NFTCard";
import List from "../../component/desktop/NFTStake/List";
function NFTStake({ history }) {
  return (
    <NFTArea>
      <Header />
      <Sidebar state="NFT Stake" history={history} />
      <Main>
        <NFTCard />
        <List />
      </Main>
    </NFTArea>
  );
}

export default NFTStake;

const NFTArea = styled.div`
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
  flex-direction: row;
  justify-content: space-between;
  top: 120px;
  left: 400px;
  height: 580px;
  width: 788px;
`;
