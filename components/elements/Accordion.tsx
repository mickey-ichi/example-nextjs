import styled from 'styled-components'

export const Accordion = styled.div`
    background: lightgrey;
    min-width: 500px;
    margin-left, margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    min-height: 50px;
    max-height: 500px;
    
    &.open {
        height: 200px;
    }
`



