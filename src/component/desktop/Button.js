import styled from "styled-components";

function Button({str,onClick}){
    return(
        <ButtonStyle onClick={onClick}><ButtonImg src="/assets/Buy.png"/>{str}</ButtonStyle>
    )
}
export default Button;
const ButtonStyle = styled.button`
    border:none;
    width:100%;
    height:100%;
    padding: 5px;
    padding-left : 20px;
    padding-right:20px;
    border-radius:18px;
    display:flex;
    align-items: center;
    background: linear-gradient(0deg, #622EC3 -1.79%, #4D65DB 31.82%, #379AEE 65.21%, #53E9F6 103.57%, #13CCD7 103.57%);
    box-shadow: 0px 15px 25px rgba(59, 45, 143, 0.4);
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    letter-spacing: 1px;
    color: #FFFFFF;
`
const ButtonImg = styled.img`
    margin-right : 10px;
    width:auto;
`