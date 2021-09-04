import React, {useState} from 'react';
import './CourseInput.css';
import {FormControl} from '../../UI/FormControl';
import Button from '../../UI/Button';

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = event => {
        setEnteredValue(event.target.value);
        if (event.target.value.length > 0) {
            setIsValid(true);
        }
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <FormControl invalid={!isValid}>
                <label>
                    Course Goal
                </label>
                <input type='text'
                       onChange={goalInputChangeHandler}/>
            </FormControl>
            <Button type='submit'>Add Goal</Button>
        </form>
    );
};

export default CourseInput;
