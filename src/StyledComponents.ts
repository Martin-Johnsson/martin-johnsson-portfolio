import { MenuItem } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const PortfolioHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100vw;
  text-align: center;
  top: 20vh;
  left: 50vw;
  margin-top: 10vh;
`;

export const BigHeading = styled.h1`
  font-size: 2vw;
  display: block;
  margin: 1vw;
  font-weight: 800;
  width: 100vw;
  color: #ffff;
`;

export const MediumHeading = styled.h2`
  font-size: 2vw;

  display: block;
  margin: 1vw;
  font-weight: 800;
  width: 100vw;
  color: #ffff;
`;

export const ThirdSizeHeading = styled.h3`
  font-size: 2vw;
  display: block;
  margin: 1vw;
  font-weight: 600;
  width: 30vw;
  color: #ffff;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const BodyText = styled.h3`
  font-size: 1vw;
  display: block;
  margin: 1vw;
  font-weight: 600;
  width: 30vw;
  color: #ffff;
`;

export const ToProjectsButton = styled.button`
  background-color: #313031;
  color: #ffffff;
  border: 0.2vw solid #ffffff;
  text-align: center;
  margin-top: 10vh;
  padding: 7vh 9vw 7vh 9vw;
  font-size: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  &:hover {
    background-color: purple;
    cursor: pointer;
  }
`;

export const StyledHeaderMenuItem = styled(MenuItem)`
  background-color: inherit;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: #ffff;
    text-decoration: underline;
  }
`;

export const HeaderName = styled.h1`
  font-size: 2vw;
  font-weight: 800;
  color: #ffff;
`;

export const ContactSection = styled.section`
  text-align: center;
  border: 0.2vw solid white;
  width: 90vw;
  height: 100vh;
`;
