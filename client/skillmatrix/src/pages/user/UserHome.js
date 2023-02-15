import React from "react";
import '../../components/Button.css';
import '../style/Profile.css';
import '../style/Table.css';
import Button from "../../components/Button.js";
import avatar from '../../images/avatar.png';
import PopupAdd from '../../components/PopupAdd.js';

function Home() {
    return (
        <div className="profile-main-container">
            <div className="profile-container">
                <div className="user-info">
                    <div className="user-info-details">
                        <div className="user-avatar">
                            <img src={avatar} alt="avatarimg" id="avatar"></img>
                        </div>
                        <div className="user-personal-details">
                            <span>Name:  <b>John Doe</b></span><br />
                            <span>Email:  <b>johndoe@gmail.com</b></span><br />
                            <span>Phone No:  <b>9988676544</b></span><br />
                            <span>Business Unit:  <b>PES</b></span><br />
                            <span>Team:  <b>MobileApp</b></span><br />
                            <span>Role:  <b>Scrum Master</b></span><br />
                            <span>Location:  <b>Cochin</b></span><br />
                        </div>
                        <Button id="edit" value="edit"></Button>
                    </div>
                </div>
                <div className="user-skill-details">
                    <h2>Skills</h2>
                    <div className="table-wrapper">
                        <table className="user-table">
                            <thead>
                                <tr>
                                    <th>Sl No. </th>
                                    <th>Skill</th>
                                    <th>Category</th>
                                    <th>Skill type</th>
                                    <th>Proficiency Level</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>C++</td>
                                    <td>Languages</td>
                                    <td>Primary</td>
                                    <td>Expert</td>
                                    <td><Button id="edit" value="edit" /><Button id="delete" value="delete" /></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Pythomn</td>
                                    <td>Languages</td>
                                    <td>Secondary</td>
                                    <td>Intermediate</td>
                                    <td><Button id="edit" value="edit" /><Button id="delete" value="delete" /></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Java</td>
                                    <td>Languages</td>
                                    <td>Additional</td>
                                    <td>Intermediate</td>
                                    <td><Button id="edit" value="edit" /><Button id="delete" value="delete" /></td>
                                </tr>
                            </tbody>
                        </table>
                        <PopupAdd element="Add Skill" btnName="Save" header="Add Skill" category="Category" label="Skill Name"></PopupAdd>
                    </div>
                    <h2>Certificates</h2>
                    <div className="table-wrapper">
                        <table className="user-table">
                            <thead>
                                <tr>
                                    <th>Sl No </th>
                                    <th>Certificate</th>
                                    <th>Category</th>
                                    <th>Issue date</th>
                                    <th>Expiry date</th>
                                    <th>Issued Authority</th>
                                    <th>Certificate image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>PMP</td>
                                    <td>PM</td>
                                    <td>12/02/2021</td>
                                    <td>12/02/2025</td>
                                    <td>PMI</td>
                                    <td>image</td>
                                    <td><Button id="edit" value="edit" /><Button id="delete" value="delete" /></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>CSM</td>
                                    <td>PM</td>
                                    <td>12/02/2021</td>
                                    <td>12/02/2025</td>
                                    <td>PMI</td>
                                    <td>image</td>
                                    <td><Button id="edit" value="edit" /><Button id="delete" value="delete" /></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>CAPM</td>
                                    <td>PM</td>
                                    <td>12/02/2021</td>
                                    <td>12/02/2025</td>
                                    <td>PMI</td>
                                    <td>image</td>
                                    <td><Button id="edit" value="edit" /><Button id="delete" value="delete" /></td>
                                </tr>
                            </tbody>
                        </table>
                        <PopupAdd element="Add certificate" btnName="Save" header="Add Certificate" category="Category" label="Certificate Name"></PopupAdd>
                    </div>
                </div>
            </div>
            <div className="skill-level-definitions">
                <div className="skill-levels">
                    <h2 className="skill-heading">Beginner</h2>
                    <p className="skill-font">A person has a basic knowledge on the concepts.
                        Need support or guidance to complete the task.
                        May not be well- versed with real time implementation.</p>
                </div>
                <div className="skill-levels">
                    <h2 className="skill-heading">Independent</h2><br></br>
                    <p className="skill-font">A person has experience in handling things independently.
                        Good problem solver and able to apply concepts learned.
                        A good team player in executing deliverables and also support team members in achieving the milestones.</p>
                </div>
                <div className="skill-levels">
                    <h2 className="skill-heading">Expert</h2>
                    <p className="skill-font">A person has good level of experience in applying concepts.
                        Will have good communication skill and able to interact with customers efficiently.
                        Can have big picture in solving problems with the help of the team members.
                        Able to forecast and guide the team to achieve the milestones.
                        Ideally be certified person in the respective domain.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;