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
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get(`https://localhost:7227/api/Admin/Skill`).then((res)=>{
            setData(res.data);
        });
    },[]);
    return (
        <div>
            <div className="adminpage-main-container">
                <div>
                    <Sidebar></Sidebar>
                </div>
                <div className='admin-dashboard-container'>
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
                        {/* <div className="adminhome-middle-three">
                            <h3 className="adminhome-middle-heading">
                                Total No Of Certificate
                            </h3>
                        </div> */}
                    </div>
                    <div className="adminpage-table-content">
                        <TableContainer ml="16px" mt="20px">
                            <Table variant="simple" w="66vw" background="teal">
                                <Thead background="#F7F9F9">
                                    <Tr>
                                        <Th>Skill Name</Th>
                                        <Th>Category</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                  {data
                                  .filter((item)=>item.status === 1)
                                  .map((item)=>(
                                    <Tr>
                                    <Td>{item.name}</Td>
                                    <Td>{item.category.name}</Td>
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
