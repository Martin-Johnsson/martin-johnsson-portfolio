import {
  Box,
  Modal as ChakraModal,
  ModalContent,
  ModalOverlay,
  useBreakpointValue,
} from '@chakra-ui/react';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ModalContainer = (props) => {
  const isSmallerThanLg = useBreakpointValue({ base: true, lg: false });

  return (
    <ChakraModal
      isOpen={props.isOpen}
      onClose={props.handleOnCloseModal}
      size={isSmallerThanLg ? 'xl' : '6xl'}
    >
      <ModalOverlay>
        <ModalContent
          bg={props.backgroundColor}
          borderRadius='15px'
          m='auto 1% auto 1%'
        >
          <Box textAlign='right'>
            <button onClick={props.handleOnCloseModal}>
              <i className='fa-solid fa-compress'></i>
            </button>
          </Box>
          {props.children}
        </ModalContent>
      </ModalOverlay>
    </ChakraModal>
  );
};

export default ModalContainer;
