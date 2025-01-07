import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { RootState } from 'shared/redux/store';

import {
  Box,
  Flex,
  ListItem,
  UnorderedList,
  useColorMode,
  WrapItem,
} from '@chakra-ui/react';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { LazyLoadingImage } from 'components/projects/project/StyledComponentsProjects';
import ProjectsModal from 'components/projects/modal/Modal';
import { IProjectState, ITag } from 'shared/types/interfaces';
import { MobileProjectBoxDescription } from 'shared/styles/GlobalStyledComponents';

const SmallProjectItem = (props) => {
  const { colorMode } = useColorMode();
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

  return (
    <Box w='80vw'>
      {projectsState.modalIsOpen && (
        <ProjectsModal
          loadedProjects={props.loadedProjects}
          modalIsOpen={projectsState.modalIsOpen}
          closeModal={handleCloseModal}
        />
      )}

      <WrapItem
        backgroundColor={`${colorMode}.backgrounds.secondary`}
        borderRadius='15px'
      >
        <Box
          onClick={() => {
            handleExpandProject(props.index);
          }}
          padding='2vh 4vw'
          w='100%'
        >
          <Flex direction='column'>
            <Flex justifyContent='flex-end'>
              <Box>
                <span>
                  <i className='fa-solid fa-expand'></i>
                </span>
              </Box>
            </Flex>
            <Flex alignItems='center' gap='10vw'>
              <Box>
                <LazyLoadingImage
                  src={props.mainImage?.imageUrl}
                  alt={props.mainImage?.alt}
                />
              </Box>
              <Box>
                <h3>{props.name}</h3>
              </Box>
            </Flex>
            <Box mt='2vh'>
              <MobileProjectBoxDescription>
                {props.description}
              </MobileProjectBoxDescription>
              <UnorderedList mt='1.5vh'>
                {props.tags.map((tag: ITag) => {
                  return (
                    <ListItem
                      key={tag.id}
                      borderRadius='25px'
                      color={`${colorMode}.accentureTextColor`}
                      backgroundColor={`${colorMode}.backgrounds.accenture`}
                      display='inline-block'
                      fontSize='0.8em'
                      marginRight='1vw'
                      padding='0.12rem'
                    >
                      {tag.name}
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </Box>
          </Flex>
        </Box>
      </WrapItem>
    </Box>
  );
};

export default SmallProjectItem;
