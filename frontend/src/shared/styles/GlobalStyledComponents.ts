import { MenuItem } from '@chakra-ui/react';

import styled from '@emotion/styled';
import theme from './theme/theme';

export const NavigateBackText = styled.h3`
  font-size: 1rem;
  display: block;
  font-weight: 800;
  &:hover {
    cursor: pointer;
    color: ${theme.colors.primaryAccentColor};
  }
`;

// Mobile

export const MobileSmallBodyText = styled.h4`
  font-size: 0.9rem;
  text-align: center;
  font-weight: 800;
  display: inline;
`;

export const StyledHeaderMenuItem = styled(MenuItem)`
  background-color: inherit;
`;

export const SmallLinksText = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
`;

export const StyledCraftingSpan = styled.span`
  font-style: italic;
  text-decoration: underline;
  text-underline-offset: 1vh;
`;

export const MobileProjectBoxDescription = styled.p`
  font-size: 0.8rem;
`;
