import React, { Component, PropTypes } from 'react';
import NumberFormat from 'react-number-format';


class Summary extends Component {

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
                                    <NumberFormat value={this.props.totalIncome} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
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

                            <li className="listItem summaryBorder">
                                <span className="listItemTitle">Disabled Individual</span>
                                <span className="listItemAmount">
                                    <NumberFormat value={this.props.disabled} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
                                </span>
                            </li>

                            <li className="listItem">
                            <h6 className="listItemTitle">Total tax relief deductions : </h6>
                            <span className="listItemAmount">
                                <NumberFormat value={this.props.totalTaxRelief} displayType={'text'} thousandSeparator={true} prefix={'RM '} />
                            </span>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}

export default Summary;