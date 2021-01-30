import React from 'react'
import { IconBase } from 'react-icons/lib'

const Sidebar = () => {
  return (
    <SidebarContainer>
    <Icon>
      <CloseIcon/>
    </Icon>
      <sidebarMenu>
        <SidebarLink to='/'>Drinks</SidebarLink>
        <SidebarLink to='/'>Food</SidebarLink>
        
        <SidebarLink to='/'>About Us</SidebarLink>
        <SidebarLink to='/'>Contact Us</SidebarLink>
      </sidebarMenu>
      <SidebarBtn>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SidebarBtn>
    </SidebarContainer>
  )
}

export default Sidebar
