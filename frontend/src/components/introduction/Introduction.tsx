import { FC, MouseEventHandler } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Box, Heading, useColorMode } from '@chakra-ui/react';

import { StyledCraftingSpan } from 'shared/styles/GlobalStyledComponents';
import { ViewProjectsButton } from 'components/introduction/StyledComponentsIntroduction';
import SocialLinks from 'shared/components/SocialLinks/SocialLinks';

const Introduction: FC = () => {
  const { colorMode } = useColorMode();
  const navigate: NavigateFunction = useNavigate();

  const handleOnToProjectsClick: MouseEventHandler<HTMLButtonElement> = () => {
    navigate('/projects');
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box as='section' w='100%'>
      <Heading as='h1' fontSize='2.5rem' fontWeight='900'>
        Martin Johnsson
      </Heading>
      <Box color={`${colorMode}.secondaryTextColor`}>
        <Heading as='h2' fontSize='1.5rem'>
          <StyledCraftingSpan>Crafting</StyledCraftingSpan> Web Applications.
          <br /> Based in Lund, Sweden
        </Heading>
      </Box>
      <Box textAlign='center'>
        <ViewProjectsButton onClick={handleOnToProjectsClick}>
          View my projects
        </ViewProjectsButton>
      </Box>
      <SocialLinks />
    </Box>
  );
};

export default Introduction;
