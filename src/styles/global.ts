import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Segoe UI';
        src: local('Segoe UI'), url(../fonts/Segoi-UI.ttf) format('truetype');
    }

    :root {
        --background: black;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
        position:relative;
        overflow-y: hidden;
        caret-color: transparent;
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        position:relative;
        overflow-y: hidden;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;