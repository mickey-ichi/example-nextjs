import styled from "styled-components";

export const Drawer = styled.div`
    transition: all 0.4s ease-out;
    position: fixed;
    left: -3.5rem;
    top: -1rem;
    background: white;
    height: 110%;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 21px;
    padding-left: 3rem;
    z-index: 2;


    &.hide {
        width: 0 !important;
        left: -20rem;
    }
    
    @media only screen and (max-width: 600px) {
        width: 80vw;
    }   
    
    @media only screen and (min-width: 600px) {
        display: none;
        width: 0;
    }
`