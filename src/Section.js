import React, { Component, PropTypes } from 'react';
import HeaderSection from './HeaderSection';
import TextQuestion from './TextQuestion';

export default class Section extends Component {

    render() {
        return (
            <div className="section">
                <HeaderSection />
                <div></div>
                <TextQuestion />
            </div>
          
        );
    }
  
  }