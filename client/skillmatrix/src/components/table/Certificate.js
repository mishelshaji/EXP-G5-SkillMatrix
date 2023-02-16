import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import "../table/Skill"
function CertificateTable() {
    return (
        <div>
            <TableContainer marginLeft="40px" marginTop="20px">
                <Table border="2px solid black" variant='simple' size="md" w="300px" borderRadius="10px">
                    <Thead background="dodgerblue" >
                        <Tr>
                            <Th color="white">Id</Th>
                            <Th color="white">Skill Name</Th>
                            <Th color="white" >Category</Th>
                            <Th color="white" >Type</Th>
                            <Th color="white" >Proficeincy Level</Th>
                            <Th color="white" >Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>#</Td>
                            <Td>#</Td>
                            <Td >#</Td>
                            <Td>#</Td>
                            <Td>#</Td>
                            <Td >
                                <Button colorScheme='blue' width="50px" height="30px" m="10px" className="edit-btn" background="green">Edit</Button>
                                <Button colorScheme='blue' width="50px" height="30px" className="delete-btn" background="red">Delete</Button>
                            </Td>
                        </Tr>

                    </Tbody>
                </Table>
            </TableContainer>

        </div>
    )
}
export default CertificateTable;