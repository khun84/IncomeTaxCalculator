import React, { Component, PropTypes } from 'react';
import NumberFormat from 'react-number-format';
import classes from './app.module.css'

function returnIcon(title) {
    if (title === "Income") {
        return (
            <img className={classes.headerIcons} src="assets/dollar.svg"></img>
        )
    } else if (title === "Individual Tax Relief") {
        return (
            <div className={classes.inlineBlock}>
                <img className={classes.headerIcons} src="assets/tax.svg"></img>
                <img className={classes.headerIcons} src="assets/one.svg"></img>
            </div>
        )
    } else if (title === "Married Tax Relief") {
        return (
            <div className={classes.inlineBlock}>
                <img className={classes.headerIcons} src="assets/tax.svg"></img>
                <img className={classes.headerIcons} src="assets/married.svg"></img>
            </div>
        )
    } else if (title === "Children Tax Relief") {
        return (
            <div className={classes.inlineBlock}>
                <img className={classes.headerIcons} src="assets/tax.svg"></img>
                <img className={classes.headerIcons} src="assets/family.svg"></img>
            </div>
        )
    }
}

function getSectionType(title) {
    if (title === "Income") {
        return "Total Income : "
    } else if (title === "Individual Tax Relief" || title === "Married Tax Relief" || title === "Children Tax Relief") {
        return "Total Relief : "
    }
}

export default function IncomeSection(props) {

        return (
            <div className={`${classes.headerSection} ${classes.bBorder}`}>
                <h3>{props.title}
                {returnIcon(props.title)}
                <div className={classes.total}>
                        <h6>
                            {getSectionType(props.title)}
                            <div>
                            <NumberFormat value={props.total} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
                            {props.title === "Children Tax Relief" ?
                                <h6>No of Children : {props.childrenAmount}</h6>
                            :
                                null
                            }

                            </div>
                        </h6>
                    </div>
                </h3>



            </div>

        );

  }
