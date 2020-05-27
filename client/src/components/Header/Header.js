import React from "react";
import { Link } from "react-router-dom";
import NavBar from 'react-bootstrap/Navbar';
import "./header.css"

function Header() {
    return (
<div class = "google">
    <NavBar  collapseOnSelect expand="lg" bg="light" variant="light">
        <div className="navbar-brand" id = "google">
        Google Books
        </div > 
        <NavBar.Toggle class = "google" aria-controls="responsive-navbar-nav" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"  />
            <NavBar.Collapse className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        Search
                        </Link>            
                    </li>
                    <li className="nav-item">
                         <Link to="/saved" className={window.location.pathname === "saved" ? "nav-link active" : "nav-link"}>
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