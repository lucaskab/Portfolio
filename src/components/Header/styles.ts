import styled from 'styled-components';

export const Container = styled.header`
    width: 85%;
    margin: 0 auto;
    padding: 2rem 1rem 4rem;
    display: flex;
    justify-content: end;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 32rem;
`;

export const ContentButton = styled.a`

`;

export const ButtonText = styled.span`
    font-size: 1.2rem;
    height: 3rem;
    text-align: center;
    margin-bottom: 0.2rem;
    color: white;

    &:hover {
        border-bottom: 0.16rem solid black;
        cursor: pointer;
    }
`;