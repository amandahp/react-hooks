import React, {Fragment, useState} from 'react'
import Button from '../../components/button'
import GlobalStyle from '../../styledcomponents/global/global';
import Container from '../../styledcomponents/container/containerstyled'
import {ThemeProvider} from "styled-components";
import {theme} from '../../styledcomponents/button/buttonstyled'



const themeNew = theme

const UseStateExample = () => {
    const [count, setCount] = useState(0);
    const buttonText = 'Clique aqui'
   

    const changeCount = () => {
        setCount(count + 1)

    }

    return (
        <Fragment>
            <GlobalStyle />
            <Container>
                <div>
                    <p>Você já clicou: {count} vezes</p>
                </div>
                <ThemeProvider theme={themeNew}>
                    <Button primary handleClickButton={changeCount} buttonValue={buttonText} />
                </ThemeProvider>
            </Container>


        </Fragment>
    )
}

export default UseStateExample

