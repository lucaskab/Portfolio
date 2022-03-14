import { Container, NotepadContainer, Header, NameContainer, HeaderIcon, NotepadName, ExitContainer,} from "./styles";
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
            </NotepadContainer>
        </Container>
    )
}