import styled from 'styled-components'

export const Form = styled.div`
    margin: auto;
    width: 95%;
    height: 80%;
    display: flex;
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.font.family};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    
     @media only screen and (max-width: 900px) {
        flex-direction: column;
    }
`