import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/agenda.svg';

export const StyledHeader = styled.div`
    height: 75px;
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
    margin-bottom: 13px;
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    box-sizing: border-box;
    align-items: center;
    font-size: 15px;
`;

export const LinkHome = styled(Link)`
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
    width: 100%;
`;

export const StyledBanner = styled.div`
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    color: #4F283B;
    font-weight: bold;
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    margin: 20px;
    height: 400px;
    padding:30px;
    }
`;

export const StyledH1 = styled.h1`
    margin: 0;
    color: rgba(79, 40, 58, 1);
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
    font-size: 32px;
    font-weight: bold;
    word-break: break-all;
`;

export const StyledShow= styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   text-align: center;
   align-items: center;
   width: 100%;
`;

export const StyledCard = styled.div`
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    color: #4F283B;
    font-size: 25px;
    font-weight: bold;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(0,0,0,0.2);
    margin: 20px;
    padding:30px;
    :hover {
        border-style: solid;
        border-color: rgba(94, 53, 73, 0.66);
    }
`;

export const StyledUList = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    max-width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const StyledList = styled.li`
    display: inline-block;
    inline-size: 50px;
    overflow-wrap: break-word;
    height: 50px;
    width: 100%;
    text-align: center;
    margin-bottom: 5px;
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    max-width: 100%;
    box-sizing: border-box;
    margin-bottom: 100px;
    font-size: 25px;
`;
export const StyledForm = styled.form`
    width: 400px;
    outline: none;
    font-size: 13px;
`;
export const InputField = styled.input`
    font-size: 16px;
    line-height: 28px;
    padding: 8px 16px;
    width: 100%;
    min-height: 100px;
    border: unset;
    border-radius: 4px;
    outline-color: rgba(79, 40, 58, 1);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px;
`;
export const InputButton = styled.input`
    background-color: rgba(79, 40, 58, 1);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 1px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(79, 40, 58, 1) 0px 2px 5px 0px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    margin-top: 20px;
    height: 30px;
    width: 110px;
`;

export const DeleteButton = styled.button`
    background-color: rgba(188, 39, 39, 1);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.01) 0px 1px 1px 0px,
    rgba(0, 0, 0, 0.01) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(188, 39, 39, 1) 0px 2px 5px 0px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    height: 30px;
    width: 110px;
    margin-top: 20px;
`;

export const StyledFooter = styled.div`
    height: 20px;
    background-color: rgba(79, 40, 58, 1);
    color: white;
    font-size 12px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: auto;
    padding-bottom: 1px;
    padding-top:5px;
`;