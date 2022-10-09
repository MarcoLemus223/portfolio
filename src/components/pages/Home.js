import React from "react";

import classes from "./Home.module.css";
import me from "../../assets/me.jpg";

const Home = () => {
  return (
    <div className={classes.home}>
      <h1 className={classes.h1}>Marco Antonio Lemus</h1>
      <div>
        <h5 className={classes.h5}>I'm a Full-Stack Web Developer</h5>
      </div>
      <div className={classes["me"]}>
        <img src={me} alt="pic"></img>
      </div>
      <div>
        <h5 className={classes.h5}>
          Welcome to my portfolio.
          <br></br>
          I'm a passionate Web Developer from Utah <br></br>with a certificate
          from Devmountain
        </h5>
      </div>
    </div>
  );
};

export default Home;