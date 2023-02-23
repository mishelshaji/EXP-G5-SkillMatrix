import React from 'react';
import '../style/Login.css';
import TextBox from '../../components/Textbox';
import Button from '../../components/Button';
import img from '../../images/img.png';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import httpClient from '../../service/httpClient';
import { getRole } from '../../service/tokenService';
import jwt_decode from 'jwt-decode';

function LoginHandler() {
    const schema = yup.object().shape({
        email: yup
            .string()
            .email('* Enter valid email')
            .required('* Email is required'),
        password: yup
            .string()
            .min(8, '* Password not valid')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                '* invalid password'
            )
            .required('* Password is required')
    });
    const navigate = useNavigate();
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });
    const login = async (data) => {
        httpClient.post('https://localhost:7227/login', {
            email: data.email,
            password: data.password
        }).then((res) => {
            localStorage.setItem('authToken', res.data.result);
            var token = res.data.result;
            var decoded = jwt_decode(token);
            const role = getRole(token);
            if(role.role === "User"){
                return navigate('/user/home')
            }
            navigate('/admin/skill');
        }).catch((err) => {
            console.log("login failed");
            console.log(err)
        })
    };
    console.log(errors);
    return (
        <div className="fullpage">
            <div className="container">
                <div className="leftcontainer">
                    <h1 id="heading">Login</h1>
                    <div id="messagebox">
                        <form onSubmit={handleSubmit(login)}>
                            <div>
                            <label for="email">Email</label>
                            <TextBox
                                type="email"
                                connect={[register('email')]}
                                className="login-textbox"
                            />
                            <h5 className="error-list">
                                {errors.email ? 'email is not valid' : <></>}
                            </h5>
                            <label for="password">Password</label>
                            <TextBox
                                type="password"
                                connect={[register('password')]}
                                className="login-textbox"
                            />
                            <h5 className="error-list">
                                {errors.password ? (
                                    'password is not valid'
                                ) : (
                                    <></>
                                )}
                            </h5>
                            <div className="button-container">
                                <Button id="login" value="Login" />
                            </div>
                            Not registered{' '}
                            <Link to="/register">
                                <span className="signinpage-btn">Signup?</span>
                            </Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="rightcontainer">
                    <img src={img} alt="OfficeImage" className="signin-btn" />
                </div>
            </div>
        </div>
    );
}
export default LoginHandler;
