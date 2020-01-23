import React, { Component, PropTypes } from 'react';
import Section from './Section';

export default class QuestionContainer extends Component {

    render() {
        return (
            <div >

                <div className="questionContainer">
                <Section title="Income"/>
                </div>
                
                <div className="questionContainerSubsequent">
                <Section title="Tax Relief"/>
                
                </div>

                

            </div>
          
        );
    }
  
  }