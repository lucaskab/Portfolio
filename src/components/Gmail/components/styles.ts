import styled from 'styled-components';

export const ResponseContainer = styled.div`
    width: 20rem;
    height: 7rem;
    position: absolute;
    z-index: 999;
    border: 1px solid #d3d3d3;
    border-radius: 0.9rem ;
`;

export const ResponseHeader = styled.div`
    width: 100%;
    height: 2rem;
    border-radius: 0.8rem 0.8rem 0 0;
    background-color: #404040;
    padding: 0.3rem 0.8rem;
`;

export const ResponseTitle = styled.span`
    font-size: 1rem;
    color: white;
    font-weight: bold;
`;

export const ResponseContentContainer = styled.div`
    width: 100%;
    height: calc(100% - 2rem);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ResponseText = styled.span`
    font-size: 0.8rem;
    color: #404040;
    font-weight: bold;
`;

export const Icon = styled.img`
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
`;