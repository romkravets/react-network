import React from 'react';
import logo from '../../logo.svg';
import classes from './Header.module.css'

const Header = () => {
   return (
      <header class={classes.header}>
         <img src={logo} alt=""/>
      </header>
   )
}

export default Header;