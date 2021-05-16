import React from "react";
import './style.css'
// import Header from "../components/Header";
import ffs from "../assets/fast-food-icon.png";
import astro from "../assets/rocket4.png";
import weather from "../assets/weather3.png";
import planner from "../assets/imageedit_15_9082963304.png";
import blog from "../assets/blog.png";

import wdp from "../assets/Screenshot 2021-02-14 at 15.13.17.png";
import wd from "../assets/Screenshot 2021-01-24 at 22.34.49.png";
import astroSearch1 from "../assets/Screenshot 2021-02-14 at 15.09.55.png";
import astroSearch2 from "../assets/Screenshot 2021-02-14 at 15.12.01.png";
import fries from "../assets/few-fries-short.png";
import person from "../assets/person.png";

function Portfolio() {

    return (
        <section>
            <div className="row">
                <div className="col-md-8 offset-md-2 bodyPad">
                    {/* <!-- Heading --> */}
                    <div className="jumbotron">
                        <h1 className="display-4">My Portfolio!</h1>
                        <hr className="my-4" />
                        {/* <!-- These are the cards on the page --> */}
                    </div>
                    {/* <!-- Image carousel --> */}
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={wdp} className="d-block w-100"
                                    alt="Work Day Planner" />
                            </div>
                            <div className="carousel-item">
                                <img src={wd} className="d-block w-100"
                                    alt="Weather Dashboard" />
                            </div>
                            <div className="carousel-item">
                                <img src={astroSearch1} className="d-block w-100"
                                    alt="Astro Search" />
                            </div>
                            <div className="carousel-item">
                                <img src={astroSearch2} className="d-block w-100"
                                    alt="Astro Search" />
                            </div>
                            <div className="carousel-item">
                                <img src={fries} className="d-block w-100"
                                    alt="Few Fries Short" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-md-2 bodyPad">
                        <hr className="my-4" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-md-2 bodyPad">
                        <h2>My work</h2>
                        <p>Below are a few of my completed projects, please feel free to look through the applications and
                        repositories: </p>
                        <a target="_blank" href="https://github.com/oliviaowen1"
                            className="btn btn-primary btn-lg btn-block col-md-12">Github</a>
                    </div>
                </div>
            </div>

            {/* <!-- Here are the cards on the page --> */}
            <div className="col-md-8 offset-md-2 bodyPad">
                <div className="card w-150 card text-white bg-dark" style={{margin: '25px' ,padding: '25px' }}>
                    <div className="card-body text-center">
                        <h5 className="card-title text-center">Astro Search</h5>
                        <img className="card-img-top rocketImg cardImgHoz img" src={astro} alt="Stock Image" style={{ width: '150px' }} />
                        <p className="card-text text-center">Astro Search allows you to search for images of space and information
                        on astronomical events based on the date and location entered. This project was a
                        collaboration between myself and 3 other developers.</p>
                        <a target="_blank" href="https://oliviaowen1.github.io/UoB_BC_AstronomicalEventSearch/"
                            className="btn btn-primary">Application</a>
                        <a target="_blank" href="https://github.com/oliviaowen1/UoB_BC_AstronomicalEventSearch"
                            className="btn btn-primary">Github</a>
                    </div>
                </div>
            </div>
            <div className="col-md-8 offset-md-2 bodyPad">
                <div className="card w-150 card text-white bg-dark" style={{margin: '25px' ,padding: '25px' }}>
                    <div className="card-body text-center">
                        <h5 className="card-title text-center">Weather Dashboard</h5>
                        <img className="card-img-top weatherImg cardImgHoz" src={weather} alt="Stock Image" style={{ width: '150px' }} />
                        <p className="card-text text-center">The Weather Dashboard allows you to search for a city and see the
                        current weather as well as the next 5 days forecast. Youre searched cities will be saved
                        and the last one you searched will be presented when the webpage loads.</p>
                        <a target="_blank" href="https://oliviaowen1.github.io/Weather_Cities_Dashboard/"
                            className="btn btn-primary">Application</a>
                        <a target="_blank" href="https://github.com/oliviaowen1/Weather_Cities_Dashboard"
                            className="btn btn-primary">Github</a>
                    </div>
                </div>
            </div>
            <div className="col-md-8 offset-md-2 bodyPad">
                <div className="card w-150 card text-white bg-dark" style={{margin: '25px' ,padding: '25px' }}>
                    <div className="card-body text-center">
                        <h5 className="card-title text-center">Work Day Planner</h5>
                        <img className="card-img-top cardImgHoz" src={planner} alt="Stock Image" style={{ width: '150px' }} />
                        <p className="card-text text-center">This application allows you to book things into your schedule for the
                        working day. Anything in the past will be grey, present will be red and future is green.
                        Anything written will save to local storage.</p>
                        <a target="_blank" href="https://oliviaowen1.github.io/Work_Day_Planner/"
                            className="btn btn-primary cardBtn">Application</a>
                        <a target="_blank" href="https://github.com/oliviaowen1/Work_Day_Planner"
                            className="btn btn-primary cardBtn">Github</a>
                    </div>
                </div>
            </div>
            <div className="col-md-8 offset-md-2 bodyPad">
                <div className="card w-150 card text-white bg-dark" style={{margin: '25px' ,padding: '25px' }}>
                    <div className="card-body text-center">
                        <h5 className="card-title text-center">Few Fries Short</h5>
                        <img className="card-img-top cardImgHoz" src={ffs} alt="Stock Image" style={{ width: '150px' }} />
                        <p className="card-text text-center">This application allows you to add restaurants as well as add reviews to restaurants and
                        view other users reviews.
                        You can also comment on other users' reviews and add images to the restaurants.</p>
                        <a target="_blank" href="https://few-fries-short.herokuapp.com/"
                            className="btn btn-primary">Application</a>
                        <a target="_blank" href="https://github.com/oliviaowen1/Project-2"
                            className="btn btn-primary">Github</a>
                    </div>
                </div>
            </div>
            <div className="col-md-8 offset-md-2 bodyPad">
                <div className="card w-150 card text-white bg-dark" style={{margin: '25px' ,padding: '25px' }}>
                    <div className="card-body text-center">
                        <h5 className="card-title text-center">Tech Blog</h5>
                        <img className="card-img-top cardImgHoz" src={blog} alt="Stock Image" style={{ width: '150px' }} />
                        <p className="card-text text-center">This application is a CMS-style blog site similar to a Wordpress site, 
                        where developers can publish their blog posts and comment on other developers’ posts as well.</p>
                        <a target="_blank" href="https://tech-blog-olivia-owen.herokuapp.com/login"
                            className="btn btn-primary">Application</a>
                        <a target="_blank" href="https://github.com/oliviaowen1/tech-blog"
                            className="btn btn-primary">Github</a>
                    </div>
                </div>
            </div>
            <div className="col-md-8 offset-md-2 bodyPad">
                <div className="card w-150 card text-white bg-dark" style={{margin: '25px' ,padding: '25px' }}>
                    <div className="card-body text-center">
                        <h5 className="card-title text-center">Employee Directory</h5>
                        <img className="card-img-top cardImgHoz" src={person} alt="Stock Image" style={{ width: '150px' }} />
                        <p className="card-text text-center">This application can to be used to view an entire employee directory at once 
                        so that the user has quick access to their employee's information 
                        The user will be able to view all employees and sort these into alphabetical order as well as filter these by name.</p>
                        <a target="_blank" href="https://oliviaowen1.github.io/Employee_Directory/"
                            className="btn btn-primary">Application</a>
                        <a target="_blank" href="https://github.com/oliviaowen1/Employee_Directory"
                            className="btn btn-primary">Github</a>
                    </div>
                </div>
            </div>

            <div>
                <hr className="my-4" />
            </div>

        </section>


    );
}

export default Portfolio;