import styled from "styled-components";
import { useState } from "react";
import Card from "../../desktop/Overview/Card";
import Button from "../../desktop/Button";

function NFTCard() {
  const [cardObj, setCardObj] = useState({
    url: "/assets/cards/black.png"
    // name: "Bronze Membership Card",
    // date: "2/30",
    // money: "50,000 LF"
  });
  const [selectObj, setSelectObj] = useState([
    { color: "#000000", url: "/assets/cards/black.png", state: false },
    { color: "#CEBE2D", url: "/assets/cards/gold.png", state: false },
    { color: "#CFCFCF", url: "/assets/cards/silver.png", state: false },
    { color: "#836600", url: "/assets/cards/bronze.png", state: true }
  ]);
  const border = `4px solid #FFFFFF;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);`;
  const clickEvent = e => {
    const obj = selectObj.map(ele => {
      if (ele.color === e.target.value) {
        setCardObj({ ...cardObj, url: ele.url });
        return { ...ele, state: true };
      } else {
        return { ...ele, state: false };
      }
    });
    setSelectObj(obj);
  };
  return (
    <NFTCardArea>
      <Header>
        <p>NFT Stake Select Card</p>
      </Header>
      <CardSelectArea>
        <Card obj={cardObj} />
        <SelectButtonArea>
          {selectObj.map((ele, key) => {
            return (
              <Select key={key} state={ele.state}>
                <SelectButton
                  onClick={clickEvent}
                  value={ele.color}
                  color={ele.color}
                />
              </Select>
            );
          })}
        </SelectButtonArea>
      </CardSelectArea>
      <ButtonArea>
        <Button str="Stake" />
      </ButtonArea>
    </NFTCardArea>
  );
}
export default NFTCard;
const NFTCardArea = styled.div`
  margin-top: 20px;
  display: flex;
  width: 90%;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  box-shadow: 0px 40px 80px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
`;

const Header = styled.div`
  height: 54px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #333333;
  border-radius: 18px 18px 0px 0px;
  p {
    margin: 0px;
    line-height: 53px;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    letter-spacing: 0.5px;
    color: #ffffff;
  }
`;
const CardSelectArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const SelectButtonArea = styled.div`
  height: 120px;
  margin-right: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const SelectButton = styled.button`
  height: 22px;
  width: 22px;
  border-width: 0px;
  border-radius: 50%;
  background: ${props => props.color || "black"};
`;
const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: ${props => (props.state ? "#FFFFFF" : "none")};
`;

const ButtonArea = styled.div`
  width: 128px;
  height: 55px;
  padding-bottom: 20%;
`;
