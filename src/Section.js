import React, { Component, PropTypes } from 'react';
import HeaderSection from './HeaderSection';
import MoneyTextQuestion from './MoneyTextQuestion';
import CheckboxQuestion from './CheckboxQuestion';


 

  

class Section extends Component {

    state = {
        grossIncome: 0,
        otherIncome: 0,
        totalIncome: 0,

        lifeInsuranceRelief: 0,
        medicalInsuranceRelief: 0,
        lifestyleRelief: 0,
        educationRelief: 0,
        disabledIndividualRelief: 0,
        totalIndividualRelief: 0,
    };

    getGrossIncome = (value) => {
        this.setState ( prevState => ({
            grossIncome: value,
            totalIncome: prevState.totalIncome - prevState.grossIncome + value,
        }))
    }

    getOtherIncome = (value) => {
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

    constructor(props) {
        super(props);
    } 

    getTotalAmount = (title)  => {
        if (title === "Income") {
         return this.state.totalIncome
        } else if (title === "Individual Tax Relief"){
         return this.state.totalIndividualRelief
        }
    }

    render() {

        const incomeQuestionIcons = (
            <div className="questionIcon"><img src="assets/dollar.svg"></img> </div>
        )
        
        const individualReliefQuestionIcons = (
            <div className="questionIcon"><img src="assets/tax.svg"></img> <img src="assets/one.svg"></img></div>
        )
        
        const incomeQuestions = (
            <div>
            <MoneyTextQuestion 
            questionTitle="Estimate your Gross Annual Income" 
            questionSubtitle="includes bonuses and allowances before any deductions"
            label="Gross Income"
            icons={incomeQuestionIcons}
            total={this.getGrossIncome}
            />
        
            <MoneyTextQuestion 
            questionTitle="Estimate your Other Income" 
            questionSubtitle="includes taxable dividends, rent and business income"
            label="Total Other Income"
            icons={incomeQuestionIcons}
            total={this.getOtherIncome}
            />
            </div>
        )
        
        const taxReliefQuestions = (
            <div>
            {/* TODO make EPF question that auto calculate from gross income */}
        
            <MoneyTextQuestion
            id="lifeInsuranceRelief" 
            questionTitle="Life Insurance Premiums" 
            questionSubtitle="total paid for the year"
            capText="(capped at RM 3,000)"
            cap={3000}
            label="Life Insurance Premiums"
            icons={individualReliefQuestionIcons}
            total={this.getTotalRelief}
            />
        
            <MoneyTextQuestion 
            id="medicalInsuranceRelief"
            questionTitle="Medical Insurance Premium" 
            questionSubtitle="total paid for the year"
            capText="(capped at RM 500)"
            cap={500}
            label="Medical Insurance Premiums"
            icons={individualReliefQuestionIcons}
            total={this.getTotalRelief}/>
            
            <MoneyTextQuestion 
            id="lifestyleRelief"
            questionTitle="Lifestyle Expenses" 
            questionSubtitle="Books and magazines, PC or smartphone, sports equipment or gym membership, internet subscription"
            capText="(capped at RM 2,500)"
            cap={2500}
            label="Lifestyle Expenses"
            icons={individualReliefQuestionIcons}
            total={this.getTotalRelief}/>
        
            <MoneyTextQuestion 
            id="educationRelief"
            questionTitle="Education fees" 
            questionSubtitle="Degree, Masters or PhD level"
            capText="(capped at RM 7,000)"
            cap={7000}
            label="Education fees"
            icons={individualReliefQuestionIcons}
            total={this.getTotalRelief}/>
        
            <CheckboxQuestion 
            id="disabledIndividualRelief"
            questionTitle="Are you a disabled individual?" 
            questionSubtitle=""
            capText="(fixed at RM 6,000)"
            cap={6000}
            label={["Yes","No"]}
            icons={individualReliefQuestionIcons}
            total={this.getTotalRelief}/>
            </div>
        )
        
        function getQuestions(title) {
            if (title === "Income") {
                return incomeQuestions
            } else if (title === "Individual Tax Relief") {
                return taxReliefQuestions
            }
        }
        
        function getQuestionIcons(title) {
            if (title === "Income") {
                return incomeQuestionIcons
            } else if (title === "Individual Tax Relief"){
                return individualReliefQuestionIcons
            }
        }
    
        

        return (
            <div className="section">
                <HeaderSection
                title={this.props.title}
                icons={getQuestionIcons(this.props.title)}
                total={this.getTotalAmount(this.props.title)}
                />

                {getQuestions(this.props.title)}

            </div>
          
        );
    }
        
  
  }

  export default Section;