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
                <Table border="1.5px solid black" borderColor="#E1EEDD" variant='simple' size="md" w="300px" borderRadius="10px">
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
                        <Tr>
                            <Td>#</Td>
                            <Td>#</Td>
                            <Td>#</Td>
                            <Td>#</Td>
                            <Td>#</Td>
                            <Td>
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