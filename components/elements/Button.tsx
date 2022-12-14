import styled from 'styled-components'

export const Button = styled.button`
    width: 138px;
    height: 48px;
    margin-right: 0.5em;
    margin-left: 0.5em;
    padding: 5px 20px;
    border-radius: 8px;
    border: none;
    font-family: ${(props) => props.theme.font.family};
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    white-space: nowrap;
    background: ${(props) => props.theme.colors.active};
    color: ${(props) => props.theme.colors.light};
    opacity: 0.9;
  
    &:hover {
        cursor: pointer;
        opacity: 1;
    }
    
    &:disabled {
        background: #EFEFEF;
        color: #8A8A8A;
    }
`



