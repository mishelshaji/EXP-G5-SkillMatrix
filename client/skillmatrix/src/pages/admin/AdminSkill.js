import "../style/AdminSkill.css";
import Sidebar from "../../components/sidebar/Sidebar.js";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

function SkillTable() {
  return (
    <div className="side-table">
      <div className="sidebar-component">
        {" "}
        <Sidebar></Sidebar>
      </div>
      <div className="admin-skill-container">
        <h1 class="admin-head1">USERS</h1>
        <div className="skill-table">
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
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default SkillTable;