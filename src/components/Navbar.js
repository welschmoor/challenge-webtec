
import { NavLink as NavLinkNS, Link } from "react-router-dom"
import styled from "styled-components"
import { SeparatorLine } from '../STYLE/styleMISC'

const Navbar = () => {
  return (
    <>
      <NavbarWrapper>
        <NavLink to="/">
          <MainLogo >
            ART<br />
            INSTITVTE<br />
            CHICAGO
          </MainLogo>
        </NavLink>
        <MainNav>
          <NavUL>
            <NavLI><NavLink to="/">Home</NavLink></NavLI>
            <NavLI><NavLink to="/about">About</NavLink></NavLI>
          </NavUL>
        </MainNav>
      </NavbarWrapper>
      <SeparatorLine />
    </>
  )
}

const MainLogo = styled.div`
  font-size: 0.58rem;
  padding: 40px 4px 4px 4px;
  border: 1px solid  ${p => p.theme.TEXT.grey};
  color: ${p => p.theme.TEXT.grey};
  cursor: pointer;
  letter-spacing: 3px;
  line-height: 1.3;
`

const NavbarWrapper = styled.header`
  background-color: ${p => p.theme.BG.main};
  display: flex;
  align-items: center;
  gap: 40px;
  height: 140px;
  padding-left: ${p => p.theme.MARGIN.mar10};
`

const MainNav = styled.nav`

`

const NavUL = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
`

const NavLI = styled.li`
  
`

const NavLink = styled(NavLinkNS)`
  text-decoration: none;
  color: ${p => p.theme.TEXT.grey};
  font-size: 0.9rem;
`

export default Navbar