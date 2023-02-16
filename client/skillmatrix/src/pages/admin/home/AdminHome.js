import React from "react";
import "../home/AdminHome.css";
import Sidebar from "../../../components/sidebar/Sidebar";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react';

function AdminHome() {
    return (
        <div>
            <div className="main-container">
                <div className="left">
                    <Sidebar></Sidebar>
                </div>
                <div className="right">
                    <div className="top-content">
                        <div className="admin-dashboard">
                            <h2 className="dashboard-heading">Admin Dashboard</h2>
                        </div>
                    </div>
                    <div className="middle-content">
                        <div className="middle-one"><h3 className="middle-heading">No of Users</h3></div>
                        <div className="middle-two"><h3 className="middle-heading"> Total No Of Skills</h3></div>
                        <div className="middle-three"><h3 className="middle-heading">Total No Of Certificate</h3></div>
                    </div>
                    <div className="table-content">
                        <TableContainer ml="16px" mt="20px">
                            <Table variant='simple' w="66vw" background="teal">
                                <Thead background="#F7F9F9">
                                    <Tr>
                                        <Th>Skill Id</Th>
                                        <Th>Skill Name</Th>
                                        <Th>Category</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>..</Td>
                                        <Td>..</Td>
                                        <Td>..</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <TableContainer ml="16px" mt="50px">
                            <Table variant='simple' w="66vw" background="teal">
                                <Thead background="#F7F9F9">
                                    <Tr>
                                        <Th>Certificate Id</Th>
                                        <Th>Certificate Name</Th>
                                        <Th>Category</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>..</Td>
                                        <Td>..</Td>
                                        <Td>..</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default AdminHome;