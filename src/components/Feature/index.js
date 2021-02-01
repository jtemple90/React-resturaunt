import React from 'react'
import { 
  FeatureContainer,
  FeatureButton
} from './FeatureElements'

const Feature = () => {
  return (
    <div>
      <FeatureContainer>
        <h1>Featured Cocktail</h1>
        <p>Blackberry Citrus Summer</p>
      <FeatureButton>Order Now</FeatureButton>
      </FeatureContainer>
    </div>
  )
}

export default Feature
