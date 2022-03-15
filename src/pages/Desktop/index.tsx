import { Container, ImageBackground, WindowsButton, IconsContainer, Footer, Windows, RightContainer, Icon, BottomLanguage, TimeAndDate, BottomLanguageContainer } from './styles';
import WindowsLogo from '../../assets/windowsLogo.png';
import Wifi from '../../assets/wifi.png';
import WindowsBackground from '../../assets/WindowsBackground.jpg';
import { DesktopIcon } from '../../components/DesktopIcons';
import LinkedIn from '../../assets/linkedin.png';
import Github from '../../assets/github.png';
import CV from '../../assets/cv.png';
import GMAIL from '../../assets/gmail.png';
import CMD from '../../assets/cmd.png';
import NOTEPAD from '../../assets/notepad.png';
import FolderIcon from '../../assets/folder.png';
import { Hacked } from '../../components/Hacked';
import { Folder } from '../../components/Folder';
import { Gmail } from '../../components/Gmail';
import { useEffect, useState } from 'react';
import { Language } from '../../components/Language';
import { useChangeLanguage } from "../../hooks/language";
import { Notepad } from '../../components/Notepad';
import { Start } from '../../components/Start';


export function Desktop() {
    const [isHacked, setIsHacked] = useState(false);
    const [openPersonalProjects, setOpenPersonalProjects] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(false);
    const [folder, setFolder] = useState('');
    const [isNotepadOpen, setIsNotepadOpen] = useState(false);
    const [isStartOpen, setIsStartOpen] = useState(false);
    const [isGmailOpen, setIsGmailOpen] = useState(false);
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
        var hour = String(date.getHours()).padStart(2, '0');
        var minute = String(date.getMinutes()).padStart(2, '0');

        setTime(hour + ":" + minute);

        var correctMonth = Number(date.getMonth() + 1);
        var numberDay = String(date.getDate()).padStart(2, '0');
        var month = String(correctMonth).padStart(2, '0') ;
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
        console.log(name);
        setFolder(name);
    }
    function handleLanguage() {
        setOpenLanguage(!openLanguage);
    }

    function handleOpenNotepad() {
        setIsNotepadOpen(!isNotepadOpen);
    }

    function handleOpenStart() {
        setIsStartOpen(!isStartOpen);
    }

    function handleGmail(){
        setIsGmailOpen(isGmailOpen => !isGmailOpen);
    }

    return(
        <Container>
            <ImageBackground src={WindowsBackground} alt='Windows Wallpaper' />
            <IconsContainer>
                <DesktopIcon nameColor="White" handleClick={() => newTab('LinkedIn')} src={LinkedIn} alt='LinkedIn' name='LinkedIn'/>
                <DesktopIcon nameColor="White" handleClick={() => newTab('Github')} src={Github} alt='Github' name='Github' />
                <DesktopIcon nameColor="White" handleClick={() => newTab('CV')} src={CV} alt='CV' name='CV' />
                <DesktopIcon nameColor="White" handleClick={handleGmail} src={GMAIL} alt='Gmail' name='Gmail'/>
                <DesktopIcon nameColor="White" handleClick={HandleHacked} src={CMD} alt='CMD' name={language === 'en-us' ? "Don't click" : "Não clique"}/>
                <DesktopIcon nameColor="White" handleClick={() => openFolder(language === 'en-us' ? 'Personal Projects' : 'Projetos Pessoais')} src={FolderIcon} alt='Folder' name={language === 'en-us' ? "Personal Projects" : "Projetos Pessoais" }/>
                <DesktopIcon nameColor="White" handleClick={() => openFolder(language === 'en-us' ? 'Experiences' : 'Experiências')} src={FolderIcon} alt='Folder' name={language === 'en-us' ? "Experiences" : "Experiências"}/>
            </IconsContainer>

            <IconsContainer>
                <DesktopIcon nameColor="White" handleClick={() => handleOpenNotepad()} src={NOTEPAD} alt='Notepad' name={language === 'en-us' ? "About" : "Sobre"}/>
            </IconsContainer>

            {isHacked ? <Hacked /> : null}
            {openPersonalProjects ? <Folder openFolder={openFolder} folderName={folder}/> : null}
            {isNotepadOpen ? <Notepad handleOpen={handleOpenNotepad}/> : null}
            {isGmailOpen ? <Gmail handleOpenGmail={handleGmail}/> : null}

            <Footer>
                <WindowsButton onClick={handleOpenStart}>
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
            <Start 
                isOpened={isStartOpen} 
                handleOpenStart={handleOpenStart}
                handleOpenAbout={handleOpenNotepad}
                handleOpenExperiences={openFolder}
            />
        </Container>
    )
}