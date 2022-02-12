import React from 'react';
import { Link } from 'react-router-dom'

export const Card = ({ todoList }) => {
    return (
        <div>
            {todoList.map(item => {
                return(
                <ul key={item.id}>
                        <li>
                            <Link to={`${item.id}`}>{item.content}</Link>
                        </li>
                </ul>
            )
        })}
        </div>
    );
};
