import { Container, TurnOnButtonDiv, WindowsContainer,WindowsTextContainer, WindowsImage, WindowsText, WindowsDots } from "./styles";
import {TurnOnButton} from '../TurnOnButton';
import Windows from '../../assets/windows.png';
import Typed from 'typed.js';
import { useEffect, useRef, useState } from "react";
import { useChangeScreen } from "../../hooks/login";
import { Login } from "../Login";
import { Desktop } from "../Desktop";

export function ProfilePicture() {
    const [turnOnButton, setTurnOnButton] = useState(true);
    const { changeScreen, showScreen, showDesktop } = useChangeScreen();

    function handleButton() {
        setTurnOnButton(!turnOnButton);
        setTimeout(() => {changeScreen()}, 3000);
    }

    return (
        <>
        {showDesktop ? <Desktop /> :
        <> 
        {showScreen ? <Login /> : 
            <Container>
            {turnOnButton ? <TurnOnButtonDiv isShowing={turnOnButton}  onClick={handleButton}>
                <TurnOnButton />  
            </TurnOnButtonDiv> :
            <WindowsContainer> 
                <WindowsImage src={Windows} alt='Windows' />
                <WindowsTextContainer>
                    <WindowsText>Carregando</WindowsText>
                    <WindowsDots></WindowsDots>
                    <WindowsDots></WindowsDots>
                    <WindowsDots></WindowsDots>
                </WindowsTextContainer>
            </WindowsContainer>
            }
        </Container>}
        </>}
        </>    
    )
}