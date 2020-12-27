import {useState} from "react";
import styled from "styled-components";
import ListHeader from "./ListHeader";

function List({data}) {
    const [listArr,setListArr]=useState(
        [{type:"Black",lf:"300,000 LF",apy:"30%",benefits:"SandBox Seed Round 100% refund of fees when using Exchange or OTCMarket Exchange, OTCMarket 10% share of exchange revenue"},
        {type:"Gold",lf:"150,000LF",apy:"10%",benefits:"SandBox 1 Round possible 50% refund of fees when using Exchange or OTCMarket Exchange, OTCMarket 1% share of exchange revenue"},
        {type:"Silver",lf:"150,000LF",apy:"5%",benefits:"SandBox 2 Round possible 50% refund of fees when using Exchange or OTCMarket"},
        {type:"Bronze",lf:"1,000LF",apy:"none",benefits:"SandBox Public Round possible "}]
        )
    return(
        <ListArea>
            <ListHeader />
            <ListEleArea>
                {listArr.map((ele,index)=>{
                    return(
                        <ListEle index={index} key={index}>
                            <Type>{ele.type}</Type><VerticalLine/>
                            <LF>{ele.lf}</LF><VerticalLine/>
                            <APY>{ele.apy}</APY><VerticalLine/>
                            <Benefits>
                                {ele.benefits}
                            </Benefits>
                        </ListEle>
                    )
                })}
                    
            </ListEleArea>
        </ListArea>
    )
}
export default List;
const ListArea = styled.div`
    display:flex;
    width:90%;
    flex-direction:column;
    align-items:center;
    background: #282828;
    box-shadow: 0px 40px 80px rgba(0, 0, 0, 0.25);
    border-radius:18px;
    margin-top:30px;
    margin-bottom:30px;
`
const ListEleArea = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    width:100%;
    height:100%;
    ont-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 44px;
    text-align:center;
    color: #FFFFFF;
`
const ListEle =styled.div`
    width:100%;
    height:25%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    background:${props=>(props.index%2!==0?"rgba(255, 255, 255, 0.05);":"")};
    border-radius : ${props=>props.index===3?"0px 0px 18px 18px;":"0px"};
`

const Type =styled.div`
    width:15%;
    display:flex;
    align-items:center;
    justify-content:center;
`
const LF =styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:25%;
    font-size: 10px;

`
const APY = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:10%;
    font-size: 10px;
`
const Benefits =styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:50%;
    font-size: 8px;
    line-height: 20px;
    letter-spacing: 1px;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.5;
`

const VerticalLine = styled.div`
    background: rgba(255, 255, 255, 0.07);
    height:100%;
    width:2px;
`