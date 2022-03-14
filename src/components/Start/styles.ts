import styled from 'styled-components';
import { StartProps } from './index';


export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    position: absolute;
    z-index: 1;
`;

export const StartContainer = styled.div<StartProps>`
    width: 15rem;
    height:70vh;
    background: #28242c;
    position: absolute;
    bottom: ${({isOpened}) => isOpened ? '6vh' : '-64vh'};
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;

    transition: bottom 0.15s ease-in;
`;

export const BottomContainer = styled.div``;

export const ItemContainer = styled.div`
    width: 100%;
    height: 3rem;
    padding: 1rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;

    :hover {
        background: #535254;
    }
`;

export const Icon = styled.img`
    height: 1rem;
    width: 1rem;
`;

export const ItemText = styled.h1`
    font-size: 1rem;
    color: white;
    font-family: 'arial', serif;
    font-weight: 400;
    margin-left: 1rem;
`;