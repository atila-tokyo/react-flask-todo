import React, { useState, useEffect } from 'react';
import { Delete } from '../../Components/Delete';
import { useParams } from 'react-router-dom';
import { StyledBanner, StyledH1, StyledShow } from '../../Components/Styled-Components';

export const Display = () => {
    const { id } = useParams();
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetch(`/api/${id}`)
            .then((response) => response.json())
            .then(data => setTodo(data))
    }, [id])

    return (
        <StyledShow>
            <StyledBanner>
            {todo.length > 0 && todo.map(data =>
                <div key={id}>
                    <StyledH1>{data.content}</StyledH1>
                </div>)}
            </StyledBanner>
            <Delete id={id} />
        </StyledShow>
        
    )
}