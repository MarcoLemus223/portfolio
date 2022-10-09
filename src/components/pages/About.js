import React from "react";

import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <h1 className={classes.h1}>Hello,</h1>
      <h1 className={classes.h1}>a bit about me</h1>
      <div>
        <h5 className={classes.h5}>
          I'm a front-end developer from Utah. I have a passion for coding, I
          love getting better every day and developing my skill everyday.
          <br></br> What I love most about web development is seeing the
          websitecome together and working with a team to come up with new
          ideas.<br></br>I recently graduated from a 16 week coding bootcamp
          from devmountain and acquired a certificate.<br></br>
          Reflecting on my work it has shown me how far I have come as both a
          developer, and a person.
        </h5>
      </div>

      <div className={classes.dots}></div>

      <div>
        <h1 className={classes.h1}>Skills</h1>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <p className={classes.p}>JavaScript</p>
          </li>
          <li className={classes.li}>
            <p className={classes.p}>React.Js</p>
          </li>
          <li className={classes.li}>
            <p className={classes.p}>HTML5</p>
          </li>
          <li className={classes.li}>
            <p className={classes.p}>CSS</p>
          </li>
          <li className={classes.li}>
            <p className={classes.p}>Node.Js</p>
          </li>
          <li className={classes.li}>
            <p className={classes.p}>PostgreSQL</p>
          </li>
          <li className={classes.li}>
            <p className={classes.p}>Express</p>
          </li>
          <li className={classes.li}>
            <p className={classes.p}>Axios</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
