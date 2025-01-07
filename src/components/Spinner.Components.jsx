import React from "react";
import SpinnerImg from "../assets/Images/spinner.gif"

const SpinnerComponent = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <img src={SpinnerImg} alt="spinner" />
        </div>
    );
};

export default SpinnerComponent;