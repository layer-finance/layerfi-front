import styled from "styled-components";
import Button from "../../desktop/Button";

function EarnedApprove({earned,approve}) {
    return(
        <EAArea>
            <DataArea>
                <h2>{earned}</h2>
                <ButtonArea>
                    <Button str="Harvest"/>
                </ButtonArea>
            </DataArea>
            <DataArea>
                <h2>{approve}</h2>
                <ButtonArea>
                    <Button str="Approve" />
                </ButtonArea>
            </DataArea>
        </EAArea>
    )
}

export default EarnedApprove;

const EAArea = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    border-radius:18px;
    padding:10px;
    margin-top:10px;
    width:80%;
    height:70px;
`
const DataArea = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:50%;
    h2{
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
const ButtonArea = styled.div`
    height:35px;
    width:130px;
`