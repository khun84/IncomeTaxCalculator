import React, { Component, PropTypes } from 'react';
import HeaderSection from './HeaderSection';
import MoneyTextQuestion from './MoneyTextQuestion';

const incomeQuestions = (
    <div>
    <MoneyTextQuestion 
    questionTitle="Estimate your Gross Annual Income" 
    questionSubtitle="includes bonuses and allowances before any deductions"
    label="Gross Income"/>

    <MoneyTextQuestion 
    questionTitle="Estimate your Other Income" 
    questionSubtitle="includes taxable dividends, rent and business income"
    label="Total Other Income"/>
    </div>
)

function getQuestions(title) {
    if (title === "Income") {
        return incomeQuestions
    } else {
        
    }
}

export default function Section (props) {

        return (
            <div className="section">
                <HeaderSection title={props.title}/>

                {getQuestions(props.title)}

            </div>
          
        );

  
  }