import React from 'react';
import '../style/App.css'
import img1 from '../../images/img1.jpg'
import TextBox from '../../components/Textbox.js';
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
            location: yup.string().required("Location is required"),
            team: yup.string().required("Team is required"),
            role: yup.string().required("Role is required"),
            businessunit: yup.string().required("Business unit is required"),
            dob: yup.string().required("Dob is required"),
            password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character").required("Password is required"),
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
                <div className='left'>
                    <img src={img1} alt="office images" />
                </div>
                <div className='right'>
                    <form onSubmit={handleSubmit(reg)}>
                        <div className='form'>
                            <h2>Register</h2>
                            <div className='row'>
                                <div className='details'>
                                    <label for="name">Name</label>
                                    <TextBox type="text" name="name"
                                        placeholder="enter your name"
                                        connect={[register("name")]} />
                                </div>
                                {errors.name ? errors.name.message : <></>}
                                <div className='details'>
                                    <label for="email">Email</label>
                                    <TextBox type="email" name="email"
                                        placeholder="enter your email"
                                        connect={[register("email")]} />
                                </div>
                                {errors.email ? errors.email.message : <></>}
                            </div>
                            <div className='row'>
                                <div className='details'>
                                    <label for="phoneno">Phone no</label>
                                    <TextBox type="text" name="phoneno"
                                        placeholder="enter your phone no"
                                        connect={[register("phone")]} />
                                </div>
                                {errors.phone ? errors.phone.message : <></>}
                                <div className='details'>
                                    <label for="location">Location</label>
                                    <TextBox type="text" name="location"
                                        placeholder="enter your location"
                                        connect={[register("location")]} />
                                </div>
                                {errors.location ? errors.location.message : <></>}
                            </div>
                            <div className='row'>
                                <div className='details'>
                                    <label for="role">Role</label>
                                    <TextBox type="text" name="role"
                                        placeholder="enter your role"
                                        connect={[register("role")]} />
                                </div>
                                {errors.role ? errors.role.message : <></>}
                                <div className='details'>
                                    <label for="team">Team</label>
                                    <TextBox type="text" name="team"
                                        placeholder="enter your team"
                                        connect={[register("team")]} />
                                </div>
                                {errors.team ? errors.team.message : <></>}
                            </div>
                            <div className='row'>
                                <div className='details'>
                                    <label for="businesunit">Business unit</label>
                                    <TextBox type="text" name="businesunit"
                                        placeholder="enter your business unit"
                                        connect={[register("businessunit")]} />
                                </div>
                                {errors.businessunit ? errors.businessunit.message : <></>}
                                <div className='details'>
                                    <label for="dob">Dob</label>
                                    <TextBox type="text" name="dob"
                                        placeholder="enter your dob"
                                        connect={[register("dob")]} />
                                </div>
                                {errors.dob ? errors.dob.message : <></>}
                            </div>
                            <div className='row'>
                                <div className='details'>
                                    <label for="password">Password</label>
                                    <TextBox type="password" name="password"
                                        placeholder="enter your password"
                                        connect={[register("password")]} />
                                </div>
                                {errors.password ? errors.password.message : <></>}
                                <div className='details'>
                                    <label for="confirm">Confirm password</label>
                                    <TextBox type="password" name="confirm"
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
