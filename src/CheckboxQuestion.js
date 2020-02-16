import React, { Component, PropTypes } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


class CheckboxQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            disabledIndividual: false,
        };
    }

    handleChange = name => event => {
          if (name) {
            this.setState({ ...this.state, disabledIndividual: true });     
            if (this.props.total != null)  {
              this.props.total(this.props.cap, this.props.id, this.props.cap)
            } else {
              this.props.hasDisabledChildrenFunc(true)
            }
            
          } else {
            this.setState({ ...this.state, disabledIndividual: false });
            if (this.props.total != null)  {
              this.props.total(0, this.props.id, this.props.cap)
            } else {
              this.props.hasDisabledChildrenFunc(false)
            }
            
          }

          
      };

    render()   {
        return (
            <div className="horizontalRow ">  
    
            <div className="questionText question-bottom-border">
                <h4>{this.props.questionTitle}  {this.props.icons}</h4>
                <div className="subtitles">
                  {this.props.questionSubtitle}
                    <div className="capText">
                      {this.props.capText}
                    </div>
                  </div>
            </div>
            
            <div className="checkboxInput">
            <FormControlLabel
            control={
              <Checkbox
                checked={this.state.disabledIndividual}
                onChange={this.handleChange(true)}
                value="checkedA"
                color="primary"
              />
            }
            label="Yes"
          />
    
            <FormControlLabel
            control={
              <Checkbox
                checked={!this.state.disabledIndividual}
                onChange={this.handleChange(false)}
                value="checkedB"
                color="secondary"
              />
            }
            label="No"
          />
            </div>
          
        </div>
        );
    }
    
}

export default CheckboxQuestion;