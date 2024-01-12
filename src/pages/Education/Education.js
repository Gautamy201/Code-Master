import React from "react";
import "./Education.css";
import { FaCalendarAlt } from "react-icons/fa";
import Navbar from "../../Components/Navbar.js";
import Footer from "../../Components/Footer.js";
function Education(){
    return(
        <>
            <Navbar/>
            <section class="education" id="education">
                <h2 class="heading">My <span>Education</span></h2>
                <div class="education-row">
                    <div className="education-column">
                        <h3 class="title">Education</h3>
                        <div class="education-box">
                            <div class="education-content">
                                <div class="content">
                                    <div class="year"><FaCalendarAlt className="icon" />2012-2013</div>
                                    <h3>High-School - Maharashtra Board</h3>
                                    <p>48%</p>
                                </div>
                            </div>

                            <div class="education-content">
                                <div class="content">
                                    <div class="year"><FaCalendarAlt className="icon" />2013-2015</div>
                                    <h3>Intermidiat - UP Board</h3>
                                    <p>58%</p>
                                </div>
                            </div>

                            <div class="education-content">
                                <div class="content">
                                    <div class="year"><FaCalendarAlt className="icon" />2023</div>
                                    <h3>Full Stuck Develeper - Massai</h3>
                                    <p>Appearing</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="education-column">
                        <h3 class="title">Experience</h3>
                        <div class="education-box">
                            <div class="education-content">
                                <div class="content">
                                    <div class="year"><FaCalendarAlt className="icon" />20024</div>
                                    <h3>Fresser</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Education;