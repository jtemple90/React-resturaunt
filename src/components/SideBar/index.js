import React from 'react'
import { IconBase } from 'react-icons/lib'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SidebarBtnWrap
} from './SideBarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
      <CloseIcon/>
    </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Drinks</SidebarLink>
        <SidebarLink to='/'>Food</SidebarLink>
        <SidebarLink to='/'>About Us</SidebarLink>
        <SidebarLink to='/'>Contact Us</SidebarLink>
      </SidebarMenu>
      <SidebarBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SidebarBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar
