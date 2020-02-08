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
                totalRelief={this.props.totalMarriedRelief}
                handleOnYesClicked={this.props.handleOnYesMarriedClicked}
                handleOnNoClicked={this.props.handleOnNoMarriedClicked}
                answer={this.props.married}
                />
                </div>
                
                <div className="questionContainerSubsequent">
                <OptionalSection
                questionTitle="Do you have Children?" 
                title="Children Tax Relief"
                getTotalRelief={this.props.getTotalRelief}
                totalRelief={this.props.totalChildrenRelief}
                handleOnYesClicked={this.props.handleOnYesChildrenClicked}
                handleOnNoClicked={this.props.handleOnNoChildrenClicked}
                answer={this.props.children}
                childrenAmount={this.props.childrenAmount}
                />
                </div>
                

                

            </div>
          
        );
    }
  
  }