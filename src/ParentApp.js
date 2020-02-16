import React, { Component, PropTypes } from 'react';
import Header from './Header';
import QuestionContainer from './QuestionContainer';
import Button from '@material-ui/core/Button';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Summary from './Summary';

class ParentApp extends Component {

    state = {
        showSummary: false,
        
        grossIncome: 0,
        otherIncome: 0,
        totalIncome: 0,

        lifeInsuranceRelief: 0,
        medicalInsuranceRelief: 0,
        lifestyleRelief: 0,
        educationRelief: 0,
        disabledIndividualRelief: 0,
        prsRelief: 0,
        totalIndividualRelief: 0,

        totalMarriedRelief: 0,
        married: false,
        disabledSpouse: 0,
        workingSpouse: 0,

        totalChildrenRelief: 0,
        children: false,
        childrenAmount:0,
        disabledChildrenAmount:0,
        schoolChildren: 0,
        collegeChildren: 0,
        uniChildren: 0,
        hasDisabledChildren: false,
        disabledChildren: 0,
        disabledUniChildren: 0,
        schoolChildrenToDisplay: 0,
        collegeChildrenToDisplay: 0,
        uniChildrenToDisplay: 0,
        
        epfAndSocso: 4250,
        selfDependent: 9000,
    }

    getGrossIncome = (value, id, cap) => {
        this.setState ( prevState => ({
            grossIncome: value,
            totalIncome: prevState.totalIncome - prevState.grossIncome + value,
        }))
    }

    getOtherIncome = (value, id, cap) => {
        this.setState ( prevState => ({
            otherIncome: value,
            totalIncome: prevState.totalIncome - prevState.otherIncome + value,
        }))
    }

    getTotalRelief = (value, id, cap) => {
            console.log(value)
            console.log(id)
            console.log(cap)

            var cappedRelief = 0

            if (cap == 0) {
                cappedRelief = value
            } else if (value > cap) {
                cappedRelief = cap
            } else {
                cappedRelief = value
            }

            this.setState ( prevState => ({
                [id]: cappedRelief,
            }))

            this.setState ( prevState => ({
                totalIndividualRelief: prevState.lifeInsuranceRelief + prevState.medicalInsuranceRelief + prevState.lifestyleRelief +
                                        prevState.educationRelief + prevState.disabledIndividualRelief
            }))

            this.setState ( prevState => ({
                totalMarriedRelief: prevState.disabledSpouse + prevState.workingSpouse
            }))

            this.setState ( prevState => ({
                totalChildrenRelief: (prevState.schoolChildren * 2000) + (prevState.collegeChildren * 2000) + (prevState.uniChildren * 8000) 
                            + (prevState.disabledChildren * 6000) + (prevState.disabledUniChildren * 8000),

                schoolChildrenToDisplay: prevState.childrenAmount - prevState.collegeChildren - prevState.uniChildren,
                collegeChildrenToDisplay: prevState.childrenAmount - prevState.schoolChildren - prevState.uniChildren,
                uniChildrenToDisplay: prevState.childrenAmount - prevState.schoolChildren - prevState.collegeChildren,
            }))
        
    }

    showSummarySection = () => {
        this.setState ({
            showSummary: true
        })
    }

    updateTotalIncome = (value) => {
        this.setState ({
            totalIncome: value
        })
    }

    handleOnYesMarriedClicked = () => {
        this.setState( prevState => ({
            married: true,
            workingSpouse: 4000,
            totalMarriedRelief: prevState.disabledSpouse + 4000
        }))
    }

    handleOnNoMarriedClicked = () => {
        this.setState ({
            married: false,
            totalMarriedRelief: 0,
            disabledSpouse: 0,
            workingSpouse: 0,
        })
    }

    handleOnYesChildrenClicked = () => {
        this.setState ({
            children: true
        })
    }

    handleOnNoChildrenClicked = () => {
        this.setState ({
            children: false,
            totalChildrenRelief: 0,
            childrenAmount:0,
            schoolChildren: 0,
            collegeChildren: 0,
            uniChildren: 0,
            disabledChildren: 0,
            disabledUniChildren: 0,
        })
    }

    hasDisabledChildrenFunc = (hasDisabled) => {
        this.setState ({
            hasDisabledChildren: hasDisabled,
            disabledChildren: 0,
            disabledUniChildren: 0,
        })
    }

    render() {
        return (
            <div className="parentApp">
            <Header />
            <QuestionContainer 
            totalIncome={this.state.totalIncome}
            totalIndividualRelief={this.state.totalIndividualRelief} 
            getGrossIncome={this.getGrossIncome}
            getOtherIncome={this.getOtherIncome}
            getTotalRelief={this.getTotalRelief}

            totalMarriedRelief={this.state.totalMarriedRelief}
            married={this.state.married}
            handleOnYesMarriedClicked={this.handleOnYesMarriedClicked}
            handleOnNoMarriedClicked={this.handleOnNoMarriedClicked}
            
            totalChildrenRelief={this.state.totalChildrenRelief}
            children={this.state.children}
            handleOnYesChildrenClicked={this.handleOnYesChildrenClicked}
            handleOnNoChildrenClicked={this.handleOnNoChildrenClicked}
            childrenAmount={this.state.childrenAmount}
            schoolChildrenToDisplay={this.state.schoolChildrenToDisplay}
            collegeChildrenToDisplay={this.state.collegeChildrenToDisplay}
            uniChildrenToDisplay={this.state.uniChildrenToDisplay}
            hasDisabledChildren={this.state.hasDisabledChildren}
            hasDisabledChildrenFunc={this.hasDisabledChildrenFunc}
            disabledChildren={this.state.disabledChildren}

            />

            <div className="viewSummaryButton">
                {this.state.showSummary ?
                <Summary
                totalIncome={this.state.totalIncome}
        
                lifeAndMedical= {this.state.lifeInsuranceRelief + this.state.medicalInsuranceRelief}
                lifestyleAndEducation = {this.state.lifestyleRelief + this.state.educationRelief}
                disabled= {this.state.disabledIndividualRelief}
                totalTaxRelief={this.state.totalIndividualRelief + this.state.epfAndSocso + this.state.selfDependent}
                epfAndSocso={this.state.epfAndSocso}
                selfDependent={this.state.selfDependent}
                totalMarriedRelief={this.state.totalMarriedRelief}
                totalChildrenRelief={this.state.totalChildrenRelief}

                netChargeableIncome={this.state.totalIncome - this.state.totalIndividualRelief - this.state.epfAndSocso - this.state.selfDependent 
                    - this.state.totalMarriedRelief - this.state.totalChildrenRelief} 
                />
                  : 
                <Button variant="contained" color="primary" size="large" startIcon={<MonetizationOnIcon />} onClick={this.showSummarySection}>
                View Summary
                </Button>         
            }

            </div>
                
            </div> 
        );
    }
  
  }

  export default ParentApp;