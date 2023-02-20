import React from "react";
import "../pages/style/AdminSkill.css";
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
  Select,
} from "@chakra-ui/react";

function UserSkillPopupUpdate(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Button onClick={onOpen} ref={finalRef} colorScheme='blue' width="50px" height="30px" m="10px" className="edit-btn" background="green">
        {props.element}
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent as = "div" className="smodal-content">
          <ModalHeader className="smodal-header">Update Skill</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel className="dmodal-header">Skill Name</FormLabel>
              <Select className="select">
                <option value="fop1">Java</option>
                <option value="fop2">C#</option>
                <option value="fop3">Python</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel className="dmodal-header">Skill Type</FormLabel>
              <Select className="select">
                <option value="sop1">Primary</option>
                <option value="sop2">Secondary</option>
                <option value="sop3">Additional</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel className="dmodal-header">Profficiency</FormLabel>
              <Select className="select">
                <option value="top1">Beginner</option>
                <option value="top2">Intermediate</option>
                <option value="top3">Expert</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button as = "button" className="sbutton">Update</Button>
            <Button as = "button" className="sbutton2" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UserSkillPopupUpdate;
