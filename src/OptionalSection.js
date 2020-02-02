import React, { Component, PropTypes } from 'react';
import HeaderSection from './HeaderSection';
import Button from '@material-ui/core/Button';

class OptionalSection extends Component {

    constructor(props) {
        super(props);
    } 

    render() {
        return (
            <div className="optionalSectionHeader">
                <span >
                    <h4 className={(this.props.married ? 'bottom-padding-20 b-border-black' : '')}>
                        {this.props.questionTitle}
                        <span className="optionalSectionButtons">
                        {this.props.married ?
                            <div className="optionalSectionButtons">
                            <Button className="optionalButton" variant="contained" color="primary" size="large" onClick={this.props.handleOnYesMarriedClicked}>
                            Yes
                            </Button> 

                            <Button className="optionalButton" variant="outlined" color="secondary" size="large" onClick={this.props.handleOnNoMarriedClicked}>
                            No
                            </Button>  
                            </div>
                            : 
                            <div className="optionalSectionButtons">
                            <Button className="optionalButton" variant="outlined" color="primary" size="large" onClick={this.props.handleOnYesMarriedClicked}>
                            Yes
                            </Button> 

                            <Button className="optionalButton" variant="contained" color="secondary" size="large" onClick={this.props.handleOnNoMarriedClicked}>
                            No
                            </Button>  
                            </div>
                        }    
                       
                    </span>
                    </h4>
                </span>

                {this.props.married ?
                    <HeaderSection
                    title={this.props.title}
                    icons={this.props.title}
                    total={this.props.totalMarriedRelief}
                    />
                    :
                    null
                }
            </div>
        );
    }

}

export default OptionalSection;