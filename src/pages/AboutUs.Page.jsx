import React from "react";
import AboutImg from "../assets/Images/aboutt.png"

const AboutUsPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col12 bg-info p-3 rounded">
                    <h3>About Us</h3>
                </div>
            </div>
            <div className="row align-items-center mt-5">
                <div className="col-md-7 ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta ut ad asperiores esse omnis, ipsa aliquid, inventore beatae aut nam dolorem ullam dolores tenetur, amet ipsam ab iste vero doloribus eaque ea incidunt quis laborum accusantium dolorum? Nam, eos! Facilis iure soluta sunt quasi ea vero enim quod. Enim unde
                    eligendi adipisci sunt. Itaque deleniti, ipsa at modi, sapiente commodi debitis necessitatibus ex magnam, id sunt cum! Cupiditate repellat, tenetur, beatae repellendus nihil possimus magni impedit adipisci atque minima dignissimos suscipit. Minus voluptatem harum ratione placeat esse ipsum doloribus veniam consequuntur
                    nihil illum atque, itaque excepturi modi repudiandae quaerat temporibus!
                </div>
                <div className="col-md-5 text-center align-items-center">
                    <img src={AboutImg} className="about-img" alt="about" />
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;