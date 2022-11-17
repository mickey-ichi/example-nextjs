import styled from 'styled-components'
import React, {useState} from "react";
import {Button} from "./Button";

type AccordionProps = {
    name: string,
    index: number,
    children?: React.ReactNode
}


export const Accordion:React.FC<AccordionProps> = ({name, index, children}) => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <AccordionContent className={open ? 'open' : 'closed'}>
            <Name>{name}</Name>
            <ShowButton onClick={() => setOpen(!open)}>{!open ? 'show' : 'hide'} details</ShowButton>
            <HiddenContent show={open}>
            </HiddenContent>
        </AccordionContent>
    )
}


const AccordionContent = styled.div`
    background: #FFF5EC;
    min-width: 500px;
    margin-left, margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    min-height: 130px;
    height: auto;
    font-family: 'Mulish', sans-serif;
    padding-top: 10px;
    
    &.open {
        height: 400px;
    }
    
    &.closed {
        height: 130px;
    }
`

const Name = styled.h2`
    font-weight: 700;
    font-size: 24px;
`

const ShowButton = styled(Button)`
    max-width: 150px;
    margin: auto;
    padding: 0;
`

type HiddenContentProps = {
    show: boolean,
}

const HiddenContent = styled.div<HiddenContentProps>`
    margin: auto;
    display: ${props => props.show ? 'block' : 'none'};
    height: auto;
`

