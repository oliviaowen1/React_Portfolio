import React, { useState } from 'react';

function Cards() {
    return (
        // <!-- This is the title and introduction of the page -->
        <div class="col-md-10 offset-md-2 bodyPad">
            {/* <!-- This is the line across the page --> */}
            <hr class="my-4" />
            <div class="row">
                <div class="card text-white bg-dark col-md-3 cardPad" >
                    <img class="card-img-top rocketImg" src="./assets/rocket4.png"
                        alt="Stock Image" />
                    <div class="card-body text-center">
                        <h5 class="card-title">Astro Search</h5>
                        <p class="card-text"> Astro Search allows you to search for images of space and information
                        on astronomical events based on the date and location entered. This project was a
                                collaboration between myself and 3 other developers.</p>
                        <a target="_blank" href="https://oliviaowen1.github.io/UoB_BC_AstronomicalEventSearch/"
                            class="btn btn-primary">Application</a>
                        <a target="_blank" href="https://github.com/oliviaowen1/UoB_BC_AstronomicalEventSearch"
                            class="btn btn-primary">Github</a>
                    </div>
                </div>
                <div class="card text-white bg-dark col-md-3 cardPad" >
                    <img class="card-img-top weatherImg" src="./assets/weather3.png" alt="Stock Image" />
                    <div class="card-body text-center">
                        <h5 class="card-title">Weather Dashboard</h5>
                        <p class="card-text"> The Weather Dashboard allows you to search for a city and see the
                        current weather as well as the next 5 days forecast. Youre searched cities will be saved
                        and the last one you searched will be presented when the webpage loads.
                            </p>
                        <a target="_blank" href="https://oliviaowen1.github.io/Weather_Cities_Dashboard/"
                            class="btn btn-primary">Application</a>
                        <a target="_blank" href="https://github.com/oliviaowen1/Weather_Cities_Dashboard"
                            class="btn btn-primary">Github</a>
                    </div>
                </div>
                <div class="card text-white bg-dark col-md-3 cardPad">
                    <img class="card-img-top" src="./assets/imageedit_15_9082963304.png" alt="Stock Image" />
                    <div class="card-body text-center">
                        <h5 class="card-title">Work Day Planner</h5>
                        <p class="card-text">This application allows you to book things into your schedule for the
                        working day. Anything in the past will be grey, present will be red and future is green.
                        Anything written will save to local storage.
                            </p>
                        <a target="_blank" href="https://oliviaowen1.github.io/Work_Day_Planner/"
                            class="btn btn-primary">Application</a>
                        <a target="_blank" href="https://github.com/oliviaowen1/Work_Day_Planner"
                            class="btn btn-primary">Github</a>
                    </div>
                </div>
                <div class="card text-white bg-dark col-md-3 cardPad">
                    <img class="card-img-top" src="./assets/fast-food-icon.png" alt="Stock Image" />
                    <div class="card-body text-center">
                        <h5 class="card-title">Few Fries Short</h5>
                        <p class="card-text">This application allows you to add restaurants as well as add reviews to restaurants and view other users reviews. You can also comment on other users' reviews and add images to the restaurants.
                            </p>
                        <a target="_blank" href="https://few-fries-short.herokuapp.com/"
                            class="btn btn-primary">Application</a>
                        <a target="_blank" href="https://github.com/oliviaowen1/Project-2"
                            class="btn btn-primary">Github</a>
                    </div>
                </div>
            </div>
            </div>

    );
}
export default Cards;