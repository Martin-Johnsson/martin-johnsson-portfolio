import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Flex,
  Wrap,
  WrapItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {
  ProjectsSection,
  LazyLoadingImage,
  ProjectBox,
} from './StyledComponentsPreviousProjects.tsx';
import {
  BigHeading,
  BodyText,
  SmallBodyText,
  SmallScreenBodyText,
  SmallScreenSmallBodyText,
} from '../../globalStyles/GlobalStyledComponents';
import { projects } from 'src/assets/projectsData';
import ProjectsModal from './Modal';
import { RootState } from 'src/redux/store';
import { IProjectState } from 'src/types/interfaces';

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
              <ProjectBox
                onClick={() => {
                  handleExpandProject(index);
                }}
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
                    <LazyLoadingImage
                      src={project.mainImage?.imageUrl}
                      alt='Screenshot of Insights application'
                      placeholderSrc={project.placeholderMainImage.imageUrl}
                      effect='blur'
                    />
                  </Box>
                </Flex>
              </ProjectBox>
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
                key={project.id}
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
                    borderRadius='1.5vw'
                  >
                    <LazyLoadingImage
                      src={project.mainImage?.imageUrl}
                      alt={project.mainImage?.alt}
                      width='50vw'
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
