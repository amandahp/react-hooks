import styled from "styled-components";



const ButtonStyled = styled.button`
    background: ${props => props.theme.main};
    box-shadow: 5px 2.5px 2.5px black;
    border: none;
    border-radius: 3px;
    color: ${props => props.theme.color};
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem 1.5rem;
    cursor: pointer;
    &:focus{
        outline: none;

    &:hover{
        background: ${props => props.theme.mainhover};
        color: ${props => props.theme.colorhover};
    }


;`

ButtonStyled.defaultProps = {
    theme: {
      main: "#58EFEC",
      color: "#E85C90",
      mainhover: "#E85C90",
      colorhover: "#58EFEC",
    }
}

export const theme = {
    main: "#E85C90",
    color: "#58EFEC",
    mainhover: "#58EFEC",
    colorhover: "#E85C90",

};  
export default ButtonStyled




