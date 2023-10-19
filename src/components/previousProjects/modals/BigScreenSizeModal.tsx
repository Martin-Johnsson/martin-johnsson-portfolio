import { Box, Flex, Link } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {
  ModalHeading,
  ModalText,
  ModalSecondHeading,
  StyledModalLink,
  LazyLoadingModalImage,
} from '../../../styles/StyledComponents';
import { projects } from '../../../assets/projectsData';
import { RootState } from '../../../redux/store';
import { IProject, IProjectState } from '../../../types/interfaces';
import { theme } from '../../../styles/theme';

const {
  textColor,
  primaryAccentColor,
  secondaryAccentColor,
  secondaryBackgroundColor,
  tertiaryBackgroundColor,
} = theme;

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
              <Link href={selectedProject.links.github} isExternal>
                <i className='fa-solid fa-code'></i>
                <StyledModalLink> Checkout the code on GitHub </StyledModalLink>
              </Link>
            )}
            {selectedProject.links?.liveExample && (
              <Link href={selectedProject.links.liveExample} isExternal>
                <i className='fa-solid fa-laptop-code'></i>
                <StyledModalLink>
                  {' '}
                  Checkout live on CodeSandbox{' '}
                </StyledModalLink>
              </Link>
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
      </Box>
    </>
  );
};

export default BigScreenSize;
