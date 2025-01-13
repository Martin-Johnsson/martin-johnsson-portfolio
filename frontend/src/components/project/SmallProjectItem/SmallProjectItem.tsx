import {
  Box,
  Flex,
  ListItem,
  Text,
  UnorderedList,
  useColorMode,
  WrapItem,
} from '@chakra-ui/react';
import 'react-lazy-load-image-component/src/effects/blur.css';

import SmallScreenProjectModal from 'shared/modals/modals/projectModals/smallScreenProjectModal/SmallScreenProjectModal';
import { useState } from 'react';
import { ITag } from 'shared/types/interfaces';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LazyLoadingImage } from '../StyledComponentsProjects';

const SmallProjectItem = (props) => {
  const { colorMode } = useColorMode();

  const [selectedProject, setSelectedProject] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleExpandProject = (id: string) => {
    setSelectedProject(id);
    setModalIsOpen(true);
  };

  const handleOnCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Box
      w='80vw'
      backgroundColor={`${colorMode}.backgrounds.secondary`}
      borderRadius='15px'
    >
      {modalIsOpen && (
        <SmallScreenProjectModal
          loadedProjects={props.loadedProjects}
          selectedProject={selectedProject}
          modalIsOpen={modalIsOpen}
          handleOnCloseModal={handleOnCloseModal}
        ></SmallScreenProjectModal>
      )}

      <WrapItem>
        <Box padding='2vh 4vw' w='100%'>
          <Flex direction='column'>
            <Flex justifyContent='flex-end'>
              <Box
                onClick={() => {
                  handleExpandProject(props.id);
                }}
              >
                <span>
                  <i className='fa-solid fa-expand'></i>
                </span>
              </Box>
            </Flex>
            <Flex alignItems='center' gap='10vw'>
              <Box w='40%' h='40%' borderRadius='15px'>
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
              <Text fontSize='0.8rem' color={`${colorMode}.secondaryTextColor`}>
                {props.description}
              </Text>
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
