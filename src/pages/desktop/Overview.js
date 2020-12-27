import styled from "styled-components";
import { useState } from 'react';
import Header from '../../component/desktop/Header';
import Sidebar from '../../component/desktop/Sidebar';
import Card from '../../component/desktop/Overview/Card'
import Chart from '../../component/desktop/Overview/Chart'


function Overview({history}){
    const [totalValue,setTotalValue] = useState(21.836);
    const [cardObj,setCardObj] = useState({
        url:'/assets/card.png',
        name:"Silver Membership Card",
        date:"2/30",
        money:"50,000 LF"
    })

    const Data = [{x:"BLACK",y:18},{x:"GOLD",y:23},{x:"SILVER",y:28},{x:"BRONZE",y:33}]
    
    

    return(
        <OverviewArea>
            <Header />
            <Sidebar state="Overview" history={history}/>
            <Main>
                <Infos>
                    <TotalValue>
                        <MainH2>
                            <h2>Total Value</h2>
                        </MainH2>
                        <MoneyImg src="/assets/totalvalue_img.png"/>
                        <DollarTotalvalue>
                            <p><img id="dollar" src="assets/$.png"/> {totalValue}</p>
                        </DollarTotalvalue>
                    </TotalValue>
                    <TokenInformation>
                        <MainH2>
                            <h2>Token Information</h2>
                        </MainH2>
                        <img src="/assets/chart.png"/>
                    </TokenInformation>
                </Infos>
                <CardIssueAmount>
                    <MainH2>
                        <h2>Card Issue Amount</h2>
                    </MainH2>
                    <Card obj={cardObj} width={380} height={250}/>
                    <Chart Data={Data}/>
                </CardIssueAmount>
            </Main>
        </OverviewArea>
    )
}

export default Overview;

const OverviewArea = styled.div`
    position: absolute;
    left: -0.73%;
    right: 0.73%;
    top: 0%;
    bottom: 0%;
    background: rgba(0, 0, 0, 0.75);
`
const Main = styled.div`
    position: absolute;
    display: flex;
    top : 120px;
    left: 400px;
    height: 75%;
    width: 60%;
`
const Infos = styled.div`
    display:flex;
    width:50%;
    margin-right:33px;
    height:100%;
    flex-direction:column;
    flex: auto;
`
const TotalValue = styled.div`
    display:flex;
    width:100%;
    flex-direction : column;
    align-items:center;
    height: 228px;
    border-radius: 18px;
    background: #282828;
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.25);
`
const MainH2 = styled.div`
    width:100%;
    h2{
        margin-top:8px;
        padding-left:23px;
        font-family: ABeeZee;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 44px;
        /* or 183% */
        color: #FFFFFF;
    }
`

const MoneyImg = styled.img`
    width:64px;
    height:55px;
`
const DollarTotalvalue = styled.div`
    p{
        margin:0px;
        margin-top:19px;
        margin-bottom:32px;
        font-family: ABeeZee;
        font-style: normal;
        font-weight: normal;
        font-size: 56.9191px;
        line-height: 52px;
        /* identical to box height, or 92% */

        text-align: center;
        letter-spacing: 0.5px;

        color: #FFFFFF;
    }
`
const TokenInformation = styled.div`
    display:flex;
    align-content:space-between;
    align-items:center;
    flex-direction : column;

    height:100%;
    margin-top:18px;
    border-radius: 18px;
    background: #282828;
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.25);
`
const CardIssueAmount = styled.div`
    display:flex;
    width:50%;
    justify-content:space-between;
    align-items:center;
    flex-direction : column;

    height:100%;
    border-radius: 18px;
    background: #282828;
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.25);
`

