import React from 'react';
import ButtonStyled from '../styledcomponents/button/buttonstyled'

const Button = ({handleClickButton, buttonValue}) => {
    return(
        <ButtonStyled onClick={() => handleClickButton()}>
            {buttonValue}
        </ButtonStyled>

    )
}

export default Button