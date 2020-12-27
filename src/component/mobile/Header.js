import styled from 'styled-components'
function Header({str}) {
    return(
        <HeaderArea>
            {str}
        </HeaderArea>
    )
}
export default Header;
const HeaderArea= styled.div`
    width:100%;
    height:50px;
    font-family: ABeeZee;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    text-align: center;
    letter-spacing: 1px;
    background : #282828;
    color: #FFFFFF;
    display: flex;
    align-items:center;
    justify-content:center;
`