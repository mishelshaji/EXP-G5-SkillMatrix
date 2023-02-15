import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "../admin/ReportPage.css"
import PieChart from "../../components/charts/PieChart";
import PieChartApp from "../../components/charts/PieChart";
import BarChartApp from "../../components/charts/Barchart";
const ReportList = () => {
  return (
    <div>
      <div className="adminreport-home">
        <div className="sidebar-component">
          <Sidebar></Sidebar>
        </div>
        <div className="right-components">
          <div className="charts">
            <div className="piechart">
              <PieChartApp></PieChartApp>
            </div>
            <div className="barchart">
              <BarChartApp></BarChartApp>
            </div>
          </div>
          <div class="container table-responsive py-5">
            <table class="table table-bordered table-hover report-table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col" style={{ fontSize: "14px" }}>Category</th>
                  <th scope="col" style={{ fontSize: "14px" }}>Skill </th>
                  <th scope="col" style={{ fontSize: "14px" }}>No of Employee</th>
                  <th scope="col" style={{ fontSize: "14px" }}>No of Users As Primary</th>
                  <th scope="col" style={{ fontSize: "14px" }}>No of Users As Secondary</th>
                  <th scope="col" style={{ fontSize: "14px" }}>No of Users As Additional</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"  >1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ReportList;