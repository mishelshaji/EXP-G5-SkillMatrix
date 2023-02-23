
import React, { useEffect, useState } from "react";
import "../user/UserHome.css";
import profile from  "../../images/profile.jpg";
import SkillTable from "../../components/table/Skill";
import { Button } from "@chakra-ui/react";
import UserSkillPopup from "../../components/UserSkillPopup";
import axios from "axios";
import httpClient from "../../service/httpClient";
import jwt_decode from 'jwt-decode';
import { getRole } from "../../service/tokenService";
import UserRequestPopup from "../../components/UserRequestPopup";

function Home() {
    const [data, setData] = useState(null);
    const token = localStorage.getItem('authToken');
    const decoded = jwt_decode(token);
    const result =getRole(token);
    useEffect(() => {
        console.log('useeffect');
        httpClient
            .get(`https://localhost:7227/profile/${result.id}`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log('catch ');
                console.log(err);
            });
    }, []);
    // async function getData()
    // {
    //     try{
    //     const res = await axios.get(`https://localhost:7227/profile/${result.id}`)
    //     console.log('this is the data ');
    //     setData(res.data);
    //     }
    // catch(err) {    
    //         console.log('catch ')
    //         console.log(err);       
    // }        
    // } 
    // getData()
    console.log(data);
    return (
        <div>
            {/* left profile  */}
            <div className="user-home">
                <div className="user-first-section">
                    <div className="user-profile-left">
                        {data && 
                            <div className="profile-div">
                                <div className="profile-image-container"><img src={profile} className="profile-image" alt="profile-avatar"></img></div>
                            <div><h3 className="user-profile-text">Name :{data.name}</h3></div>
                            <div><h3 className="user-profile-text">Email :{data.email}</h3></div>
                            <div><h3 className="user-profile-text">Ph No :{data.phoneNumber}</h3></div>
                            <div><h3 className="user-profile-text">Location:{data.location.name}</h3></div>
                            <div><h3 className="user-profile-text">Team :{data.team.name}</h3></div>
                            <div><h3 className="user-profile-text">Designation :{data.designation.name}</h3></div>
                        </div>
                        }
                        
                    </div>
                    {/* right first coolowmn */}
                    <div className="user-profile-right">
                        <div className="user-table-heading">Skill List
                        </div>
                        
                        <div className="skilltable-container">
                            <SkillTable userId={result.id}></SkillTable>
                            <div>
                            <UserRequestPopup background="aquamarine" element="Request Skill" h="40px" ml="58vw" mt="10px"></UserRequestPopup>
                            
                        <UserSkillPopup ml="50vw" mt="10px" background="aquamarine" h="40px" element="Add Skill" userId={result.id}></UserSkillPopup>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className="user-second-section">
                    <h2 className="user-second-heading">Skill Matrix Level</h2>

                    <div className="card-section">
                        <div className="user-card">
                            <div className="card-details">
                                <p className="user-text-title">Beginner</p>
                                <p className="user-text-body">New To Skill</p>
                            </div>
                        </div>

                        <div className="user-card">
                            <div className="card-details">
                                <p className="user-text-title">Intermediate</p>
                                <p className="user-text-body">Independently handle tasks and support beginners</p>
                            </div>
                        </div>
                        <div className="user-card">
                            <div className="card-details">
                                <p className="user-text-title">Professional</p>
                                <p className="user-text-body">Go-to-person - Guide Support and train people in the 
                                specialized area</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;