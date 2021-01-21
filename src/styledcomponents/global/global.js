import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    background: #A0A6BE;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    animation: pulse 5s infinite;
    @keyframes pulse {
        0% {
            background-color: #A0A6BE;
        }
        100% {
            background-color: #C481A7;
        }
    }
  }
`;
 
export default GlobalStyle;