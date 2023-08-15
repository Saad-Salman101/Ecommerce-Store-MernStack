import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";

const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>

            <Typography>SAAD SALMAN</Typography>

            <span>
              This is a sample wesbite made by using Mernstack
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
