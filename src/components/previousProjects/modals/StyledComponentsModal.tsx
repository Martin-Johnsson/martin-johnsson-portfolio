import styled from '@emotion/styled';
import { theme } from '../../../globalStyles/theme';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const { textColor, primaryAccentColor, secondaryAccentColor } = theme;

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
