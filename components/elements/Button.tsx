import styled from 'styled-components'

export const Button = styled.div`
    margin: 1em;
    padding: 5px 20px;
    display: inline-block;
    border-radius: 8px;
    border: none;
    font-family: ${(props) => props.theme.font.family};
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    background: ${(props) => props.theme.colors.disabled};
    color: ${(props) => props.theme.colors.text};
    
    &:hover {
        background: ${(props) => props.theme.colors.active};
        cursor: pointer;
        transform: scale(1.1);
    }
`



