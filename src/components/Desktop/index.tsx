import { Container, ImageBackground, WindowsButton, IconsContainer, Footer, Windows, RightContainer, Icon, Language, TimeAndDate } from './styles';
import WindowsLogo from '../../assets/windowsLogo.png';
import Wifi from '../../assets/wifi.png';
import WindowsBackground from '../../assets/WindowsBackground.jpg';
import { DesktopIcon } from '../DesktopIcons';
import LinkedIn from '../../assets/linkedin.png';
import Github from '../../assets/github.png';
import CV from '../../assets/cv.png';
import Gmail from '../../assets/gmail.png';
import CMD from '../../assets/cmd.png';
import FolderIcon from '../../assets/folder.png';
import { Hacked } from '../Hacked';
import { Folder } from '../Folder';
import { useEffect, useState } from 'react';


export function Desktop() {
    const [isHacked, setIsHacked] = useState(false);
    const [openPersonalProjects, setOpenPersonalProjects] = useState(false);
    const [folder, setFolder] = useState('');

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
        if(m < 10){
            m = "0" + m
        }
        if(s < 10){
            s = "0" + s
        }
        setTime(hr + ":" + m);

        var numberDay = date.getDate() < 10 ? '0'+ date.getDate() : date.getDate();
        var month = date.getMonth() < 10 ? '0'+ date.getMonth() : date.getMonth();
        var year = date.getFullYear();
        setDate(numberDay + '/' + month + '/' + year);
    }

    function HandleHacked(){
        setIsHacked(true);
        setTimeout(() => { setIsHacked(false); console.log("Was a joke :)")}, 3000);
    }
    function newTab(website: string) {
        if(website === 'LinkedIn') window.open('https://www.linkedin.com/in/lucas-furini-42b144158/');
        else if (website === 'Github') window.open('https://www.github.com/lucaskab');
        else window.open('https://drive.google.com/file/d/13z09LML6Wqh3oC-7aUVLBFAuh-f3qBUS/view');
    }
    function openFolder(name){
        setOpenPersonalProjects(!openPersonalProjects);
        setFolder(name);
    }

    return(
        <Container>
            <ImageBackground src={WindowsBackground} alt='Windows Wallpaper' />
            <IconsContainer>
                <DesktopIcon nameColor="White" handleClick={() => newTab('LinkedIn')} src={LinkedIn} alt='LinkedIn' name='LinkedIn'/>
                <DesktopIcon nameColor="White" handleClick={() => newTab('Github')} src={Github} alt='Github' name='Github' />
                <DesktopIcon nameColor="White" handleClick={() => newTab('CV')} src={CV} alt='CV' name='CV' />
                <DesktopIcon nameColor="White" handleClick={HandleHacked} src={Gmail} alt='Gmail' name='Gmail'/>
                <DesktopIcon nameColor="White" handleClick={HandleHacked} src={CMD} alt='CMD' name="Don't click"/>
                <DesktopIcon nameColor="White" handleClick={() => openFolder('Personal Projects')} src={FolderIcon} alt='Folder' name="Personal Projects"/>
                <DesktopIcon nameColor="White" handleClick={() => openFolder('Experiences')} src={FolderIcon} alt='Folder' name="Experiences"/>
            </IconsContainer>
            
            {isHacked ? <Hacked /> : null}
            {openPersonalProjects ? <Folder openFolder={openFolder} folderName={folder}/> : null}
            <Footer>
                <WindowsButton>
                    <Windows src={WindowsLogo} alt='Initial' />
                </WindowsButton>
                <RightContainer>
                    <Icon src={Wifi} alt='Internet'/>
                    <Icon src={WindowsLogo} alt='Internet'/>
                    <Language>POR <br/> PTB</Language>
                    <TimeAndDate>{time}<br/>{date}</TimeAndDate>
                </RightContainer>
            </Footer>
        </Container>
    )
}