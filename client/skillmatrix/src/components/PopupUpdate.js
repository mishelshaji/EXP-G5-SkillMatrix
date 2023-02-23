import React, { useEffect, useState } from "react";
import axios from"axios"; 
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
  Input,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import "../pages/style/AdminSkill.css";

function PopupUpdate(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [err,setErr] = useState("")
  const[data,setData]=useState([]);
  const[skillname,setSkillname]=useState("");
  const[skillcategory,setSkillcategory]=useState(0);
  useEffect(()=>{
    axios.get("https://localhost:7227/api/Admin/Categories")
    .then((res)=>{
      console.log(res.data)
      setData(res.data);
    });
  },[]);
  const skillpost = async()=>{
    console.log('line skillpost')
    
    console.log(skillname,skillcategory)
    console.log('skill category',skillcategory)
   try  {
      const result = await axios
    .put(`https://localhost:7227/api/Admin/Skill/${props.id}`,{
      name:skillname,
      categoryId:skillcategory,
    })
    onClose();
    return window.location.reload();
  }
  catch(err){
    console.log(err.response.data.Name[0])
    setErr(err.response.data.Name[0])
  }

   
  };

  return (
    <>
      <Button onClick={onOpen} ref={finalRef} h="8" background="lightgreen">
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
          <ModalHeader className="modal-header">Add Skill</ModalHeader>
          <ModalCloseButton />
       
          <ModalBody>
            <FormControl>
              <FormLabel class="formlabel">Skill Name</FormLabel>
              <Input type="text" onChange={(e)=>setSkillname(e.target.value)}/>
            </FormControl>
            <FormControl>
              <FormLabel class="formlabel">Category</FormLabel>
              <Select as = 'select' class="select"
               onChange={(e)=>setSkillcategory(e.target.value)}
              >
                {data.map((item)=>{
                  console.log(item.id,item.name)
                  return<option value={item.id}>{item.name}</option>;
                })}
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button as="button" className="button" onClick={skillpost}>{props.element}</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PopupUpdate;
