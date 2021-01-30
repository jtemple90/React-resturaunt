import React from 'react'
import {Bars, Nav, NavIcon, NavLink} from './NavbarElements'

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to='/'>Bitter & Twisted</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </div>
  )
}

export default Navbar
