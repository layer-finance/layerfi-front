import styled from 'styled-components';
import Header from '../../component/mobile/Header';
import Sidebar from '../../component/mobile/Sidebar';
import StakeApy from '../../component/mobile/Pool/StakeApy'
import EarnedApprove from '../../component/mobile/Pool/EarnedApprove'
import {useState} from 'react'
// eslint-disable-next-line no-restricted-globals
function PoolMb({history}) {
    const [poolArr, serPoolArr] = useState([
        {Pool:"Layer Fi",
        detail:"LF /ETH",
        Stake:"88,654 LF",
        APY:"780%",
        Earned:"32,000 LF",
        Approve:"32,000LP"},
        {Pool:"Stable Fi",
        detail:"USDT / ETH",
        Stake:"213 USDT",
        APY:"24%",
        Earned:"213 USDT",
        Approve:"32,000LP"},
        
    ])
    const approve = (e)=>{
        history.push("/NET Stake")
    }
    return(
        <PoolArea>
            <Header str="Pool" />
            <Sidebar state="Pool" history={history} />
            <Main>
                {poolArr.map((ele,index)=>{
                    return(
                    <PoolEleArea key={index}>
                        <Pool>
                            <PoolRound><img src="/assets/PoolIcon.png"/></PoolRound>
                            <PoolDetail>
                                <h2>{ele.Pool}</h2>
                                <p>{ele.detail}</p>
                            </PoolDetail>
                        </Pool>
                        <StakeApy stake={ele.Stake} apy={ele.APY}/>
                        <EarnedApprove earned={ele.Earned} approve={ele.Approve}/>
                    </PoolEleArea>
                    )
                })}
            </Main>
        </PoolArea>
    )
}
export default PoolMb;

const PoolArea = styled.div`
    position: absolute;
    left: -0.73%;
    right: 0.73%;
    top: 0%;
    bottom: 0%;
    overflow-y:auto;
    background: rgba(0, 0, 0, 0.75);
`
const Main = styled.div`
    position:absolute;
    left:0px;
    top:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
    
    display: flex;
    width: 100%;
`
const PoolEleArea = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-between;
    width:90%;
    border-radius: 18px;
    background: #282828;
    box-shadow: 0px 40px 80px rgba(0, 0, 0, 0.25);
    margin-top:20px;
`
const Pool =styled.div`
    display:flex;
    align-items:center;
    width:80%;
    padding:20px;
`
const PoolRound = styled.div`
    width:58px;
    height:58px;
    border-radius:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background: #383838;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2);
`
const PoolDetail =styled.div`
    display:flex;
    flex-direction:column;
    
    margin-left :25px;
    h2{
        margin:0px;
        font-family: ABeeZee;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 1px;

        color: #FFFFFF;
    }
    p{
        margin:0px;
        margin-top:10px;
        font-family: ABeeZee;
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 13px;
        /* identical to box height */

        letter-spacing: 1.5px;
        text-transform: uppercase;

        color: #888888;
    }
`