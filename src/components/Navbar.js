
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Navbar = () => {
  return (
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
    </ul>
  )
}

export default Navbar