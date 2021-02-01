import React from 'react';
import { 
  ProductsContainer,
  ProductsHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductBtn,
  ProductInfo
} from './ProductsElements';

const Products = ({heading, data}) => {
  return (
    <div>
      <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
          <ProductWrapper>
            {data.map((product, index) => {
              return (
                <ProductCard key={index}>
                  <ProductImg src={product.img} alt={product.alt} />
                  <ProductInfo>
                    <ProductTitle>{product.name}</ProductTitle>
                    <ProductDesc>{product.desc}</ProductDesc>
                    <ProductPrice>{product.price}</ProductPrice>
                    <ProductBtn>{product.button}</ProductBtn>
                  </ProductInfo>
                </ProductCard>
              )
            })}
          </ProductWrapper>
      </ProductsContainer>
    </div>
  )
}

export default Products
