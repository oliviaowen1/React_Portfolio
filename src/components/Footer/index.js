import { Link } from "react-router-dom";
import React, { useState } from 'react';

function Footer() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light" >
<div class="container">
            <h4 class="display-4">My Portfolio</h4>
            <p class="lead">by Olivia Owen</p>
            <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
                <a class="nav-link active" aria-current="page" href="./Portfolio.html">Portfolio</a>
                <a class="nav-link active" aria-current="page" href="./contact.html">Contact</a>
                <a href="https://www.linkedin.com/in/olivia-owen-37346aa4/" class="fa fa-linkedin"></a>
                
            </div>
            </div>
</nav>
);
}
export default Footer;