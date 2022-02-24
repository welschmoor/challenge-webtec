
import { withTheme } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 125%;
    font-family: Arial;
  }
`

export const lightTheme = {
  BG: {
    main: "white",
  }
}

export const darkTheme = {
  BG: {
    main: "black",
  }
}