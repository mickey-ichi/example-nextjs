import styled from "styled-components";
import {Button} from "./Button";

export const Hamburger = styled(Button)`
    z-index: 2;
    width: 3rem;
    height: 3rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: auto;
    margin-right: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0;
    border-radius: 8px;
    padding-top: 8px;
    
    p {
        font-size: 30px;
        margin: 0;
        padding-left: 13px;
    }
    
    &:hover {
        cursor: pointer;
    }
    
    @media only screen and (min-width: 600px) {
        display: none;
    }
    @media only screen and (max-width: 600px) {
        position: fixed;
        right: 0;
    } 
    
    &.close-burger {
        background: white;
        color: #FF782D;
    }
    
`