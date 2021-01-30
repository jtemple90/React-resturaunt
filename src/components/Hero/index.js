import React, {useState} from 'react'
import Sidebar from '../SideBar/index.js'
import Navbar from '../Navbar/Navbar'
import { 
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroBtn,
  HeroP
} from './HeroElements' ;

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <HeroContainer>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <HeroContent>
          <HeroItems>
            <HeroH1>Have a drink</HeroH1>
            <HeroP>With a twist!</HeroP>
            <HeroBtn>Order Here!</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </div>
  )
}

export default Hero
