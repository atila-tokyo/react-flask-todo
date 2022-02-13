import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/agenda.svg';

export const StyledHeader = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    background-color: #ED1D24;
`;

export const StyledLogo = styled(Logo)`
    width: auto; 
    height:50px;
    padding-left: 15px;
    padding-top: 10px;
`;

export const LinkHome = styled(Link)`
    display: flex;
    width: 100vw;
    text-align: center;
    margin: 0;
    color: #FFFFFF;
    padding: .3rem 0;
    text-decoration: none;
`;

export const StyledFooter = styled.div`
    height: calc(100% - 25px);
    padding-bottom: 10px;
    background-color: #ED1D24;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: -30px;
    margin-bottom: 0;
    text-align: center; !important
`;