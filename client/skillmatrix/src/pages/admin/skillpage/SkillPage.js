import React, { useEffect, useState } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import '../skillpage/SkillPage.css';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button
} from '@chakra-ui/react';
// import PopupAdd from "../../../components/PopupAdd";
import PopupDelete from '../../../components/PopupDelete';
import PopupAdd from '../../../components/PopupAdd';
import axios from 'axios';
import PopupUpdate from '../../../components/PopupUpdate';

function SkillPage() {
    const [data, setData] = useState([]);
    const [data1,setData1] = useState([]);
    useEffect(() => {
        axios.get(`https://localhost:7227/api/Admin/Skill/SkillRequestPending`).then((res) => 
        { 
           if(res.data)
           {
                setData1(res.data);
                console.log("result is",res.data1);
           }
        }).catch(err => console.log(err))
         getSkill() 
        }, []); 
        const getSkill = ()=>{
             axios.get(`https://localhost:7227/api/Admin/Skill`).then((res) => 
             { 
                if(res.data)
                {
                     setData(res.data);
                }
             }).catch(err => console.log(err))
             }
              const Accept = (id) => 
              {
                axios.put(`https://localhost:7227/api/Admin/Skill/${id}/UpdatePending`)
                .then((res)=>{
                    console.log("successfully updated")
                    
                 })}

    return (
        <div>
            <div className="adminskillpage-main-container">
                <div>
                    {' '}
                    <Sidebar></Sidebar>
                </div>
                <div className="adminskillpage-rightside">
                    <h3 className="adminskillpage-heading">Skill List</h3>
                    <div className="adminskillpagetable-content">
                        <TableContainer>
                            <Table variant="simple">
                                <Thead>
                                    <Tr>
                                        <Th>Skill Name</Th>
                                        <Th>Category</Th>
                                        <Th>Updation</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data
                                        .filter((item) => item.status === 1)
                                        .map((item) => (
                                            <Tr>
                                                <Td>{item.name}</Td>
                                                <Td>{item.category.name}</Td>
                                                <Td>{item.Status}</Td>
                                                <Td>
                                                    <div>
                                                        <PopupUpdate
                                                            skillId={item.id}
                                                            element="Edit"
                                                            id ={item.id}
                                                        ></PopupUpdate>
                                                        <PopupDelete
                                                            element="delete"
                                                            name="skill"
                                                            background="red.300"
                                                            id={item.id}
                                                            api="https://localhost:7227/api/Admin/Skill"
                                                        ></PopupDelete>
                                                    </div>
                                                </Td>
                                            </Tr>
                                        ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <PopupAdd element="Add New Skill" />
                        <div>
                            <h1 className="adminskillpage-heading">
                                Skill Addition List
                            </h1>
                            <div className="adminskillpagerequest-table">
                                <TableContainer>
                                    <Table variant="simple">
                                        <Thead>
                                            <Tr>
                                                <Th>Skill Name</Th>
                                                <Th>Category</Th>
                                                <Th>Updation</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {data1
                                                .filter(
                                                    (item) => item.status === 2
                                                )
                                                .map((item) => (
                                                    <Tr>
                                                        <Td>{item.name}</Td>
                                                        <Td>
                                                            {item.category.name}
                                                        </Td>
                                                        <Td>
                                                            <div>
                                                                <Button
                                                                    h="8"
                                                                    background="lightgreen"
                                                                    onClick={Accept(item.id)}       
                                                                >   
                                                                    Accept
                                                                </Button>
                                                                <Button
                                                                    h="8"
                                                                    background="red.300"
                                                                    ml="3"
                                                                >
                                                                    Deny
                                                                </Button>
                                                            </div>
                                                        </Td>
                                                    </Tr>
                                                ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillPage;
