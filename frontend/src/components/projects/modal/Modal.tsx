import {
  useColorMode,
  Modal as ChakraModal,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
} from '@chakra-ui/react';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Modal = (props) => {
  const { colorMode } = useColorMode();
  const isSmallerThanLg = useBreakpointValue({ base: true, lg: false });

  return (
    <ChakraModal
      isOpen={props.isOpen}
      onClose={props.handleCloseModal}
      closeOnOverlayClick={props.closeOnOverlayClick}
      size={isSmallerThanLg ? 'xl' : '6xl'}
    >
      <ModalOverlay>
        <ModalContent bg={`${colorMode}.backgrounds.secondary`}>
          {props.children}
        </ModalContent>
      </ModalOverlay>
    </ChakraModal>
  );
};

export default Modal;
