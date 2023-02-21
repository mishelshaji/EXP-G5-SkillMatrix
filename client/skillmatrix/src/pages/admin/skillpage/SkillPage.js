import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import "../skillpage/SkillPage.css";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button } from '@chakra-ui/react'
import PopupAdd from "../../../components/PopupAdd";
import PopupDelete from "../../../components/PopupDelete";
import PopupUpdate from "../../../components/PopupUpdate";

function SkillPage() {
    return (
        <div>
            <div className="adminskillpage-main-container">
                <div> <Sidebar></Sidebar></div>
                <div className="adminskillpage-rightside">
                    <h3 className="adminskillpage-heading">Skill List</h3>
                    <div className="adminskillpagetable-content">
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>Skill Id</Th>
                                        <Th>Category</Th>
                                        <Th>Updation</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>#</Td>
                                        <Td>#</Td>
                                        <Td>
                                            <div>
                                                <PopupUpdate element="Edit"></PopupUpdate>
                                                <PopupDelete element="delete" name="skill" background="red.300"  ></PopupDelete>
                                            </div>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <PopupAdd element="Add New Skill" />
                        <div>
                            <h1 className="adminskillpage-heading">Skill Addition List</h1>
                            <div className="adminskillpagerequest-table">
                                <TableContainer>
                                    <Table variant='simple'>
                                        <Thead>
                                            <Tr>
                                                <Th>Skill Id</Th>
                                                <Th>Category</Th>
                                                <Th>Updation</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr>
                                                <Td>#</Td>
                                                <Td>#</Td>
                                                <Td>
                                                    <div>
                                                        <Button h="8" background="lightgreen">Accept</Button>
                                                        <Button h="8" background="red.300" ml="3" >Deny</Button>
                                                    </div>
                                                </Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SkillPage;