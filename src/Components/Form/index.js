import React from 'react';
import { StyledForm, FormContainer, InputButton, InputField } from '../Styled-Components';

export const Form = ({ userInput, onFormChange, onFormSubmit }) => {
    
    const handleChange = (event) => {
        onFormChange(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit();
    }
    return (
        <FormContainer className='container'>
            <StyledForm onSubmit={handleSubmit}>
                <InputField
                    type='text'
                    focus='true'
                    maxLength='80'
                    placeholder='Please add new task'
                    required value={userInput}
                    onChange={handleChange}
                />
                <InputButton type='submit' />
                
            </StyledForm>
        </FormContainer>
    );
}