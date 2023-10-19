import { Box, Flex, Link } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {
  ModalHeading,
  ModalText,
  StyledModalLink,
  LazyLoadingModalImage,
} from '../../../styles/StyledComponents';
import { projects } from '../../../assets/projectsData';
import { RootState } from '../../../redux/store';
import { IProject, IProjectState } from '../../../types/interfaces';

const SmallScreenSize = () => {
  const projectsState: IProjectState = useSelector(
    (state: RootState) => state.projects
  );
  const selectedProject: IProject = projects[projectsState.selectedProject];

  return (
    <>
      <Flex direction='column' alignItems='center' justifyContent='center'>
        <Box w='100%'>
          <ModalHeading>About {selectedProject.name}</ModalHeading>
        </Box>
        <Box marginTop='3vw'>
          <LazyLoadingModalImage
            src={selectedProject.modalImage?.imageUrl}
            alt='Screenshot of Insights application'
            placeholderSrc={selectedProject.modalPlaceholderImage?.imageUrl}
            effect='blur'
          />
        </Box>
        <Box
          marginLeft='2vw'
          borderLeft='0.5vw solid #15181a'
          w='100%'
          marginTop='3vw'
        >
          <ModalText>{selectedProject.modalAbout}</ModalText>
        </Box>
        <Box w='100%' marginTop='2vw'>
          {selectedProject.links?.github && (
            <Link href={selectedProject.links.github} isExternal>
              <i className='fa-solid fa-code'></i>
              <StyledModalLink> Checkout the code on GitHub </StyledModalLink>
            </Link>
          )}
          {selectedProject.links?.liveExample && (
            <Box width={'100vw'} height={'100vh'}>
              <Link href={selectedProject.links.liveExample} isExternal>
                <i className='fa-solid fa-laptop-code'></i>
                <StyledModalLink> Checkout live! </StyledModalLink>
              </Link>
            </Box>
          )}
          {!selectedProject.links?.github && (
            <Box>
              <i className='fa-solid fa-code'></i>
              <StyledModalLink>
                No code available. NDA Protected.{' '}
              </StyledModalLink>
            </Box>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default SmallScreenSize;
