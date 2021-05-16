import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Footer() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light" >
<div className="container">
            <h6 className="display-4">My Portfolio</h6>
            <p className="lead">by Olivia Owen</p>
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="./index.html">Home</a>
                <a className="nav-link active" aria-current="page" href="./Portfolio.html">Portfolio</a>
                <a className="nav-link active" aria-current="page" href="./contact.html">Contact</a>
                <a href="https://www.linkedin.com/in/olivia-owen-37346aa4/" className="fa fa-linkedin"></a>
                
            </div>
            </div>
</nav>
);
}
export default Footer;