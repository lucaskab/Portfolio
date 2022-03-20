import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    justify-content: center;
    align-items: center;
    position: absolute;
`;

export const GmailContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 60%;
    width: 45%;
    background: white;
    border-radius: 0.7rem 0.7rem 0 0;
    position: relative;

    @media(max-width: 767px) {
        height: 50%;
        width: 80%;  
    }
`;

export const Header = styled.header`
    display: flex;
    width: 100%;
    height: 2rem;
    background-color: #404040;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 0;
    padding: 0 0.5rem;
    border-radius: 0.5rem 0.5rem 0 0;
`;

export const NameContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
`;

export const FolderName = styled.span`
    font-family: 'arial';
    font-size: 0.8rem;
    font-weight: bold;
    color: white;
    margin-left: 1rem;
`;

export const ExitContainer = styled.div`
    display: flex;
    height: 100%;
    width: 2rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0.2rem;
`;

export const FormContainer = styled.form`
    width: 100%;
    height: calc(100% - 2rem);
    margin-top: 2rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;

export const InputContainer = styled.div`
    width: 100%;
    height: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-bottom: 1.2rem;
`;

export const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #dedede;
    padding-left: 0.5rem;
    outline: none;
    caret-color: black;
`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 52%;
    padding: 0.5rem;
    border: none;
    border-bottom: 1px solid #dedede;
    outline: none;
    caret-color: black;
`;

export const SendButton = styled.input`
    width: 8rem;
    height: 2rem;
    background: #1A73E8;
    color: white;
    outline: none;
    border: none;
    border-radius: 0.3rem;
    margin-top: 0.5rem;
    -webkit-box-shadow: 5px 10px 21px 2px rgba(0,0,0,0.3); 
    box-shadow: 5px 10px 21px 2px rgba(0,0,0,0.3);
    cursor: pointer;

    :active {
        opacity: 0.7;
    }

    @media(max-width: 767px) {
        margin-top: 2rem;  
    }
`;

export const ErrorMessage = styled.span`
    font-size: 0.8rem;
    color: red;
`;
