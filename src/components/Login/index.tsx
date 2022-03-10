import { Container, ContainerImage, BlurContainer, IntroContainer, ProfilePic, ProfileText, ProfileButton, DateContainer, TimeText, DayText, WifiPic} from './styles';
import { useChangeScreen } from "../../hooks/login";
import img from '../../assets/background.png';
import ProfilePicture from '../../assets/ProfilePicture.jpg';
import wifi from '../../assets/wifi.png';
import { useEffect, useState } from 'react';
import { useChangeLanguage } from '../../hooks/language';

export function Login() {
    const { showScreen, changeDesktop } = useChangeScreen();
    const { language } = useChangeLanguage();
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    
    useEffect(() => {
        getTime();
        const timerId = setInterval(getTime, 1000);
        return function cleanup() {
        clearInterval(timerId);
        };
    }, []);

    function getTime() {
        var date= new Date();
        var hr = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        if(m < 10)
        {
            m = "0" + m
        }
        if(s < 10)
        {
            s = "0" + s
        }
        setTime(hr + ":" + m);

        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var daysPortuguese = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var monthsPortuguese = ['Janeira', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        var numberDay = date.getDate();
        var day = language === 'en-us' ? days[date.getDay()] : daysPortuguese[date.getDay()];
        var month = language === 'en-us' ?  months[date.getMonth()] : monthsPortuguese[date.getMonth()];
        setDate(day + ', '+ numberDay + ' ' + month);
    }

    function handleDesktop() {
        changeDesktop();
    }
    
    return(
        <Container isShowing={showScreen}>
            <ContainerImage src={img} alt='Background Image' />
            <BlurContainer />
            <IntroContainer>
                <ProfilePic src={ProfilePicture} alt='Profile Picture'/>
                <ProfileText>{language === 'en-us' ? 'Welcome to my Portfolio' : 'Bem-vindo ao meu Portfólio'}</ProfileText>
                <ProfileButton onClick={handleDesktop}>{language === 'en-us' ? 'Join' : 'Entrar' }</ProfileButton>
            </IntroContainer>
            <DateContainer>
                <TimeText>{time}</TimeText>
                <DayText>{date}</DayText>
            </DateContainer>
            <WifiPic src={wifi} alt='Wifi Signal' />
        </Container>
    )
}