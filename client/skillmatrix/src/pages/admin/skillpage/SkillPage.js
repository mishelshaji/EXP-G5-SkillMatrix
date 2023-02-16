import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import "../skillpage/SkillPage.css";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Button } from '@chakra-ui/react'
import PopupAdd from "../../../components/model/PopupAdd";

function SkillPage() {
    return (
        <div>
            <div className="main-container">
                <div className="sidebar-component"> <Sidebar></Sidebar></div>
                <div className="rightside">
                    <h3 className="skillpage-heading">Skill List</h3>
                    <div class="input-group rounded search-box">
                        <input type="search" class="form-control rounded search-btn" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <span class="input-group-text border-0" id="search-addon">
                            <i class="fas fa-search"></i>
                        </span>
                    </div>
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
                                                <Button width="" h="8" background="lightgreen" >Edit</Button>
                                                <Button width="" h="8" background="red.300" ml="3" >Delete</Button>
                                            </div>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <PopupAdd ml="23vw" mt="10px" element="Add New Skill" header="Add Skill" label="Enter The Skills" btnName="Save"></PopupAdd>
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
                                                        <Button width="" h="8" background="lightgreen" >Acept</Button>
                                                        <Button width="" h="8" background="red.300" ml="3" >Deny</Button>
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