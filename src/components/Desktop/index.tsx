import { Container, ImageBackground, WindowsButton, IconsContainer, Footer, Windows, RightContainer, Icon, BottomLanguage, TimeAndDate, BottomLanguageContainer } from './styles';
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
import { Language } from '../Language';
import { useChangeLanguage } from "../../hooks/language";


export function Desktop() {
    const [isHacked, setIsHacked] = useState(false);
    const [openPersonalProjects, setOpenPersonalProjects] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(false);
    const [folder, setFolder] = useState('');
    const { language } = useChangeLanguage();

    const [time, setTime] = useState('');
    const [dateNow, setDateNow] = useState('');

    useEffect(() => {
        getTime();
        const timerId = setInterval(getTime, 1000);
        return function cleanup() {
        clearInterval(timerId);
        };
        
    }, []);

    function getTime() {
        var date= new Date();
        var hr = String(date.getHours());
        var m = String(date.getMinutes());
        
        if(date.getHours() < 10) {
            hr += "0";
        }
        if(date.getMinutes() < 10){
            m += "0";
        }
        setTime(hr + ":" + m);


        var correctMonth = Number(date.getMonth() + 1);
        var numberDay = date.getDate() < 10 ? '0'+ date.getDate() : date.getDate();
        var month = correctMonth < 10 ? '0'+ correctMonth : correctMonth ;
        var year = date.getFullYear();
        const lang = localStorage.getItem("languagePortfolio");

        if(lang === "en-us") {
            setDateNow(month + '/' + numberDay + '/' + year);
        }    
        else if (lang === "pt-br")  {
            setDateNow(numberDay + '/' + month + '/' + year);
        }
    }

    function HandleHacked(){
        setIsHacked(true);
        setTimeout(() => setIsHacked(false), 3000);
    }
    function newTab(website: string) {
        if(website === 'LinkedIn') window.open('https://www.linkedin.com/in/lucas-furini-42b144158/');
        else if (website === 'Github') window.open('https://www.github.com/lucaskab');
        else window.open('https://drive.google.com/file/d/13z09LML6Wqh3oC-7aUVLBFAuh-f3qBUS/view');
    }
    function openFolder(name: string){
        setOpenPersonalProjects(!openPersonalProjects);
        setFolder(name);
    }
    function handleLanguage() {
        setOpenLanguage(!openLanguage);
    }

    return(
        <Container>
            <ImageBackground src={WindowsBackground} alt='Windows Wallpaper' />
            <IconsContainer>
                <DesktopIcon nameColor="White" handleClick={() => newTab('LinkedIn')} src={LinkedIn} alt='LinkedIn' name='LinkedIn'/>
                <DesktopIcon nameColor="White" handleClick={() => newTab('Github')} src={Github} alt='Github' name='Github' />
                <DesktopIcon nameColor="White" handleClick={() => newTab('CV')} src={CV} alt='CV' name='CV' />
                <DesktopIcon nameColor="White" handleClick={HandleHacked} src={Gmail} alt='Gmail' name='Gmail'/>
                <DesktopIcon nameColor="White" handleClick={HandleHacked} src={CMD} alt='CMD' name={language === 'en-us' ? "Don't click" : "Não clique"}/>
                <DesktopIcon nameColor="White" handleClick={() => openFolder('Personal Projects')} src={FolderIcon} alt='Folder' name={language === 'en-us' ? "Personal Projects" : "Projetos Pessoais" }/>
                <DesktopIcon nameColor="White" handleClick={() => openFolder('Experiences')} src={FolderIcon} alt='Folder' name={language === 'en-us' ? "Experiences" : "Experiências"}/>
            </IconsContainer>
            
            {isHacked ? <Hacked /> : null}
            {openPersonalProjects ? <Folder openFolder={openFolder} folderName={folder}/> : null}
            <Footer>
                <WindowsButton>
                    <Windows src={WindowsLogo} alt='Initial' />
                </WindowsButton>
                <RightContainer>
                    <Icon src={Wifi} alt='Internet'/>
                    <BottomLanguageContainer>
                        <BottomLanguage onClick={handleLanguage}>{language === "en-us" ? 'ENG': 'POR'}</BottomLanguage>
                        <BottomLanguage onClick={handleLanguage}>{language === "en-us" ? 'EN-US' : 'PT-BR'}</BottomLanguage>
                    </BottomLanguageContainer>
                    <TimeAndDate>{time}<br/>{dateNow}</TimeAndDate>
                </RightContainer>
            </Footer>
            <Language isOpen={openLanguage} handleClick={handleLanguage} />
        </Container>
    )
}