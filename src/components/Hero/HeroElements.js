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