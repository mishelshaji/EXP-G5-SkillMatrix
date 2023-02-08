import React from 'react';
import '../style/App.css'
import img1 from '../../images/img1.jpg';
import TextBox from '../../components/Textbox.js';
import Button from '../../components/Button.js';

function Register() {
  return (
    <div className='fullpage'>
      <div className='container'>
        <div className='left'>
          <img src={img1} alt="imagehere" />
        </div>
        <div className='right'>
          <h2>Register</h2>
          <div className='form'>
            <div className='firstrow'>
              <div className='name'>
                <label for="text">Name</label>
                <TextBox /><br />
              </div>
              <div className='email'>
                <label for="text">Email</label>
                <TextBox />
              </div>
            </div>
            <div className='secondrow'>
              <div className='phoneno'>
                <label for="text">Phone no</label>
                <TextBox /><br />
              </div>
              <div className='location'>
                <label for="text">Location</label>
                <TextBox />
              </div>
            </div>
            <div className='thirdrow'>
              <div className='role'>
                <label for="text">Role</label>
                <TextBox /><br />
              </div>
              <div className='team'>
                <label for="text">Team</label>
                <TextBox />
              </div>
            </div>
            <div className='fourthrow'>
              <div className='password'>
                <label for="text">Password</label>
                <TextBox /><br />
              </div>
              <div className='confirm'>
                <label for="text">Confirm password</label>
                <input type="text"></input>
              </div>
            </div>
            {/* <button id = "register">Create account</button> */}
            <Button id="register" value="Create account" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
