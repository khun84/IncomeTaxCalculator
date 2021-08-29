import React, { useState, PropTypes } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import classes from './app.module.css'

export default function NumberQuestion(props) {

    const [selected, setSelected] = useState(0);
    const [moreThanFive, setMoreThanFive] = useState(false);

    const isMoreThanFive = () => {
        setMoreThanFive(true)
        // setSelected(0)
    }

    // const onNumberClickedBaseQuestion = (amount) =>{
    //     setSelected(amount)
    //     setMoreThanFive(false)

    //     props.total(parseInt(amount), props.id, 0)


    //     // console.log(id)
    // }

    const onNumberClicked = (amount) =>{
        setSelected(amount)
        setMoreThanFive(false)
        console.log('amount clicked : ' + amount)
        props.total(parseInt(amount), props.id, 0)


        // console.log(id)
    }

    const onAmountChanged = amount => event => {
        setSelected(event.target.value);

        props.total(event.target.value, props.id, 0)


        // console.log(event.target.value)
    }

    const buttonGroup = (
        <ButtonGroup color="primary" aria-label="outlined primary button group">


        </ButtonGroup>
    )

    const defaultButtonGroup = (
        <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button id={1} variant={selected == 1 ? "contained" : ""} onClick={(id) => onNumberClicked(1)}>1</Button>
            <Button id={2} variant={selected == 2 ? "contained" : ""} onClick={(id) => onNumberClicked(2)}>2</Button>
            <Button id={3} variant={selected == 3 ? "contained" : ""} onClick={(id) => onNumberClicked(3)}>3</Button>
            <Button id={4} variant={selected == 4 ? "contained" : ""} onClick={(id) => onNumberClicked(4)}>4</Button>
            <Button id={5} variant={selected == 5 ? "contained" : ""} onClick={(id) => onNumberClicked(5)}>5</Button>
            <Button id={0} variant={moreThanFive ? "contained" : ""} onClick={(id) => isMoreThanFive()}>>5</Button>
        </ButtonGroup>
    )

    const getChildrenRemainingAmount = () => {

        if (props.baseQuestion) {
            // console.log('is zero')
            return defaultButtonGroup
        } else if (props.childrenAmount > 0){
            // console.log('children : ' +  props.childrenAmountToDisplay)
            var elements = []

                for (let i = 0; i < props.amountToDisplay + 1; i++) {

                    elements.push(<Button variant={selected == i ? "contained" : ""} onClick={() => onNumberClicked(i)}>{i}</Button>)
                }
                //TODO add function to minus from children amount to be shown

            return (
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    {elements}
                </ButtonGroup>

            )
        }
    }


        return (
            <div className={classes.horizontalRow}>
                <div className={`${classes.questionText} ${classes.questionBottomBorder}`}>
                    <h4>{props.questionTitle}</h4>
                    <div className={classes.subtitles}>
                      {props.questionSubtitle}
                      &nbsp;
                        <div className={classes.capText}>
                          {props.capText}
                        </div>
                      </div>
                </div>

                <div className={`${classes.paddingTop40} ${classes.floatRight}`}>

                {getChildrenRemainingAmount()}

                {moreThanFive ?
                <div className={classes.marginTop10}>
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
