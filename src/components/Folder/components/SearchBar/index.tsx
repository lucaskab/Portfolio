import { Container, ArrowsContainer, HeaderIcon, SearchBarContainer, RightChevronIcon, SearchBarText } from "./styles";
import ArrowLeft from "../../../../assets/arrow-left.png";
import ArrowRight from "../../../../assets/arrow-right.png";
import Folder from "../../../../assets/folder.png";
import RightChevron from "../../../../assets/right-chevron.png";
import ArrowDown from "../../../../assets/arrow-down.png";

interface SearchBarProps {
    folderName: string;
}

export function SearchBar({folderName}: SearchBarProps) {
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
                <SearchBarText> This PC</SearchBarText>
                <RightChevronIcon src={RightChevron} alt="Right Icon"/>
                <SearchBarText> Desktop</SearchBarText>
                <RightChevronIcon src={RightChevron} alt="Right Icon"/>
                <SearchBarText>{folderName}</SearchBarText>
            </SearchBarContainer>
        </Container>
    )
}