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
} from "@chakra-ui/react";

function PopupDelete(props) {
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
        <ModalContent className="dmodal-content">
          <ModalHeader className="dmodal-header">
            delete {props.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className="dmodal-header">
            Are you sure You want to delete this {props.name}?
          </ModalBody>
          <ModalFooter>
            <Button className="button">delete</Button>
            <Button onClick={onClose}>cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PopupDelete;
