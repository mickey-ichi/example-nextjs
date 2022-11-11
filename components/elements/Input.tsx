import styled from "styled-components";

export const Input = styled.input`
    background: #F8F8F8;
    border-radius: 8px;
    border: none;
    height: 3rem;
    font-weight: 400;
    font-size: 16px;
    color: #181818;
    text-indent: 10px;
    
    &:hover {
       outline: none;
       border: none;
    }
    
    &:focus {
       outline: none;
       border: 3px solid #FF782D;    
    }
`