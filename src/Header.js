import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

export default class Header extends Component {
    
    render() {
        return (
            <div className="headerDiv">
            <header className="main-header">
            <h1>Adrian's Personal Tax Calculator</h1>
            </header>
            </div>
          
        );
    }
  
  }