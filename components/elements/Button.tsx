import styled from 'styled-components'

export const Button = styled.div`
    margin: 1em;
    padding: 5px 20px;
    display: inline-block;
    border-radius: 8px;
    border: none;
    font-family: 'Mulish', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.disabled};
        
    &:hover {
        background: ${(props) => props.theme.colors.active};
        cursor: pointer;
        transform: scale(1.1);
    }
`