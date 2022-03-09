import styled from 'styled-components';

interface LanguageProps {
    isOpen: boolean;
}

export const Container = styled.div<LanguageProps>`
    width: 18rem;
    height: 7rem;
    position: absolute;
    bottom: ${({isOpen}) => isOpen ? '3rem' : '-10rem'};
    right: 0rem;
    transition: bottom 0.5s ease-in;
    z-index: 0;
`;

export const LanguageContainer = styled.div<LanguageProps>`
    width: 100%;
    height: 50%;
    background: rgba(46,46,46,0.6);
    display: flex;
    flex-direction: row;
    align-items: center;
    opacity: ${({isOpen}) => isOpen ? 1 : 0};
    transition: opacity 0.5s ease-in;
    z-index: 1;
    cursor: pointer;

    :hover {
        background-color: rgba(115,115,115,0.8);
    }
`;

export const LanguageAbbreviation = styled.div`
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FirstTextAbbreviation = styled.strong`
    font-size: 1rem;
    font-family: 'arial', serif;
    color: white;
`;

export const SecondTextAbbreviation = styled.span`
    font-size: 1rem;
    font-family: 'arial', serif;
    color: white;
`;

export const FullLanguage = styled.span`
    font-size: 1rem;
    font-family: 'arial', serif;
    color: white;
    margin-left: 1rem;
`;