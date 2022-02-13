import React, { useState, useEffect } from 'react';
import { Card } from '../../Components/Card';
import { Form } from '../../Components/Form';

export const TodoPage = () => {

    const [todo, setTodo] = useState([]);
    const [addedTodo, setAddedTodo] = useState('');

    useEffect(() => {
        fetch('/api')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => setTodo(data))
    }, [])

    const handleFormChanges = (inputValue) => {
        setAddedTodo(inputValue)
        console.log(addedTodo)
    };

    const handleFormSubmit = () => {
        fetch('api/create', {
            method: 'POST',
            body: JSON.stringify({
                content: addedTodo
            }),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(response => response.json())
            .then(message => {
                setAddedTodo('');
            })
    };

    return (
        <>
            <Card todoList={todo} />
            <Form
                userInput={addedTodo}
                onFormChange={handleFormChanges}
                onFormSubmit={handleFormSubmit}
            />
        </>
    )
}


