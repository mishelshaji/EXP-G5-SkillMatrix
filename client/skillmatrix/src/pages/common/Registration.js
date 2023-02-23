import React, { useEffect, useState } from 'react';
import '../style/App.css'
import TextBox from '../../components/Textbox.js';
import image from '../../images/register.jpg'
import Button from '../../components/Button.js';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Register() {
    const navigate = useNavigate();
    const [businessUnit,setBusinessUnit] = useState([]);
    const[designation, setDesignation] = useState([]);
    const[location,setLocation] = useState([]);
    const[team,setTeam] = useState([]);
    const [businessSelect,setBusinessSelect] = useState("")
    const [designationSelect,setDesignationSelect] = useState("")
    const [locationSelect,setLocationSelect] = useState("")
    const [teamSelect,setTeamSelect] = useState("")
    const [err,setErr] = useState("")
    useEffect(()=>{
        async function getFour(){
            try{
            let businessFetch  = await axios.get('https://localhost:7227/api/Admin/BusinessUnit');
            let designationFetch  = await axios.get('https://localhost:7227/api/Admin/RegistrationDetails/Designation');
            let locationFetch  = await axios.get('https://localhost:7227/api/Admin/RegistrationDetails/Location');
            let teamFetch  = await axios.get('https://localhost:7227/api/Admin/RegistrationDetails/Team');
            // console.log('business fetch')
            // console.log(businessFetch.data)
            // console.log('designation fetch')
            // console.log(designationFetch.data)  
            // console.log('location fetch')
            // console.log(locationFetch.data)  
            // console.log('team fetch')
            // console.log(teamFetch.data)
            // teamFetch.data.forEach((i)=>{
            //     console.log(i.id)
            // })
            setBusinessUnit(businessFetch.data) 
            setDesignation(designationFetch.data)
            setLocation(locationFetch.data)
            setTeam(teamFetch.data)
            }
            catch(err){
                console.log(err)
                setErr(err)
            }
            
        }
        getFour()
    },[])
    const schema = yup.object().shape(
        {
            name: yup.string().required("Name is required"),
            email: yup.string().email('email is not valid').required("Email is required"),
            phone: yup.number("Phone number is not valid"),
            dob: yup.string().required("Dob is required"),
            password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, " Password must be of at least 8 alphanumeric character").required("Password is required"),
            confirm: yup.string().oneOf([yup.ref("password"), "password doesnt match"]).required("password is required")
        })
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const reg = (data) => {
        console.log('line 24')
        data.BusinessUnitId = businessSelect;
        data.LocationId = locationSelect;
        data.DesignationId = designationSelect;
        data.TeamId = teamSelect;
        console.log(data)
axios.post('https://localhost:7227/user/register',data).then((res)=>{
    console.log(res)
    navigate('/');
}).catch((err)=>{
    console.log(err)
})  
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
                                <p style = {{fontSize:'10px'}}>{errors.name ? errors.name.message : <></>}</p>
                                </div>
                                <div className='details'>
                                    <label for="email" className='labels'>Email</label>
                                    <TextBox type="email" name="email" className='input-box'
                                        placeholder="enter your email" 
                                        connect={[register("email")]} />
                                <p style = {{fontSize:'10px'}}>{errors.email ? errors.email.message : <></>}</p>
                                </div>
                            </div>
                            <div className='textbox-row'>
                                <div className='details'>
                                    <label for="phoneno" className='labels'>Phone no</label>
                                    <TextBox type="text" name="phonenumber" className='input-box'
                                        placeholder="enter your phone no"
                                        connect={[register("phonenumber")]} />
                                <p style = {{fontSize:'10px'}}>{errors.phone ? errors.phone.message : <></>}</p>
                                </div>
                                <div className='details'>
                                    <label for="location" className='labels'>Location</label>
                                    <select onChange={(e)=>{
                                        setLocationSelect(e.target.value)
                                    }} type="text" name="location" className='input-box'
                                        placeholder="enter your location"
                                        connect={[register("location")]}>
                                        {/* <option>TVM</option>
                                        <option>Kochi</option> */}

                                        {location.map((i)=>{
                                            return(
                                                <option value = {i.id}>{i.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                               <p style = {{fontSize:'10px'}}> {errors.location ? errors.location.message : <></>}</p>
                            </div>
                            <div className='textbox-row'>
                                <div className='details'>
                                    <label for="role" className='labels'>Designation</label>
                                    <select onChange={(e)=>{
                                        setDesignationSelect(e.target.value)
                                    }} type="text" name="role" className='input-box'
                                        placeholder="enter your role"
                                        connect={[register("role")]}>
                                        {/* <option>Assosiate softwere engineer</option>
                                        <option>Senior softwere engineer</option>
                                        <option>Project manager</option>
                                        <option>team lead</option> */}

                                        {designation.map((i)=>{
                                            return(
                                                <option value = {i.id}>{i.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <p style = {{fontSize:'10px'}}>{errors.role ? errors.role.message : <></>}</p>
                                <div className='details'>
                                    <label htmlFor="team" className='labels'>Team</label>
                                    <select onChange={(e)=>{
                                       setTeamSelect(e.target.value)
                                    }} type="text" name="team" className='input-box'
                                        placeholder="enter your team"
                                        connect={[register("team")]}>
                                        {/* <option>Developer tem</option>
                                        <option>Testing team</option>
                                        <option>UI design</option> */}

                                        {team.map((i)=>{
                                            return(
                                                <option value = {i.id}>{i.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                {errors.team ? errors.team.message : <></>}
                            </div>
                            <div className='textbox-row'>
                                <div className='details'>
                                    <label for="businesunit" className='labels'>Business unit</label>
                                    <select onChange={(e)=>{
                                        setBusinessSelect(e.target.value)
                                    }} type="text" name="businesunit" className='input-box'
                                        placeholder="enter your business unit">
                                        {/* <option>PES</option>
                                        <option>DTS</option>
                                        <option>ESS</option> */}

                                        {businessUnit.map((i)=>{
                                            return(
                                                <option value = {i.id}>{i.name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <p style = {{fontSize:'10px'}}>{errors.businessunit ? errors.businessunit.message : <></>}</p>
                                <div className='details'>
                                    <label for="dob" className='labels'>Dob</label>
                                    <TextBox type="text" name="dob" className='input-box'
                                        placeholder="enter your dob"
                                        connect={[register("dob")]} />
                                </div>
                                <p style = {{fontSize:'10px'}}>{errors.dob ? errors.dob.message : <></>}</p>
                            </div>
                            <div className='textbox-row'>
                                <div className='details'>
                                    <label for="password" className='labels'>Password</label>
                                    <TextBox type="password" name="password" className='input-box'
                                        placeholder="enter your password"
                                        connect={[register("password")]} />
                                </div>
                                <p style = {{fontSize:'10px'}}>{errors.password ? errors.password.message : <></>}</p>
                                <div className='details'>
                                    <label for="confirm" className='labels'>Confirm password</label>
                                    <TextBox type="password" name="confirm" className='input-box'
                                        placeholder="reenter the password"
                                        connect={[register("confirm")]} />
                                </div>
                                <p style = {{fontSize:'10px'}}>{errors.confirm ? errors.confirm.message : <></>}</p>
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
