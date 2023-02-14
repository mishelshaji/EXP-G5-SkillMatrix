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
