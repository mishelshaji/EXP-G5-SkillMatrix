import React from "react";
import '../../components/Button.css';
import '../style/Profile.css';
import '../style/Table.css';
import Button from "../../components/Button.js";


function Home() {
    return (
        <div className="profile-main-container">
            <div className="profile-container">
                <div className="user-info">
                    <div className="user-info-details">
                        <div className="user-avatar">

                        </div>
                        <div className="user-personal-details">
                            <span>Name:</span><br />
                            <span>Email:</span><br />
                            <span>Phone No:</span><br />
                            <span>Business Unit:</span><br />
                            <span>Team:</span><br />
                            <span>Role:</span><br />
                            <span>Location:</span><br />
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
                                    <td>..</td>
                                    <td>..</td>
                                    <td>..</td>
                                    <td>..</td>
                                    <td>..</td>
                                    <td><Button id="edit" value="edit" /><Button id="delete" value="delete" /></td>
                                </tr>
                            </tbody>
                        </table>
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
                                    <td>..</td>
                                    <td>..</td>
                                    <td>..</td>
                                    <td>..</td>
                                    <td>..</td>
                                    <td>..</td>
                                    <td>..</td>
                                    <td><Button id="edit" value="edit" /><Button id="delete" value="delete" /></td>


                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <div className="skill-level-definitions">
                <div className="skill-levels">
                    <h2>Beginner</h2>
                    <p>A person has a basic knowledge on the concepts.
                        Need support or guidance to complete the task.
                        May not be well- versed with real time implementation</p>
                </div>
                <div className="skill-levels">
                    <h2>Independent</h2><br></br>
                    <p>A person has experience in handling things independently.
                        Good problem solver and able to apply concepts learned.
                        A good team player in executing deliverables and also support team members in achieving the milestones</p>
                </div>
                <div className="skill-levels">
                    <h2>Expert</h2>
                    <p>A person has good level of experience in applying concepts.
                        Will have good communication skill and able to interact with customers efficiently.
                        Can have big picture in solving problems with the help of the team members.
                        Able to forecast and guide the team to achieve the milestones.
                        Ideally be certified person in the respective domain</p>
                </div>
            </div>
        </div>
    )
}

export default Home;