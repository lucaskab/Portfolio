import { Container, ContainerImage, BlurContainer, IntroContainer, ProfilePic, ProfileText, ProfileButton, DateContainer, TimeText, DayText, WifiPic} from './styles';
import { useChangeScreen } from "../../hooks/login";
import img from '../../assets/background.png';
import ProfilePicture from '../../assets/ProfilePicture.jpg';
import wifi from '../../assets/wifi.png';
import { useEffect, useState } from 'react';

export function Login() {
    const { showScreen, changeDesktop } = useChangeScreen();
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
        var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var numberDay = date.getDate();
        var day = days[ date.getDay() ];
        var month = months[ date.getMonth() ];
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
                <ProfileText>Welcome to my Portfolio</ProfileText>
                <ProfileButton onClick={handleDesktop}>Join</ProfileButton>
            </IntroContainer>
            <DateContainer>
                <TimeText>{time}</TimeText>
                <DayText>{date}</DayText>
            </DateContainer>
            <WifiPic src={wifi} alt='Wifi Signal' />
        </Container>
    )
}