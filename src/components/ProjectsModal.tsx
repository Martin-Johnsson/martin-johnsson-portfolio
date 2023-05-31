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
          <ModalContent bg='#242424' w='60vw' h='80vh'>
            <Box textAlign='center'>
              <ModalHeading>{selectedProject.name}</ModalHeading>
            </Box>
            <Flex direction='row' marginTop='3vh'>
              <Box w='50vw' marginLeft='3vw' borderRight='0.5vw solid #15181a'>
                <Img
                  src={selectedProject.image}
                  alt='Screenshot of Insights application'
                />
              </Box>
              <Box w='60vw'>
                <ModalSecondHeading>About</ModalSecondHeading>

                <ModalText>{selectedProject.about}</ModalText>
              </Box>
            </Flex>
            <Flex direction='column'>
              <Box color='white' alignSelf='center'>
                {selectedProject.links?.github && (
                  <Box marginTop='2vh' color='#fffff'>
                    <Link
                      href={selectedProject.links.github}
                      isExternal
                      fontSize='1vw'
                    >
                      <i className='fa-solid fa-code'></i>
                      <span> Checkout the code!</span>
                    </Link>
                  </Box>
                )}
                {!selectedProject.links?.github && (
                  <Flex direction='row' gap='0.2vw '>
                    <Box marginTop='2vh' color='#fffff' fontSize='1vw'>
                      <i className='fa-solid fa-code'></i>{' '}
                      <span>No code available. NDA Protected.</span>
                    </Box>
                    <Box></Box>
                  </Flex>
                )}
              </Box>
            </Flex>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default ProjectsModal;
