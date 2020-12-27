import styled from 'styled-components';
function Header(){
    return (
        <HeaderArea>
            <WalletBtn>
                Connect Wallet
                <WalletImg src="/assets/wallet.png"/>
            </WalletBtn>            
                
            <SnsArea>
                <Icon>
                    <img src="/assets/twitter.png" alt="twitter"/>
                </Icon>
                <Icon>
                    <img src="/assets/telegram.png" alt="telegram"/>
                </Icon>
                <Icon>
                    <img src="/assets/github.png" alt="github"/>
                </Icon>
                <Icon>
                    <img src="/assets/medium.png" alt="medium"/>
                </Icon>
            </SnsArea>
        </HeaderArea>
    )
}
export default Header;

const HeaderArea = styled.div`
    display :flex;
    width : 100%;
    height: 80px;
    top:0px;
    background-color: #282828;
    box-shadow: 0px 20px 70px rgba(0, 0, 0, 0.25);
    flex-direction : row-reverse;
    align-items:center;
`
const SnsArea = styled.div`
    display : inline-flex;
    width:175px;
`
const Icon = styled.div`
    margin : 5%
`
const WalletBtn = styled.button`
    margin-left:22px;
    margin-right:10px;
    display:flex;
    align-items:center;
    width : 150px;
    height : 34px;
    border-radius: 17px;
    border:0px;
    background: linear-gradient(0deg, #1F7FB6, #1F7FB6);
    box-shadow: 0px 10px 20px rgba(59, 45, 143, 0.3);
    font-family: Cairo;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 26px;
    /* identical to box height */
    color: #FFFFFF;
`
const WalletImg = styled.img`
    margin-left :5px;
    width: 24px;
    height: 22px;
`