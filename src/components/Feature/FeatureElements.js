import styled from 'styled-components'
import FeatureImg from '../../images/featured.jpg'

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeatureImg});
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 2rem);
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  }
  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background:#fff;
  color: #000;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
  }

`
