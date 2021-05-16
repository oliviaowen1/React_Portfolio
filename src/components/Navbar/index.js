import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="./index.html">Olivia Owen</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="./index.html">Home</a>
                <a className="nav-link active" aria-current="page" href="./Portfolio.html">Portfolio</a>
                <a className="nav-link active" aria-current="page" href="./contact.html">Contact</a>
            </div>
        </div>
        <a target="_blank" href="https://www.linkedin.com/in/olivia-owen-37346aa4/" className="fa fa-linkedin"></a>
    </div>
</nav>
);
}
export default Navbar;