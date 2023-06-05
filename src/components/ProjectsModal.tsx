import {
  Box,
  Flex,
  Img,
  Link,
  Modal,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import {
  ModalHeading,
  ModalText,
  ModalSecondHeading,
  StyledLink,
} from '../styles/StyledComponents';
import { projects } from '../assets/projectsData';
import { RootState } from '../redux/store';

const ProjectsModal = ({
  modalIsOpen,
  closeModal,
}: {
  modalIsOpen: boolean;
  closeModal: () => void;
}) => {
  const projectsState = useSelector((state: RootState) => state.projects);
  const selectedProject = projects[projectsState.selectedProject];
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
            <Box textAlign='center'>
              <ModalHeading>{selectedProject.name}</ModalHeading>
            </Box>
            <Box>
              <Flex direction='row'>
                <Box marginLeft='3vw'>
                  <Img
                    src={selectedProject.modalImage}
                    alt='Screenshot of Insights application'
                    borderRadius='1.5vw'
                  />
                </Box>
                <Box marginLeft='1vw' borderLeft='0.5vw solid #15181a'>
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
            </Box>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default ProjectsModal;
