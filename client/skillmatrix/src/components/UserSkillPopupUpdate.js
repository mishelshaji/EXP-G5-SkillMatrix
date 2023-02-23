import React from 'react';
import '../pages/style/AdminSkill.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
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

function UserSkillPopupUpdate(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const [data, setData] = useState([]);
    const [skillname, setSkillname] = useState('');
    const [skilltype, setSkillType] = useState('');
    const [proficiency, setProficiency] = useState('');
    const userId = `${props.userId}`;
    useEffect(() => {
        axios.get('https://localhost:7227/api/Admin/Skill').then((res) => {
            setData(res.data);
        }, []);
    }, []);
    const skillPost = async () => {
        await axios.post(
            `https://localhost:7227/api/User/UserSkill/${props.id}`,
            {
                skillId: skillname,
                skillType: skilltype,
                proficiency: proficiency,
                applicationUserId: userId,
            }
        );
    };
    return (
        <>
            <Button
                onClick={onOpen}
                ref={finalRef}
                colorScheme="blue"
                width="50px"
                height="30px"
                m="10px"
                className="edit-btn"
                background="green"
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
                <ModalContent as="div" className="smodal-content">
                    <ModalHeader className="smodal-header">
                        Update Skill
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel className="dmodal-header">
                                Skill Name
                            </FormLabel>
                            <Select
                                className="select"
                                onChange={(e) => setSkillname(e.target.value)}
                            >
                                {data
                                    .filter((item) => item.status === 1)
                                    .map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                           {' '}
                                        </option>
                                    ))}
                            </Select>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel className="dmodal-header">
                                Skill Type
                            </FormLabel>
                            <Select
                                className="select"
                                onChange={(e) => setSkillType(e.target.value)}
                            >
                                <option value="1">Primary</option>
                                <option value="2">Secondary</option>
                                <option value="3">Additional</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel className="dmodal-header">
                                Profficiency
                            </FormLabel>
                            <Select
                                className="select"
                                onChange={(e) => setProficiency(e.target.value)}
                            >
                                <option value="1">Beginner</option>
                                <option value="2">Intermediate</option>
                                <option value="3">Expert</option>
                            </Select>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button as="button" className="sbutton" onClick={skillPost}>
                            Update
                        </Button>
                        <Button
                            as="button"
                            className="sbutton2"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default UserSkillPopupUpdate;
