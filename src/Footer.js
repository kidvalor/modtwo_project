
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import About from "./About"
import "./App"



function Footer () {

    return (
        <div className="wind">
    <nav id="nav-bar">
    <ul >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
    </ul>
    </nav>
        </div>
    );
    
    
}




export default Footer

