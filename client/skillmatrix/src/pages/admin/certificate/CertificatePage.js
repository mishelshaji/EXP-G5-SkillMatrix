
import React from "react";
import "../certificate/CertificatePage.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import {
    Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Button, color,
} from '@chakra-ui/react';
import PopupAdd from "../../../components/model/PopupAdd";
import DropDown from "../../../components/model/Dropdown"

const CertificateList = () => {
    return (
        <div className="admincertificatepage-home">
            <Sidebar />
            <div classname="admincertificate-page-right-component">
                <div className="admincertificate-pagetable-one">
                    <h2 className="adminpagectable-heading">CertificateTable</h2>
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
                                        <Button as="button" size="xs" colorScheme="teal" >Edit</Button>
                                        <Button size="xs" colorScheme="red">Delete</Button>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>2</Td>
                                    <Td>LinkedIn</Td>
                                    <Td>Python</Td>
                                    <Td>
                                        <Button size="xs" colorScheme="teal" >Edit</Button>
                                        <Button size="xs" colorScheme="red">Delete</Button>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                    <div className="certificatepage-add-button">
                        <PopupAdd element="Add Skill" btnName="Save" header="Add Certificate" value="ceretificate" category="Category"
                            label="Enter Certificate Name"></PopupAdd>
                    </div>
                    <h2 className="certificate-addrequest-heading">Certificate Additional Request</h2>
                    <TableContainer>
                        <Table variant='simple' as='table' className="admincertificate-requesttable">
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
                                    <Td>25.4</Td>
                                    {/* btn */}
                                    <Td>
                                        <Button size="xs" colorScheme="teal" >Accept</Button>
                                        <Button size="xs" colorScheme="red">Deny</Button>
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>2</Td>
                                    <Td>centimetres (cm)</Td>
                                    <Td isNumeric>30.48</Td>
                                    <Td>
                                        <Button size="xs" colorScheme="teal">Accept</Button>
                                        <Button size="xs" colorScheme="red">Deny</Button>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
}
export default CertificateList;