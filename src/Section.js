import React, { Component, PropTypes } from 'react';
import HeaderSection from './HeaderSection';
import MoneyTextQuestion from './MoneyTextQuestion';
import CheckboxQuestion from './CheckboxQuestion';
import { Switch, FormControlLabel, FormGroup, Box } from "@material-ui/core";
import classes from './app.module.css'

class Section extends Component {
    state = {
      showDetails: true
    }
    constructor(props) {
        super(props);
    }

    getTotalAmount = (title)  => {
        if (title === "Income") {
         return this.props.totalIncome
        } else if (title === "Individual Tax Relief"){
         return this.props.totalIndividualRelief
        } else if (title === "Married Tax Relief") {
            return this.props.totalMarriedRelief
        }
    }

    handleShowDetailsChange = (event) => {
      this.setState((prevState) => {
        return {...prevState, showDetails: event.target.checked}
      })
    }


    render() {

        const incomeQuestionIcons = (
            <div className={classes.questionIcon}><img src="assets/dollar.svg"></img> </div>
        )

        const individualReliefQuestionIcons = (
            <div className={classes.questionIcon}><img src="assets/tax.svg"></img> <img src="assets/one.svg"></img></div>
        )

        const incomeQuestions = (
            <div>
            <MoneyTextQuestion
            id = "grossAnnualIncome"
            questionTitle="Estimate your Gross Annual Income"
            questionSubtitle="includes bonuses and allowances before any deductions"
            label="Gross Income"
            icons={incomeQuestionIcons}
            total={this.props.getGrossIncome}
            />

            <MoneyTextQuestion
            id = "otherIncome"
            questionTitle="Estimate your Other Income"
            questionSubtitle="includes taxable dividends, rent and business income"
            label="Total Other Income"
            icons={incomeQuestionIcons}
            total={this.props.getOtherIncome}
            />
            </div>
        )

        const taxReliefQuestions = (
            <div>

            <MoneyTextQuestion
            id="lifeInsuranceRelief"
            questionTitle="Life Insurance Premiums"
            questionSubtitle="total paid for the year"
            capText="(capped at RM 3,000)"
            cap={3000}
            label="Life Insurance Premiums"
            icons={individualReliefQuestionIcons}
            total={this.props.getTotalRelief}
            />

            <MoneyTextQuestion
            id="medicalInsuranceRelief"
            questionTitle="Medical and Education Insurance Premium"
            questionSubtitle="total paid for the year"
            capText="(capped at RM 3000)"
            cap={3000}
            label="Medical & Education"
            icons={individualReliefQuestionIcons}
            total={this.props.getTotalRelief}/>

            <MoneyTextQuestion
            id="lifestyleRelief"
            questionTitle="Lifestyle Expenses"
            questionSubtitle="Books and magazines, PC or smartphone, sports equipment or gym membership, internet subscription"
            capText="(capped at RM 2,500)"
            cap={2500}
            label="Lifestyle Expenses"
            icons={individualReliefQuestionIcons}
            total={this.props.getTotalRelief}/>

            <MoneyTextQuestion
            id="educationRelief"
            questionTitle="Education fees"
            questionSubtitle="Degree, Masters or PhD level"
            capText="(capped at RM 7,000)"
            cap={7000}
            label="Education fees"
            icons={individualReliefQuestionIcons}
            total={this.props.getTotalRelief}/>

            <CheckboxQuestion
            id="disabledIndividualRelief"
            questionTitle="Are you a disabled individual?"
            questionSubtitle=""
            capText="(fixed at RM 6,000)"
            cap={6000}
            label={["Yes","No"]}
            icons={individualReliefQuestionIcons}
            total={this.props.getTotalRelief}/>


            <MoneyTextQuestion
            id="prsRelief"
            questionTitle="PRS Contributions"
            questionSubtitle="contributions to a private retirement scheme (until 2021)"
            capText="(capped at RM 3,000)"
            cap={3000}
            label="PRS Contributions"
            icons={individualReliefQuestionIcons}
            total={this.props.getTotalRelief}/>
            </div>
        )

        function getQuestions(title) {
            if (title === "Income") {
                return incomeQuestions
            } else if (title === "Individual Tax Relief") {
                return taxReliefQuestions
            }
        }

        return (
            <div className={classes.section}>
              <Box display='flex' justifyContent='flex-end'>
                <FormControlLabel
                    control={<Switch label='Details' checked={this.state.showDetails} onChange={this.handleShowDetailsChange} />}
                    label='Show details' />


              </Box>
              <HeaderSection
                title={this.props.title}
                icons={this.props.title}
                total={this.getTotalAmount(this.props.title)}
                />
              {this.state.showDetails && getQuestions(this.props.title)}

            </div>

        );
    }


  }

  export default Section;
