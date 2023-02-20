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
  Input,
} from "@chakra-ui/react";

function UserCertificatePopup(props) {
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
        <ModalContent className="cmodal-content">
          <ModalHeader className="cmodal-header">Add Certificate</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel className="cmodal-header">Certificate Name</FormLabel>
              <Select className="cmodal-select">
                <option value="fop1">Certificate1</option>
                <option value="fop2">Certificate2</option>
                <option value="fop3">Certificate3</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel className="cmodal-header">Issued Authority</FormLabel>
              <Input type="text" name="IssuedAuthority"></Input>
            </FormControl>
            <FormControl>
              <FormLabel className="cmodal-header">Issued Date</FormLabel>
              <input type="date" name="IssuedDate"></input>
            </FormControl>
            <FormControl>
              <FormLabel className="cmodal-header">Expiry Date</FormLabel>
              <input type="date" name="ExpiryDate"></input>
            </FormControl>
            <FormControl>
              <FormLabel className="cmodal-header">Image</FormLabel>
              <input type="file" alt="" name="IssuedDate"></input>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button className="cbutton">Add</Button>
            <Button className="cbutton2" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UserCertificatePopup;
