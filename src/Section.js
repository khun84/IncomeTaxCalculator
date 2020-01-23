import React, { Component, PropTypes } from 'react';
import HeaderSection from './HeaderSection';
import MoneyTextQuestion from './MoneyTextQuestion';

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
    icons={incomeQuestionIcons}/>

    <MoneyTextQuestion 
    questionTitle="Estimate your Other Income" 
    questionSubtitle="includes taxable dividends, rent and business income"
    label="Total Other Income"
    icons={incomeQuestionIcons}/>
    </div>
)

const taxReliefQuestions = (
    <div>
    {/* TODO make EPF question that auto calculate from gross income */}

    <MoneyTextQuestion 
    questionTitle="Life Insurance Premiums" 
    questionSubtitle="total paid for the year"
    label="Life Insurance Premiums"
    icons={individualReliefQuestionIcons}/>

    <MoneyTextQuestion 
    questionTitle="Medical Insurance Premium" 
    questionSubtitle="total paid for the year"
    label="Medical Insurance Premiums"
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

export default function Section (props) {

        return (
            <div className="section">
                <HeaderSection
                title={props.title}
                icons={getQuestionIcons(props.title)}/>

                {getQuestions(props.title)}

            </div>
          
        );

  
  }