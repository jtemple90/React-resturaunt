import React from 'react'
import {Bars, Nav, NavIcon, NavLink} from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <div>
      <Nav>
        <NavLink to='/'>Bitter & Twisted</NavLink>
        <NavIcon onClick={toggle}>
          <Bars />
          <p>Menu</p>
        </NavIcon>
      </Nav>
    </div>
  )
}

export default Navbar
