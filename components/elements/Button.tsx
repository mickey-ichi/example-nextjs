import styled from 'styled-components'

export const Button = styled.d
iv`
    margin: 1em;
    padding: 5px 20px;
    display: inline-block;
    border-radius: 8px;
    border: none;
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    background: #EFEFEF;
        
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`

// color: ${(props) => props.theme.colors.primary};
// margin: 1em;
// padding: 5px 20px;
// display: inline-block;
// background: ${(props) => props.theme.colors.secondary};
