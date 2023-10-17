import {
  Modal,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
} from '@chakra-ui/react';
import 'react-lazy-load-image-component/src/effects/blur.css';

import BigScreenSize from './modals/BigScreenSizeModal';
import SmallScreenSize from './modals/SmallScreenSizeModal';

const ProjectsModal = ({
  modalIsOpen,
  closeModal,
}: {
  modalIsOpen: boolean;
  closeModal: () => void;
}) => {
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
            {!isSmallerThanLg && <BigScreenSize />}
            {isSmallerThanLg && <SmallScreenSize />}
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default ProjectsModal;
