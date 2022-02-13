import React, { useState, useEffect } from 'react';
import { Delete } from '../../Components/Delete';
import { useParams } from 'react-router-dom';

export const Display = () => {
    const { id } = useParams();
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetch(`/api/${id}`)
            .then((response) => response.json())
            .then(data => setTodo(data))
    }, [id])

    return (
        <div>
            {todo.length > 0 && todo.map(data => <div key={id}>{data.content}</div>)}
            <Delete id={id} />
        </div>
    )
}