import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { BiDrink } from 'react-icons/bi';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

export const NavLink = styled(Link)`
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 10px;
  right: 0;
  cursor: pointer;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);

  p {
    transform: translate(-175%, 100%);
    font-weight: 2rem;
    transform: translate(-50%, -15%);
  }
`;

export const Bars = styled(BiDrink)`
  margin-top: 1rem;
  font-size: 2rem;
  transform: translate(-50%, -15%);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
`;
