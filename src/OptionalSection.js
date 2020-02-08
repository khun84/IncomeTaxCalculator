import React, { Component, PropTypes } from 'react';
import HeaderSection from './HeaderSection';
import Button from '@material-ui/core/Button';
import MoneyTextQuestion from './MoneyTextQuestion';
import CheckboxQuestion from './CheckboxQuestion';
import NumberQuestion from './NumberQuestion';

class OptionalSection extends Component {

    constructor(props) {
        super(props);
    } 

    marriedReliefIcons = (
        <div className="questionIcon">
        <img className="headerIcons" src="assets/tax.svg"></img>
        <img className="headerIcons" src="assets/married.svg"></img>
        </div>
    )

    childrenReliefIcons = (
        <div className="questionIcon">
        <img className="headerIcons" src="assets/tax.svg"></img>
        <img className="headerIcons" src="assets/family.svg"></img>
        </div>
    )

    marriedReliefQuestions = (
        <div>
        <CheckboxQuestion
        id = "disabledSpouse" 
        questionTitle="Is your spouse disabled?" 
        questionSubtitle=""
        capText="(fixed at RM 3500)"
        cap={3500}
        label="Disabled spouse"
        icons={this.marriedReliefIcons}
        total={this.props.getTotalRelief}
        />
    
        <CheckboxQuestion 
        id = "workingSpouse" 
        questionTitle="Is your spouse working?" 
        questionSubtitle="or making alimony payments "
        capText="(fixed at RM 4,000)"
        cap={4000}
        icons={this.marriedReliefIcons}
        total={this.props.getTotalRelief}
        />

        </div>
    )

    childrenReliefQuestions = (
        <NumberQuestion 
            id = "childrenAmount" 
            questionTitle="How many children do you have?" 
            questionSubtitle="of any age"
            capText="(at least RM 2,000 per child)"
            cap={0}
            icons={this.childrenReliefIcons}
            total={this.props.getTotalRelief}
            label="Amount of children"
        />
    )

    getQuestions(title) {
        if (title === "Married Tax Relief") {
            return this.marriedReliefQuestions
        } else if (title === "Children Tax Relief") {
            return this.childrenReliefQuestions   
        }
    }

    render() {
        return (
            <div className="optionalSectionHeader">
                <span >
                    <h5 className={(this.props.answer ? 'bottom-padding-20 b-border-black' : '')}>
                        {this.props.questionTitle}
                        <span className="optionalSectionButtons">
                        {this.props.answer ?
                            <div className="optionalSectionButtons margin-right-20">
                            <Button className="optionalButton" variant="contained" color="primary" size="large" onClick={this.props.handleOnYesClicked}>
                            Yes
                            </Button> 

                            <Button className="optionalButton" variant="outlined" color="secondary" size="large" onClick={this.props.handleOnNoClicked}>
                            No
                            </Button>  
                            </div>
                            : 
                            <div className="optionalSectionButtons">
                            <Button className="optionalButton" variant="outlined" color="primary" size="large" onClick={this.props.handleOnYesClicked}>
                            Yes
                            </Button> 

                            <Button className="optionalButton" variant="contained" color="secondary" size="large" onClick={this.props.handleOnNoClicked}>
                            No
                            </Button>  
                            </div>
                        }    
                       
                    </span>
                    </h5>
                </span>

                {this.props.answer ?
                <div className="optionalSectionContainer">
                    <HeaderSection
                    title={this.props.title}
                    icons={this.props.title}
                    total={this.props.totalRelief}
                    childrenAmount={this.props.childrenAmount}
                    />

                    {this.getQuestions(this.props.title)}
                 </div>   
                    :
                    null
                }

            
            </div>
        );
    }

}

export default OptionalSection;