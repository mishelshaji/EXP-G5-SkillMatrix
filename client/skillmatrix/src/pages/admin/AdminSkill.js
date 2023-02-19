import "../style/AdminSkill.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Input,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function SkillTable() {
  return (
    <div>
      <div className="admin-skill-container">
        <div className="head-search">
          <h1 class="admin-head1">USERS</h1>
          <div class="search">
            <Input
              type="search"
              className="input"
              placeholder="Search user.."
            ></Input>
            <Button className="button-search">
              <SearchIcon />
            </Button>
          </div>
        </div>
        <TableContainer>
          <Table className="admin-usertable">
            <Thead>
              <Tr className="tr-head">
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
      </div>
    </div>
  );
}

export default SkillTable;
