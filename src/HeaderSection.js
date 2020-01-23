import React, { Component, PropTypes } from 'react';

export default class HeaderSection extends Component {

    render() {
        return (
            <div className="headerSection b-border">
                <h3>Income <span className="spacing"></span><img src="assets/dollar.svg"></img></h3>
            </div>
          
        );
    }
  
  }