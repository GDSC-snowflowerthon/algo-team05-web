import { createGlobalStyle } from "styled-components";
// 필요한 전역 스타일 작성해주세요.
const GlobalStyle = createGlobalStyle`

*{
  font-family: 'Chakra petch';
 }

@font-face {
  font-family: "Chakra petch";
  font-style: normal;
  font-weight: 200;
  font-display: fallback;
  src:
  local('ChakraPetch'), 
  src: url("@/assets/fonts/ChakraPetch-Light.ttf") format("ttf");
}


body {
    margin: 0;
    font-size: 16px;
    font-famiy: "Chakra petch";
}

  button {
    outline: none;
    border: none;
    padding: 0;
    background-color: transparent;
    font-size: 16px;
  }

  input {
    outline: none;
    padding: 0;
    border: none;
    background-color: transparent;
    font-size: 16px;
  }

  table {
    border-collapse: collapse;
  }
  
  th,
  td {
    padding: 0.5rem;
    border: 1px solid black;
  }
  

`;

export default GlobalStyle;
