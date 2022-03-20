import styled from 'styled-components';

export const Container = styled.div`
    width: 15rem;
    height: 100%;
    border-right: 1px solid #D8D7D7;
    display: flex;
    flex-direction: column;
    padding-top: 1.5rem;
`;

export const Item = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0.3rem 0 0.3rem 2rem;
    align-items: center;

    :hover {
        background: #E3E5FB;
    }

    @media(max-width: 767px) {
        padding: 0.3rem 0 0.3rem 1rem;  
        margin-right: 1rem;          
    }
`;

export const Icon = styled.img`
    width: 1rem;
    height: 1rem;

    :hover {
        
    }
`;

export const IconText = styled.span`
    font-family: 'arial';
    font-size: 0.8rem;
    color: black;
    margin-left: 0.5rem;
`;