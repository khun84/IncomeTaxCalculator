import React, { Component, PropTypes } from 'react';
import HeaderSection from './HeaderSection';
import MoneyTextQuestion from './MoneyTextQuestion';
import CheckboxQuestion from './CheckboxQuestion';


 

  

class Section extends Component {

    state = {
        grossIncome: 0,
        otherIncome: 0,
        totalIncome: 0,
    };

    getGrossIncome = (value) => {
        this.setState ( prevState => ({
            grossIncome: value,
            totalIncome: prevState.otherIncome + value,
        }))
    }

    getOtherIncome = (value) => {
        this.setState ( prevState => ({
            otherIncome: value,
            totalIncome: prevState.grossIncome + value,
        }))
    }

    constructor(props) {
        super(props);
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
            questionTitle="Life Insurance Premiums" 
            questionSubtitle="total paid for the year"
            cap="(capped at RM 3,000)"
            label="Life Insurance Premiums"
            icons={individualReliefQuestionIcons}/>
        
            <MoneyTextQuestion 
            questionTitle="Medical Insurance Premium" 
            questionSubtitle="total paid for the year"
            cap="(capped at RM 500)"
            label="Medical Insurance Premiums"
            icons={individualReliefQuestionIcons}/>
            
            <MoneyTextQuestion 
            questionTitle="Lifestyle Expenses" 
            questionSubtitle="Books and magazines, PC or smartphone, sports equipment or gym membership, internet subscription"
            cap="(capped at RM 2,500)"
            label="Lifestyle Expenses"
            icons={individualReliefQuestionIcons}/>
        
            <MoneyTextQuestion 
            questionTitle="Education fees" 
            questionSubtitle="Degree, Masters or PhD level"
            cap="(capped at RM 7,000)"
            label="Education fees"
            icons={individualReliefQuestionIcons}/>
        
            <CheckboxQuestion 
            questionTitle="Are you a disabled individual?" 
            questionSubtitle=""
            cap="(fixed at RM 6,000)"
            label={["Yes","No"]}
            icons={individualReliefQuestionIcons}/>
            </div>
        )
        
        
        
        function getQuestions(title) {
            if (title === "Income") {
                return incomeQuestions
            } else {
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
                total={this.state.totalIncome}
                />

                {getQuestions(this.props.title)}

            </div>
          
        );
    }
        
  
  }

  export default Section;