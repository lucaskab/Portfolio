import styled from 'styled-components';

interface NotepadProps {
    isMaximized: boolean;
}

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    justify-content: center;
    align-items: center;
    position: absolute;
`;

export const NotepadContainer = styled.div<NotepadProps>`
    display: flex;
    width: ${({isMaximized}) => isMaximized ? '100vw' : '80vw'};
    height: ${({isMaximized}) => isMaximized ? '94vh' : '75vh'};
    justify-content: center;
    align-items: center;
    background-color: white;
    position: ${({isMaximized}) => isMaximized ? 'absolute' : 'relative'};
    top: ${({isMaximized}) => isMaximized ? 0 : null};
    flex-direction: column;
`;

export const Header = styled.header`
    display: flex;
    width: 100%;
    height: 2rem;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    padding: 0 1rem;
`;

export const NameContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderIcon = styled.img`
    width: 1rem;
    height: 1rem;
    cursor: pointer;
`;

export const NotepadName = styled.span`
    font-family: 'arial';
    font-size: 0.8rem;
    color: black;
    margin-left: 1rem;
`;

export const ExitContainer = styled.div`
    display: flex;
    height: 100%;
    width: 3rem;
    align-items: center;
    justify-content: space-between;
`;



