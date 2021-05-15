import { Link } from "react-router-dom";
import React, { useState } from 'react';
function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="./index.html">Olivia Owen</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
                <a class="nav-link active" aria-current="page" href="./Portfolio.html">Portfolio</a>
                <a class="nav-link active" aria-current="page" href="./contact.html">Contact</a>
            </div>
        </div>
        <a target="_blank" href="https://www.linkedin.com/in/olivia-owen-37346aa4/" class="fa fa-linkedin"></a>
    </div>
</nav>
);
}
export default Navbar;