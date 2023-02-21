import React from 'react';
import '../style/App.css'
import TextBox from '../../components/Textbox.js';
import image from '../../images/register.jpg'
import Button from '../../components/Button.js';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

function Register() {
    const schema = yup.object().shape(
        {
            name: yup.string().required("Name is required"),
            email: yup.string().email('email is not valid').required("Email is required"),
            phone: yup.number("Phone number is not valid").required("Phone no is required"),
            dob: yup.string().required("Dob is required"),
            password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, " Password must be of at least 8 alphanumeric character").required("Password is required"),
            confirm: yup.string().oneOf([yup.ref("password"), "password doesnt match"]).required("password is required")
        })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const reg = (data) => {
        console.log(data);
    };
    console.log(errors);
    return (
        <div className='fullpage'>
            <div className='container'>
                <div className='register-left'>
                    <img src={image} alt="office images" className='office-images' />
                </div>
                <div className='register-right'>
                    <form onSubmit={handleSubmit(reg)}>
                        <div className='form'>
                            <h2>Register</h2>
                            <div className='textbox-row'>
                                <div className='details'>
                                    <label for="name" className='labels'>Name</label>
                                    <TextBox type="text" name="name" className='input-box'
                                        placeholder="enter your name"
                                        connect={[register("name")]} />
                                </div>
                                {errors.name ? errors.name.message : <></>}
                                <div className='details'>
                                    <label for="email" className='labels'>Email</label>
                                    <TextBox type="email" name="email" className='input-box'
                                        placeholder="enter your email"
                                        connect={[register("email")]} />
                                </div>
                                {errors.email ? errors.email.message : <></>}
                            </div>
                            <div className='textbox-row'>
                                <div className='details'>
                                    <label for="phoneno" className='labels'>Phone no</label>
                                    <TextBox type="text" name="phoneno" className='input-box'
                                        placeholder="enter your phone no"
                                        connect={[register("phone")]} />
                                </div>
                                {errors.phone ? errors.phone.message : <></>}
                                <div className='details'>
                                    <label for="location" className='labels'>Location</label>
                                    <select type="text" name="location" className='input-box'
                                        placeholder="enter your location"
                                        connect={[register("location")]}>
                                        <option>TVM</option>
                                        <option>Kochi</option>
                                    </select>
                                </div>
                                {errors.location ? errors.location.message : <></>}
                            </div>
                            <div className='textbox-row'>
                                <div className='details'>
                                    <label for="role" className='labels'>Designation</label>
                                    <select type="text" name="role" className='input-box'
                                        placeholder="enter your role"
                                        connect={[register("role")]}>
                                        <option>Assosiate softwere engineer</option>
                                        <option>Senior softwere engineer</option>
                                        <option>Project manager</option>
                                        <option>team lead</option>
                                    </select>
                                </div>
                                {errors.role ? errors.role.message : <></>}
                                <div className='details'>
                                    <label for="team" className='labels'>Team</label>
                                    <select type="text" name="team" className='input-box'
                                        placeholder="enter your team"
                                        connect={[register("team")]}>
                                        <option>Developer tem</option>
                                        <option>Testing team</option>
                                        <option>UI design</option>
                                    </select>
                                </div>
                                {errors.team ? errors.team.message : <></>}
                            </div>
                            <div className='textbox-row'>
                                <div className='details'>
                                    <label for="businesunit" className='labels'>Business unit</label>
                                    <select type="text" name="businesunit" className='input-box'
                                        placeholder="enter your business unit"
                                        connect={[register("businessunit")]}>
                                        <option>PES</option>
                                        <option>DTS</option>
                                        <option>ESS</option>
                                    </select>
                                </div>
                                {errors.businessunit ? errors.businessunit.message : <></>}
                                <div className='details'>
                                    <label for="dob" className='labels'>Dob</label>
                                    <TextBox type="text" name="dob" className='input-box'
                                        placeholder="enter your dob"
                                        connect={[register("dob")]} />
                                </div>
                                {errors.dob ? errors.dob.message : <></>}
                            </div>
                            <div className='textbox-row'>
                                <div className='details'>
                                    <label for="password" className='labels'>Password</label>
                                    <TextBox type="password" name="password" className='input-box'
                                        placeholder="enter your password"
                                        connect={[register("password")]} />
                                </div>
                                {errors.password ? errors.password.message : <></>}
                                <div className='details'>
                                    <label for="confirm" className='labels'>Confirm password</label>
                                    <TextBox type="password" name="confirm" className='input-box'
                                        placeholder="reenter the password"
                                        connect={[register("confirm")]} />
                                </div>
                                {errors.confirm ? errors.confirm.message : <></>}
                            </div>
                            <Button id="register" value="Create account" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
