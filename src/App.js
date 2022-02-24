
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Page404 from "./pages/Page404"

import Navbar from "./components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"

import { GlobalStyle } from './STYLE/styleGLOBAL'


function App() {


  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Page404 />} />
      </Routes>

    </BrowserRouter>
  )
}


export default App;
