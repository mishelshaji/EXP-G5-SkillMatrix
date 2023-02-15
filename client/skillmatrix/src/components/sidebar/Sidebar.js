import React from "react";
import { Box } from '@chakra-ui/react';
import '../sidebar/sidebar.css';
import {Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <div>

            <div className="top">
                <div className="logo-div">
                    <h2 className="logo"><span className="logo-firsttext">E</span>xperion</h2></div>
                    <div  className="sidenav">
                        
                        <div  className="sidebar-links">            
                        <i class="fa-solid fa-user"></i>
                        <Link to="admin/skilltable"><h4 onClick={console.log('clicked on sidebar')}>Skill Table</h4></Link>
                        </div>
                        <div className="sidebar-links">            
                        <i class="fa-solid fa-file"></i>&nbsp;
                        <Link to="/admin/certificate"><h4>Certificate Table</h4></Link>
                        </div>
                        <div className="sidebar-links">            
                        <i class="fa-solid fa-people-group"></i>
                        <Link to="/admin/userstable"><h4>Users Table</h4></Link>
                        </div>
                        <div className="sidebar-links">            
                        <i class="fa-solid fa-bug"></i>
                        <Link to="/admin/reports"><h4>Reports</h4></Link>
                        </div>
                        <div className="sidebar-links">            
                        <i class="fa-solid fa-address-card"></i>
                        <h4>About</h4>
                        </div>
                        
                    </div>
                </div>
            </div>
    );
}
export default Sidebar;