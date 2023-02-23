import React from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import '../report/ReportPage.css';
import PieChart from '../../../components/charts/PieChart';
import PieChartApp from '../../../components/charts/PieChart';
import BarChartApp from '../../../components/charts/Barchart';
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
const ReportList = () => {
    return (
        <div>
            <div className="adminreport-home">
                <div className="sidebar-component">
                    <Sidebar></Sidebar>
                </div>
                <div>
                    <h2 className="chart-heading">Skill Charts</h2>
                    <div className="charts">
                        <div className="piechart">
                            <PieChartApp></PieChartApp>
                        </div>
                        <div className="barchart">
                            <BarChartApp></BarChartApp>
                        </div>
                    </div>
                    {/* <h2 className="adminreport-heading">
                        Skill Category Wise Report
                    </h2> */}
                    {/* <div>
                        <TableContainer ml={16}>
                            <Table variant="striped" colorScheme="teal">
                                <Thead>
                                    <Tr>
                                        <Th>To convert</Th>
                                        <Th>into</Th>
                                        <Th isNumeric>multiply by</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>inches</Td>
                                        <Td>millimetres (mm)</Td>
                                        <Td isNumeric>25.4</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ReportList;
