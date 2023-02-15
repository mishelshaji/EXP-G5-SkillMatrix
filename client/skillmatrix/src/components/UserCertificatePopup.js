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
  Button,
  FormControl,
  FormLabel,
  Select, Input
} from '@chakra-ui/react';

function UserCertificatePopup(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  return (
    <>
      <Button onClick={onOpen} ref={finalRef}>{props.element}</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent backgroundColor="#fff" border="3px" borderColor="solid $blue">
          <ModalHeader textColor="#000000">Add Certificate</ModalHeader>
          <ModalCloseButton color='#000000' />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel textColor="#000000">Certificate Name</FormLabel>
              <Select textColor="#000000" backgroundColor="#FFFFFF">
                <option value="fop1" >Certificate1</option>
                <option value="fop2" >Certificate2</option>
                <option value="fop3" >Certificate3</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel textColor="#000000">Issued Authority</FormLabel>
              <Input type="text" name="IssuedAuthority"></Input>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel textColor="#000000">Issued Date</FormLabel>
              <input type="date" name="IssuedDate"></input>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel textColor="#000000">Expiry Date</FormLabel>
              <input type="date" name="ExpiryDate"></input>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel textColor="#000000">Image</FormLabel>
              <input type="file" alt="" name="IssuedDate"></input>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='purple' mr={3}>
              Add
            </Button>
            <Button onClick={onClose} colorScheme='red'>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default UserCertificatePopup;