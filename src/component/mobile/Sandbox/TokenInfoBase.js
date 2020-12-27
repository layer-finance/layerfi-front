import styled from "styled-components";
function TokenInfoBase({tokenInfo}){
    const fontStyle = {
        letterSpacing: "1px",
        color: "#FFFFFF",
        mixBlendMode: "normal",
        opacity: "0.5"
    }
    return(
        <TokenInfoBaseArea>
            <TokenInfoEle><p>Token Sale Schedule</p> <p style={fontStyle}>{tokenInfo.TokenSaleSchedule}</p></TokenInfoEle>
            <TokenInfoEleGray ><p>Softcap</p> <p style={fontStyle}>{tokenInfo.Softcap}</p></TokenInfoEleGray>
            <TokenInfoEle><p>Hardcap</p><p style={fontStyle}>{tokenInfo.Hardcap}</p></TokenInfoEle>
            <TokenInfoEleGray ><p>Individualcap</p><p style={fontStyle}>{tokenInfo.Individualcap}</p></TokenInfoEleGray>
        </TokenInfoBaseArea>
    )
}

export default TokenInfoBase;

const TokenInfoBaseArea =styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    width:100%;
`

const TokenInfoEle = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    p{
        font-family: ABeeZee;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 44px;
        color: #FFFFFF; 
        width:50%;
        text-align:center;
    }
`
const TokenInfoEleGray = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    background:rgba(255, 255, 255, 0.05);
    p{
        font-family: ABeeZee;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 44px;
        color: #FFFFFF; 
        width:50%;
        text-align:center;
    }
`