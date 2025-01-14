import { Box, Flex, Text, useColorMode, WrapItem } from '@chakra-ui/react';
import 'react-lazy-load-image-component/src/effects/blur.css';

import SmallScreenProjectModal from 'shared/modals/modals/projectModals/smallScreenProjectModal/SmallScreenProjectModal';
import { useState } from 'react';
import { LazyLoadingImage } from '../StyledComponentsProjects';
import ProjectTags from 'components/project/projectTags/ProjectTags';

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
      as='article'
      w='80vw'
      backgroundColor={`${colorMode}.backgrounds.secondary`}
      borderRadius='0.15rem'
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
              <Box w='40%' h='40%' borderRadius='0.15rem'>
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
              <ProjectTags tags={props.tags} />
            </Box>
          </Flex>
        </Box>
      </WrapItem>
    </Box>
  );
};

export default SmallProjectItem;
