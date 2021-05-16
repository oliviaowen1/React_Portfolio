import React from "react";
import Header from "../components/Header";

export function Contact() {

    return (
        <section>
            <div className="row">
                <form className="col-md-8 offset-md-2 bodyPad">

                    <h1>Contact Me!</h1>
                    <p>To contact me use the form below:</p>
                    <div className="input-group mb-3">
                        <label className="input-group-text" for="inputGroupSelect01">Options</label>
                        <select className="form-select" id="inputGroupSelect01">
                            <option selected>Please select your enquiry</option>
                            <option value="1">General</option>
                            <option value="2">Question about an image/project</option>
                        </select>
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text" for="inputGroupSelect02"> Title</label>
                        <select className="form-select" id="inputGroupSelect02">
                            <option selected>Please select your title</option>
                            <option value="1">Mr</option>
                            <option value="2">Miss</option>
                            <option value="3">Mrs</option>
                            <option value="4">Ms</option>
                            <option value="5">Other/Prefer not to say</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="fullName" className="form-label">Full Name</label>
                        <input type="text" className="form-control" placeholder="Full name" aria-label="Username" />
                        <label for="emailAddress" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Please write your enquiry below:
                    </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <br />
                        <div className="mb-3">
                            <label for="formFileMultiple" className="form-label">Please include any images you need:</label>
                            <input className="form-control" type="file" id="formFileMultiple" multiple />
                        </div>
                        <button className="btn btn-primary" type="submit">Submit form</button>
                    </div>
                </form>
            </div>

            {/* <!-- Contact Me alt --> */}

            {/* <!-- These are the cards on the page --> */}
            <div className="col-md-8 offset-md-2 bodyPad">
                {/* <!-- This is the line across the page --> */}
                <hr className="my-4" />
                <div className="row">
                    <div className="card text-white bg-dark col-md-3 cardPad" >
                        <img className="card-img-top" src="./assets/email.png" alt="Stock Image" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Contact Me!</h5>
                            <p className="card-text">
                            </p>
                            {/* <!-- email--> */}
                            <a target="_blank" className="btn btn-primary" href="mailto:olivia.owen@hotmail.com">Email Me!</a>
                        </div>
                    </div>
                    <div className="card text-white bg-dark col-md-3 cardPad" >
                        <img className="card-img-top" src="./assets/phone.png" alt="Stock Image" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Contact Me!</h5>
                            <p className="card-text">
                            </p>
                            {/* <!-- phone --> */}
                            <a target="_blank" className="btn btn-primary" href="tel:01234567890">Call Me!</a>
                        </div>
                    </div>
                    <div className="card text-white bg-dark col-md-3 cardPad" >
                        <img className="card-img-top" src="./assets/imageedit_18_2425892445.png" alt="Stock Image" />
                        <div className="card-body text-center">
                            <h5 className="card-title">Contact Me!</h5>
                            <p className="card-text">
                            </p>
                            {/* <!-- github --> */}
                            <a target="_blank" className="btn btn-primary" href="https://github.com/oliviaowen1">Visit My Github</a>
                        </div>
                    </div>
                </div>
            </div>






            {/* <!-- Line across the page --> */}
            <div>
                <hr className="my-4" />
            </div>
        </section>

    );
}

export default Contact;