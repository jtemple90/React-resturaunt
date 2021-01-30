import React from 'react'
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
  return (
    <div>
      <HeroContainer>
        <Navbar />
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
