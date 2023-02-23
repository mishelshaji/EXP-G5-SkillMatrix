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
  Input,
} from "@chakra-ui/react";
import "../pages/style/AdminSkill.css";
import { useState, useEffect } from "react";
import axios from "axios";

function PopupAdd(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [data, setData] = useState([]);
  const [skillname, setSkillname] = useState("");
  const [skillcategory, setSkillcategory] = useState(0);
  useEffect(() => {
    axios.get("https://localhost:7227/api/Admin/Categories").then((res) => {
      // console.log(res.data.products);
      // res.data.products.forEach((i) => {
      //   console.log(i);
      setData(res.data)
      })
    }, []);
  const skillpost = () => {
    console.log(skillname,skillcategory);
    
      axios.post("https://localhost:7227/api/Admin/Skill", {
        skillname: skillname,
        categoryId: skillcategory,
      })
      .then((res) => {
        console.log("success")
      })
      .catch((err) => {
        console.log(err)
      });
  };
 
  return (
    <>
      <Button
        onClick={onOpen}
        ref={finalRef}
        ml="23vw"
        mt="10px"
        bgColor={"red.500"}
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
        <ModalContent as="div" className="modal-content">
          <ModalHeader as="div" className="modal-header">
            Add skill
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel class="formlabel">Skill Name</FormLabel>
              <Input type="text" onChange ={(e) => setSkillname(e.target.value)}></Input>
            </FormControl>
            <FormControl>
              <FormLabel class="formlabel">Category</FormLabel>
              <Select
                class="select"
                onChange={(e) => setSkillcategory(e.target.value)}
              >
                {data.map((item) => {
                  return <option value={item.id}>{item.name}</option>;
                })}
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button as="button" className="button" onClick={skillpost}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PopupAdd;
