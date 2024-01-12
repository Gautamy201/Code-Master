import React from "react";
import Typed from 'typed.js';
import "./Home.css"
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";function Home(){ 
    const el = React.useRef(null);

    React.useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ['Frontent Developer ', 'Web Designer ' , 'Logo Designer '],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay:1000,
        loop:true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
    };
    }, []);
    return(
        <section className="home">
            <div className="home-content">
                <h3>Hello, It's Me</h3>
                <h1>Gautam Yadav</h1>
                <h3>And I'm a <span ref={el} /></h3>
                <p>I'm a web Designer .
                <br/> expertise is to create and website design, Frontend dovelent , and many more....</p>
                <div className="home-sci">
                    <div ><FaFacebookSquare className="icon"/></div>
                    <div ><FaGithubSquare className="icon"/></div>
                    <div ><FaWhatsappSquare className="icon"/></div>
                    <div ><FaInstagramSquare className="icon"/></div>
                </div>
                <button className="btn-box">More About Me</button>
            </div>
        </section>
    )
}
export default Home;