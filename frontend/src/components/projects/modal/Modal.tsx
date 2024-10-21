import {
  Modal,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
} from '@chakra-ui/react';
import 'react-lazy-load-image-component/src/effects/blur.css';

import BigScreenSizeModal from 'components/projects/modal/modals/BigScreenSizeModal';
import SmallScreenSizeModal from 'components/projects/modal/modals/SmallScreenSizeModal';

const ProjectsModal = (props) => {
  const isSmallerThanLg = useBreakpointValue({ base: true, lg: false });

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onClose={props.closeModal}
      size='l'
      closeOnOverlayClick={true}
    >
      <ModalOverlay>
        <ModalContent bg='#242424' w='99vw' h='70vh'>
          {isSmallerThanLg ? (
            <SmallScreenSizeModal loadedProjects={props.loadedProjects} />
          ) : (
            <BigScreenSizeModal loadedProjects={props.loadedProjects} />
          )}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default ProjectsModal;
