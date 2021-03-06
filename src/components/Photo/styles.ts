import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PhotoContainer = styled.div`
    width: 70vw;
    height: 85vh;
    min-height: 85vh;
    background: white;
    z-index: 11;
    position: relative;
    border: 1px solid black;

    @media(max-width: 767px) {
        width: 80vw;
        overflow-y: scroll;
    }
`;

export const PhotoHeader = styled.div`
    width: 100%;
    height: 2rem;
    position: absolute;
    background: #D8D7D7;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const PhotoHeaderLeftContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const PhotoHeaderRightContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

export const HeaderTitle = styled.span`
    font-family: 'arial', serif;
    font-size: 0.8rem;
    padding-left: 0.8rem;
`;

export const HeaderIcon = styled.img`
    width: 1rem;
    height: 1rem;
    margin-right: 0.8rem;
    cursor: pointer;
`;

export const ProjectTitle = styled.h1`
    font-family: 'arial', serif;
    font-size: 4rem;
    margin-top: 2.5rem;
    text-align: center;
`;

export const DataContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 1rem 2rem;
    @media(max-width: 767px) {
        flex-direction: column;
    }
`;

export const PhotoOfApp = styled.img`
    width: 25rem;
    height: 17rem;
    margin-top: 3rem;
    padding: 1rem;

    @media(max-width: 767px) {
        width: 20rem;
        height: 14rem;
        margin-top: 1rem;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;

    @media(max-width: 767px) {
        padding: 1rem 0.6rem;
        text-align: justify;
    }
`;

export const Description = styled.span`
    font-family: 'arial', serif;
    font-size: 1rem;
    margin-bottom: 1rem;
`;

export const Link = styled.strong`
    font-family: 'arial', serif;
    font-size: 1rem;
    margin-top: 2rem;
`;

export const TextToGithub = styled.a`
    font-family: 'arial', serif;
    font-size: 1rem;
    margin-top: 0.7rem;
    color: #0645AD;
`;

export const BottomContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 3rem;

    @media(max-width: 767px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const BottomTitle = styled.h1`
    font-family: 'arial', serif;
    font-size: 1rem;
    font-weight: bold;
`;

export const IconsContainer = styled.div`
    display: flex;
    @media(max-width: 767px) {
        margin-top: 1rem;  
    }
`;

export const Icon = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 0.5rem;
`;

export const DateText = styled.span`
    font-family: 'arial', serif;
    font-size: 1rem;
    font-weight: bold;
    margin-left: 0.5rem;

    @media(max-width: 767px) {
        margin-top: 0.5rem;
        margin-left: 0;  
    }
`;


