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
  min-height: 100vh;
`;

export const BigHeading = styled.h1`
  font-size: 4rem;
  display: block;
  font-weight: 800;
  width: 100vw;
  color: #ffff;
`;

export const MediumHeading = styled.h2`
  font-size: 1.7rem;
  display: block;
  margin: 1vw;
  font-weight: 600;
  width: 100vw;
  color: #ffff;
`;

export const ThirdSizeHeading = styled.h3`
  font-size: 2rem;
  display: block;
  margin: 1vw;
  font-weight: 800;
  width: 30vw;
  color: #f79d14;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: #743a8a;
  }
`;

export const BodyText = styled.h3`
  font-size: 1.5rem;
  display: block;
  margin-top: 1vw;
  margin-left: 1vw;

  font-weight: 600;
  width: 30vw;
  color: #ffff;
`;

export const SmallBodyText = styled.h4`
  font-size: 1rem;
  display: block;
  margin-left: 2vw;
  margin-top: 0.5vh;
  margin-bottom: 2vw;

  font-weight: 600;
  color: #ffff;
`;

export const ToProjectsButton = styled.button`
  background-color: #313031;
  color: #ffffff;
  border: 0.2vw solid #ffffff;
  text-align: center;
  margin-top: 10vh;
  padding: 8vh 4vw;
  font-size: 1.5rem;
  font-weight: 800;
  &:hover {
    border: 0.2vw solid #15181a;
    background-color: #313031;
    color: #743a8a;
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
  }
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    background-color: #743a8a;
  }
`;

export const HeaderName = styled.h1`
  font-size: 1.3rem;
  font-weight: 800;
  color: #ffff;
  &:hover {
    color: #743a8a;
  }
`;

export const NameHeader = styled.h1`
  font-size: 1rem;
  font-weight: 800;
  color: #ffff;
  margin-left: 0.5vh;
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
  font-size: 3rem;
  display: block;
  margin-top: 4vh;
  margin-bottom: 4vh;
  font-weight: 800;
  color: #ffff;
`;

export const ModalHeading = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #ffff;
`;

export const ModalSecondHeading = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #ffff;
`;

export const ModalText = styled.span`
  font-size: 1rem;
  font-weight: 300;
  color: #ffff;
`;

export const SmallLinksText = styled.span`
  font-size: 0.7rem;
  margin-left: 1vw;
  font-weight: 700;
  color: #ffff;
`;

export const CustomInput = styled.input`
  background-color: #313031;
  color: #ffffff;
  border: 0.2vw solid #ffffff;
  text-align: center;
  padding: 2vh 10vw;
  font-size: 2vw;
  font-weight: 800;
  &:hover {
    border: 0.2vw solid #15181a;
    background-color: #313031;
    color: #743a8a;
    cursor: pointer;
  }
  &:active {
    background-color: #313031;
    border: none;
  }
`;

export const StyledLink = styled.span`
  color: #f79d14;
`;
