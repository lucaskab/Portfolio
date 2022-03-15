import { Container, WindowsContainer,WindowsTextContainer, WindowsImage, WindowsText, WindowsDots } from './styles';
import Windows from '../../assets/windows.png';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useChangeLanguage } from '../../hooks/language';

export function Loading() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { language } = useChangeLanguage();
    const isLanguageEnglish = language === 'en-us' ? true : false;
    var loadingText = '';

    if(state === 'start' && isLanguageEnglish){
        loadingText = 'Starting';
    } else if(state === 'start' && !isLanguageEnglish){
        loadingText = 'Carregando';
    } else if (state === 'shutdown' && isLanguageEnglish) {
        loadingText = 'Shutting Down';
    } else {
        loadingText = 'Desligando';
    }

    useEffect(() => {
        setTimeout(() => {
            if(state === 'start'){
                navigate('/Login');
            }
            else navigate('/');
        }, 3000);
    });

    return (
        <Container>
            <WindowsContainer> 
                <WindowsImage src={Windows} alt='Windows' />
                <WindowsTextContainer>
                    <WindowsText>{loadingText}</WindowsText>
                    <WindowsDots></WindowsDots>
                    <WindowsDots></WindowsDots>
                    <WindowsDots></WindowsDots>
                </WindowsTextContainer>
            </WindowsContainer>
        </Container>
    )
}