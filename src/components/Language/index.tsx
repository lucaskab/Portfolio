import { Container, FirstTextAbbreviation, FullLanguage, LanguageAbbreviation, LanguageContainer, SecondTextAbbreviation } from "./styles";
import { useChangeLanguage } from "../../hooks/language";
import { text, textLanguageProps } from './translation';

interface LanguageProps {
    isOpen: boolean;
    handleClick(): void;
}

export function Language({isOpen, handleClick}: LanguageProps) {
    const { language, changeLanguage } = useChangeLanguage();
    const index = language as keyof textLanguageProps;

    return(
        <Container isOpen={isOpen}>
            <LanguageContainer isOpen={isOpen} onClick={() => {handleClick(); changeLanguage('pt-br')}}>
                <LanguageAbbreviation>
                    <FirstTextAbbreviation>POR</FirstTextAbbreviation>
                    <SecondTextAbbreviation>PTB</SecondTextAbbreviation>
                </LanguageAbbreviation>
                <FullLanguage>{text[index][0]}  <br/> {text[index][1]}</FullLanguage>
            </LanguageContainer>
            <LanguageContainer isOpen={isOpen} onClick={() => {handleClick(); changeLanguage('en-us')}}>
                <LanguageAbbreviation>
                    <FirstTextAbbreviation>ENG</FirstTextAbbreviation>
                    <SecondTextAbbreviation>USA</SecondTextAbbreviation>
                </LanguageAbbreviation>
                <FullLanguage>{text[index][2]} <br/> {text[index][3]}</FullLanguage>
            </LanguageContainer>
        </Container>    
    )
}