import React, { Component, PropTypes } from 'react';
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={values => {
          onChange({
            target: {
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="RM"
      />
    );
  }
  
//   NumberFormatCustom.propTypes = {
//     inputRef: PropTypes.func.isRequired,
//     onChange: PropTypes.func.isRequired,
//   };


export default function TextQuestion() {

    const [values, setValues] = React.useState({
        numberformat: '',
      });

    const handleChange = name => event => {
        setValues({
          ...values,
          [name]: event.target.value,
        });
      };

        return (
            <div className="horizontalRow">  

                <div className="questionText">
                    <h4> Estimate your Gross Annual Income </h4>
                    <div className="subtitles">includes bonuses and dividends before any deductions</div>
                </div>
                
                <div className="questionIcon"><img src="assets/dollar.svg"></img> </div>

                <div className="incomeInput">
                <TextField
                    label="react-number-format"
                    value={values.numberformat}
                    onChange={handleChange('numberformat')}
                    id="formatted-numberformat-input"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                />
                </div>
                
            
            </div>
          
        );
}