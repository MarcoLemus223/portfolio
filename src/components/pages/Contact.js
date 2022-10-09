import React from "react";
import classes from './Contact.module.css'

const Contact = () => {

  let url = "https://www.linkedin.com/in/marco-lemus-338370243/";

  return (
    <div>
      <div>
        <h1 className={classes.h1}>
          Contact me anywhere here I'll be happy to hear from you!
        </h1>
      </div>

      <div className={classes.dots}></div>

      <div>
        <h3 className={classes.h3}>Linkedin</h3>
      </div>
      <div>
        <a href={url} className={classes.url}>Linkdin Profile</a>
      </div>

      <div className={classes.dots}></div>

      <div>
        <h3 className={classes.h3}>Email</h3>
        <h2 className={classes.h2}>marcoantonio_lemus@yahoo.com</h2>
      </div>

      <div className={classes.dots}></div>

      <div>
        <h3 className={classes.h3}>Phone</h3>
        <h2 className={classes.h2}>435-262-9380</h2>
      </div>
    </div>
  );
};

export default Contact;
