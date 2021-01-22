import React, {Fragment} from 'react'
import Button from '../../components/button'
import {useHistory} from 'react-router-dom';
import {ThemeProvider} from "styled-components";
import {theme} from '../../styledcomponents/button/buttonstyled'
import Container from '../../styledcomponents/container/containerstyled'
import GlobalStyle from '../../styledcomponents/global/global'

const themeNew = theme

const HomePage = () => {
    const history = useHistory();
    const buttonState = 'Exemplo de STATE'
    const buttonEffect = 'Exemplo de EFFECT'
      

    const handleClickExampleState = () => {
        history.push('/use-state')
    }

    const handleClickExampleEffect = () => {
        history.push('/use-effect')
    }


    return(
        <Fragment>
            <GlobalStyle />
            <div>
                <Container>
                    <div>
                        <Button handleClickButton={handleClickExampleState} buttonValue={buttonState} />
                    </div>
                    <div>
                        <ThemeProvider theme={themeNew}>
                            <Button  handleClickButton={handleClickExampleEffect} buttonValue={buttonEffect} />
                        </ThemeProvider>
                    </div>
                </Container>
            </div>
        </Fragment>




    )
}

export default HomePage