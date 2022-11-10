import styled from 'styled-components'

export const PageContainer = styled.div`
    margin: auto;
    margin-top: auto;
    margin-bottom: 3rem;
    background: white;
    border-radius: 16px;
    height: auto;
    min-height: 60vh;
    max-width: 1200px;
    text-align: center;
    padding-top: 2rem;
    color: ${(props) => props.theme.colors.text};
    
    @media only screen and (max-width: 900px) {
        height: auto;
        margin: 1rem;
    }
    
    @media only screen and (max-width: 600px) {
        width: auto;
        margin: 0;
    }
`


