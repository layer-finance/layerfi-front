import styled from 'styled-components';
import {useState} from "react"

function Sidebar({state,history}) {
    const [btnstate,setBtnState] = useState(false)
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
  
    const render = (btnstate)=>{
        if(!btnstate){
            return(
                <SidebarArea>
                    <SidebarBtn onClick={()=>{setBtnState(true)}}>
                    <img src="/assets/mobileMenu.png" style={{width:"12px",height:"9px"}}/>
                    </SidebarBtn>
                </SidebarArea>
                
            )
        }else{
            return(
                <SideBlur>
                    <SideBar>
                        <Logo>
                            <img src="/assets/logo.png" alt="로고"/>
                            <h1>Layer Finance</h1>
                            <SidebarCloseBtn onClick={()=>{setBtnState(false)}}>
                                <img src="/assets/closeBtn.png" style={{width:"8px",height:"9px"}}/>
                            </SidebarCloseBtn>
                        </Logo>
                        {mainmenuRender(state,mainmenuName)}
                    </SideBar>
                </SideBlur>
            )
        }
    }
    return  render(btnstate)
}
export default Sidebar;
const SidebarArea= styled.div`
    position:absolute;
    top: 10px;
    left:18px;
    width:38px;
    height:38px;
`
const SidebarBtn = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    width:30px;
    height:30px;
    padding:0px;
    border:0px;
    border-radius:100%;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
`
const SidebarCloseBtn = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    width:38px;
    height:38px;
    border-radius:100%;
    border : 0px;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
    padding:0px;
`
const SideBlur = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:1000;
    background-color:rgba(0,0,0,0.6);
`
const SideBar = styled.div`
    position:absolute;
    top: 0px;
    left:0px;
    display:flex ;
    flex-direction:column;
    width: 326px;
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
    width: 326px;
    height: 80px;
    background: linear-gradient(57.59deg, rgba(0, 0, 0, 0.0001) 7.09%, rgba(0, 0, 0, 0.4) 92.91%), #181818;
    align-items: center;
    justify-content:space-around;
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