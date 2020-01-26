import React, { Component, PropTypes } from 'react';
import Header from './Header';
import QuestionContainer from './QuestionContainer';
import Button from '@material-ui/core/Button';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Summary from './Summary';

class ParentApp extends Component {

    state = {
        showSummary: false,
    }

    showSummarySection = () => {
        this.setState ({
            showSummary: true
        })
    }

    render() {
        return (
            <div className="parentApp">
            <Header />
            <QuestionContainer />

            <div className="viewSummaryButton">
                {this.state.showSummary ?
                //  <Summary />
                null
                  : 
                <Button variant="contained" color="primary" size="large" startIcon={<MonetizationOnIcon />} onClick={this.showSummarySection}>
                View Summary
            </Button> }
           
            </div>
                
            </div> 
        );
    }
  
  }

  export default ParentApp;