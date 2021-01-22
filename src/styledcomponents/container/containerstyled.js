import styled from "styled-components";

const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: ${props => props.theme.marginTop};
    text-align: center;
    color: #0D41E1;
    background-color: ${props => props.background};
    width: ${props => props.width};


    
;`

Container.defaultProps = {
    theme: {
        marginTop: "40vh",
    }
} 

export const themeContainer = {
    marginTop: "2vh",



}; 

export const themeContainerSecond = {
    marginTop: "20vh",
    

};

export default Container