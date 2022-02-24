
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Page404 from "./pages/Page404"

import Navbar from "./components/Navbar"

function App() {

  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path='/about' element={<Home />} />
        <Route path='/' element={<About />} exact />
        <Route path='*' element={<Page404 />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;
