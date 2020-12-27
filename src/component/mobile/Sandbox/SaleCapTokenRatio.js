import styled from "styled-components";

function SaleCapTokenRatio({saleCap,tokenRatio}){
    return(
    <SaleCapTokenRatioArea>
        <DataArea>
            <h2>SALE CAP</h2>
            <p>{saleCap}</p>
        </DataArea>
        <Line/>
        <DataArea>
            <h2>Token Ratio</h2>
            <p>{tokenRatio.token} : {tokenRatio.ratio}</p>
        </DataArea>

    </SaleCapTokenRatioArea>
    )
}

export default SaleCapTokenRatio;

const SaleCapTokenRatioArea = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:75%;
    height:70px;
    
`
const DataArea = styled.div`
    display:flex;
    flex-direction:column;
    h2{
        margin:0px;
        font-family: ABeeZee;
        font-style: normal;
        font-weight: normal;
        font-size: 12.9969px;
        line-height: 30px;
        /* or 338% */

        letter-spacing: 2px;
        text-transform: uppercase;

        color: #666666;
    }
    p{
        margin:0px;
        font-family: ABeeZee;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 30px;
        /* or 244% */

        letter-spacing: 1px;

        color: #FFFFFF;
    }
`
const Line = styled.div`
    background: rgba(255, 255, 255, 0.15);
    width : 4.4px;
    height:80%;
`
