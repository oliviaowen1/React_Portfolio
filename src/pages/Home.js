import React, { useState } from 'react';
import Jumbo from "../components/Jumbo"
import Cards from "../components/Cards"

function About() {
    return (
        
        // <!-- This is the title and introduction of the page -->
            <div className="row">
                <div className="col-md-8 offset-md-2 bodyPad">
                <Jumbo />
                    <div id="about-me"></div>
                    <h2> About me </h2>
                </div>
                <div className="col-md-2 offset-md-2 bodyPad">
                    <img src="./assets/20201213_122059.jpg" alt="Image of me" class="img-thumbnail" /> 
                </div>
                <div className="col-md-6 bodyPad">
                    <p className="lead">
                        My name is Olivia Owen and i currently work as a Receptionist as well as studying to become a
                        web
                        developer with the University of Birmingham Coding Bootcamp.
                        I currently work at the University and love my job. I would love to become a full-stack
                        developer after graduating.
                <br />
                            I am currently based in Warwick, but willing to travel up to an hour for work and also have the
                            facilities to work from home.
                               
                        <br />
                            Please feel free to download a copy of my CV or to browse my Github repositories.

                    </p>
                    <a target="_blank"
                        href="https://drive.google.com/file/d/1888M5C0p1VuKj7cIUJL5Ra9KQdV3dMHj/view?usp=sharing"
                        className="btn btn-primary col-md-4">CV</a>
                    <a target="_blank"
                        href="https://github.com/oliviaowen1"
                        className="btn btn-primary col-md-4">Github</a>
                </div>
                <Cards />
            </div>
            
);
}

export default About;