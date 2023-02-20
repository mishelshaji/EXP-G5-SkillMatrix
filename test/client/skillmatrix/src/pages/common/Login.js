import React from 'react';
import '../style/Login.css';
import TextBox from '../../components/Textbox';
import Button from '../../components/Button';
import img from '../../images/img.png';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function LoginHandler() {
    const schema = yup.object().shape({
        email: yup.string().email('* Enter valid email').required('* Email is required'),
        password: yup.string().min(4,'* Password must be at least 4 characters').max(8,'* Password must be at most 8 characters')
        .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            '* Password must be of at least 8 alphanumeric character').required('* Password is required')
    });
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const login = (data) => {
        console.log(data);
    };
    console.log(errors);
    return (
        <div className='fullpage'>
            <div className='container'>
                <div className='leftcontainer'>
                    <hl id="heading">Welcome Back</hl>
                    <div id="messagebox">
                        <form onSubmit={handleSubmit(login)}>
                            <label for="email">Email</label>
                            <TextBox type="email" connect={[register("email")]}/>
                            <h5>{errors.email ? errors.email.message : <></>}</h5>
                            <label for="password">Password</label>
                            <TextBox type="password" connect={[register("password")]}/>
                            <h5>{errors.password ? errors.password.message : <></>}</h5>
                            <div className='button'>
                                <Button id="login" value="Login"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='rightcontainer'>
                    <img src={img} alt="OfficeImage"/>
                </div>
            </div>
        </div>
    )
}
export default LoginHandler;