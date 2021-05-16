import React, { useState } from 'react';

function Jumbo() {
    return (
        // <!-- This is the title and introduction of the page -->
        <div>
            <div className="col-md-8 offset-md-2 bodyPad"></div>
            <div className="jumbotron">
                <h1 className="display-4">Welcome to my portfolio!</h1>
                <p className="lead">This is my portfolio in which you will find information about me alongside
                information
                        and examples of my work.</p>

                {/* <!-- This is the line across the page --> */}
                <hr className="my-4" />
            </div>
        </div>


    );
}
export default Jumbo;