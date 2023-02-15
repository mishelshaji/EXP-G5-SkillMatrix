import '../style/AdminSkill.css';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
  Button
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

function SkillTable() {
  return (
    <div>
      <h1 class="head1">USERS</h1>
      <div class="search">
        <Input type="search" maxWidth="15%" placeholder="Search user.."></Input>
        <Button bgColor="#89CFF0" marginBottom="7px"><SearchIcon /></Button>
      </div>
      <TableContainer>
        <Table variant='simple' size="md" marginTop="10%" marginLeft="25%" maxWidth="60%">
          <Thead>
            <Tr bgColor="#808080">
              <Th>Sl no</Th>
              <Th>User Name</Th>
              <Th>Business Unit</Th>
              <Th>Team</Th>
              <Th>Role</Th>
              <Th>Location</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Sifana ks</Td>
              <Td>PES</Td>
              <Td>ABC</Td>
              <Td>Associate Software engineer</Td>
              <Td>Kochi</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Kavitha BS</Td>
              <Td>PES</Td>
              <Td>ABC</Td>
              <Td>Associate Software engineer</Td>
              <Td>Trivandrum</Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>Surabhi</Td>
              <Td>PES</Td>
              <Td>ABC</Td>
              <Td>Associate Software engineer</Td>
              <Td>Trivandrum</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>)
}

export default SkillTable;