import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <header className="header">
            <div className="logo">Code-Master</div>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Education">Education</Link>
                <Link to="/Skills">Skills</Link>
                <Link to="/Project">Project</Link>
                <Link to="/Contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Navbar;