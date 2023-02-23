import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../pages/style/AdminSkill.css';
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
import httpClient from '../service/httpClient';
import { Navigate, useNavigate } from 'react-router-dom';

function UserSkillPopup(props) {

    const userId = `${props.userId}`;
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('useeffect');
        httpClient
            .get(`https://localhost:7227/api/Admin/Skill`)
            .then((res) => {
                console.log('this is the data ');
                console.log(res);
                setData(res.data);
            })
            .catch((err) => {
                console.log('catch ');
                console.log(err);
            });
    }, []);

    const [userSkillId, setUserSkillName] = useState();
    const [userSkillType, setUserSkillType] = useState();
    const [userProficiency, setUserProficiency] = useState();

    const userSkillPost = () => {
        console.log(userSkillId, userSkillType, userProficiency);

        var data = {
            skillType: userSkillType,
            proficiency: userProficiency,
            applicationUserId: userId,
            skillId: userSkillId
        }

        axios.post('https://localhost:7227/api/User/UserSkill', data)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    return (
        <>
            <Button
                onClick={onOpen}
                ref={finalRef}
                ml={props.ml}
                mt="10px"
                background="aquamarine"
                h="40px"
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
                        Add Skill
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel className="dmodal-header">
                                Skill Name
                            </FormLabel>
                            <Select
                                className="select"
                                onChange={(e) =>
                                    setUserSkillName(e.target.value)
                                }
                            >
                                {data.map((item, i) => {
                                    return (
                                        <option value={item.id}>
                                            {item.name}
                                        </option>
                                    );
                                })}
                                {/* <option value="fop1">Java</option>
                <option value="fop2">C#</option>
                <option value="fop3">Python</option> */}
                            </Select>
                        </FormControl>
                        <FormControl mt={4}>
                            <FormLabel className="dmodal-header">
                                Skill Type
                            </FormLabel>
                            <Select
                                className="select"
                                onChange={(e) =>
                                    setUserSkillType(e.target.value)
                                }
                            >
                                <option value="1">Primary</option>
                                <option value="2">Secondary</option>
                                <option value="3">Additional</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel className="dmodal-header">
                                Proficiency
                            </FormLabel>
                            <Select
                                className="select"
                                onChange={(e) =>
                                    setUserProficiency(e.target.value)
                                }
                            >
                                <option value="1">Beginner</option>
                                <option value="2">Intermediate</option>
                                <option value="3">Expert</option>
                            </Select>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            as="button"
                            className="sbutton"
                            onClick={userSkillPost}
                        >
                            Add
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

export default UserSkillPopup;
