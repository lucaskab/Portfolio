import { Container, HeaderIcon, HeaderTitle, PhotoContainer, PhotoHeader, PhotoHeaderLeftContainer, PhotoHeaderRightContainer } from './styles';
import Square from '../../assets/square.png';
import Close from '../../assets/close.png';


export function Photo() {
    return (
        <Container>
            <PhotoContainer>
                <PhotoHeader>
                    <PhotoHeaderLeftContainer>
                        <HeaderTitle>Fotos - Ecoleta</HeaderTitle>
                    </PhotoHeaderLeftContainer>
                    <PhotoHeaderRightContainer>
                        <HeaderIcon src={Square} alt='Maximize'/>
                        <HeaderIcon src={Close} alt='Close'/>
                    </PhotoHeaderRightContainer>
                </PhotoHeader>
            </PhotoContainer>    
        </Container>    
    )
}