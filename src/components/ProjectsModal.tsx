import { BodyText, ModalHeading, ModalText } from '../StyledComponents';
import { projects } from '../assets/projectsData';
import { RootState } from '../redux/store';
import {
  Box,
  Flex,
  Img,
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ProjectsModal = ({ modalIsOpen, closeModal }) => {
  const dispatch = useDispatch();
  const projectsState = useSelector((state: RootState) => state.projects);

  const selectedProject = projects[projectsState.selectedProject];

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onClose={modalIsOpen}
        size='l'
        closeOnOverlayClick
      >
        <ModalOverlay
          onClick={() => {
            dispatch({ type: 'projects/setModalIsOpen', payload: false });
          }}
        >
          <ModalContent bg='#242424' w='60vw' h='80vh'>
            <Box textAlign='center'>
              <ModalHeading>{selectedProject.name}</ModalHeading>
            </Box>
            <Flex direction='row' marginTop='3vh'>
              <Box w='50vw'>
                <Img
                  src={selectedProject.image}
                  alt='Screenshot of Insights application'
                />
              </Box>
              <Box w='60vw'>
                <ModalHeading>About</ModalHeading>

                <ModalText>{selectedProject.about}</ModalText>
              </Box>
            </Flex>

            <button
              onClick={() => {
                dispatch({ type: 'projects/setModalIsOpen', payload: false });
              }}
            >
              test
            </button>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default ProjectsModal;
