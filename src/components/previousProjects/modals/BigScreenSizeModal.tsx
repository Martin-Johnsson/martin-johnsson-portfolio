import { Box, Flex, Link } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {
  ModalHeading,
  ModalText,
  ModalSecondHeading,
  StyledLink,
  LazyLoadingModalImage,
} from '../../../styles/StyledComponents';
import { projects } from '../../../assets/projectsData';
import { RootState } from '../../../redux/store';
import { IProject, IProjectState } from '../../../types/interfaces';

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
        <Flex direction='row'>
          <Box marginLeft='3vw'>
            <LazyLoadingModalImage
              src={selectedProject.modalImage?.imageUrl}
              alt={selectedProject.modalImage?.alt}
              placeholderSrc={selectedProject.modalPlaceholderImage.imageUrl}
              effect='blur'
            />
          </Box>
          <Box
            marginLeft='2vw'
            borderLeft='0.5vw solid #15181a'
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
              <Link href={selectedProject.links.github} isExternal>
                <i className='fa-solid fa-code'></i>
                <StyledLink> Checkout the code on GitHub </StyledLink>
              </Link>
            )}
            {selectedProject.links?.liveExample && (
              <Link href={selectedProject.links.liveExample} isExternal>
                <i className='fa-solid fa-laptop-code'></i>
                <StyledLink> Checkout live on CodeSandbox </StyledLink>
              </Link>
            )}
            {!selectedProject.links?.github && (
              <Box>
                <i className='fa-solid fa-code'></i>
                <StyledLink>No code available. NDA Protected. </StyledLink>
              </Box>
            )}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default BigScreenSize;
