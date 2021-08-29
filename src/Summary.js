import React, { Component, PropTypes } from 'react';
import NumberFormat from 'react-number-format';
import classes from './app.module.css'

const taxConfigs = [
  { lower: 0, upper: 5000, fixedTaxableAmt: 0, fixedTaxAmt: 0, rate: 0.00 },
  { lower: 5000, upper: 20000, fixedTaxableAmt: 0, fixedTaxAmt: 0, rate: 0.01 },
  { lower: 20000, upper: 35000, fixedTaxableAmt: 0, fixedTaxAmt: 150, rate: 0.03 },
  { lower: 35000, upper: 50000, fixedTaxableAmt: 0, fixedTaxAmt: 600, rate: 0.08 },
  { lower: 50000, upper: 70000, fixedTaxableAmt: 0, fixedTaxAmt: 1800, rate: 0.14 },
  { lower: 70000, upper: 100000, fixedTaxableAmt: 0, fixedTaxAmt: 4600, rate: 0.21 },
  { lower: 100000, upper: 250000, fixedTaxableAmt: 0, fixedTaxAmt: 10900, rate: 0.24 },
  { lower: 250000, upper: 400000, fixedTaxableAmt: 0, fixedTaxAmt: 46900, rate: 0.245 },
  { lower: 400000, upper: 600000, fixedTaxableAmt: 0, fixedTaxAmt: 83650, rate: 0.25 },
  { lower: 600000, upper: 1000000, fixedTaxableAmt: 0, fixedTaxAmt: 133650, rate: 0.26 },
  { lower: 1000000, upper: 2000000, fixedTaxableAmt: 0, fixedTaxAmt: 237650, rate: 0.28 },
  { lower: 2000000, upper: Number.POSITIVE_INFINITY, fixedTaxableAmt: 0, fixedTaxAmt: 517650, rate: 0.30 },
];

class Summary extends Component {

    handleClick = () => {

    }

    getTaxRate = (incomeTaxable) => {
      if (incomeTaxable === null || incomeTaxable < 0) {
        return 0
      }
      const taxConfig = taxConfigs.find(c => incomeTaxable >= c.lower && incomeTaxable < c.upper)
      return taxConfig.rate
    }

    getTaxAmount = (incomeTaxable) => {
      if (incomeTaxable === null || incomeTaxable < 0) {
        return 0
      }
      const taxConfig = taxConfigs.find(c => incomeTaxable >= c.lower && incomeTaxable < c.upper)
      return taxConfig.fixedTaxAmt + taxConfig.rate * (incomeTaxable - taxConfig.lower)
        // // console.log("income " + incomeTaxable)
        // if (incomeTaxable > 0 && incomeTaxable <= 5000) {
        //     return 0;
        // } else if (incomeTaxable > 5000 && incomeTaxable <= 20000) {
        //     return (0.01 * incomeTaxable).toFixed(2);
        // } else if (incomeTaxable > 20000 && incomeTaxable <= 35000) {
        //     return (150 + (0.03 * (incomeTaxable-20000))).toFixed(2);
        // } else if (incomeTaxable > 35000 && incomeTaxable <= 50000) {
        //     return (600 + (0.08 * (incomeTaxable-35000))).toFixed(2);
        // } else if (incomeTaxable > 50000 && incomeTaxable <= 70000) {
        //     return (1800 + (0.14 * (incomeTaxable-50000))).toFixed(2);
        // } else if (incomeTaxable > 70000 && incomeTaxable <= 100000) {
        //     return (4600 + (0.21 * (incomeTaxable-70000))).toFixed(2);
        // } else if (incomeTaxable > 100000 && incomeTaxable <= 250000) {
        //     return (10900 + (0.24 * (incomeTaxable-100000))).toFixed(2);
        // } else if (incomeTaxable > 250000 && incomeTaxable <= 400000) {
        //     return (46900 + (0.245 * (incomeTaxable-250000))).toFixed(2);
        // } else if (incomeTaxable > 400000 && incomeTaxable <= 600000) {
        //     return (83650 + (0.25 * (incomeTaxable-400000))).toFixed(2);
        // } else if (incomeTaxable > 600000 && incomeTaxable <= 1000000) {
        //     return (133650 + (0.26 * (incomeTaxable-600000))).toFixed(2);
        // } else if (incomeTaxable > 1000000 && incomeTaxable <= 2000000) {
        //     return (237650 + (0.28 * (incomeTaxable-600000))).toFixed(2);
        // } else {
        //     return (517650 + (0.30 * (incomeTaxable-2000000))).toFixed(2);
        // }
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
            <div className="summarySection bBorder">
                <h3>Summary</h3>

                <div className={classes.breakdown}>
                    <h4>Breakdown of gross income and tax relief</h4>

                    <div className={classes.listContainer}>
                        <ul className={classes.unorderedList}>
                            <li className={`${classes.listItem} ${classes.summaryBorder}`}>
                                <h6 className={classes.listItemTitle}>Total income before deductions : </h6>
                                <span className={classes.listItemAmount}>
                                    <b><NumberFormat value={this.props.totalIncome} displayType={'text'} thousandSeparator={true} prefix={'RM '} /></b>
                                </span>
                            </li>

                            <li className={classes.listItem}>
                                <h6 className={classes.listItemTitle}>Tax relief </h6>
                            </li>

                            <li className={classes.listItem}>
                                <span className={classes.listItemTitle}>Individual dependent relief</span>
                                <span className={classes.listItemAmount}>
                                    <NumberFormat value={this.props.selfDependent} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
                                </span>
                            </li>

                            <li className={classes.listItem}>
                                <span className={classes.listItemTitle}>EPF & SOCSO</span>
                                <span className={classes.listItemAmount}>
                                    <NumberFormat value={this.props.epfAndSocso} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
                                </span>
                            </li>

                            <li className={classes.listItem}>
                                <span className={classes.listItemTitle}>Life & Medical Insurance</span>
                                <span className={classes.listItemAmount}>
                                    <NumberFormat value={this.props.lifeAndMedical} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
                                </span>
                            </li>

                            <li className={classes.listItem}>
                                <span className={classes.listItemTitle}>Lifestyle & Education</span>
                                <span className={classes.listItemAmount}>
                                    <NumberFormat value={this.props.lifestyleAndEducation} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
                                 </span>
                            </li>

                            <li className={classes.listItem}>
                                <span className={classes.listItemTitle}>Disabled Individual</span>
                                <span className={classes.listItemAmount}>
                                    <NumberFormat value={this.props.disabled} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
                                </span>
                            </li>

                            <li className={classes.listItem}>
                                <span className={classes.listItemTitle}>Marriage Relief</span>
                                <span className={classes.listItemAmount}>
                                    <NumberFormat value={this.props.totalMarriedRelief} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
                                </span>
                            </li>

                            <li className={`${classes.listItem} ${classes.summaryBorder}`}>
                                <span className={classes.listItemTitle}>Children Relief</span>
                                <span className={classes.listItemAmount}>
                                    <NumberFormat value={this.props.totalChildrenRelief} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
                                </span>
                            </li>

                            <li className={classes.listItem}>
                            <h6 className={classes.listItemTitle}>Total tax relief deductions : </h6>
                            <span className={classes.listItemAmount}>
                                <b><NumberFormat value={this.props.totalTaxRelief} displayType={'text'} thousandSeparator={true} prefix={'RM '} /></b>
                            </span>
                            </li>
                        </ul>
                    </div>

                </div>

            <div className={classes.chargeableIncome}>
                <div className={classes.totalTaxPaid}>
                    <div className={classes.chargeableBoxBorder}>
                        <h3 >Net Chargeable Income :&nbsp;
                            <NumberFormat
                                value={this.props.netChargeableIncome && this.props.netChargeableIncome >= 0 ? this.props.netChargeableIncome : 0}
                                displayType={'text'}
                                thousandSeparator={true} prefix={'RM '}
                            />
                        </h3>
                    </div>
                    <div className={classes.taxPaid}>
                        <h3>RM : {this.getTaxAmount(this.props.netChargeableIncome)}</h3>
                        <span className={classes.totalTaxPaidText}>Total tax to be paid this year</span>
                    </div>
                </div>

                <div className={classes.taxPaidStats}>
                <ul className={classes.taxPaidStatsList}>
                    <li id='1'><img src="assets/info-button.svg"></img>Your official tax rate is <b>{this.getTaxRate(this.props.netChargeableIncome) * 100}%</b></li>
                    <li id='2'><img src="assets/info-button.svg"></img>That's <b>RM {this.getMonthlyTaxPaid()}</b> a month!</li>
                    <li id='3'><img src="assets/info-button.svg"></img>Tax paid is <b>{this.getTaxPaid()}%</b> of your annual salary</li>
                    <li id='4'><img src="assets/info-button.svg"></img>You have saved <b>RM {this.getSavingsFromRelief()}</b> from your tax deductions</li>
                    <br></br>
                    <li id='5'><a className={classes.summaryLink} target="_blank" href="http://www.hasil.gov.my/bt_goindex.php?bt_kump=5&bt_skum=1&bt_posi=2&bt_unit=5000&bt_sequ=11" onClick={() => {this.handleClick()}}>How are your taxes calculated?</a></li>
                </ul>
            </div>

            </div>

            </div>
        );
    }
}

export default Summary;
