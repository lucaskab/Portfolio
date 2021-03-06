import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
`;

export const ContainerImage = styled.img`
    width: 100vw;
    height: 100vh;
    position: absolute;
    filter: blur(4px);
`;

export const BlurContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background: rgba(0,0,0,0.7);
`;

export const IntroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    flex-direction: column;
    margin-bottom: 10rem;
`;

export const ProfilePic = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 5rem;
`;

export const ProfileText = styled.span`
    font-size: 1.5rem;
    color: white;
    font-weight: bold;
    margin-top: 2rem;
`;

export const ProfileButton = styled.button`
    width: 18rem;
    height: 2.3rem;
    margin-top: 1rem;
    color: white;
    background: #00A2ED;
    border: none;
    font-weight: bold;
    font-size: 1rem;
`;

export const DateContainer = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    left: 3%;
    bottom: 3%;
    flex-direction: column;
`;

export const TimeText = styled.span`
    font-size: 7rem;
    color: white;
    margin-top: 2rem;
    font-family: 'arial', serif;
    @media (max-width: 720px) {
        font-size: 5rem;
    }
`;

export const DayText = styled.span`
    font-size: 3rem;
    color: white;
    font-weight: bold;
    font-family: 'arial', serif;
    @media (max-width: 720px) {
        font-size: 2rem;
    }
`;

export const WifiPic = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 3%;
    right: 2%;
`;

