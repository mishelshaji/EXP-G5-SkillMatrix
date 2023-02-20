import React from "react"
import '../landingpage/LandingPage.css'
import greenoffice from '../../../images/greenoffice.jpg'
import office from '../../../images/office.jpg'

function LandingPage() {
    return (
        <div>
            <div className="landing-page">
                <div className="section">
                    <div className="first-content">
                        <h1 className='heading'>Increase Sales <br />Not Your Workload</h1>
                        <p className='first-para'>
                            Opportunity is missed by most people because
                            it is dressed in overalls and looks like work.
                            <br />
                        </p>
                        <p className="first-para">  “I love deadlines. I love the whooshing
                            noise they make as they go by.”
                        </p>
                        <button className='signup-btn'>Signup</button>
                    </div>
                    <div className='img-div'>
                        <img src={greenoffice} alt="image" />
                    </div>
                </div>
                <div className="section second-section">
                    <h1 className="features-heading">Go Beyond Unlimited Features </h1>
                    <div className="blue-div">
                        <div className="card-div">
                            <div class="card">
                                <div class="card-info">
                                    <p class="title">SKILL REVIEW</p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-info">
                                    <p class="title">USER REPORTS</p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-info">
                                    <p class="title">SKILL CHARTS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section third-section">
                    <div className='about-content'>
                        <div>
                            <img src={office} className='empower-img' />
                        </div>
                        <div className="about-text">
                            <h1 className='aboutus-heading'>About Us</h1>
                            <p>If your company has large teams and an unclear or complicated hierarchy, you need to build a skills matrix.
                                Skill matrices are simple and effective tools that help you fill gaps in teams or
                                track skill levels throughout your company or in a single department.  </p>
                            <p> A skills matrix empowers your HR and learning and development team by offering a simple framework to improve productivity
                                and resource allocation within the company. The data from the matrix can help guide decisions related to hiring, promotions,
                                and talent development like upskilling and reskilling.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
