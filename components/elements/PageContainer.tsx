import styled from 'styled-components'

export const PageContainer = styled.div`
    margin-top: auto;
    margin-bottom: 3rem;
    margin-right: 4rem;
    margin-left: 4rem;
    background: white;
    border-radius: 16px;
    height: auto;
    min-height: 60vh;
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


