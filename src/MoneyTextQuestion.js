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
        prefix="RM "
      />
    );
  }
  
//   NumberFormatCustom.propTypes = {
//     inputRef: PropTypes.func.isRequired,
//     onChange: PropTypes.func.isRequired,
//   };


export default function MoneyTextQuestion(props) {

    const [values, setValues] = React.useState({
        numberformat: '',
      });

    const handleChange = name => event => {
        setValues({
          ...values,
          [name]: event.target.value, 
        });

        props.total(Number(event.target.value), props.id, props.cap)
      };

        return (
            <div className="horizontalRow ">  

                <div className="questionText question-bottom-border">
                    <h4>{props.questionTitle}  {props.icons}</h4>
                    <div className="subtitles">
                      {props.questionSubtitle}
                      &nbsp;
                        <div className="capText">
                          {props.capText}
                        </div>
                      </div>
                </div>
                
               

                <div className="incomeInput">
                <TextField
                    fullWidth
                    label={props.label}
                    variant="outlined"
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