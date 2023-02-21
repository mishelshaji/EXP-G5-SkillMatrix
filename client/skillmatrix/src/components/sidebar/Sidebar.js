import React from "react";
import { Box } from "@chakra-ui/react";
import "../sidebar/sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar-top">
        <div className="sidebar-div">
          <h2 className="sidebar-logo">
            <span className="logo-firsttext">E</span>xperion
          </h2>
        </div>
        <div className="sidebar-sidenav">
          <div className="sidebar-links">
            <i class="fa-solid fa-house"></i>
            <Link to="/admin/home">
              <h4 className="sidebar-heading">Home</h4>
            </Link>
          </div>
          <div className="sidebar-links">
            <i class="fa-solid fa-people-group"></i>
            <Link to="/admin/userstable">
              <h4 className="sidebar-heading">Users </h4>
            </Link>
          </div>
          <div className="sidebar-links">
            <i class="fa-solid fa-user"></i>
            <Link to="/admin/skill">
              <h4 className="sidebar-heading">Skill</h4>
            </Link>
          </div>
          <div className="sidebar-links">
            <i class="fa-solid fa-file"></i>&nbsp;
            <Link to="/admin/certificate">
              <h4 className="sidebar-heading">Certificate</h4>
            </Link>
          </div>

          <div className="sidebar-links">
            <i class="fa-solid fa-bug"></i>
            <Link to="/admin/report">
              <h4 className="sidebar-heading">Reports</h4>
            </Link>
          </div>

          <div className="sidebar-links">
            <i class="fa-solid fa-address-card"></i>
            <Link to="/admin/about">
              <h4 className="sidebar-heading">About</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
