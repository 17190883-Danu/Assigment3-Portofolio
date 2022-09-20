import { Component } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
        <div className="Navbar">
            <div className="images">
            <img src="images/profil.jpg" />
        <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/interest">Interest</Link></li>
                    <li><Link to="/awards">Awards</Link></li>
                </ul>
            </nav>
            </div>
            </div>
        )
    }
}

export default Navbar;