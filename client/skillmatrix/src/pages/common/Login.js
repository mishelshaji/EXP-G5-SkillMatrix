import React from 'react';
import '../style/Login.css'
import TextBox from '../../components/Textbox';
import Button from '../../components/Button';
import img from '../../images/img.png';

function Login() {
    return (
        <div className='fullpage'>
            <div className='container'>
                <div className='leftcontainer'>
                    <hl id="heading">Welcome Back</hl>
                    <div id="messagebox">
                        <label for="email">Email</label>
                        <TextBox type="email" />
                        <label for="password">Password</label>
                        <TextBox type="password" />
                        <div className='button'>
                            <Button id="login" value="Login" />
                        </div>
                    </div>
                </div>
                <div className='rightcontainer'>
                    <img src={img} alt="OfficeImage"/>
                </div>
            </div>
        </div>
    )
}

export default Login;