import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Flex,
  Img,
  Wrap,
  WrapItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Dispatch } from '@reduxjs/toolkit';

import {
  BigHeading,
  BodyText,
  ProjectsSection,
  SmallBodyText,
  SmallScreenBodyText,
  SmallScreenSmallBodyText,
} from '../../styles/StyledComponents';
import { projects } from '../../assets/projectsData';
import ProjectsModal from './PreviousProjectsModal';
import { RootState } from '../../redux/store';
import { IProjectState } from '../../types/interfaces';

const Projects: FC = () => {
  const dispatch: Dispatch = useDispatch();

  const projectsState: IProjectState = useSelector(
    (state: RootState) => state.projects
  );

  const handleExpandProject: Function = (index: number) => {
    dispatch({ type: 'projects/setModalIsOpen', payload: true });
    dispatch({ type: 'projects/setSelectedProject', payload: index });
  };

  const handleCloseModal = () => {
    dispatch({ type: 'projects/setModalIsOpen', payload: false });
  };

  const isSmallerThanLg = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <ProjectsSection>
      {!isSmallerThanLg && (
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
          {projects.map((project, index) => (
            <WrapItem key={project.id}>
              <Box
                boxShadow='0.14vh 0.14vw 1.98vh black '
                cursor='pointer'
                onClick={() => {
                  handleExpandProject(index);
                }}
                w='90vw'
              >
                <Flex direction='column' alignItems={'center'}>
                  <Box alignSelf='center'>
                    <BodyText>{project.name}</BodyText>
                    <SmallBodyText>{project.description}</SmallBodyText>
                    <Flex marginRight='1vw' flexWrap='wrap'>
                      {project.tags.map((tag) => {
                        return (
                          <Box
                            key={tag.id}
                            max-w='5'
                            border='0.2rem solid #0b3d54'
                            color='#f5f0f0'
                            marginLeft='0.6vw'
                            display='inline-block'
                            padding='0.2vw'
                          >
                            {tag.tag}
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
                      src={project.frontImage}
                      alt='Screenshot of Insights application'
                      borderRadius='1.5vw'
                      width=''
                    />
                  </Box>
                </Flex>
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      )}
      {isSmallerThanLg && (
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

          {projects.map((project, index) => (
            <WrapItem key={project.id}>
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
                    <SmallScreenBodyText>{project.name}</SmallScreenBodyText>
                    <SmallScreenSmallBodyText>
                      {project.description}
                    </SmallScreenSmallBodyText>
                    <Flex marginRight='1vw' flexWrap='wrap' marginTop='1.5vh'>
                      {project.tags.map((tag) => {
                        return (
                          <Box
                            key={tag.id}
                            max-w='5'
                            border='0.2rem solid #0b3d54'
                            color='#f5f0f0'
                            marginLeft='2vw'
                            marginTop='1vh'
                            display='inline-block'
                            padding='0.2vw'
                          >
                            {tag.tag}
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
                      src={project.frontImage}
                      alt='Screenshot of Insights application'
                      borderRadius='1.5vw'
                      width='70vw'
                    />
                  </Box>
                </Flex>
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      )}
      {projectsState.modalIsOpen && (
        <ProjectsModal
          modalIsOpen={projectsState.modalIsOpen}
          closeModal={handleCloseModal}
        />
      )}
    </ProjectsSection>
  );
};

export default Projects;
