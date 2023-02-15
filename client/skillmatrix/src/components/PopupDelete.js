import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react';

function PopupDelete(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  return (
    <>
      <Button onClick={onOpen} ref={finalRef}>{props.element}</Button>
      <Modal initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor='#000000'>
          <ModalHeader textColor='#FFFFFF'>
            delete {props.name}
          </ModalHeader>
          <ModalCloseButton color='#FFFFFF' />
          <ModalBody textColor='#FFFFFF' pb={6}>
            Are you sure You want to delete this {props.name}?
          </ModalBody >
          <ModalFooter>
            <Button colorScheme='red' mr={3}>delete</Button>
            <Button onClick={onClose}>cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default PopupDelete;