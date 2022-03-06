import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    //background: red;
    margin-top: 2rem;
    border-top: 1px solid #D8D7D7;
    padding-top: 0.5rem;
`;

export const ArrowsContainer = styled.div`
    width: 5rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
`;

export const HeaderIcon = styled.img`
    width: 1rem;
    height: 1rem;

    :hover {
        
    }
`;

export const SearchBarContainer = styled.div`
    width: 60%;
    height: 80%;
    border: 1px solid #D8D7D7;
    align-self: center;
    margin-left: 3rem;
    display: flex;
    align-items: center;
    padding: 1rem;
`;

export const RightChevronIcon = styled.img`
    width: 0.5rem;
    height: 0.5rem;
    margin-left: 0.5rem;
`;

export const SearchBarText = styled.span`
    font-family: 'arial';
    font-size: 0.8rem;
    color: black;
    margin-left: 0.2rem;
`;