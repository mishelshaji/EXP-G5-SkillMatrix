import React, { useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer
} from '@chakra-ui/react';

import '../table/Skill';
import UserSkillPopupUpdate from '../UserSkillPopupUpdate';
import PopupDelete from '../PopupDelete';
import { useEffect } from 'react';
import httpClient from '../../service/httpClient';
import { getRole } from '../../service/tokenService';
import jwt_decode from 'jwt-decode';
import PopupAdd from '../PopupUpdate';

function SkillTable(props) {
    const [data, setData] = useState([]);
    const token = localStorage.getItem('authToken');
    const decoded = jwt_decode(token);
    const result = getRole(token);
    useEffect(() => {
        console.log('useeffect');
        httpClient
            .get(
                `https://localhost:7227/api/User/UserSkill/${props.userId}/UserSkills`
            )
            .then((res) => {
                console.log('this is the data ');
                console.log(res);
                setData(res.data);
            })
            .catch((err) => {
                console.log('catch ');
                console.log(err);
            });
    }, []);
    return (
        <div>
            <TableContainer marginLeft="40px" marginTop="20px">
                <Table
                    border="1.5px solid black"
                    borderColor="#E1EEDD"
                    variant="simple"
                    size="md"
                    w="300px"
                    borderRadius="10px"
                >
                    <Thead background="#E1EEDD">
                        <Tr>
                            <Th color="black">Id</Th>
                            <Th color="black">Skill Name</Th>
                            <Th color="black">Category</Th>
                            <Th color="black">Type</Th>
                            <Th color="black">Proficeincy Level</Th>
                            <Th color="black">Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((item, i) => {
                            return (
                                <Tr>
                                    <Td>{i + 1}</Td>
                                    <Td>{item.skill.name}</Td>
                                    <Td>{item.skill.category.name}</Td>
                                    <Td>
                                        {item.skillType === 0
                                            ? 'primary'
                                            : item.skillType === 1
                                            ? 'secondary'
                                            : 'additional'}
                                    </Td>
                                    {' '}
                                    <Td>
                                        {item.proficiency === 0
                                            ? 'beginner'
                                            : item.proficiency === 1
                                            ? 'intermediate'
                                            : 'expert'}
                                    </Td>
                                    <Td>
                                        <PopupAdd
                                            element="Edit"
                                            id={item.id}
                                            userId={result}
                                        />
                                        <PopupDelete
                                            element="delete"
                                            name="skill"
                                            id={item.id}
                                            api="https://localhost:7227/api/User/UserSkill"
                                        ></PopupDelete>
                                    </Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default SkillTable;
