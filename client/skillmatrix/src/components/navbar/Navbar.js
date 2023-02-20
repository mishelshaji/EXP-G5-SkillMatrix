import React from 'react';
import '../navbar/Navbar.css'
function Navbar() {
    return (
        <div className="main">            
            <ul>
                <h2 className='logo'><span>E</span>xperion</h2>
                <li><a className="login-btn" href="#home">Login</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    )
}
export default Navbar;
import React from "react";
function TopNavbar() {
  return (
    <div className="navbar">
      <input class="form-control mr-sm-2  search-box" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0 search-btn" type="submit">Search</button>
    </div>
  )
};
export default TopNavbar();