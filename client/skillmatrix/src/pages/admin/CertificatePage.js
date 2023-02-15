
import React from "react";
import "../admin/CertificatePage.css"
import Sidebar from "../../components/sidebar/Sidebar";
import {
    Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Button, color,
} from '@chakra-ui/react';

import PopupAdd from "../../components/model/PopupAdd";
import DropDown from "../../components/model/Dropdown"

const CertificateList = () => {
    return (
        <div className="adminlist-home">
            <Sidebar />

            <div className="admintable-one">
                <h2 className="ctable-heading">CertificateTable</h2>
                {/* CERTIFICATE TABLE */}

                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>Certificate ID</Th>
                                <Th>Certificate Name </Th>
                                <Th>Category</Th>
                                <Th>Updation</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>1</Td>
                                <Td> Udemy</Td>
                                <Td>Java</Td>
                                {/* btn */}
                                <Td>
                                    <Button as="button" size="xs" classname="edit-btn" colorScheme="teal" >Edit</Button>
                                    <Button size="xs" classname="edit-btn" colorScheme="red">Delete</Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>2</Td>
                                <Td>LinkedIn</Td>
                                <Td>Python</Td>
                                <Td>
                                    <Button size="xs" classname="edit-btn" colorScheme="teal" >Edit</Button>
                                    <Button size="xs" classname="edit-btn" colorScheme="red">Delete</Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <div className="add-btn">
                    <PopupAdd element="Add Skill" btnName="Save" header="Add Certificate" value="ceretificate" category="Category"
                        label="Enter Certificate Name"></PopupAdd>

                </div>
                <h2 className="crequest-heading">Certificate Additional Request</h2>
                <TableContainer>
                    <Table variant='simple' as='table' className="requesttable">
                        <Thead>
                            <Tr>
                                <Th>Certificate ID</Th>
                                <Th>Certificate Name </Th>
                                <Th>Category</Th>
                                <Th>Updation</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>1</Td>
                                <Td>millimetres (mm)</Td>
                                <Td isNumeric>25.4</Td>
                                {/* btn */}
                                <Td>
                                    <Button size="xs" classname="edit-btn" colorScheme="teal" >Accept</Button>
                                    <Button size="xs" classname="edit-btn" colorScheme="red">Deny</Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>2</Td>
                                <Td>centimetres (cm)</Td>
                                <Td isNumeric>30.48</Td>
                                <Td>
                                    <Button size="xs" classname="edit-btn" colorScheme="teal">Accept</Button>
                                    <Button size="xs" classname="edit-btn" colorScheme="red">Deny</Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
export default CertificateList;