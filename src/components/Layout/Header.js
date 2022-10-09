import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
    return (
        <div className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' activeClassName={classes.active}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeClassName={classes.active}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/work' activeClassName={classes.active}>My Work</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' activeClassName={classes.active}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;
