import React from "react";
import { Box } from '@chakra-ui/react';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div>

            <div className="top">
                <div className="logo-div">
                    <h2 className="logo"><span>E</span>xperion</h2></div>
                    <div  className="sidenav">
                        
                        <div  className="sidebar-links">            
                        <i class="fa-solid fa-user"></i>
                        <h4 onClick={console.log('clicked on sidebar')}>Skill Table</h4>
                        </div>
                        <div className="sidebar-links">            
                        <i class="fa-solid fa-file"></i>&nbsp;
                        <h4 >Certificate Table</h4>
                        </div>
                        <div className="sidebar-links">            
                        <i class="fa-solid fa-people-group"></i>
                        <h4>Users Table</h4>
                        </div>
                        <div className="sidebar-links">            
                        <i class="fa-solid fa-bug"></i>
                        <h4>Reports</h4>
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