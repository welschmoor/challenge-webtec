
import { NavLink as NavLinkNS } from "react-router-dom"
import styled from "styled-components"


const Navbar = () => {
  return (
    <NavbarWrapper>
      <MainNav>

        <NavUL>
          <NavLI><NavLink to="/">Home</NavLink></NavLI>
          <NavLI><NavLink to="/about">About</NavLink></NavLI>
        </NavUL>
      </MainNav>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.header`
  background-color: ${p => p.theme.BG.main};
`

const MainNav = styled.nav`


`

const NavUL = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`

const NavLI = styled.li`
  
`

const NavLink = styled(NavLinkNS)`
  text-decoration: none;
`

export default Navbar