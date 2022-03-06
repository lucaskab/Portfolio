import styled from 'styled-components';

interface NameProps {
    nameColor: string;
}

export const Container = styled.div`
    z-index: 1;
    display: flex;
    width: 6rem;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    padding: 0.1rem;

    :hover {
        border: 1px solid grey;
        background: rgba(220,220,220,0.2);
        cursor: pointer;
    }
`;

export const Icon = styled.img`
    width: 3rem;
    height: 3rem;
`;

export const Name = styled.span<NameProps>`
    color: ${({nameColor}) => nameColor};
    font-size: 1rem;
    font-family: 'arial', serif;
    margin-top: 0.5rem;
    text-align: center;
`;