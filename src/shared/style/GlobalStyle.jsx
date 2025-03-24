import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

  body {
		box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: #333;
  }
`;

export default GlobalStyle;
