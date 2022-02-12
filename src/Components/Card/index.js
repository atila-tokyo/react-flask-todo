import React from 'react';

export const Card = ({ todoList }) => {
    return (
        <div>
            {todoList.map(item => {
                return(
                <ul key={item.id}>
                    <li>{item.content}</li>
                </ul>
            )
        })}
        </div>
    );
};
