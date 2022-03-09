import { Container, FirstTextAbbreviation, FullLanguage, LanguageAbbreviation, LanguageContainer, SecondTextAbbreviation } from "./styles";
import { useChangeLanguage } from "../../hooks/language";

export function Language({isOpen, handleClick}) {
    const { isEnglish, changeLanguage } = useChangeLanguage();

    return(
        <Container isOpen={isOpen}>
            <LanguageContainer isOpen={isOpen} onClick={() => {handleClick(); changeLanguage('pt-br')}}>
                <LanguageAbbreviation>
                    <FirstTextAbbreviation>POR</FirstTextAbbreviation>
                    <SecondTextAbbreviation>PTB</SecondTextAbbreviation>
                </LanguageAbbreviation>
                <FullLanguage>Portuguese (Brazil) <br/> Portuguese keyboard</FullLanguage>
            </LanguageContainer>
            <LanguageContainer isOpen={isOpen} onClick={() => {handleClick(); changeLanguage('en-us')}}>
                <LanguageAbbreviation>
                    <FirstTextAbbreviation>ENG</FirstTextAbbreviation>
                    <SecondTextAbbreviation>USA</SecondTextAbbreviation>
                </LanguageAbbreviation>
                <FullLanguage>English (USA) <br/> American keyboard</FullLanguage>
            </LanguageContainer>
        </Container>    
    )
}