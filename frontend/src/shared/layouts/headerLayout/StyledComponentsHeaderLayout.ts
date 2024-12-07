import { theme } from 'shared/styles/theme/theme';

import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const { textColor } = theme;

// Mobile

export const MobileScreenHeader = styled.header`
  display: flex;
  border: 1.5px solid ${textColor};
  border-radius: 25px;
  align-items: center;
  justify-self: left;
  justify-content: center;
  height: 6dvh;
  background: transparent;
  backdrop-filter: blur(6px);
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 800;
  color: ${textColor};
  &.active {
    text-decoration: underline;
    text-underline-offset: 0.5vh;
  }
`;
