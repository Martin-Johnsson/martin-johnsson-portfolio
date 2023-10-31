import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { theme } from 'globalStyles/theme';

const { secondaryAccentColor, tertiaryBackgroundColor } = theme;

export const ProjectsSection = styled.section`
  margin-top: 15vh;
  margin-bottom: 15vh;
`;

export const ProjectBox = styled(Box)`
  box-shadow: 0.14vh 0.14vw 1.98vh ${tertiaryBackgroundColor};
  width: 90vw;
  cursor: pointer;
  &:hover {
    border: 0.2rem solid ${secondaryAccentColor};
  }
`;

export const LazyLoadingImage = styled(LazyLoadImage)`
  border-radius: 1.5vw;
  width: 20vw;
  height: 40%;
`;
