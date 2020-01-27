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
        totalIndividualRelief: 0,

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
            var cappedRelief = 0

            if (value > cap) {
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
            />

            <div className="viewSummaryButton">
                {this.state.showSummary ?
                 <Summary />
                  : 
            //     <Button variant="contained" color="primary" size="large" startIcon={<MonetizationOnIcon />} onClick={this.showSummarySection}>
            //     View Summary
            // </Button> 
            <Summary
                 totalIncome={this.state.totalIncome}
         
                 lifeAndMedical= {this.state.lifeInsuranceRelief + this.state.medicalInsuranceRelief}
                 lifestyleAndEducation = {this.state.lifestyleRelief + this.state.educationRelief}
                 disabled= {this.state.disabledIndividualRelief}
                 totalTaxRelief={this.state.totalIndividualRelief + this.state.epfAndSocso + this.state.selfDependent}
                 epfAndSocso={this.state.epfAndSocso}
                 selfDependent={this.state.selfDependent}
                 netChargeableIncome={this.state.totalIncome - this.state.totalIndividualRelief - this.state.epfAndSocso - this.state.selfDependent}
                 />
            }

            </div>
                
            </div> 
        );
    }
  
  }

  export default ParentApp;