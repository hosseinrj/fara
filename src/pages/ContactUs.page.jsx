import React from "react";
import ContactImg from "../assets/Images/aboutt.jpg"

const ContactUspage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col12 bg-info p-3 rounded">
                    <h3>Contact Us</h3>
                </div>
            </div>
            <div className="row align-items-center mt-5">
                <div className="col-md-7 ">
                    <div>
                        <h3 className="text-primary">How to Contact Us :</h3>
                        <br />
                        <h5>+380730307933.</h5>
                        <br />
                        <h5>+380564321124</h5>
                        <br />
                        <br />
                    </div>
                    <div>
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <div class="mb-3">
                                <label className="form-label">Your Messege</label>
                                <textarea class="form-control" placeholder="Please Write Your Messages" required></textarea>
                                <div className="invalid-feedback">
                                    Please enter a message in the textarea.
                                </div>
                            </div>
                            <button type="submit" className="btn btn-outline-primary ms-2">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-5 text-center">
                    <img src={ContactImg} className="about-img" alt="about" />
                </div>
            </div>
        </div>
    );
};

export default ContactUspage;