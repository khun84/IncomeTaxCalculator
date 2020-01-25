import React, { Component, PropTypes } from 'react';
import Header from './Header';
import QuestionContainer from './QuestionContainer';
import Button from '@material-ui/core/Button';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

export default class ParentApp extends Component {

    render() {
        return (
            <div className="parentApp">
            <Header />
            <QuestionContainer />

            <div className="viewSummaryButton">
            <Button variant="contained" color="primary" size="large" startIcon={<MonetizationOnIcon />}>
                View Summary
            </Button>
            </div>
                
            </div> 
        );
    }
  
  }