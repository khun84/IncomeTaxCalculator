import React, { Component, PropTypes } from 'react';
import Section from './Section';
import OptionalSection from './OptionalSection';
import classes from './app.module.css'


export default class QuestionContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >

                <div className={classes.questionContainer}>
                <Section title="Income"
                totalIncome={this.props.totalIncome}
                getGrossIncome={this.props.getGrossIncome}
                getOtherIncome={this.props.getOtherIncome}
                />
                </div>

                <div className={classes.questionContainerSubsequent}>
                <Section
                title="Individual Tax Relief"
                getTotalRelief={this.props.getTotalRelief}
                totalIndividualRelief={this.props.totalIndividualRelief}
                />
                </div>

                <div className={classes.questionContainerSubsequent}>
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

                <div className={classes.questionContainerSubsequent}>
                <OptionalSection
                questionTitle="Do you have Children?"
                title="Children Tax Relief"
                getTotalRelief={this.props.getTotalRelief}
                totalRelief={this.props.totalChildrenRelief}
                handleOnYesClicked={this.props.handleOnYesChildrenClicked}
                handleOnNoClicked={this.props.handleOnNoChildrenClicked}
                answer={this.props.children}
                childrenAmount={this.props.childrenAmount}
                schoolChildrenToDisplay={this.props.schoolChildrenToDisplay}
                collegeChildrenToDisplay={this.props.collegeChildrenToDisplay}
                uniChildrenToDisplay={this.props.uniChildrenToDisplay}
                hasDisabledChildren={this.props.hasDisabledChildren}
                hasDisabledChildrenFunc={this.props.hasDisabledChildrenFunc}
                disabledChildren={this.props.disabledChildren}
                />
                </div>




            </div>

        );
    }

  }
