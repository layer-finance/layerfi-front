import styled from "styled-components";
import Button from "../Button"
function Liquidity({visible}){
    return(
        <Overlay visible={visible} onClick={()=>{}}>
            <Wrapper visible={visible}>
            <LiquidityArea>
                <img src="/assets/logo.png"/>
                <h2>Add Liquidity</h2>
                <LogoTitle>
                    <img src="/assets/logo.png"/>
                    <h2>LF</h2>
                    <Balance>
                        <BalanceCost>
                            <h2>Balance</h2><p>3211.1</p>                            
                        </BalanceCost>
                        <BalanceInput placeholder="0.0"/>
                    </Balance>
                </LogoTitle>
                <PlusIcon>
                    <img src="/assets/+.png" />
                </PlusIcon>
                <LogoTitle>
                    <img src="/assets/ETHlogo.png"/>
                    <h2>LF</h2>
                    <Balance>
                        <BalanceCost>
                            <h2>Balance</h2><p>3211.1</p>                            
                        </BalanceCost>
                        <BalanceInput placeholder="0.0"/>
                    </Balance>
                </LogoTitle>
                
                <ButtonArea>
                    <Button str="Supply"/>
                </ButtonArea>
            </LiquidityArea>
            </Wrapper>
        </Overlay>
    )
}
export default Liquidity;
const Overlay = styled.div`
    box-sizing:border-box;
    display:"flex";
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color:rgba(0,0,0,0.6);
    z-index:999;
`
const Wrapper = styled.div`
    width:100%;
    height:100%;
    display : "flex";
    align-items:center;
    justify-content:center;
    z-index:1000;
    overflow:auto;
`

const LiquidityArea = styled.div`
    width: 520px;
    height : 456px;
    display:flex;
    flex-direction : column;
    align-items:center;
    justify-content:space-around;
    margin:0px;
    background: #333333;
    box-shadow: 0px 40px 80px rgba(0, 0, 0, 0.25);
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    border-radius:18px;
    h2{
        margin:0px;
        font-size: 36px;
        line-height: 44px;
        text-align: center;
        color: #FFFFFF;
    }
`
const LogoTitle = styled.div`
    width:314px;
    height:71px;
    display:flex;
    align-items:center;
    justify-content:space-around;
    background: #383838;
    box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.25);
    border-radius:18px;
    img{
        width:30px;
        height:30px;
    }
    h2{
        font-size: 20px;
        line-height: 44px;
        
        letter-spacing: 1.5px;
        text-transform: uppercase;
    }
`
const Balance =styled.div`
    width:150px;
    height:80%;
    display:flex;
    flex-direction:column;
    align-content:center;
    align-items : center;
`
const BalanceCost = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    font-size: 12px;
    
    h2{
        font-size: 12px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        mix-blend-mode: normal;
        line-height: 20px;
        opacity: 0.5;
        margin:0px;
    }
    P{  
        display:flex;
        align-items:center;
        line-height: 20px;
        margin:0px;
        color: #FFFFFF;

    }
`
const BalanceInput = styled.input`
    width:100%;
    height:100%;
    text-align:center;
    background: rgba(221, 221, 221, 0.0001);
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius:100px;
    box-sizing: border-box;
`
const ButtonArea = styled.div`
    height:46px;
`
const PlusIcon = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:20px;
    height:20px;
    border-radius:50%;

    background: #EEEEEE;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
`