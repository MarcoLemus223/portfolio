import React from "react";
import ReactPlayer from "react-player";
import classes from "./Work.module.css";

const Work = () => {
  return (
    <div>
      <div>
        <ReactPlayer
          className={classes.glasses}
          url="https://www.youtube.com/watch?v=bSrmbjJ8fhM&t=6s"
        />
      </div>
      <div className={classes.des}>
        <h3>
          In this project I created an e-commerce website for sunglasses that
          has a <br></br>add to cart button as well as a wishlist button. A user
          has a variety of <br></br>options of sunglasses. There is a working
          login/sign-up where you <br></br>can create a account that'll save
          your information in a database <br></br>so when you come back to the
          website you can log in.
        </h3>
      </div>
      <div className={classes.dash}></div>

      <div>
        <ReactPlayer
          className={classes.eightball}
          url="https://youtu.be/ARqDS4MgUgs"
        />
      </div>
      <div className={classes.des}>
        <h3>
          My first ever project I created a working 8 ball where you can ask it
          any question<br></br> you want and get an answer inside of the box.
          Doing this I have pre-set answers <br></br>in the backend so when you
          click on the button or press enter on your keyboard <br></br> you'll
          get the answer.
        </h3>
      </div>
    </div>
  );
};

export default Work;
