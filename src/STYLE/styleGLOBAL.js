
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
    color: ${p => p.theme.TEXT.grey};
  }
`

export const lightTheme = {
  TEXT: {
    grey: "#3b3b3b",
    title: "",
  },
  BG: {
    main: "white",
    main2: "white",
  },
  BTN: {
    main: "#979797",
    mainDisabled: "#e4e4e4",
    currentPage: "#eb9c9c",

    text: "white",
    textDisabled: "#bebdbd",
  },
  MARGIN: {
    mar10: "10px",
    mar20: "20px",
  },
  MISC: {
    separator: "#d8cdcd",
  },
}



export const darkTheme = {
  TEXT: {
    grey: "#ffffff",
    title: "#ddd0d0",
  },
  BG: {
    main: "#4d4d4d",
    main2: "#4b4b4b",
  },
  BTN: {
    main: "#979797",
    mainDisabled: "#e4e4e4",
    currentPage: "#eb9c9c",

    text: "white",
    textDisabled: "#bebdbd",
  },
  MARGIN: {
    mar10: "10px",
    mar20: "20px",
  },
  MISC: {
    separator: "#d8cdcd",
  },
}