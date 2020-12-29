import styled from "styled-components";
function Card({ obj }) {
  return (
    <CardArea img={obj.url}>
      <CardName>{obj.name}</CardName>
      <CardDate>{obj.date}</CardDate>
      <CardMoneyLogo>
        <p>{obj.money}</p>
        <img src="assets/logo.png" />
      </CardMoneyLogo>
    </CardArea>
  );
}

export default Card;

const CardArea = styled.div`
  width: 380px;
  height: 298px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  background-image: url(${props => props.img || "/assets/card.png"});
  background-repeat: no-repeat;
`;
const CardName = styled.div`
  padding-top: 33px;
  padding-left: 79px;
  font-family: ABeeZee;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 48px;
  /* or 319% */
  letter-spacing: 0.8px;

  color: #ffffff;
`;
const CardDate = styled.div`
  padding-top: 40px;
  padding-left: 86px;
  font-family: Abel;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  /* or 258% */

  letter-spacing: 0.7px;

  color: #ffffff;
`;
const CardMoneyLogo = styled.div`
  display: flex;
  padding-left: 83px;
  align-items: center;

  p {
    width: 175px;
    margin: 0px;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 41px;
    letter-spacing: 0.5px;
    color: #ffffff;
  }

  img {
    width: 33px;
    height: 33px;
  }
`;
