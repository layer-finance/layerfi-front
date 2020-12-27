import styled from "styled-components";
import Header from '../../component/mobile/Header';
import Sidebar from '../../component/mobile/Sidebar';
import NFTCard from '../../component/mobile/NFTStake/NFTCard';
import List from '../../component/mobile/NFTStake/List'
function NFTStakeMb({history}) {
    return(
        <NFTArea>
            <Header str="NFT Stake" />
            <Sidebar state="NFT Stake" history={history} />
            <Main>
                <NFTCard />
                <List />
            </Main>
        </NFTArea>
    )
}

export default NFTStakeMb;
const NFTArea = styled.div`
    position: absolute;
    left: -0.73%;
    right: 0.73%;
    top: 0%;
    bottom: 0%;
    overflow-y:auto;
    background: rgba(0, 0, 0, 0.75);
`
const Main = styled.div`
    position:absolute;
    left:0px;
    top:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
    
    display: flex;
    width: 100%;
`