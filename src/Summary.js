import React, { Component, PropTypes } from 'react';
import NumberFormat from 'react-number-format';


class Summary extends Component {

    getTaxAmount = (incomeTaxable) => {
        console.log("income " + incomeTaxable)
        if (incomeTaxable > 0 && incomeTaxable <= 5000) {
            return 0;
        } else if (incomeTaxable > 5000 && incomeTaxable <= 20000) {
            return (0.01 * incomeTaxable).toFixed(2);
        } else if (incomeTaxable > 20000 && incomeTaxable <= 35000) {
            return (150 + (0.03 * (incomeTaxable-20000))).toFixed(2);
        } else if (incomeTaxable > 35000 && incomeTaxable <= 50000) {
            return (600 + (0.08 * (incomeTaxable-35000))).toFixed(2);
        } else if (incomeTaxable > 50000 && incomeTaxable <= 70000) {
            return (1800 + (0.14 * (incomeTaxable-50000))).toFixed(2);
        } else if (incomeTaxable > 70000 && incomeTaxable <= 100000) {
            return (4600 + (0.21 * (incomeTaxable-70000))).toFixed(2);
        } else if (incomeTaxable > 100000 && incomeTaxable <= 250000) {
            return (10900 + (0.24 * (incomeTaxable-100000))).toFixed(2);
        } else if (incomeTaxable > 250000 && incomeTaxable <= 400000) {
            return (46900 + (0.245 * (incomeTaxable-250000))).toFixed(2);
        } else if (incomeTaxable > 400000 && incomeTaxable <= 600000) {
            return (83650 + (0.25 * (incomeTaxable-400000))).toFixed(2);
        } else if (incomeTaxable > 600000 && incomeTaxable <= 1000000) {
            return (133650 + (0.26 * (incomeTaxable-600000))).toFixed(2);
        } else if (incomeTaxable > 1000000 && incomeTaxable <= 2000000) {
            return (237650 + (0.28 * (incomeTaxable-600000))).toFixed(2);
        } else {
            return (517650 + (0.30 * (incomeTaxable-2000000))).toFixed(2);
        }
    }

    getSavingsFromRelief = () => {
        return (this.getTaxAmount(this.props.totalIncome) - this.getTaxAmount(this.props.netChargeableIncome)).toFixed(2)
    }

    getTaxPaid = () => {
        return ((this.getTaxAmount(this.props.netChargeableIncome)/this.props.netChargeableIncome) * 100).toFixed(2)
    }

    getMonthlyTaxPaid = () => {
        return (this.getTaxAmount(this.props.netChargeableIncome)/12).toFixed(2)
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="summarySection b-border">
                <h3>Summary</h3>

                <div className="breakdown">
                    <h4>Breakdown of gross income and tax relief</h4>

                    <div className="listContainer">
                        <ul className="unorderedList">
                            <li className="listItem summaryBorder">
                                <h6 className="listItemTitle">Total income before deductions : </h6>
                                <span className="listItemAmount">
                                    <b><NumberFormat value={this.props.totalIncome} displayType={'text'} thousandSeparator={true} prefix={'RM '} /></b>
                                </span>
                            </li>

                            <li className="listItem">
                                <h6 className="listItemTitle">Tax relief </h6>
                            </li>

                            <li className="listItem">
                                <span className="listItemTitle">Individual dependent relief</span>
                                <span className="listItemAmount">
                                    <NumberFormat value={this.props.selfDependent} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
                                </span>
                            </li>

                            <li className="listItem">
                                <span className="listItemTitle">EPF & SOCSO</span>
                                <span className="listItemAmount">
                                    <NumberFormat value={this.props.epfAndSocso} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
                                </span>
                            </li>

                            <li className="listItem">
                                <span className="listItemTitle">Life & Medical Insurance</span>
                                <span className="listItemAmount">
                                    <NumberFormat value={this.props.lifeAndMedical} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
                                </span>
                            </li>

                            <li className="listItem">
                                <span className="listItemTitle">Lifestyle & Education</span>
                                <span className="listItemAmount">
                                    <NumberFormat value={this.props.lifestyleAndEducation} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
                                 </span>
                            </li>

                            <li className="listItem">
                                <span className="listItemTitle">Disabled Individual</span>
                                <span className="listItemAmount">
                                    <NumberFormat value={this.props.disabled} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
                                </span>
                            </li>

                            <li className="listItem ">
                                <span className="listItemTitle">Marriage Relief</span>
                                <span className="listItemAmount">
                                    <NumberFormat value={this.props.totalMarriedRelief} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
                                </span>
                            </li>

                            <li className="listItem summaryBorder">
                                <span className="listItemTitle">Children Relief</span>
                                <span className="listItemAmount">
                                    <NumberFormat value={this.props.totalChildrenRelief} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
                                </span>
                            </li>

                            <li className="listItem">
                            <h6 className="listItemTitle">Total tax relief deductions : </h6>
                            <span className="listItemAmount">
                                <b><NumberFormat value={this.props.totalTaxRelief} displayType={'text'} thousandSeparator={true} prefix={'RM '} /></b>
                            </span>
                            </li>
                        </ul>
                    </div>

                </div>

            <div className="chargeableIncome">
                <div className="totalTaxPaid">
                    <div className="chargeableBoxBorder">
                        <h3 >Net Chargeable Income :&nbsp; 
                            <NumberFormat value={this.props.netChargeableIncome} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
                        </h3>
                    </div>
                    <div className="taxPaid">
                        <h3>RM : {this.getTaxAmount(this.props.netChargeableIncome)}</h3>
                        <span className="totalTaxPaidText">Total tax to be paid this year</span>
                    </div>
                </div>

                <div className="taxPaidStats">
                <ul className="taxPaidStatsList">
                    <li><img src="assets/info-button.svg"></img>That's <b>RM {this.getMonthlyTaxPaid()}</b> a month!</li>
                    <li><img src="assets/info-button.svg"></img>Tax paid is <b>{this.getTaxPaid()}%</b> of your annual salary</li>
                    <li><img src="assets/info-button.svg"></img>You have saved <b>RM {this.getSavingsFromRelief()}</b> from your tax deductions</li>
                </ul>
            </div>

            </div>

            </div>
        );
    }
}

export default Summary;