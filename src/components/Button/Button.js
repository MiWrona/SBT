import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 20px;
    cursor: pointer;
    background: #000;
    color: #fff;
    margin-bottom: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: block;
    font-family: inherit;
    font-weight: 700;
    font-size: 18px;

`;


const Button = ({children}) => (
    <>
<StyledButton> {children} </StyledButton>
    
    </>
);

export default Button;