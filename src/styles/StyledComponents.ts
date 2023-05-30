import { MenuItem } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const PortfolioHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-size: 1.7vw;
  display: block;
  margin: 1vw;
  font-weight: 600;
  width: 100vw;
  color: #ffff;
`;

export const ThirdSizeHeading = styled.h3`
  font-size: 2vw;
  display: block;
  margin: 1vw;
  font-weight: 800;
  width: 30vw;
  color: #ffff;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #313031;
  }
`;

export const BodyText = styled.h3`
  font-size: 1.5vw;
  display: block;
  margin-top: 1vw;
  margin-left: 1vw;

  font-weight: 600;
  width: 30vw;
  color: #ffff;
`;

export const SmallBodyText = styled.h4`
  font-size: 1vw;
  display: block;
  margin-left: 2vw;
  margin-top: 0.5vh;
  margin-bottom: 2vw;

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
  padding: 8vh 4vw;
  font-size: 3vw;
  font-weight: 800;
  &:hover {
    border: 0.2vw solid #15181a;
    background-color: #313031;
    cursor: pointer;
  }
  &:active {
    background-color: #313031;
    border: none;
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
  &:hover {
    color: #743a8a;
  }
`;

export const ContactSection = styled.section`
  text-align: center;
  border: 1px solid black;
  height: 100vh;
  margin-top: 10vh;
  margin-bottom: 10vh;
  width: 100vw;
`;

export const FormHeading = styled.h1`
  font-size: 3vw;
  display: block;
  margin-top: 4vh;
  margin-bottom: 4vh;
  font-weight: 800;
  color: #ffff;
`;

export const ModalHeading = styled.h1`
  font-size: 3vw;
  font-weight: 800;
  color: #ffff;
`;

export const ModalSecondHeading = styled.h2`
  font-size: 2vw;
  font-weight: 800;
  color: #ffff;
`;

export const ModalText = styled.span`
  font-size: 1vw;
  font-weight: 300;
  color: #ffff;
`;
