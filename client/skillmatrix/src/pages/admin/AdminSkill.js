import '../style/AdminSkill.css';
import Sidebar from '../../components/sidebar/Sidebar.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer
} from '@chakra-ui/react';

function SkillTable() {
    const [deleteState, setDeleteState] = useState(0);

    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get(
                    `https://localhost:7227/UserProfiles`
                );
                console.log(res.data);
                setData(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, []);

    return (
        <div className="side-table">
            <div className="sidebar-component">
                {' '}
                <Sidebar></Sidebar>
            </div>
            <div className="admin-skill-container">
                <h1 className="admin-head1">USERS</h1>
                <div className="skill-table">
                    <TableContainer>
                        <Table className="admin-usertable">
                            <Thead>
                                <Tr className="tr-head">
                                    <Th>Sl no</Th>
                                    <Th>User Name</Th>
                                    <Th>Email</Th>
                                    <Th>Ph No</Th>
                                    <Th>Date Of Birth</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {data.map((dt, index) => {
                                    return (
                                        <Tr>
                                            <Td>{index}</Td>
                                            <Td>{dt.name}</Td>
                                            <Td>{dt.email}</Td>
                                            <Td>{dt.phoneNumber}</Td>
                                            <Td>{dt.dateOfBirth}</Td>
                                        </Tr>
                                    );
                                })}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
}

export default SkillTable;
