import styled from 'styled-components'
import {XYPlot,
    HorizontalGridLines,
    XAxis,
    YAxis,
    VerticalBarSeries, } from 'react-vis';

function Chart({Data,width,height}){
    return(
        <ChartArea>
            <XYPlot
                xType="ordinal"
                width={width}
                height={height}
            >
                <HorizontalGridLines/>
                <XAxis tickLabelAngle={-45} />
                <YAxis />
                <VerticalBarSeries data={Data} color="#ba4fb9"/>
            </XYPlot>
        </ChartArea>
        
    )
}

export default Chart;

const ChartArea = styled.div`
    display :flex;
    align-items:center;
    justify-content:center;
    margin-bottom:20px;
    width:100%;
    height:250px;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 21px;
    /* or 265% */

    text-align: center;
    letter-spacing: 0.628539px;
    text-transform: uppercase;

    color: #BBBBBB;
    text{
        color: #FFFFFF;
    }
`