import styled from 'styled-components'

export const PageContainer = styled.div`
    margin: 5rem;
    margin-top: auto;
    background: white;
    border-radius: 16px;
    height: auto;
    min-height: 80vh;
    text-align: center;
    padding-top: 2rem;
    color: ${(props) => props.theme.colors.text};
    
    @media only screen and (max-width: 900px) {
        height: auto;
        margin: 1rem;
    }
`

