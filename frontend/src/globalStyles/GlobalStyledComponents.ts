import { MenuItem } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'globalStyles/theme';

const { textColor, primaryAccentColor, secondaryAccentColor } = theme;

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
  color: ${textColor};
  margin-top: 1vh;
  margin-left: 2vh;
  margin-bottom: 2.5vh;
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

export const SmallLinksText = styled.span`
  font-size: 0.7rem;
  margin-left: 1vw;
  font-weight: 700;
  color: ${textColor};
`;
