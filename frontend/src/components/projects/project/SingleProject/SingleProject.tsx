import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { RootState } from 'shared/redux/store';
import {
  Box,
  Flex,
  ListItem,
  UnorderedList,
  WrapItem,
  useBreakpointValue,
} from '@chakra-ui/react';

import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  LazyLoadingImage,
  ProjectBox,
} from 'components/projects/project/StyledComponentsProjects';
import {
  SmallScreenBodyText,
  SmallScreenSmallBodyText,
} from 'shared/styles/GlobalStyledComponents';

import ProjectsModal from 'components/projects/modal/Modal';
import { IProjectState } from 'shared/types/interfaces';

const SingleProject = (props) => {
  const dispatch: Dispatch = useDispatch();

  const projectsState: IProjectState = useSelector(
    (state: RootState) => state.projects
  );

  const handleExpandProject = (index: number) => {
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

  interface ITag {
    id: number;
    name: string;
  }

  return (
    <ProjectBox
      onClick={() => {
        handleExpandProject(props.index);
      }}
    >
      {projectsState.modalIsOpen && (
        <ProjectsModal
          loadedProjects={props.loadedProjects}
          modalIsOpen={projectsState.modalIsOpen}
          closeModal={handleCloseModal}
        />
      )}
      ;
      <WrapItem key={props.id}>
        <Box
          boxShadow='0.14vh 0.14vw 1.98vh black '
          key={props.id}
          cursor='pointer'
          onClick={() => {
            handleExpandProject(props.index);
          }}
          w='90vw'
        >
          <Flex direction='column' alignItems={'center'}>
            {isSmallerThanLg ? (
              <>
                <Box alignSelf='center'>
                  <SmallScreenBodyText>{props.name}</SmallScreenBodyText>
                  <SmallScreenSmallBodyText>
                    {props.description}
                  </SmallScreenSmallBodyText>
                  <Flex marginRight='1vw' flexWrap='wrap' marginTop='1.5vh'>
                    <UnorderedList>
                      {props.tags.map((tag: ITag) => {
                        return (
                          <ListItem
                            key={tag.id}
                            max-w='5'
                            border='0.2rem solid #0b3d54'
                            color='#f5f0f0'
                            marginLeft='2vw'
                            marginTop='1vh'
                            display='inline-block'
                            padding='0.2vw'
                          >
                            {tag.name}
                          </ListItem>
                        );
                      })}
                    </UnorderedList>
                  </Flex>
                </Box>
                <Box
                  justifyContent='center'
                  marginBottom='10vh'
                  marginTop='5vh'
                  borderRadius='1.5vw'
                >
                  <LazyLoadingImage
                    src={props.mainImage?.imageUrl}
                    alt={props.mainImage?.alt}
                    width='50vw'
                  />
                </Box>
              </>
            ) : (
              <Box alignSelf='center'>
                <SmallScreenBodyText>{props.name}</SmallScreenBodyText>
                <SmallScreenSmallBodyText>
                  {props.description}
                </SmallScreenSmallBodyText>
                <Flex marginRight='1vw' flexWrap='wrap'>
                  <UnorderedList>
                    {props.tags.map((tag: ITag) => {
                      return (
                        <ListItem
                          key={tag.id}
                          max-w='5'
                          border='0.2rem solid #0b3d54'
                          color='#f5f0f0'
                          marginLeft='0.6vw'
                          display='inline-block'
                          padding='0.2vw'
                        >
                          {tag.name}
                        </ListItem>
                      );
                    })}
                  </UnorderedList>
                </Flex>
                <Box
                  justifyContent='center'
                  marginBottom='10vh'
                  marginTop='5vh'
                >
                  <LazyLoadingImage
                    src={props.mainImage?.imageUrl}
                    alt='Screenshot of Insights application'
                    placeholderSrc={props.placeholderMainImage.imageUrl}
                    effect='blur'
                  />
                </Box>
              </Box>
            )}
          </Flex>
        </Box>
      </WrapItem>
    </ProjectBox>
  );
};

export default SingleProject;
