import { Container, ArrowsContainer, HeaderIcon, SearchBarContainer, RightChevronIcon, SearchBarText } from "./styles";
import { useChangeLanguage } from "../../../../hooks/language";
import ArrowLeft from "../../../../assets/arrow-left.png";
import ArrowRight from "../../../../assets/arrow-right.png";
import Folder from "../../../../assets/folder.png";
import RightChevron from "../../../../assets/right-chevron.png";
import ArrowDown from "../../../../assets/arrow-down.png";

interface SearchBarProps {
    folderName: string;
}

export function SearchBar({folderName}: SearchBarProps) {
    const { language } = useChangeLanguage();

    return (
        <Container>
            <ArrowsContainer>
                <HeaderIcon src={ArrowLeft} alt="Arrow Left Icon"/>
                <HeaderIcon src={ArrowRight} alt="Arrow Right Icon"/>
                <RightChevronIcon src={ArrowDown} alt="Arrow Down"/>
            </ArrowsContainer>
            <SearchBarContainer>
                <HeaderIcon src={Folder} alt="Folder Icon"/>
                <RightChevronIcon src={RightChevron} alt="Right Icon"/>
                <SearchBarText>{language === "en-us" ? 'This PC' : 'Este Computador'}</SearchBarText>
                <RightChevronIcon src={RightChevron} alt="Right Icon"/>
                <SearchBarText>{language === "en-us" ? 'Desktop' : 'Área de Trabalho'}</SearchBarText>
                <RightChevronIcon src={RightChevron} alt="Right Icon"/>
                <SearchBarText>{folderName}</SearchBarText>
            </SearchBarContainer>
        </Container>
    )
}