import { Box, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {
  ModalHeading,
  ModalText,
  ModalSecondHeading,
  StyledModalLink,
  LazyLoadingModalImage,
  StyledModalLinkSpan,
} from 'src/components/previousProjects/modals/StyledComponentsModal.tsx';
import { projects } from 'src/assets/projectsData';
import { RootState } from 'src/redux/store';
import { IProject, IProjectState } from 'src/types/interfaces';

const BigScreenSize = () => {
  const projectsState: IProjectState = useSelector(
    (state: RootState) => state.projects
  );
  const selectedProject: IProject = projects[projectsState.selectedProject];

  return (
    <>
      <Box textAlign='center'>
        <ModalHeading>{selectedProject.name}</ModalHeading>
      </Box>
      <Box>
        <Flex direction='row' justifyContent='center'>
          <Box>
            <LazyLoadingModalImage
              src={selectedProject.modalImage?.imageUrl}
              alt={selectedProject.modalImage?.alt}
              placeholderSrc={selectedProject.modalPlaceholderImage.imageUrl}
              effect='blur'
            />
          </Box>
          <Box
            borderLeft='0.5vw solid ${primaryBackgroundColor}'
            maxW='60vw'
            maxH='98%'
          >
            <ModalSecondHeading>About</ModalSecondHeading>
            <ModalText>{selectedProject.modalAbout}</ModalText>
          </Box>
        </Flex>
        <Flex direction='column'>
          <Box color='#f5f0f0' alignSelf='center'>
            {selectedProject.links?.github && (
              <StyledModalLink href={selectedProject.links.github} isExternal>
                <i className='fa-solid fa-code'></i>
                <StyledModalLinkSpan> Checkout on GitHub </StyledModalLinkSpan>
              </StyledModalLink>
            )}
            {selectedProject.links?.liveExample && (
              <StyledModalLink
                href={selectedProject.links.liveExample}
                isExternal
              >
                <i className='fa-solid fa-laptop-code'></i>
                <StyledModalLinkSpan> Checkout live </StyledModalLinkSpan>
              </StyledModalLink>
            )}
            {!selectedProject.links?.github && (
              <Box>
                <i className='fa-solid fa-code'></i>
                <StyledModalLinkSpan>
                  No code available. NDA Protected.{' '}
                </StyledModalLinkSpan>
              </Box>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default BigScreenSize;
