import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: green;
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PhotoContainer = styled.div`
    width: 70vw;
    height: 90vh;
    background: white;
    z-index: 11;
    position: relative;
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
`;


