import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyles = createGlobalStyle`
  @import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0px;
    padding: 0px;
    font-family: Roboto, sans-serif;
    overflow-x: hidden;
  }
  a {
    color: ${theme.colors.blue};
    text-decoration: none;
  }
  form {
    width: 100%;
  }
`;

export default GlobalStyles;