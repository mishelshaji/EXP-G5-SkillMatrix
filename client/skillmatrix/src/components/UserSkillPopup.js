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
} from '@chakra-ui/react';

function UserSkillPopup(props) {
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
        <ModalContent backgroundColor="#D7A1F9">
          <ModalHeader textColor="#FFFFFF">Add Skill</ModalHeader>
          <ModalCloseButton color='#FFFFFF' />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel textColor="#FFFFFF">Skill Name</FormLabel>
              <Select textColor="#000000" backgroundColor="#FFFFFF">
                <option value="fop1" >Java</option>
                <option value="fop2" >C#</option>
                <option value="fop3" >Python</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel textColor="#FFFFFF">Skill Type</FormLabel>
              <Select textColor="#000000" backgroundColor="#FFFFFF">
                <option value="sop1" >Primary</option>
                <option value="sop2" >Secondary</option>
                <option value="sop3" >Additional</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel textColor="#FFFFFF">Profficiency</FormLabel>
              <Select textColor="#000000" backgroundColor="#FFFFFF">
                <option value="top1" >Beginner</option>
                <option value="top2" >Intermediate</option>
                <option value="top3" >Expert</option>
              </Select>
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

export default UserSkillPopup;