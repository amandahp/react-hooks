import React, {Fragment, useState} from 'react'
import Button from '../../components/button'
import GlobalStyle from '../../styledcomponents/global/global';
import { themeContainer,  themeContainerSecond } from '../../styledcomponents/container/containerstyled'
import Container from '../../styledcomponents/container/containerstyled'
import {ThemeProvider} from "styled-components";
import {theme} from '../../styledcomponents/button/buttonstyled'

const themeCS =  themeContainerSecond
const themeC = themeContainer
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
                <ThemeProvider theme={themeNew}>
                    <Button primary handleClickButton={changeCount} buttonValue={buttonText} />
                </ThemeProvider>
            </Container>
            <ThemeProvider theme={themeC}>
                <Container>
                    <div>
                        <p>Você já clicou: {count} vezes</p>
                    </div>
                </Container>
            </ThemeProvider>
            <ThemeProvider theme={themeCS}>
                <Container>
                    <div>
                        <p>Esse exemplo foi criado com base na documentação do React. <br/> Gostou? Clique <a href="https://pt-br.reactjs.org/docs/hooks-state.html">AQUI</a> e entenda passo-a-passo.</p>
                    </div>
                </Container>
            </ThemeProvider>
        </Fragment>
    )
}

export default UseStateExample

