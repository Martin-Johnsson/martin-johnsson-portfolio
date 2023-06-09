import { MenuItem } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const PortfolioHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 15vh;
`;

export const BigHeading = styled.h1`
  font-size: 4rem;
  display: block;
  font-weight: 800;
  width: 100vw;
  color: #f5f0f0;
  margin-bottom: 1vh;
`;

export const MediumHeading = styled.h2`
  font-size: 1.7rem;
  display: block;
  margin-bottom: 1vh;
  font-weight: 600;
  width: 100vw;
  color: #f5f0f0;
`;

export const ThirdSizeHeading = styled.h3`
  font-size: 2rem;
  display: block;
  margin-bottom: 1vh;
  font-weight: 800;
  width: 30vw;
  color: #f79d14;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: #483ab0;
  }
`;

export const BodyText = styled.h3`
  font-size: 1.5rem;
  display: block;
  font-weight: 600;
  width: 30vw;
  color: #f5f0f0;
`;

export const SmallBodyText = styled.h4`
  font-size: 1rem;
  display: block;
  font-weight: 600;
  color: #f5f0f0;
`;

export const SmallScreenBodyText = styled.h3`
  font-size: 1.5rem;
  display: block;
  font-weight: 600;
  width: 30vw;
  color: #f5f0f0;
`;

export const SmallScreenSmallBodyText = styled.h4`
  font-size: 1rem;
  display: block;
  font-weight: 600;
  color: #f5f0f0;
  margin-top: 1vh;
  margin-left: 2vh;
  margin-bottom: 2.5vh;
`;

export const ToProjectsButton = styled.button`
  background-color: #313031;
  color: #f5f0f0;
  border: 0.2vw solid #f5f0f0;
  text-align: center;
  margin-top: 10vh;
  padding: 8vh 4vw;
  font-size: 1.5rem;
  font-weight: 800;
  &:hover {
    border: 0.2vw solid #15181a;
    background-color: #313031;
    color: #483ab0;
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
    background-color: #483ab0;
    color: #f5f0f0;
  }
`;

export const HeaderName = styled.h1`
  font-size: 1.3rem;
  font-weight: 800;
  color: #f5f0f0;
  &:hover {
    color: #f5f0f0f;
  }
`;

export const NameHeader = styled.h1`
  font-size: 1rem;
  font-weight: 800;
  color: #f5f0f0;
  margin-left: 0.5vh;
`;

export const ContactSection = styled.section`
  text-align: center;
  height: 100vh;
  margin-top: 15vh;
  margin-bottom: 10vh;
  width: 100vw;
`;

export const FormHeading = styled.h1`
  font-size: 3rem;
  display: block;
  margin-top: 4vh;
  margin-bottom: 4vh;
  font-weight: 800;
  color: #f5f0f0;
`;

export const ModalHeading = styled.h1`
  font-size: 1.2rem;
  font-weight: 800;
  color: #f5f0f0;
`;

export const ModalSecondHeading = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #f5f0f0;
`;

export const ModalText = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: #f5f0f0;
`;

export const SmallLinksText = styled.span`
  font-size: 0.7rem;
  margin-left: 1vw;
  font-weight: 700;
  color: #f5f0f0;
`;

export const CustomInput = styled.input`
  background-color: #313031;
  color: #f5f0f0ff;
  border: 0.2vw solid #f5f0f0ff;
  text-align: center;
  padding: 2vh 10vw;
  font-size: 2vw;
  font-weight: 800;
  &:hover {
    border: 0.2vw solid #15181a;
    background-color: #313031;
    color: #483ab0;
    cursor: pointer;
  }
  &:active {
    background-color: #313031;
    border: none;
  }
`;

export const StyledLink = styled.span`
  color: #f79d14;
  &:hover {
    color: #483ab0;
  }
`;

export const ProjectsSection = styled.section`
  margin-top: 15vh;
`;
