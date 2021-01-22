import React, {Fragment, useState, useEffect} from 'react'
import Button from '../../components/button'
import GlobalStyle from '../../styledcomponents/global/global';
import { themeContainer,  themeContainerSecond } from '../../styledcomponents/container/containerstyled'
import Container from '../../styledcomponents/container/containerstyled'
import {ThemeProvider} from "styled-components";
import {theme} from '../../styledcomponents/button/buttonstyled'

const themeCS =  themeContainerSecond
const themeC = themeContainer
const themeNew = theme


const UseEffectExample = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(null);
    const [text, setText] = useState('');
    const buttonText = 'Clique aqui'
   

    const changeCount = () => {
        setCount(count + 1)

    }


    useEffect(() => {
        if ( count%2 === 0){
            setColor('#58EFEC')
            setText('Esse número é divisível por dois')
        } else{
            setColor('#E85C90')
            setText('Esse número não é divisível por dois')
        }
    
    },[count])

    useEffect(() => {
        console.log(`Nesse useEffect o ${count} não muda`)
    },[]);

    useEffect(() => {
        console.log(`Nesse useEffect o ${count} muda`)
    });


    return (
        <Fragment>
            <GlobalStyle />
            <Container>
                <ThemeProvider theme={themeNew} >
                    <Button primary handleClickButton={changeCount} buttonValue={buttonText} />
                </ThemeProvider>
            </Container>
            <ThemeProvider theme={themeC}>
                <Container background={color}>
                    <div>
                        <p>Você já clicou: {count} vezes <br/> {text}</p>
                    </div>
                </Container>
            </ThemeProvider>
            <ThemeProvider theme={themeCS}>
                <Container>
                    <div>
                        <p>Esse exemplo foi criado com base em uma publicação da Dev Community. <br/> Gostou? Clique <a href="https://dev.to/francodalessio/understanding-react-s-useeffect-hook-lbg">AQUI</a> e entenda passo-a-passo.</p>
                    </div>
                </Container>
            </ThemeProvider>
        </Fragment>
    )
}

export default UseEffectExample