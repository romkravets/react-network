import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav class={classes.sidebar}>
            <ul className={classes.nav}>
                <li className={classes.item}>
                    <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/dialog" activeClassName={classes.activeLink}>Dialog</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/news">News</NavLink>
                </li>
                <li className={classes.item}>link</li>
            </ul>
        </nav>
    )
}

export default Navbar;
