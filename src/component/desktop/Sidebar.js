import styled from 'styled-components';
import { useState } from 'react';

function Sidebar({state, history}){
    const mainmenuName = ["Overview","My Wallet","Pool","Exchange","NFT Stake","Sandbox"];
    const mainmenuRender = (state,nameArr)=>{
        return (
            <MainMenu>
                {nameArr.map((ele,key)=>
                   (
                        (ele===state)?
                        <Active onClick={()=>{if(ele==="Overview"){history.push("/");}else{history.push("/"+ele);}}}
                        key = {key}>
                            <img src={"/assets/"+ele+"_sidebar_1.png"} />
                            <p>{ele}</p>
                        </Active>:
                        <NonActive onClick={()=>{if(ele==="Overview"){history.push("/");}else{history.push("/"+ele);}}}
                        key = {key}>
                            <img src={"/assets/"+ele+"_sidebar_0.png"} />
                            <p>{ele}</p>
                        </NonActive>
                    ))
                }
            </MainMenu>
        )
    }

    return(
        <SideBar>
            <Logo>
                <img src="/assets/logo.png" alt="로고"/>
                <h1>Layer Finance</h1>
            </Logo>
            {mainmenuRender(state,mainmenuName)}
        </SideBar>
    )
}

export default Sidebar;

const SideBar =styled.div`
    position:absolute;
    top: 0px;
    left:0px;
    display:flex;
    flex-direction:column;
    width: 334px;
    height: 100%;
    left: 0px;
    top: 0px;
    background: #282828;
    box-shadow: 0px 20px 70px rgba(0, 0, 0, 0.1);
`
const Logo = styled.div`
    display: flex;
    left : 0px;
    top : 0px;
    width: 334px;
    height: 80px;
    background: linear-gradient(57.59deg, rgba(0, 0, 0, 0.0001) 7.09%, rgba(0, 0, 0, 0.4) 92.91%), #181818;
    align-items: center;
    justify-content:center;
    h1 {
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        color: #FFFFFF;
        margin: 0px;
    }
    img{
        margin-right : 25px;
        width: 46px;
        height: 46px;
    }
`
const MainMenu = styled.div`
    margin-top:20px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const Active = styled.div`
    display : flex;
    align-items: center;
    margin-top :10px;
    margin-left : 33px;
    width: 264px;
    height: 60px;
    background: #1F7FB6;
    border-radius: 18px;
    img{
        width:34px;
        height:34px;
        margin-left:23.34px;
        margin-right:32.2px;
    }
    p{
        font-family: Cairo;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 34px;
        /* identical to box height */
        color: #FFFFFF;
    }
`
const NonActive = styled.div`
    display : flex;
    align-items: center;
    margin-top :10px;
    margin-left : 33px;
    width: 264px;
    height: 60px;
    img{
        width:34px;
        height:34px;
        margin-left:23.34px;
        margin-right:32.2px;
    }
    p{
        font-family: Cairo;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 34px;
        color: #969BA0;
    }
`