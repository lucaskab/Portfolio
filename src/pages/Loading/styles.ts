import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const WindowsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const WindowsTextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    
    > div {
        width: 8px;
        height: 8px;
        margin: 10px 3px 0px;
        border-radius: 50%;
        background-color: white;
        opacity: 1;
        animation: bouncing-loader 0.6s infinite alternate;
    }

    @keyframes bouncing-loader {
        to {
            opacity: 0.1;
            transform: translateY(-12px);
        }
    }

    > div:nth-child(3) {
        animation-delay: 0.2s;
    }

    > div:nth-child(4) {
        animation-delay: 0.4s;
    }
`;

export const WindowsImage = styled.img`
    width: 200px;
    height: auto;
`;

export const WindowsText = styled.span`
    font-size: 1.5rem;
    color: white;
`;

export const WindowsDots = styled.div`
`;

export const CmdRights = styled.span`
    font-size: 0.8rem;
    color: rgb(255,255,255);
    position: absolute;
    left: 0.2rem;
    top: 0.6rem;
    font-family: 'Consolas';
`;

export const CmdText = styled.span`
    font-size: 0.8rem;
    color: rgb(255,255,255);
    position: absolute;
    left: 0.2rem;
    top: 3.5rem;
    font-family: 'Consolas';
`;

export const Cmd = styled.img`
    width: 100%;
    height: auto;
    position: absolute;
`;