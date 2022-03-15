import { Container, NotepadContainer, Header, NameContainer, HeaderIcon, NotepadName, ExitContainer, NotepadTextContainer, AboutDescription, Footer, FooterTextContainer, FooterText } from "./styles";
import MaximizeIcon from '../../assets/square.png';
import MinimizeIcon from '../../assets/2-squares.png';
import ExitIcon from '../../assets/close.png';
import NOTEPAD from '../../assets/notepad.png';
import { useChangeLanguage } from "../../hooks/language";
import { useState } from "react";

interface NotepadProps {
    handleOpen(): void;
}


export function Notepad ({ handleOpen}: NotepadProps) {
    const [isNotepadMaximized, setIsNotepadMaximized] = useState(false);
    const { language } = useChangeLanguage();
    const headerName = language === 'en-us' ? 'About - Notepad' : 'Sobre - Bloco de Notas';

    function maximizeNotepad() {
        setIsNotepadMaximized(!isNotepadMaximized);
    }

    return (
        <Container >
            <NotepadContainer isMaximized={isNotepadMaximized}>
                <Header>
                    <NameContainer>
                        <HeaderIcon src={NOTEPAD} alt="Notepad Icon"/>
                        <NotepadName>{headerName}</NotepadName>
                    </NameContainer>    
                    <ExitContainer>
                        {isNotepadMaximized ? 
                            <HeaderIcon onClick={maximizeNotepad} src={MinimizeIcon} alt="Minimize Icon" /> 
                            : 
                            <HeaderIcon onClick={maximizeNotepad} src={MaximizeIcon} alt="Maximize Icon" />}
                                <HeaderIcon src={ExitIcon} alt="Exit Icon" onClick={handleOpen}/>
                    </ExitContainer>
                </Header>
                <NotepadTextContainer>
                    <AboutDescription>
                        Hi! I’m Lucas Furini, a Brazilian Bachelor of Computer Science and a React Native Developer currently working at Pecege Educational Institution.
                    </AboutDescription>
                    
                    <AboutDescription>
                        I am passionate about continuous delivery of a human, better, with fewer flaws
                        and easy to use software that will be loved by the end-user. And, I love doing that
                        with JavaScript, React, React Native and NodeJs.
                    </AboutDescription>

                    <AboutDescription>
                        Languages --{'>'} JavaScript, TypeScript, Java, C
                    </AboutDescription>

                    <AboutDescription>
                        Frontend --{'>'} React Native, ReactJS, Responsive Websites, HTML, CSS, Flexbox, JQuery 
                    </AboutDescription>

                    <AboutDescription>
                        Backend --{'>'} Node.js, MySQL, Postgres, Puppeteer, MongoDB, WatermelonDB, Redis
                    </AboutDescription>

                    <AboutDescription>
                        Others --{'>'} Git, Docker, AWS, Heroku, Vercel
                    </AboutDescription>
                </NotepadTextContainer>
                
                <Footer>
                    <FooterTextContainer>
                        <FooterText>Ln 13, Col 1</FooterText>
                    </FooterTextContainer>
                    <FooterTextContainer>
                         <FooterText>100%</FooterText>   
                    </FooterTextContainer>
                    <FooterTextContainer>
                         <FooterText>Windows (CRLF)</FooterText>
                    </FooterTextContainer>
                    <FooterTextContainer>
                         <FooterText>UTF-8</FooterText>
                    </FooterTextContainer>
                </Footer>        
            </NotepadContainer>
        </Container>
    )
}