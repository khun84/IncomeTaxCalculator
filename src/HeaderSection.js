import React, { Component, PropTypes } from 'react';

function returnIcon(title) {
    if (title === "Income") {
        return (
            <img className="headerIcons" src="assets/dollar.svg"></img>
        )
    } else if (title === "Individial Tax Relief") {
        return (
            <div className="inline-block    ">
                <img className="headerIcons" src="assets/tax.svg"></img>
                <img className="headerIcons" src="assets/one.svg"></img>
            </div>
        )
    }
}

export default function IncomeSection(props) {

        return (
            <div className="headerSection b-border">
                <h3>{props.title}
                {returnIcon(props.title)}
                </h3>
            </div>
          
        );
  
  }