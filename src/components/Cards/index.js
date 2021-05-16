import React, { useState } from 'react';
import ffs from "../../assets/fast-food-icon.png";
import astro from "../../assets/rocket4.png";
import weather from "../../assets/weather3.png";
import planner from "../../assets/imageedit_15_9082963304.png";


function Cards() {
    return (
        // <!-- This is the title and introduction of the page -->
        <div className="col-md-10 offset-md-2 bodyPad">
            {/* <!-- This is the line across the page --> */}
            <div className="row">
            <hr className="my-4" />
                <div className="card text-white bg-dark col-md-3 cardPad" style={{margin: '25px' ,padding: '25px' }}>
                    <img className="card-img-top rocketImg" src={astro}
                        alt="Stock Image" style={{width: '150px'}}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Astro Search</h5>
                        <p className="card-text"> Astro Search allows you to search for images of space and information
                        on astronomical events based on the date and location entered. This project was a
                                collaboration between myself and 3 other developers.</p>
                        <a target="_blank" href="https://oliviaowen1.github.io/UoB_BC_AstronomicalEventSearch/"
                            className="btn btn-primary">Application</a>
                        <a target="_blank" href="https://github.com/oliviaowen1/UoB_BC_AstronomicalEventSearch"
                            className="btn btn-primary">Github</a>
                    </div>
                </div>
                <div className="card text-white bg-dark col-md-3 cardPad" style={{margin: '25px' ,padding: '25px' }}>
                    <img className="card-img-top weatherImg" src={weather} alt="Stock Image" style={{width: '150px'}}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Weather Dashboard</h5>
                        <p className="card-text"> The Weather Dashboard allows you to search for a city and see the
                        current weather as well as the next 5 days forecast. Youre searched cities will be saved
                        and the last one you searched will be presented when the webpage loads.
                            </p>
                        <a target="_blank" href="https://oliviaowen1.github.io/Weather_Cities_Dashboard/"
                            className="btn btn-primary">Application</a>
                        <a target="_blank" href="https://github.com/oliviaowen1/Weather_Cities_Dashboard"
                            className="btn btn-primary">Github</a>
                    </div>
                </div>


                <div className="card text-white bg-dark col-md-3 cardPad" style={{margin: '25px' ,padding: '25px' }}>
                    <img className="card-img-top" src={ffs} alt="Stock Image" style={{width: '150px'}}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Few Fries Short</h5>
                        <p className="card-text">This application allows you to add restaurants as well as add reviews to restaurants and view other users reviews. You can also comment on other users' reviews and add images to the restaurants.
                            </p>
                        <a target="_blank" href="https://few-fries-short.herokuapp.com/"
                            className="btn btn-primary">Application</a>
                        <a target="_blank" href="https://github.com/oliviaowen1/Project-2"
                            className="btn btn-primary">Github</a>
                    </div>
                </div>
            </div>
            </div>

    );
}
export default Cards;