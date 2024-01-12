import React from "react";
import "./Skills.css"
import Navbar from "../../Components/Navbar.js";
import Footer from "../../Components/Footer.js";
function Skills(){
    return(
        <>
          <Navbar/>
          <section className="skills" id="skills">
          <h2 className="heading">My <span>Skills</span></h2>
          <div className="skills-row">
            <div className="skills-column">
              <h3 class="title">Coding Skills</h3>
              <div class="skills-box">
                  <div class="skills-content">
                      <div class="progress">
                          <h3>HTML <span>90%</span></h3>
                          <div class="bar"><span></span></div>
                      </div>

                      <div class="progress">
                          <h3>CSS <span>80%</span></h3>
                          <div class="bar"><span></span></div>
                      </div>

                      <div class="progress">
                          <h3>React <span>80%</span></h3>
                          <div class="bar"><span></span></div>
                      </div>

                      <div class="progress">
                          <h3>Java-Script <span>50%</span></h3>
                          <div class="bar"><span></span></div>
                      </div>
                  </div>
                </div>
            </div>

            <div className="skills-column">
              <h3 class="title">Professional Skills</h3>
              <div class="skills-box">
                    <div class="skills-content">
                        <div class="progress">
                            <h3>Web Degin <span>40%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>

                        <div class="progress">
                            <h3>Web Development <span>30%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        

                        <div class="progress">
                            <h3>Grapic Degin <span>30%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>

                        <div class="progress">
                            <h3>Logo Degin <span>30%</span></h3>
                            <div class="bar"><span></span></div>
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
export default Skills;