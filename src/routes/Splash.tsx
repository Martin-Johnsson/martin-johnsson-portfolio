import { useNavigate } from 'react-router-dom';
import {
  BigHeading,
  MediumHeading,
  PortfolioHomeContainer,
  ThirdSizeHeading,
  ToProjectsButton,
} from '../styles/StyledComponents.ts';
import { Box } from '@chakra-ui/react';

const Splash = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navigate = useNavigate();
  const handleOnHeadingClick = () => {
    scrollToTop();
    navigate('/contact');
  };
  const handleOnToProjectsClick = () => {
    navigate('/projects');
    scrollToTop();
  };

  return (
    <PortfolioHomeContainer>
      <BigHeading>Hello and welcome!</BigHeading>
      <MediumHeading>My name is Martin Johnsson,</MediumHeading>
      <MediumHeading>I'm a web developer based in Lund, Sweden</MediumHeading>
      <ThirdSizeHeading onClick={handleOnHeadingClick}>
        Let's get in touch!
      </ThirdSizeHeading>
      <Box>
        <ToProjectsButton onClick={handleOnToProjectsClick}>
          View my projects
        </ToProjectsButton>
      </Box>
    </PortfolioHomeContainer>
  );
};

export default Splash;
