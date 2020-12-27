import styled from "styled-components"
function ListHeader() {
    return(
        <ListHeadArea>
            <Type>TYPE</Type>
            <LF>LF</LF>
            <APY>APY</APY>
            <Benefits>BENEFITS</Benefits>
        </ListHeadArea>
    )
}

export default ListHeader;

const ListHeadArea = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    height:54px;
    background:  rgba(255, 255, 255, 0.05);
    border-radius: 18px 18px 0px 0px;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 21px;
    letter-spacing: 1px;

    color: #FFFFFF;

    mix-blend-mode: normal;
    opacity: 0.5;
`

const Type = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:15%;
`
const LF =styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:25%;
`
const APY = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:10%;
`
const Benefits =styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:50%;
`