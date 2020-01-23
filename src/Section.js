import React, { Component, PropTypes } from 'react';
import HeaderSection from './HeaderSection';
import MoneyTextQuestion from './MoneyTextQuestion';

export default class Section extends Component {

    render() {
        return (
            <div className="section">
                <HeaderSection />

                <MoneyTextQuestion 
                questionTitle="Estimate your Gross Annual Income" 
                questionSubtitle="includes bonuses and allowances before any deductions"
                label="Gross Income"/>

                <MoneyTextQuestion 
                questionTitle="Estimate your Other Income" 
                questionSubtitle="includes taxable dividends, rent and business income"
                label="Total Other Income"/>

            </div>
          
        );
    }
  
  }