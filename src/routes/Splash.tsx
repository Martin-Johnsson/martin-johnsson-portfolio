import { useNavigate } from 'react-router-dom';
import {
  BigHeading,
  MediumHeading,
  PortfolioHomeContainer,
  ThirdSizeHeading,
  ToProjectsButton,
} from '../StyledComponents.ts';
import { Box } from '@chakra-ui/react';
const Splash = () => {
  const navigate = useNavigate();
  const handleOnHeadingClick = () => {
    console.log('hello');
    return navigate('/portfolio');
  };
  return (
    <>
      <Box bg='#242424' h='100vh'>
        <PortfolioHomeContainer>
          <BigHeading>HI, MY NAME IS MARTIN JOHNSSON</BigHeading>
          <MediumHeading>
            I'M A WEB DEVELOPER BASED IN LUND, SWEDEN
          </MediumHeading>
          <ThirdSizeHeading onClick={handleOnHeadingClick}>
            HIT ME UP!
          </ThirdSizeHeading>
          <ToProjectsButton onClick={handleOnHeadingClick}>
            View my projects
          </ToProjectsButton>
        </PortfolioHomeContainer>
      </Box>
    </>
  );
};

export default Splash;
