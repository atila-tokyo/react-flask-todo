import React from 'react';
import { StyledForm, StyledContainer } from '../Styled-Components';

export const Form = ({ userInput, onFormChange, onFormSubmit }) => {
    
    const handleChange = (event) => {
        onFormChange(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit();
    }
    return (
        <StyledContainer className='container'>
            <StyledForm onSubmit={handleSubmit}>
                <input
                    type='text'
                    focus='true'
                    maxlength='80'
                    placeholder='Please add new task'
                    required value={userInput}
                    onChange={handleChange}
                />
                <input type='submit' />
            </StyledForm>
        </StyledContainer>
    );
}