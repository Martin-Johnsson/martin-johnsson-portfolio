import {
  Box,
  Flex,
  Img,
  Link,
  Modal,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import {
  ModalHeading,
  ModalText,
  ModalSecondHeading,
  StyledLink,
  LazyLoadingModalImage,
} from '../../styles/StyledComponents';
import { projects } from '../../assets/projectsData';
import { RootState } from '../../redux/store';
import { IProject, IProjectState } from '../../types/interfaces';

const ProjectsModal = ({
  modalIsOpen,
  closeModal,
}: {
  modalIsOpen: boolean;
  closeModal: () => void;
}) => {
  const projectsState: IProjectState = useSelector(
    (state: RootState) => state.projects
  );
  const selectedProject: IProject = projects[projectsState.selectedProject];

  const isSmallerThanLg = useBreakpointValue({ base: true, lg: false });
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onClose={closeModal}
        size='l'
        closeOnOverlayClick={true}
      >
        <ModalOverlay>
          <ModalContent bg='#242424' w='99vw' h='70vh'>
            {isSmallerThanLg && (
              <Flex
                direction='column'
                alignItems='center'
                justifyContent='center'
              >
                <Box w='100%'>
                  <ModalHeading>About {selectedProject.name}</ModalHeading>
                </Box>
                <Box marginTop='3vw'>
                  <LazyLoadingModalImage
                    src={selectedProject.modalImage?.imageUrl}
                    alt='Screenshot of Insights application'
                    placeholderSrc={
                      selectedProject.modalPlaceholderImage?.imageUrl
                    }
                    effect='blur'
                  />
                </Box>
                <Box
                  marginLeft='2vw'
                  borderLeft='0.5vw solid #15181a'
                  w='100%'
                  marginTop='3vw'
                >
                  <ModalText>{selectedProject.about}</ModalText>
                </Box>
                <Box w='100%' marginTop='2vw'>
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
                      <StyledLink>
                        No code available. NDA Protected.{' '}
                      </StyledLink>
                    </Box>
                  )}
                </Box>
              </Flex>
            )}
            {!isSmallerThanLg && (
              <>
                <Box textAlign='center'>
                  <ModalHeading>{selectedProject.name}</ModalHeading>
                </Box>
                <Box>
                  <Flex direction='row'>
                    <Box marginLeft='3vw'>
                      <Img
                        src={selectedProject.modalImage?.imageUrl}
                        alt='Screenshot of Insights application'
                        borderRadius='1.5vw'
                      />
                    </Box>
                    <Box
                      marginLeft='2vw'
                      borderLeft='0.5vw solid #15181a'
                      maxW='60vw'
                      maxH='98%'
                    >
                      <ModalSecondHeading>About</ModalSecondHeading>
                      <ModalText>{selectedProject.about}</ModalText>
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
                        <Link
                          href={selectedProject.links.liveExample}
                          isExternal
                        >
                          <i className='fa-solid fa-laptop-code'></i>
                          <StyledLink>
                            {' '}
                            Checkout live on CodeSandbox{' '}
                          </StyledLink>
                        </Link>
                      )}
                      {!selectedProject.links?.github && (
                        <Box>
                          <i className='fa-solid fa-code'></i>
                          <StyledLink>
                            No code available. NDA Protected.{' '}
                          </StyledLink>
                        </Box>
                      )}
                    </Box>
                  </Flex>
                </Box>
              </>
            )}
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default ProjectsModal;
