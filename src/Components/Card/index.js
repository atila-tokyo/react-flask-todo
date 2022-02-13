import React from 'react';
import { Link } from 'react-router-dom'
import {
    StyledContainer,
    StyledUList,
    LinkHome,
    StyledLabel,
    StyledList
} from '../Styled-Components';
export const Card = ({ todoList }) => {
    return (
        // <StyledContainer>
        <StyledContainer>
            {todoList.map(item => {
                return (
                    <StyledUList key={item.id}>
                        <StyledList>                     
    {/* styled-components does not support text-decoration */}
                                <LinkHome
                                    to={`${item.id}`}
                                    style={{ textDecoration: 'none', color: 'black' }}
                                >
                                    {item.content}
                                </LinkHome>                           
                        </StyledList>
                    </StyledUList>
                )
            })}
        </StyledContainer>
    );
};
