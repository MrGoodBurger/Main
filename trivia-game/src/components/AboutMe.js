import React from "react";
import Profile_pic from "../images/Profile_Pic.JPG"
import { DiHtml5, DiCss3, DiJavascript, DiMongodb, DiReact, DiNodejs, DiFirebase } from "react-icons/di"

function AboutMe(){
    return(
        <div>
            <div>
                <p>Hi, My name is Trent Sanders, a front end developer from New York, NY. I enjoy bringing peoples</p>
                <p>My areas of expertise are MongoDB, Express, React, Node, React Native and Firebase. My prior career was in customer service and hospitality.</p>
            </div>
            <div>
                <img src={Profile_pic} alt="Trent Sanders"/>
            </div>
            <div>
                <h3><DiHtml5/></h3>
                <h3><DiCss3/></h3>
                <h3><DiJavascript/></h3>
                <h3><DiMongodb/></h3>
                <h3><DiReact/></h3>
                <h3><DiNodejs/></h3>
                <h3><DiFirebase/></h3>
            </div>
        </div>
    )
};

export default AboutMe;