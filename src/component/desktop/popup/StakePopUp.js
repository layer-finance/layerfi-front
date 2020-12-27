import styled from "styled-components";
import Button from "../Button"

function StakePopup(){
    return(
        <Overlay>
            <Wrapper>
                <StakePopUpArea>
                    <img src="/assets/logo.png"/>
                    <h2>Add Liquidity</h2>
                    <LPinfo>
                        <img src="/assets/LPinfo_Logo.png"/>
                        <LPinfoText>
                            <h2>LF/ETH LP</h2>
                            <Balance><h3>Balance</h3><p>3211.1</p></Balance>
                            <input placeholder="StakePopup"/>
                        </LPinfoText>
                    </LPinfo>
                    <ButtonArea>
                        <Button str="Confirm"/>
                    </ButtonArea>
                </StakePopUpArea>
            </Wrapper>
        </Overlay>
    )
}

export default StakePopup;
// ${(props)=>(props.visible?"block":"none")};
const Overlay = styled.div`
    box-sizing:border-box;
    display: flex;
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color:rgba(0,0,0,0.6);
    z-index:999;
`
/*${(props)=>(props.visible?"flex":"none")};*/
const Wrapper = styled.div`
    width:100%;
    height:100%;
    display : flex;
    align-items:center;
    justify-content:center;
    z-index:1000;
    overflow:auto;
`
const StakePopUpArea = styled.div`
    width: 520px;
    height : 400px;
    display:flex;
    flex-direction : column;
    align-items:center;
    justify-content:space-around;

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
    img{
        width:70px;
        height:70px;
    }
`
const LPinfo =styled.div`
    width:320px;
    height:120px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:10px;
    border-radius:18px;
    background: #383838;
    box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.25);
    img{
        width:75px;
        height:75px;
    }
`
const LPinfoText = styled.div`
    display:flex;
    flex-direction:column;

    align-items:center;
    justify-content:space-between;

    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    h2{
        font-size: 20px;
        line-height: 44px;
        /* or 220% */

        text-align: center;
        letter-spacing: 1.5px;
        text-transform: uppercase;

        color: #FFFFFF;
    }
    input{
        height:38px;
        background: rgba(221, 221, 221, 0.0001);
        border: 2px solid rgba(255, 255, 255, 0.15);
        box-sizing: border-box;
        border-radius:100px;
        text-align:center;
    }
`
const Balance =styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    h3{
        font-family: ABeeZee;
        font-style: normal;
        font-weight: normal;
        font-size:11px;
        text-align: center;
        letter-spacing: 1.5px;
        text-transform: uppercase;

        color: #FFFFFF;

        mix-blend-mode: normal;
        opacity: 0.5;
    }
    p{
        font-family: ABeeZee;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        /* or 367% */
        margin:0px;
        text-align: right;
        letter-spacing: 1px;

        color: #FFFFFF;
    }
`
const ButtonArea=styled.div`
    width:125px;
    height:46px;
    img{
        width:19px;
        height:13.25px;
    }
`