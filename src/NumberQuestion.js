import React, { useState, PropTypes } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function NumberQuestion(props) {

    const [selected, setSelected] = useState(0);
    const [moreThanFive, setMoreThanFive] = useState(false);

    const isMoreThanFive = () => {
        setMoreThanFive(true)
        setSelected(0)
    }

    const onNumberClicked = amount =>{
        setSelected(amount)
        setMoreThanFive(false)

        if (props.id === "childrenAmount") {
            props.total(amount, props.id, 0)
        }
        
        // console.log(id)
    }

    const onAmountChanged = amount => event => {
        setSelected(event.target.value);
        if (props.id === "childrenAmount") {
            props.total(event.target.value, props.id, 0)
        }

        // console.log(event.target.value)
    }
        

        return (
            <div className="horizontalRow">
                <div className="questionText question-bottom-border">
                    <h4>{props.questionTitle}</h4>
                    <div className="subtitles">
                      {props.questionSubtitle}
                      &nbsp;
                        <div className="capText">
                          {props.capText}
                        </div>
                      </div>
                </div>

                <div className="padding-top-40 float-right">
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button id={1} variant={selected == 1 ? "contained" : ""} onClick={(id) => onNumberClicked(1)}>1</Button>
                    <Button id={2} variant={selected == 2 ? "contained" : ""} onClick={(id) => onNumberClicked(2)}>2</Button>
                    <Button id={3} variant={selected == 3 ? "contained" : ""} onClick={(id) => onNumberClicked(3)}>3</Button>
                    <Button id={4} variant={selected == 4 ? "contained" : ""} onClick={(id) => onNumberClicked(4)}>4</Button>
                    <Button id={5} variant={selected == 5 ? "contained" : ""} onClick={(id) => onNumberClicked(5)}>5</Button>
                    <Button id={0} variant={moreThanFive ? "contained" : ""} onClick={(id) => isMoreThanFive()}>>5</Button>
                </ButtonGroup>

                {moreThanFive ? 
                <div className="margin-top-10">
                    <TextField
                        // fullWidth
                        label={props.label}
                        type="number"
                        // label="Amount of children"
                        variant="outlined"
                        value={selected}
                        onChange={onAmountChanged('selected')}
                        id="optional-input"
                    />
                </div>
                :
                    null
                } 

                </div>
            </div>
        );
    

}