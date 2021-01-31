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
  ProductBtn
} from './ProductsElements';

const Products = ({heading, data}) => {
  return (
    <div>
      {/* <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
          <ProductWrapper>
            {data.map((product, index) => {
              return (
                <ProductCard key={index}>
                  <ProductImg src={product.img} alt={product.alt} />
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductPrice>{product.price}</ProductPrice>
                  <ProductBtn>{product.button}</ProductBtn>
                </ProductCard>
              )
            })}
          </ProductWrapper>
      </ProductsContainer> */}
    </div>
  )
}

export default Products
