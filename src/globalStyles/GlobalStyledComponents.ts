import { Box, MenuItem } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { NavLink } from 'react-router-dom';
import { theme } from './theme';

const {
  textColor,
  primaryAccentColor,
  secondaryAccentColor,
  secondaryBackgroundColor,
  tertiaryBackgroundColor,
} = theme;

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
  color: ${textColor};
  margin-bottom: 1vh;
`;

export const MediumHeading = styled.h2`
  font-size: 1.7rem;
  display: block;
  margin-bottom: 1vh;
  font-weight: 600;
  width: 100vw;
  color: ${textColor};
`;

export const ThirdSizeHeading = styled.h3`
  font-size: 2rem;
  display: block;
  margin-bottom: 1vh;
  font-weight: 800;
  width: 30vw;
  color: ${secondaryAccentColor};
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: ${primaryAccentColor};
  }
`;

export const NavigateBackText = styled.h3`
  font-size: 1rem;
  display: block;
  margin-bottom: 1vh;
  font-weight: 800;
  width: 30vw;
  color: ${secondaryAccentColor};
  &:hover {
    cursor: pointer;
    color: ${primaryAccentColor};
  }
`;

export const BodyText = styled.h3`
  font-size: 1.5rem;
  display: block;
  font-weight: 600;
  width: 30vw;
  color: ${textColor};
`;

export const SmallBodyText = styled.h4`
  font-size: 1rem;
  display: block;
  font-weight: 600;
  color: ${textColor};
`;

export const SmallScreenBodyText = styled.h3`
  font-size: 1.5rem;
  display: block;
  font-weight: 600;
  width: 30vw;
  color: ${textColor};
`;

export const SmallScreenSmallBodyText = styled.h4`
  font-size: 1rem;
  display: block;
  font-weight: 600;
  color: #${textColor};
  margin-top: 1vh;
  margin-left: 2vh;
  margin-bottom: 2.5vh;
`;

export const ToProjectsButton = styled.button`
  background-color: ${secondaryBackgroundColor};
  color: #f5f0f0;
  border: 0.2vw solid ${textColor};
  text-align: center;
  margin-top: 1vh;
  padding: 8vh 4vw;
  font-size: 1.5rem;
  font-weight: 800;
  &:hover {
    border: none;
    background-color: ${secondaryBackgroundColor};
    color: ${primaryAccentColor};
    cursor: pointer;
  }
  &:active {
    border: none;
  }
`;

export const StyledHeaderMenuItem = styled(MenuItem)`
  background-color: inherit;
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    background-color: ${primaryAccentColor};
    color: ${textColor};
  }
`;

export const HeaderLayoutHomeNavigationTabText = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${textColor};
`;

export const HeaderLayoutSecondaryNavigationTabText = styled.h1`
  font-size: 1.4rem;
  font-weight: 800;
  color: ${textColor};
  margin-left: 0.5vh;
`;

export const ModalHeading = styled.h1`
  font-size: 1.2rem;
  font-weight: 800;
  color: ${textColor};
`;

export const ModalSecondHeading = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: ${textColor};
`;

export const ModalText = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${textColor};
`;

export const SmallLinksText = styled.span`
  font-size: 0.7rem;
  margin-left: 1vw;
  font-weight: 700;
  color: ${textColor};
`;

export const StyledModalLink = styled.span`
  color: ${secondaryAccentColor};
  &:hover {
    color: ${primaryAccentColor};
  }
`;

export const LazyLoadingModalImage = styled(LazyLoadImage)`
  border-radius: 1.5vw;
  width: 70%;
  height: 70%;
`;
