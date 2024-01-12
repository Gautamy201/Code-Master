import React from "react";
import "./About.css"
import Navbar from "../../Components/Navbar.js";
import Footer from "../../Components/Footer.js";
function About(){
    return(
        <>
          <Navbar/>
          <section className="about" id="about">
            <h2 className="heading">About <span>Me</span></h2>
            <div className="about-img">
              <img src="images/about.jpg" alt=""/>
              <span className="circle-spin"></span>
            </div>
            <div className="about-content">
              <h3>Frontend Developer !</h3>
              <p> 
                Hello, <br/>
                My name is <strong>Gautam Yadav</strong> and I am from Uttarpradesh.
                I am currently pussing job orianted progrram in Full Stuck Develeper at Masai School.
                an have always been intersted in creat degine and creat logo.
              </p>
            </div>
            <button className="btn-box">Read More</button>
          </section>
          <Footer/>
        </>
    )
}
export default About;