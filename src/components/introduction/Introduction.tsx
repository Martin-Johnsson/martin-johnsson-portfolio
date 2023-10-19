import { FC, MouseEventHandler } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import {
  BigHeading,
  MediumHeading,
  ThirdSizeHeading,
} from '../../globalStyles/GlobalStyledComponents.ts';
import {
  PortfolioHomeContainer,
  ToProjectsButton,
} from './StyledComponentsIntroduction.tsx';

const Introduction: FC = () => {
  const navigate: NavigateFunction = useNavigate();
  const handleOnHeadingClick: MouseEventHandler<HTMLHeadingElement> = () => {
    scrollToTop();
    navigate('/contact');
  };
  const handleOnToProjectsClick: MouseEventHandler<HTMLButtonElement> = () => {
    navigate('/projects');
    scrollToTop();
  };

  const scrollToTop: Function = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <PortfolioHomeContainer>
      <BigHeading>Hi!</BigHeading>
      <MediumHeading>My name is Martin Johnsson,</MediumHeading>
      <MediumHeading>
        I'm a Front End Developer based in Lund, Sweden
      </MediumHeading>
      <ThirdSizeHeading onClick={handleOnHeadingClick}>
        Let's get in touch!
      </ThirdSizeHeading>
      <Box>
        <MediumHeading>Or</MediumHeading>
        <ToProjectsButton onClick={handleOnToProjectsClick}>
          View my projects
        </ToProjectsButton>
      </Box>
    </PortfolioHomeContainer>
  );
};

export default Introduction;
