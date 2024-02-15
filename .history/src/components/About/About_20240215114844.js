import React from "react";
import ProfilePic from "../../Image/Screenshot (29).png";
import {Fade} from "react-awesome-reveal/F";
import Flip from "react-awesome-reveal/Flip";
import './About.css';
const About = () => {
    return(
        <div className="container about-section" id="about">
    <div className="row">
      <Fade bottom>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img src={ProfilePic} alt="Profile" />
          </div>
        </div>
      </Fade>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <div className="about-details">
          <Flip left>
            <div className="about-title">
              <h2>About Me</h2>
              <span className="line"></span>
            </div>
          </Flip>

          <Fade right>
            <p className="description">
              Hello, my name is Oladunjoye Opeyemi. I'm a full-stack developer 
              passionate about creating intuitive user interfaces that provide
              an exceptional user experience. I pay great attention to detail 
              ensuring that the websites or applications I develop are responsive
              visually appealing and accessible. I can design efficient database
              structures, write optimized queries and integrate APIs to enable
              seamless communication between the front end and backend.
              I'm Quietly Confident, Naturally Curious with a Strong Desire to
              Learn And Constantly Work On Improving My Skills.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  </div>
    )
};

export default About;