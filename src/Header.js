import React, { Component, PropTypes } from 'react';
import classes from './app.module.css'

export default class Header extends Component {

    render() {
        return (
            <div className={classes.headerDiv}>
            <header className={classes.mainHeader}>
            <h1>Personal Tax Calculator</h1>
            </header>
            </div>

        );
    }

  }
