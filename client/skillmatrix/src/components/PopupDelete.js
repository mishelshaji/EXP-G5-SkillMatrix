import React from "react";
import "./PopupDelete.css";
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
      <Button
        onClick={onOpen}
        ref={finalRef}
        bg={"red.300"}
        h="8"
        ml="3"
        colorScheme="blue"
        width="50px"
        height="30px"
        className="delete-btn"
        background="red"
      >
        {props.element}
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent as="div" className="dmodal-content">
          <ModalHeader className="dmodal-header">
            delete {props.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className="dmodal-header">
            Are you sure You want to delete this {props.name}?
          </ModalBody>
          <ModalFooter>
            <Button as="button" className="button">
              delete
            </Button>
            <Button as="button" onClick={onClose}>
              cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PopupDelete;
