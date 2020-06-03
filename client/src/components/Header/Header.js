import React from "react";
import { Link } from "react-router-dom";
import NavBar from 'react-bootstrap/Navbar';
import "./header.css"

function Header() {
    return (
        <div class="google">
            <NavBar style={{ background: 'none' }} fixed="top" collapseOnSelect expand="lg">
                <div style={{color: 'white'}} className="navbar-brand" id="google">
                        Google Books <span className="navbar-brand" id = 'hide' style={{display: 'none'}}> Search</span>
                </div>
                <NavBar.Toggle class="google" aria-controls="responsive-navbar-nav" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" />
                <NavBar.Collapse className="collapse navbar-collapse" id="navbarNav">
                    <ul tyle={{color: 'white' }} className="navbar-nav">
                        <li id="underline" className="nav-item">
                            <Link style={{color: 'white' }}  to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                Search
                        </Link>
                        </li>
                        <li id = "underline2" className="nav-item">
                            <Link style={{color: 'white' }} to="/saved" className={window.location.pathname === "saved" ? "nav-link active" : "nav-link"}>
                                Saved
                        </Link>
                        </li>
                    </ul>
                </NavBar.Collapse>
            </NavBar>
        </div>
    );
}

export default Header;