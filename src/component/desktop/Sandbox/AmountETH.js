import styled from "styled-components";
import Button from "../Button"

function AmountETH({setAmountETH}){
    const amount =(e)=>{
        setAmountETH(e.target.value)
    }
    return(
        <AmountArea>
            <Amount placeholder="Amount ETH" onChange={amount}/>
            <ButtonArea>
                <Button str="Buy" />
            </ButtonArea>
        </AmountArea>
    )
}

export default AmountETH;

const AmountArea = styled.div`
    display:flex;
    width:80%;
    margin-bottom:30px;
    justify-content : space-between;
    align-items : center;
    height:63px;
`

const Amount = styled.input`
    width: 60%;
    height:47px;
    padding-left:23.5px;
    border-radius:23.5px;
    background: rgba(221, 221, 221, 0.0001);
    border: 2px solid rgba(255, 255, 255, 0.15);
    box-sizing: border-box;
    color:#FFFFFF;
`
const ButtonArea = styled.div`
    height:36px;
    width:30%;
`