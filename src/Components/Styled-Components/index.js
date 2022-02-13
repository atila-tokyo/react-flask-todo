import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/agenda.svg';

export const StyledHeader = styled.div`
    height: 75px;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    text-align: center;
    background-color: #4F283A;
`;

export const StyledLogo = styled(Logo)`
    width: auto; 
    height:50px;
    padding-left: 25px;
    padding-top: 13px;
`;

export const LinkHome = styled(Link)`
    margin-bottom: 5px;
`;

export const StyledContainer = styled.div`
    max-width: 800px;
    box-sizing: border-box;
    margin: 5px auto;
    font-size: 25px;
`;

export const StyledUList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    list-style: none;
    padding: 0;
    max-width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const StyledList = styled.li`
    display: inline-block;
    overflow: scroll;
    height:30px;
    width: 100%;
    text-align: center;
    margin-bottom: 5px;
`;

export const StyledLabel = styled.label`
    float: left;
    cursor: pointer
`;

export const StyledForm = styled.form`
    width: 400px;
    outline: none;
    font-size: 13px;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 10px;
`;

export const StyledFooter = styled.div`
    height: 25px;
    background-color: #4F283A;
    color: white;
    font-size 12px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: auto;
    padding-top:5px;
`;