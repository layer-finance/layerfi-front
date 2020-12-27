import styled from "styled-components";

function SelectAProject(){
    return(
        <SelectAProjectArea>
            <h2>Select A Project</h2>
            <ProjectEles>
                <ProjectEle>
                    <img src="/assets/logo.png"/>
                    <p>layer fi</p>
                </ProjectEle>
            </ProjectEles>
        </SelectAProjectArea>
    )
}
const SelectAProjectArea = styled.div`
    margin-top:35px;
    width:75%;
    height:140px;
    background: #383838;
    box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.2);
    border-radius: 18px;
    h2{
        margin:0px;
        margin-left:15px;
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
const ProjectEles = styled.div`
    display:flex;
    display-direction:row;
`

const ProjectEle = styled.div`
    width:70px;
    margin-left:30px;
    display:flex;
    flex-direction: column;
    align-items: center;
    img{
        width:46px;
        height:40.5px;
    }
    p{
        margin:0px;
        margin-top:10px;
        font-family: ABeeZee;
        font-style: normal;
        font-weight: normal;
        font-size: 12.9969px;
        letter-spacing: 2px;
        text-transform: uppercase;

        color: #FFFFFF;
    }
`
export default SelectAProject;