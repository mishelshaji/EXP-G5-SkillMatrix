import Sidebar from "./components/Sidebar";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer
} from '@chakra-ui/react';
function Comp(){
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
    return(
        <div>
        <div className="main-container">
            <div className="leftt">
                <Sidebar></Sidebar>
            </div>
            <div className="right">
                <div className="top-content">
                    <div className="admin-dashboard">
                        <h2 className="dashboard-heading">
                            Admin Dashboard
                        </h2>
                    </div>
                </div>
                <div className="middle-content">
                    <div className="middle-one">
                        <h3 className="middle-heading">No of Users</h3>
                    </div>
                    <div className="middle-two">
                        <h3 className="middle-heading">
                            {' '}
                            Total No Of Skills
                        </h3>
                    </div>
                    <div className="middle-three">
                        <h3 className="middle-heading">
                            Total No Of Certificate
                        </h3>
                    </div>
                </div>
                <div className="table-content">
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
    )
}
export default Comp;