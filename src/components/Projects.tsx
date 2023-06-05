import { useDispatch, useSelector } from 'react-redux';
import { Box, Flex, Img, Wrap, WrapItem } from '@chakra-ui/react';

import {
  BigHeading,
  BodyText,
  SmallBodyText,
} from '../styles/StyledComponents';
import { projects } from '../assets/projectsData';
import ProjectsModal from './ProjectsModal';
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
      <Wrap
        justify='center'
        spacing='10vh'
        align='center'
        marginBottom='2vh'
        marginTop='11vh'
      >
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
              w='90vw'
            >
              <Flex direction='column' alignItems={'center'}>
                <Box alignSelf='center'>
                  <BodyText>{element.name}</BodyText>
                  <SmallBodyText>{element.description}</SmallBodyText>
                  <Flex marginRight='1vw' flexWrap='wrap'>
                    {element.tags.map((tag) => {
                      return (
                        <Box
                          max-w='5'
                          border='0.2rem solid #0b3d54'
                          color='#f5f0f0'
                          marginLeft='0.6vw'
                          display='inline-block'
                          padding='0.2vw'
                        >
                          {tag}
                        </Box>
                      );
                    })}
                  </Flex>
                </Box>
                <Box
                  justifyContent='center'
                  marginBottom='10vh'
                  marginTop='5vh'
                >
                  <Img
                    src={element.frontImage}
                    alt='Screenshot of Insights application'
                    borderRadius='1.5vw'
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
