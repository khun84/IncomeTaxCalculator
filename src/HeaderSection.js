import React, { Component, PropTypes } from 'react';

function returnIcon(title) {
    if (title === "Income") {
        return "assets/dollar.svg"
    } else if (title === "Tax Relief") {
        return "assets/tax.svg"
    }
}

export default function IncomeSection(props) {

        return (
            <div className="headerSection b-border">
                <h3>{props.title} <span className="spacing"></span><img src={returnIcon(props.title)}></img></h3>
            </div>
          
        );
  
  }