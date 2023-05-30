import { BigHeading, BodyText } from '../StyledComponents';
import { projects } from '../assets/projectsData';
import { Box, Flex, Img, Wrap, WrapItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import ProjectsModal from './ProjectsModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
const Projects = () => {
  const dispatch = useDispatch();

  const projectsState = useSelector((state: RootState) => state.projects);

  const handleExpandProject = (index: number) => {
    dispatch({ type: 'projects/setModalIsOpen', payload: true });
    dispatch({ type: 'projects/setSelectedProject', payload: index });
  };

  const handleCloseModal = () => {
    dispatch({ type: 'projects/setModalIsOpen', payload: false });
  };

  return (
    <>
      <Wrap justify='center' spacing='10vh' align='center'>
        <Box textAlign='center'>
          <BigHeading>Projects</BigHeading>
        </Box>

        {projects.map((element, index) => (
          <WrapItem>
            <Box
              boxShadow='0.14vh 0.14vw 1.98vh black '
              key={index}
              cursor='pointer'
              onClick={() => {
                handleExpandProject(index);
              }}
            >
              <Flex direction='column' alignItems={'center'}>
                <Box alignSelf='center'>
                  <BodyText>{element.name}</BodyText>
                  <Box marginRight='1vw'>
                    {element.tags.map((tag) => {
                      return (
                        <Box
                          border='0.1vw solid lightBlue'
                          color='white'
                          marginLeft='0.6vw'
                          display='inline-block'
                          padding='0.5vw'
                        >
                          {tag}
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
                <Box
                  justifyContent='center'
                  marginBottom='10vh'
                  marginTop='5vh'
                >
                  <Img
                    src={element.image}
                    alt='Screenshot of Insights application'
                  />
                </Box>
              </Flex>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
      {projectsState.modalIsOpen && (
        <ProjectsModal
          modalIsOpen={projectsState.modalIsOpen}
          closeModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default Projects;
