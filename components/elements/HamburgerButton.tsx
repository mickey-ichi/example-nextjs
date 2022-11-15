import styled from "styled-components";
import {Button} from "./Button";

export const Hamburger = styled(Button)`
    z-index: 3;
    width: 40px;
    height: 38px;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-right: auto;
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0;
    padding-top: 3px;
    border-radius: 8px;
    
    p {
        color: white;
        font-size: 30px;
        margin: 0;
        padding-left: 14px;
        padding-top: 1px;
    }
    
    &:hover {
        cursor: pointer;
    }
    
    @media only screen and (min-width: 600px) {
        display: none;
    }
    
    &.close-burger {
        background: none;
        color: black;
        
        &:hover {
        }
    }
    
`