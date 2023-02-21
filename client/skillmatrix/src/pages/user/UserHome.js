
import React from "react";
import "../user/UserHome.css";
import SkillTable from "../../components/table/Skill";
import { Button } from "@chakra-ui/react";
import CertificateTable from "../../components/table/Certificate";
import office from "../../images/office.jpg";
import UserSkillPopup from "../../components/UserSkillPopup";
function Home() {
    return (
        <div>
            {/* left profile  */}
            <div className="user-home">
                <div className="user-first-section">
                    <div className="user-profile-left">
                        <div className="profile-div">

                            <img src={office} className="user-profile-logo"></img>
                            <div><h3 className="user-profile-text">Name :</h3></div>
                            <div><h3 className="user-profile-text">Email :</h3></div>
                            <div><h3 className="user-profile-text">Ph No :</h3></div>
                            <div><h3 className="user-profile-text">Location:</h3></div>
                            <div><h3 className="user-profile-text">Team :</h3></div>
                            <div><h3 className="user-profile-text">Role :</h3></div>

                        </div>
                    </div>
                    {/* right first coolowmn */}
                    <div className="user-profile-right">
                        <div className="user-table-heading">Skill List</div>
                        <div className="skilltable-container">
                            <SkillTable></SkillTable>
                        </div>
                        <UserSkillPopup ml="44vw" mt="10px" background="aquamarine" h="40px" element="Add Skill"></UserSkillPopup>

                        <div className="user-table-heading">Certificate List</div>
                        <div className="certificatetable-container">
                            <CertificateTable></CertificateTable>
                        </div>
                        <Button ml="40vw" mt="10px" background="aquamarine" h="40px">Add Certificate+</Button>
                    </div>
                </div>
                <div className="user-second-section">
                    <h2 className="user-second-heading">Skill Matrix Level</h2>

                    <div className="card-section">
                        <div className="user-card">
                            <div className="card-details">
                                <p className="user-text-title">Beginner</p>
                                <p className="user-text-body">Here are the details of the card</p>
                            </div>
                            <button className="card-button">More info</button>
                        </div>

                        <div className="user-card">
                            <div className="card-details">
                                <p className="user-text-title">Intermediate</p>
                                <p className="user-text-body">Here are the details of the card</p>
                            </div>
                            <button className="card-button">More info</button>
                        </div>
                        <div className="user-card">
                            <div className="card-details">
                                <p className="user-text-title">Professional</p>
                                <p className="user-text-body">Here are the details of the card</p>
                            </div>
                            <button className="card-button">More info</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;