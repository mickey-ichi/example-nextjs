import styled from 'styled-components'

export const PageContainer = styled.div`
    margin: auto;
    margin-bottom: 3rem;
    background: white;
    border-radius: 16px;
    min-height: 650px;
    max-width: 1290px;
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 4rem;
    color: ${(props) => props.theme.colors.text};
    
    @media only screen and (max-width: 1200px) {
        height: auto;
        margin: 1rem;
    }
    
    @media only screen and (max-width: 600px) {
        width: auto;
        margin: 0;
    }
`


