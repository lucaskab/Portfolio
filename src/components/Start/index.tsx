import { Container, Icon, ItemContainer, ItemText, StartContainer, BottomContainer } from "./styles";
import Menu from '../../assets/menu.png';
import NOTEPAD from '../../assets/notepad.png';
import Folder from '../../assets/folder.png';
import ProfilePic from '../../assets/ProfilePicture.jpg';

export interface StartProps {
    isOpened: boolean;
    handleOpenStart? (): void;
}

export function Start({isOpened}: StartProps) {
    return(
        <Container>
            <StartContainer isOpened={isOpened}>
                <ItemContainer>
                    <Icon src={Menu} alt='Teste' />
                    <ItemText>Iniciar</ItemText>
                </ItemContainer>
                <BottomContainer>
                    <ItemContainer>
                        <Icon src={ProfilePic} alt='Teste' />
                        <ItemText>Lucas Furini</ItemText>
                    </ItemContainer>
                    <ItemContainer>
                        <Icon src={NOTEPAD} alt='Teste' />
                        <ItemText>Notepad</ItemText>
                    </ItemContainer>
                    <ItemContainer>
                        <Icon src={Folder} alt='Teste' />
                        <ItemText>Experiências</ItemText>
                    </ItemContainer>
                </BottomContainer>
            </StartContainer>
        </Container>
    )
}