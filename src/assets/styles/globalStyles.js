import { createGlobalStyle }  from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 80px 85px 0;
        font-family: 'Montserrat';
        background-color: #cfcfe645;

        @media (max-width: 768px) {
            padding: 20px 25px 0;
        }
    }

    button {
        padding: 0;
        cursor: pointer;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    .headline-1 {
        font-size: 50px;
      }
    
    .headline-2 {
    font-size: 45px;
    }
`;

export default GlobalStyle;