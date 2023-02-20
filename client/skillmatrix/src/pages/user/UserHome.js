
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
                <div className="first-section">
                    <div className="profile-left">
                        <div className="profile-div">

                            <img src={office} className="profile-logo"></img>
                            <div><h3 className="profile-text">Name :</h3></div>
                            <div><h3 className="profile-text">Email :</h3></div>
                            <div><h3 className="profile-text">Ph No :</h3></div>
                            <div><h3 className="profile-text">Location:</h3></div>
                            <div><h3 className="profile-text">Team :</h3></div>
                            <div><h3 className="profile-text">Role :</h3></div>

                        </div>
                    </div>
                    {/* right first coolowmn */}
                    <div className="profile-right">
                        <div className="table-heading">Skill List</div>
                        <div className="skilltable-container">
                            <SkillTable></SkillTable>
                        </div>
                        <UserSkillPopup ml="53vw" mt="10px" background="aquamarine" h="40px" element="Add Skill"></UserSkillPopup>

                        <div className="table-heading">Certificate List</div>
                        <div className="certificatetable-container">
                            <CertificateTable></CertificateTable>
                        </div>
                        <Button ml="48vw" mt="10px" background="aquamarine" h="40px">Add Certificate+</Button>
                    </div>
                </div>
                <div className="second-section">
                    <h2 className="second-heading">Skill Matrix Level</h2>
                    
                    <div className="card-section">
                        <div class="card">
                            <div class="card-details">
                                <p class="text-title">Beginner</p>
                                <p class="text-body">Here are the details of the card</p>
                            </div>
                            <button class="card-button">More info</button>
                        </div>

                        <div class="card">
                            <div class="card-details">
                                <p class="text-title">Intermediate</p>
                                <p class="text-body">Here are the details of the card</p>
                            </div>
                            <button class="card-button">More info</button>
                        </div>
                        <div class="card">
                            <div class="card-details">
                                <p class="text-title">Professional</p>
                                <p class="text-body">Here are the details of the card</p>
                            </div>
                            <button class="card-button">More info</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;