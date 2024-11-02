// import {Link} from "react-router-dom";

import "./Navbar.css";
import logo from "../../assets/portfolio-logo.png";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary sticky-top">
            <div className="container">
                <div className="navbar-brand logo">
                    <img src={logo} alt="logo" />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href='#home' className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#achievements" className="nav-link">Achievements</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;