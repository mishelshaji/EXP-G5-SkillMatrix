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
            <div className="main-container">
                <div className="sidebar-component"> <Sidebar></Sidebar></div>
                <div className="rightside">
                    <h3 className="skillpage-heading">Skill List</h3>
                    <div className="skilltable-content">
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
                                                <PopupDelete element ="delete" name="skill" background="red.300"  ></PopupDelete>
                                            </div>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <PopupAdd element="Add New Skill"/>
                        <div>
                         <h1 className="skillpage-heading">Skill Addition List</h1>
                            <div className="request-table">
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
                                                        <Button  h="8" background="lightgreen">Accept</Button>
                                                        <Button  h="8" background="red.300" ml="3" >Deny</Button>
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