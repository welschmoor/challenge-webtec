
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
    main: "grey",
    main2: "#e2e2e2",
  },
  BTN: {
    main: "#6565e0",
    mainDisabled: "hsl(240, 66.48648648648648%, 73.725490196078425%)",
    currentPage: "#6565e0",
    
    text: "white",
    textDisabled: "#bebdbd",
  }
}

export const darkTheme = {
  BG: {
    main: "black",
    main2: "black",
  }
}