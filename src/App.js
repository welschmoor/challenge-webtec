
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Page404 from "./pages/Page404"

import Navbar from "./components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"


import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from './STYLE/styleGLOBAL'


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.getItem("chicagoDarkMode")) {
      return localStorage.getItem("chicagoDarkMode") === "false"
    }
    return true
  })
  const changeDarkMode = () => {
    setDarkMode(p => {
      window.localStorage.setItem("chicagoDarkMode", p)

      return !p
    })
  }


  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Navbar changeDarkMode={changeDarkMode} ></Navbar>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}


export default App;
