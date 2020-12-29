import styled from "styled-components";
import Header from "../../component/desktop/Header";
import Sidebar from "../../component/desktop/Sidebar";
import Balance from "../../component/desktop/MyWallet/Balance";
import Transactions from "../../component/desktop/MyWallet/Transactions";

function MyWallet({ history }) {
  return (
    <MyWalletArea>
      <Header />
      <Sidebar state="My Wallet" history={history} />
      <Main>
        <Balance />
        <Transactions />
      </Main>
    </MyWalletArea>
  );
}

export default MyWallet;

const MyWalletArea = styled.div`
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
  height: 550px;
  width: 788px;
`;
