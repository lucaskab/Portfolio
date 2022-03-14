import { Container, ContainerImage, BlurContainer, IntroContainer, ProfilePic, ProfileText, ProfileButton, DateContainer, TimeText, DayText, WifiPic} from './styles';
import img from '../../assets/background.png';
import ProfilePicture from '../../assets/ProfilePicture.jpg';
import wifi from '../../assets/wifi.png';
import { useEffect, useState } from 'react';
import { useChangeLanguage } from '../../hooks/language';
import { useNavigate } from 'react-router';

export function Login() {
    const { language } = useChangeLanguage();
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        getTime();
        const timerId = setInterval(getTime, 1000);
        return function cleanup() {
        clearInterval(timerId);
        };
    });

    function getTime() {
        var date= new Date();
        var hr = String(date.getHours());
        var m = String(date.getMinutes());

        if(date.getHours() < 10) {
            hr += "0";
        }
        if(date.getMinutes() < 10) {
            m += "0";
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
        navigate('/Desktop');
    }
    
    return(
        <Container>
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