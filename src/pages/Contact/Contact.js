import React from "react";
import "./Contact.css"
import Navbar from "../../Components/Navbar.js";
import Footer from "../../Components/Footer.js";
function Contact(){
    return(
        <>
          <Navbar/>
          <section class="contact" id="contact">
            <h2 class="heading">Contact <span>Me!</span></h2>
            <form action="https://formspree.io/f/meqwwonw" method="POST" >
              <div class="īnput-box">
                  <div class="input-field">
                      <input name="user-name" type="text" placeholder="Full Name" required/>
                      <span class="focus"></span>
                  </div>
                  <div class="input-field">
                      <input name="user-email" type="email" placeholder="Email Address" required/>
                      <span class="focus"></span>
                  </div>
              </div>

              <div class="īnput-box">
                  <div class="input-field">
                      <input name="user-phone" type="text" placeholder="Mobile Number" required/>
                      <span class="focus"></span>
                  </div>
                  <div class="input-field">
                      <input name="subject" type="text" placeholder="Email Subject" required/>
                      <span class="focus"></span>
                  </div>
              </div>

              <div class="textarea-field">
                  <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
                  <span class="focus"></span>
              </div>
              <input type="submit" class="btn-box" value="SUBMIT"></input>
            </form>
          </section>
          <Footer/>
        </>
    )
}
export default Contact;