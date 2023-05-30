import { BigHeading, BodyText } from '../StyledComponents';
import { projects } from '../assets/projectsData';
import { Box, Flex, Img, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';

const Projects = () => {
  return (
    <Wrap w='100w' justify='center' spacing='10vh' marginTop='1vh'>
      <Box textAlign='center'>
        <BigHeading>Projects</BigHeading>
      </Box>
      {projects.map((element, i) => (
        <WrapItem key={i} w='50vw' cursor='pointer'>
          <Box boxShadow='0.14vh 0.14vw 1.98vh black '>
            <Flex direction='column' alignItems={'center'}>
              <Box alignSelf='center'>
                <BodyText>{element.name}</BodyText>
              </Box>
              <Box justifyContent='center'>
                <Img
                  src={element.image}
                  alt='Screenshot of Insights application'
                  marginBottom='10vh'
                />
              </Box>
              <Box border='0.1vw solid lightBlue'>
                <BodyText>{element.tags.toString()}</BodyText>
              </Box>
            </Flex>
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Projects;
