import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../home/AdminHome.css';
import Sidebar from '../../../components/sidebar/Sidebar';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer
} from '@chakra-ui/react';

function AdminHome() {
    const Skills = [
        {
            skillId: 1,
            skillname: 'python',
            category: 'java'
        },
        {
            skillId: 2,
            skillname: 'java',
            category: 'Login'
        }
    ];
    const Certificate = [
        {
            certificateId: 1,
            certificatename: 'python',
            category: 'programming'
        },
        {
            certificateId: 2,
            certificatename: 'java',
            category: 'programming'
        }
    ];
    return (
        <div>
            <div className="adminpage-main-container">
                <div>
                    <Sidebar></Sidebar>
                </div>
                <div >
                    <div >
                        <div className="admin-dashboard">
                            <h2 className="admin-dashboard-heading">
                                Admin Dashboard
                            </h2>
                        </div>
                    </div>
                    <div className="admin-dashboard-middle-content">
                        <div className="adminhome-middle-one">
                            <h3 className="adminhome-middle-heading">No of Users</h3>
                        </div>
                        <div className="adminhome-middle-two">
                            <h3 className="adminhome-middle-heading">
                                {' '}
                                Total No Of Skills
                            </h3>
                        </div>
                        <div className="adminhome-middle-three">
                            <h3 className="adminhome-middle-heading">
                                Total No Of Certificate
                            </h3>
                        </div>
                    </div>
                    <div className="adminpage-table-content">
                        <TableContainer ml="16px" mt="20px">
                            <Table variant="simple" w="66vw" background="teal">
                                <Thead background="#F7F9F9">
                                    <Tr>
                                        <Th>Skill Id</Th>
                                        <Th>Skill Name</Th>
                                        <Th>Category</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {Skills.map((i) => (
                                        <Tr>
                                            <Td>{i.skillId}</Td>
                                            <Td>{i.skillname}</Td>
                                            <Td>{i.category}</Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <TableContainer ml="16px" mt="50px">
                            <Table variant="simple" w="66vw" background="teal">
                                <Thead background="#F7F9F9">
                                    <Tr>
                                        <Th>Certificate Id</Th>
                                        <Th>Certificate Name</Th>
                                        <Th>Category</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {Certificate.map((i) => (
                                        <Tr>
                                            <Td>{i.certificateId}</Td>
                                            <Td>{i.certificatename}</Td>
                                            <Td>{i.category}</Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdminHome;
