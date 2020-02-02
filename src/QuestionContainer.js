import React, { Component, PropTypes } from 'react';
import Section from './Section';
import OptionalSection from './OptionalSection';


export default class QuestionContainer extends Component {

    constructor(props) {
        super(props);
    } 

    render() {
        return (
            <div >

                <div className="questionContainer">
                <Section title="Income" 
                totalIncome={this.props.totalIncome}
                getGrossIncome={this.props.getGrossIncome}
                getOtherIncome={this.props.getOtherIncome}
                />
                </div>
                
                <div className="questionContainerSubsequent">
                <Section 
                title="Individual Tax Relief"
                getTotalRelief={this.props.getTotalRelief}
                totalIndividualRelief={this.props.totalIndividualRelief}
                />
                </div>

                <div className="questionContainerSubsequent">
                <OptionalSection
                questionTitle="Are you married?" 
                title="Married Tax Relief"
                getTotalRelief={this.props.getTotalRelief}
                totalMarriedRelief={this.props.totalMarriedRelief}
                handleOnYesMarriedClicked={this.props.handleOnYesMarriedClicked}
                handleOnNoMarriedClicked={this.props.handleOnNoMarriedClicked}
                married={this.props.married}
                />
                
                </div>

                

            </div>
          
        );
    }
  
  }