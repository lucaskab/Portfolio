import { Container, WindowsContainer,WindowsTextContainer, WindowsImage, WindowsText, WindowsDots } from './styles';
import Windows from '../../assets/windows.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useChangeLanguage } from '../../hooks/language';

export function Loading() {
    const navigate = useNavigate();
    const { language } = useChangeLanguage();

    useEffect(() => {
        setTimeout(() => {
            navigate('/Login');
        }, 3000);
    });

    return (
        <Container>
            <WindowsContainer> 
                <WindowsImage src={Windows} alt='Windows' />
                <WindowsTextContainer>
                    <WindowsText>{language === 'en-us' ? 'Loading' : 'Carregando'}</WindowsText>
                    <WindowsDots></WindowsDots>
                    <WindowsDots></WindowsDots>
                    <WindowsDots></WindowsDots>
                </WindowsTextContainer>
            </WindowsContainer>
        </Container>
    )
}