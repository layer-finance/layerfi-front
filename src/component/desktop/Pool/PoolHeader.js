import styled from "styled-components"

function PoolHeader(){
    return (
        <PoolHeadArea>
            <Pool ><p>Pool</p></Pool>
            <Stake >Stake</Stake>
            <APY >APY</APY>
            <Earned >Earned</Earned>
            <Approve >Approve</Approve>
        </PoolHeadArea>
    )
}

export default PoolHeader;

const PoolHeadArea = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    height:75px;
    background:  rgba(255, 255, 255, 0.05);
    border-radius: 18px 18px 0px 0px;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 1px;

    color: #FFFFFF;

    mix-blend-mode: normal;
    opacity: 0.5;
`
const Pool =styled.div`
    display:flex;
    align-items:center;
    
    width:27.31%;
    p{
        margin:0px;
        padding-left : 20px;
    }
`
const Stake = styled.div`
    display:flex;
    align-items : center;
    justify-content:center;
    width:18.01%;
`
const APY = styled.div`
    display:flex;
    align-items : center;
    justify-content:center;
    width:14.26%;
`
const Earned = styled.div`
    display:flex;
    align-items : center;
    justify-content:center;
    width:20.6%;
`
const Approve = styled.div`
    display:flex;
    align-items : center;
    justify-content:center;
    width:19.82%;
`