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
  Select
} from '@chakra-ui/react'

function DropDown(props) {
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
        <ModalContent backgroundColor="#000000">
          <ModalHeader textColor="#FFFFFF">{props.header}</ModalHeader>
          <ModalCloseButton color='#FFFFFF' />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel textColor="#FFFFFF">Skill Name</FormLabel>
              <Select textColor="#000000" backgroundColor="#FFFFFF">
                <option value="cop1" >Java</option>
                <option value="cop2" >C#</option>
                <option value="cop3" >.net</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel textColor="#FFFFFF" backgroundColor="#000000">Category</FormLabel>
              <Select textColor="#000000" backgroundColor="#FFFFFF">
                <option value="cop1" >language</option>
                <option value="cop2" >shsdgash</option>
                <option value="cop3" >hbash</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' mr={3}>
              {props.btnName}
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
export default DropDown;