import React from "react";
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
import "../pages/style/AdminSkill.css";

function PopupAdd(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Button onClick={onOpen} ref={finalRef}>
        {props.element}
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent className="modal-content">
          <ModalHeader className="modal-header">{props.header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel class="formlabel">Skill Name</FormLabel>
              <Select class="select">
                <option value="cop1">Java</option>
                <option value="cop2">C#</option>
                <option value="cop3">.net</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel class="formlabel">Category</FormLabel>
              <Select class="select">
                <option value="cop1">language</option>
                <option value="cop2">shsdgash</option>
                <option value="cop3">hbash</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button className="button">{props.btnName}</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PopupAdd;
