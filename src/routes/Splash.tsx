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
  const navigate = useNavigate();
  const handleOnHeadingClick = () => {
    console.log('hello');
    return navigate('/contact');
  };
  const handleOnToProjectsClick = () => {
    console.log('hello');
    return navigate('/portfolio');
  };
  return (
    <>
      <Box minHeight='100vh' display='flex' alignItems='center'>
        <PortfolioHomeContainer>
          <BigHeading>Hello and welcome!</BigHeading>
          <MediumHeading>My name is Martin Johnsson,</MediumHeading>
          <MediumHeading>
            I'm a web developer based in Lund, Sweden
          </MediumHeading>
          <ThirdSizeHeading onClick={handleOnHeadingClick}>
            Let's get in touch!
          </ThirdSizeHeading>
          <Box>
            <ToProjectsButton onClick={handleOnToProjectsClick}>
              View my projects
            </ToProjectsButton>
          </Box>
        </PortfolioHomeContainer>
      </Box>
    </>
  );
};

export default Splash;
