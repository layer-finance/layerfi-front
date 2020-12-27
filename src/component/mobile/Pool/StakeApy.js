import styled from 'styled-components';

function StakeApy({stake,apy}) {
    return(
        <StakeApyArea>
            <DataArea>
                <h2>STAKE</h2>
                <p>{stake}</p>
            </DataArea>
            <Line/>
            <DataArea>
                <h2>APY</h2>
                <p>{apy}</p>
            </DataArea>
        </StakeApyArea>
    )
}

export default StakeApy;

const StakeApyArea = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    background: #383838;
    box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.25);
    border-radius:18px;
    padding:10px;
    margin-top:10px;
    width:75%;
    height:70px;
`
const DataArea = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
    h2{
        width:100%;
        display:flex;
        justify-content:center;
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
        width:100%;
        display:flex;
        justify-content:center;
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
    border-radius:10px;
    width : 2px;
    height:80%;
`