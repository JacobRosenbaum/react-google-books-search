import React from "react";
import { Link } from "react-router-dom";
import NavBar from 'react-bootstrap/Navbar'

function Header() {
    return (
<div>
    <NavBar collapseOnSelect expand="lg" bg="light" variant="light">
        <Link className="navbar-brand" id = "jacob" to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Google Books
        </Link> 
        <NavBar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"  />
            <NavBar.Collapse className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/search" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                        Search
                        </Link>            
                    </li>
                    <li className="nav-item">
                         <Link to="/saved" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
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