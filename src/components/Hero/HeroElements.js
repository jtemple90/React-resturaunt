import styled from 'styled-components';
import BgImg from '../../images/background-image.jpg';

export const HeroContainer = styled.div`
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.1)),
    url(${BgImg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh, -80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw -80px) / 2);
`

export const HeroItems  = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color:fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`

export const HeroH1 = styled.h1`
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  font-size: clamp(1.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  padding-right: 10px;
  box-shadow: 3px 5px #cefa02;
  letter-spacing: 2px;
  color: #fff;
`;

export const HeroP = styled.p`
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  margin-bottom: 2rem;
  color: #fff;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.1s ease-in-out;

  &:hover {
    background: #cefa02;
    transition: 0.1s ease-in-out;
    cursor: pointer;
    color: #000;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
  }
`;

