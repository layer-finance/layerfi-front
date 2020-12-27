import styled from "styled-components"
function Balance() {
    return(
        <BalanceArea>
            <Header><p>Balance</p></Header>
            <BalanceMain>
                <img src="/assets/NFT Card.png"/>
                <InfoBar>
                    <InfoBarEle>
                        <h2>Balance</h2>
                        <p>$65,237</p>
                    </InfoBarEle>
                    <VerticalLine/>
                    <InfoBarEle>
                        <h2>LF AMOUNT</h2>
                        <p>31,000 LF</p>
                    </InfoBarEle>
                </InfoBar>
            </BalanceMain>
        </BalanceArea>
    )
}
export default Balance;

const BalanceArea = styled.div`
    display:flex;
    width:50%;
    height:100%;
    flex-direction:column;
    align-items:center;
    background: #282828;
    box-shadow: 0px 40px 80px rgba(0, 0, 0, 0.25);
    border-radius:18px;
    margin-right :33px;
`
const Header = styled.div`
    height:60px;
    width:100%;
    display: flex;
    align-items: center;
    border-radius: 18px 18px 0px 0px;
    p{
        margin:0px;
        margin-left:20px;
        line-height:53px;
        font-family: ABeeZee;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        letter-spacing: 0.5px;
        color:#FFFFFF;
    }
`
const BalanceMain = styled.div`
    width:100%;
    height:80%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content : space-around;
    img{
        width:335px;
        height:261px;
    }
`
const InfoBar = styled.div`
    width:90%;
    display:flex;
    align-items:center;
    justify-content : space-around;
    border-radius:18px;
    background: #383838;
    box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.25);
`
const InfoBarEle =styled.div`
    height:100%;
    align-items:center;
    justify-content : center;
    h2{
        margin-top:30px;
        font-size: 11px;
        text-align: center;
        letter-spacing: 1.5px;
        
        text-transform: uppercase;

        color: #FFFFFF;

        mix-blend-mode: normal;
        opacity: 0.5;
    }
    p{
        font-size: 24px;
        line-height: 44px;
        /* identical to box height, or 183% */

        text-align: center;
        letter-spacing: 1px;

        color: #FFFFFF;

    }
`
const VerticalLine = styled.div`
    background: rgba(255, 255, 255, 0.07);
    height:50%;
    width:2px;
`