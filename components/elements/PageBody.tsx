import styled from 'styled-components'

export const PageBody = styled.div`
    position: relative;
    z-index: 1;
    width: 100vw;
    height: auto;
    background: #F8F8F8;
    padding: 1rem;
    color: ${(props) => props.theme.colors.text};
    
    @media only screen and (max-width: 600px) {
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1000;
        background: white;
        border-top: 2px solid #F8F8F8;
    }
`

