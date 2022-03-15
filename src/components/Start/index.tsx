import { Container, Icon, ItemContainer, ItemText, BottomContainer } from "./styles";
import Menu from '../../assets/menu.png';
import NOTEPAD from '../../assets/notepad.png';
import Folder from '../../assets/folder.png';
import ProfilePic from '../../assets/ProfilePicture.jpg';
import Off from '../../assets/off.png';
import { useChangeLanguage } from '../../hooks/language'; 
import { useNavigate } from 'react-router-dom';

export interface StartProps {
    isOpened: boolean;
    handleOpenStart (): void;
    handleOpenAbout (): void;
    handleOpenExperiences (name: string): void;
}

export function Start({isOpened, handleOpenStart, handleOpenAbout, handleOpenExperiences}: StartProps) {
    const { language } = useChangeLanguage();
    const navigate = useNavigate();

    function handleShutDown() {
        navigate('/Loading', {state: 'shutdown'});
    }

    function handleOpenWindowAndCloseStart(window: string){
        if(window === 'Experiences'){
            handleOpenExperiences('Experiences');
        } else {
            handleOpenAbout();
        }
        handleOpenStart();
    }

    return(
        <Container isOpened={isOpened}>
                <ItemContainer>
                    <Icon src={Menu} alt='Teste' />
                    <ItemText>{language === 'en-us' ? 'Start' : 'Iniciar'}</ItemText>
                </ItemContainer>
                <BottomContainer>
                    <ItemContainer>
                        <Icon src={ProfilePic} alt='Teste' />
                        <ItemText>Lucas Furini</ItemText>
                    </ItemContainer>
                    <ItemContainer onClick={() => handleOpenWindowAndCloseStart('About')}>
                        <Icon src={NOTEPAD} alt='Teste' />
                        <ItemText>{language === 'en-us' ? 'About' : 'Sobre'}</ItemText>
                    </ItemContainer>
                    <ItemContainer onClick={() => handleOpenWindowAndCloseStart('Experiences')}>
                        <Icon src={Folder} alt='Teste' />
                        <ItemText>{language === 'en-us' ? 'Experiences' : 'Experiências'}</ItemText>
                    </ItemContainer>
                    <ItemContainer onClick={handleShutDown}>
                        <Icon src={Off} alt='Shut Down' />
                        <ItemText>{language === 'en-us' ? 'Shut Down' : 'Desligar'}</ItemText>
                    </ItemContainer>
                </BottomContainer>
        </Container>
    )
}