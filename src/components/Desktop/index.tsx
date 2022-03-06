import { Container, ImageBackground, WindowsButton, IconsContainer, Footer, Windows, RightContainer, Icon, Language, TimeAndDate } from './styles';
import WindowsLogo from '../../assets/windowsLogo.png';
import Wifi from '../../assets/wifi.png';
import WindowsBackground from '../../assets/WindowsBackground.jpg';
import { DesktopIcon } from '../DesktopIcons';
import LinkedIn from '../../assets/linkedin.png';
import Github from '../../assets/github.png';
import Gmail from '../../assets/gmail.png';
import CMD from '../../assets/cmd.png';
import FolderIcon from '../../assets/folder.png';
import { Hacked } from '../Hacked';
import { Folder } from '../Folder';
import { useState } from 'react';


export function Desktop() {
    const [isHacked, setIsHacked] = useState(false);
    const [openPersonalProjects, setOpenPersonalProjects] = useState(false);

    function HandleHacked(){
        setIsHacked(true);
        setTimeout(() => { setIsHacked(false); console.log("Was a joke :)")}, 3000);
    }
    function newTab(website: string) {
        if(website === 'LinkedIn') window.open('https://www.linkedin.com/in/lucas-furini-42b144158/');
        else window.open('https://www.github.com/lucaskab');
    }
    function openFolder(){
        setOpenPersonalProjects(!openPersonalProjects);
    }

    return(
        <Container>
            <ImageBackground src={WindowsBackground} alt='Windows Wallpaper' />
            <IconsContainer>
                <DesktopIcon nameColor="White" handleClick={() => newTab('LinkedIn')} src={LinkedIn} alt='LinkedIn' name='LinkedIn'/>
                <DesktopIcon nameColor="White" handleClick={() => newTab('Github')} src={Github} alt='Github' name='Github' />
                <DesktopIcon nameColor="White" handleClick={HandleHacked} src={Gmail} alt='Gmail' name='Gmail'/>
                <DesktopIcon nameColor="White" handleClick={HandleHacked} src={CMD} alt='CMD' name="Don't click"/>
                <DesktopIcon nameColor="White" handleClick={openFolder} src={FolderIcon} alt='Folder' name="Personal Projects"/>
                <DesktopIcon nameColor="White" handleClick={openFolder} src={FolderIcon} alt='Folder' name="Experiences"/>
            </IconsContainer>
            {isHacked ? <Hacked /> : null}
            {openPersonalProjects ? <Folder openFolder={openFolder} folderName="Personal Projects"/> : null}
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