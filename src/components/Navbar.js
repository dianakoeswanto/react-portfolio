import React from 'react';
import '../styles/style.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand text-light" to="/">Diana Koeswanto</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="./resume/DK Resume.pdf" target="_blank">Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/contacts">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;