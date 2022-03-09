import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    
`;

export const IconsContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    margin-top: 1rem;
`;

export const ImageBackground = styled.img`
    height: 100vh;
    width: 100vw;
    position: absolute;
`;

export const Footer = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    height: 6vh;
    width: 100%;
    background: rgba(0,0,0,1);
    align-items: center;
    justify-content: space-between;
    z-index: 1;
`;

export const WindowsButton = styled.div`
    width: 3rem;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    :hover {
        background: rgba(220,220,220,0.2);
    }
`;

export const Windows = styled.img`
    height: 1.5rem;
    width: 1.5rem;
`;

export const RightContainer = styled.div`
    width: auto;
    height: 6vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.img`
    height: 1rem;
    width: 1rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
`;

export const BottomLanguage = styled.span`
    font-size: 0.8rem;
    color: white;
    font-family: 'arial', serif;
    text-align: center;
    margin: 0 0.4rem;
    cursor: pointer;
`;

export const BottomLanguageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TimeAndDate = styled.span`
    font-size: 0.75rem;
    color: white;
    font-family: 'arial', serif;
    text-align: center;
    margin: 0 0.4rem;
`;