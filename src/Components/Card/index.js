import React from 'react';
import { Link } from 'react-router-dom'
import {
    StyledContainer,
    StyledUList,
    LinkHome,
    StyledCard,
    StyledList
} from '../Styled-Components';
export const Card = ({ todoList }) => {
    return (
        <StyledContainer>
            {todoList.map(item => {
                return (
                    <LinkHome
                        to={`${item.id}`}
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        <StyledCard>
                            <StyledUList key={item.id}>
                                <StyledList>                     
    {/* styled-components does not support text-decoration */}

                                    {item.content}                          
                                </StyledList>
                            </StyledUList>
                        </StyledCard>
                    </LinkHome> 
                )
            })}
        </StyledContainer>
    );
};
