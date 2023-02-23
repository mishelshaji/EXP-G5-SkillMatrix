import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './PopupDelete.css';
import { useToast } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react';

export default function PopupDelete(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const handleDelete = () => {
        const notify = () => toast('Skill Deleted succesfully');
        axios
            .delete(`${props.api}/${props.id}`)
            .then((res) => {
                console.log(res);
                if (res) {
                    notify();
                    onClose();
                }
            })
            .catch((err) => console.log(err));
        // window.location.reload()
    };
    console.log(props.id);
    return (
        <>
            <Button
                onClick={onOpen}
                ref={finalRef}
                bg={'red.300'}
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
                        <Button
                            as="button"
                            className="button"
                            onClick={handleDelete}
                        >
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
