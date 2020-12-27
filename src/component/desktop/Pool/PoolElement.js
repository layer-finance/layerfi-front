import styled from "styled-components";
import Button from "../Button"

function PoolElement({poolArr,approveClick}){
    return(
        <PoolEleArea>
            {
                poolArr.map((ele,index)=>(
                <LineForArea>
                <PoolEle key={index}>
                    <Pool>
                        <PoolRound><img src="/assets/PoolIcon.png"/></PoolRound>
                        <PoolDetail>
                            <h2>{ele.Pool}</h2>
                            <p>{ele.detail}</p>
                        </PoolDetail>
                    </Pool><VerticalLine/>
                    <Stake>{ele.Stake}</Stake><VerticalLine/>
                    <APY>{ele.APY}</APY><VerticalLine/>
                    <Earned>
                        {ele.Earned}
                        <ButtonArea>
                            <Button  str="Harvest"/>
                        </ButtonArea>
                    </Earned><VerticalLine/>
                    <Approve>
                        {ele.Approve}
                        <ButtonArea>
                            <Button onClick={approveClick} str="Approve"/>
                        </ButtonArea>
                    </Approve><VerticalLine/>
                </PoolEle>
                <HorizontalLine/>
                </LineForArea>
                ))
            }

        </PoolEleArea>
    )
}

export default PoolElement;
const LineForArea = styled.div`
    width:100%;
    height:91px;
    display:flex;
    flex-direction:column;
    align-items:center;

`
const PoolEleArea = styled.div`
    width:100%;
    height:100%;
    overflow-y:auto;
    ont-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 1px;

    color: #FFFFFF;

`
const PoolEle = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    width:100%;
    height: 87px;
    justify-content:space-between;
`
const Pool =styled.div`
    display:flex;
    align-items:center;
    width:27.31%;
`
const PoolRound = styled.div`
    width:58px;
    height:58px;
    margin-left :30px;
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
const Stake = styled.div`
    display:flex;
    align-items : center;
    justify-content:center;
    width:18.01%;
    
    line-height: 43px;
`
const APY = styled.div`
    display:flex;
    align-items : center;
    justify-content:center;
    width:14.26%;
    line-height: 43px;
`
const Earned = styled.div`
    display:flex;
    flex-direction:column;
    align-items : center;
    justify-content:center;
    width:20.6%;
    line-height: 43px;
`
const Approve = styled.div`
    display:flex;
    flex-direction:column;
    align-items : center;
    justify-content:center;
    width:19.82%;
    line-height: 43px;
`
const ButtonArea = styled.div`
    height:32px;
`
const HorizontalLine = styled.div`
    background: rgba(255, 255, 255, 0.07);
    width : 95%;
    height:2px;
`
const VerticalLine = styled.div`
    background: rgba(255, 255, 255, 0.07);
    height:100%;
    width:2px;
`


