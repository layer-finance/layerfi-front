import styled from "styled-components";
import Header from '../../component/mobile/Header';
import Sidebar from '../../component/mobile/Sidebar'
import Balance from '../../component/mobile/MyWallet/Balance'
import Transactions from '../../component/mobile/MyWallet/Transactions'

function MyWalletMb({history}) {
    return(
        <MyWalletArea>
            <Header str="My Wallet" />
            <Sidebar state="My Wallet" history={history} />
            <Main>
                <Balance />
                <Transactions />
            </Main>
        </MyWalletArea>
    )
}
export default MyWalletMb
const MyWalletArea = styled.div`
    position: absolute;
    left: -0.73%;
    right: 0.73%;
    top: 0%;
    bottom: 0%;
    overflow-y:auto;
    background: #181818;
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