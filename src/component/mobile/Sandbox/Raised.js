import styled from "styled-components";
import Slider from '@material-ui/core/Slider';
import {withStyles,makeStyles} from '@material-ui/core/styles';
// https://material-ui.com/components/slider/
function Rasied({setRasied}){
  const getSliderCount = (value)=>{
    console.log(value)
    setRasied(value)
  }

  const PrettoSlider = withStyles({
    root: {
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);
  return(
    <RasiedArea>
        <h2>RASIED</h2>
        <PrettoSlider
          defaultValue={75} 
         
          step={1}
          valueLabelDisplay="on"
        />
        
    </RasiedArea>
  )  
}
const RasiedArea = styled.div`
    width:75%;
    margin-bottom:20px;
    h2{
        margin-bottom:30px;
        font-family: ABeeZee;
        font-style: normal;
        font-weight: normal;
        font-size: 12.9969px;
        line-height: 44px;
        /* or 338% */

        letter-spacing: 2px;
        text-transform: uppercase;

        color: #666666;
    }
`

export default Rasied;