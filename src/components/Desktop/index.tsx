import { Container, ImageBackground, WindowsButton, IconsContainer, Footer, Windows, RightContainer, Icon, Language, TimeAndDate } from './styles';
import WindowsLogo from '../../assets/windowsLogo.png';
import Wifi from '../../assets/wifi.png';
import WindowsBackground from '../../assets/WindowsBackground.jpg';
import { DesktopIcon } from '../DesktopIcons';
import LinkedIn from '../../assets/linkedin.png';
import Github from '../../assets/github.png';
import Gmail from '../../assets/gmail.png';
import CMD from '../../assets/cmd.png';


export function Desktop() {
    return(
        <Container>
            <ImageBackground src={WindowsBackground} alt='Windows Wallpaper' />
            <IconsContainer>
                <DesktopIcon src={LinkedIn} alt='LinkedIn' name='LinkedIn'/>
                <DesktopIcon src={Github} alt='Github' name='Github'/>
                <DesktopIcon src={Gmail} alt='Gmail' name='Gmail'/>
                <DesktopIcon src={CMD} alt='CMD' name='CMD'/>
            </IconsContainer>
            <Footer>
                <WindowsButton>
                    <Windows src={WindowsLogo} alt='Initial' />
                </WindowsButton>
                <RightContainer>
                    <Icon src={Wifi} alt='Internet'/>
                    <Icon src={WindowsLogo} alt='Internet'/>
                    <Language>POR <br/> PTB</Language>
                    <TimeAndDate>00:30 <br/> 02/03/2022</TimeAndDate>
                </RightContainer>
            </Footer>
        </Container>
    )
}