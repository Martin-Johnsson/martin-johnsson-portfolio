import { useColorMode, Box, Heading, Link, Flex } from '@chakra-ui/react';

import 'react-lazy-load-image-component/src/effects/blur.css';

import { IProject } from 'shared/types/interfaces';
import ModalContainer from '../../../modalContainer/ModalContainer';
import LoadingSpinner from 'shared/components/LoadingSpinner/LoadingSpinner';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SmallScreenProjectModal = (props) => {
  const selectedProject: IProject = props.loadedProjects.filter(
    (project) => project.id === props.selectedProject
  )[0];

  const { colorMode } = useColorMode();

  return (
    <ModalContainer
      isOpen={props.modalIsOpen}
      closeOnOverlayClick={true}
      handleOnCloseModal={props.handleOnCloseModal}
      backgroundColor={`${colorMode}.backgrounds.secondary`}
    >
      {!selectedProject ? (
        <Box textAlign='center'>
          <LoadingSpinner />
        </Box>
      ) : (
        <Box as='article' p='0 2% 0 4%'>
          <Box>
            <Heading
              as='h1'
              fontSize='1.5rem'
              fontWeight='1000'
              color={`${colorMode}.secondaryTextColor`}
            >
              {selectedProject.name}
            </Heading>
          </Box>

          <Flex w='95%' direction='row' gap='3%' mt='5%'>
            <Box w='60%'>
              <LazyLoadImage
                src={selectedProject.modalImage?.imageUrl}
                alt={selectedProject.modalImage?.alt}
                placeholderSrc={selectedProject.modalPlaceholderImage?.imageUrl}
                effect='blur'
              />
            </Box>
            <Box
              w='40%'
              fontSize='0.9rem'
              color={`${colorMode}.primaryTextColor`}
            >
              <p>{selectedProject.modalAbout}</p>
            </Box>
          </Flex>
          <section>
            <Flex justifyContent='center' alignItems='center' fontSize='2rem'>
              {selectedProject.links?.github ? (
                <Link href={selectedProject.links.github} isExternal>
                  <Box as='i' className='fa-brands fa-github'></Box>
                </Link>
              ) : (
                <Box className='fa-stack'>
                  <Box as='i' className='fa-brands fa-github fa-stack-1x'></Box>
                  <Box
                    as='i'
                    className='fa-solid fa-slash fa-flip-vertical fa-stack-1x'
                    color='shared.text.warning'
                  ></Box>
                </Box>
              )}
              {selectedProject.links?.liveExample ? (
                <Link href={selectedProject.links.liveExample} isExternal>
                  <Box as='i' className='fa-solid fa-desktop'></Box>
                </Link>
              ) : (
                <Box className='fa-stack'>
                  <Box as='i' className='fa-solid fa-desktop fa-stack-1x'></Box>
                  <Box
                    as='i'
                    className='fa-solid fa-slash fa-flip-vertical fa-stack-1x'
                    color='shared.text.warning'
                  ></Box>
                </Box>
              )}
            </Flex>
          </section>
        </Box>
      )}
    </ModalContainer>
  );
};

export default SmallScreenProjectModal;
