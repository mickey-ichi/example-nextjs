import styled from 'styled-components'

export const PageBody = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    height: auto;
    background: #F8F8F8;
    padding: 1rem;
    color: ${(props) => props.theme.colors.text};
    margin: auto;
    
    @media only screen and (max-width: 900px) {
        margin: auto;
        padding: 0;
        border-top: 2px solid #F8F8F8;
    }
`

