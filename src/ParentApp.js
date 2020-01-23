import React, { Component, PropTypes } from 'react';
import Header from './Header';
import QuestionContainer from './QuestionContainer';

export default class ParentApp extends Component {

    render() {
        return (
            <div className="parentApp">
            <Header />
            <QuestionContainer />

            </div> 
        );
    }
  
  }