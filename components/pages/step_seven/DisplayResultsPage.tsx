import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import {PageContainer} from "../../elements/PageContainer";
import { Accordion } from "../../elements/Accordion";
import {Button} from "../../elements/Button";
import Link from 'next/link'
import {FormContext} from "../../../contexts/CurrentFormContext";

type DisplayResultsProps = {
    onNext: () => void,
    onBack: () => void,
}

export const DisplayResultsPage = ({ onNext, onBack }: DisplayResultsProps ) => {

    const pageNames: string[] = ['description', 'categories', 'photos', 'delivery', 'complaints']

    return (
        <PageContainer>
            <MainContent>
                <h1>Your Finished Advertisements</h1>
                <AccordionContainer>
                    {pageNames.map((page, index) => (
                        <Accordion name={page} index={index} key={page} />
                    ))}
                </AccordionContainer>
                <Link href='/' passHref>
                    <LinkToHome><span>Start a new advertisement</span></LinkToHome>
                </Link>
            </MainContent>
        </PageContainer>
    )
}

const MainContent = styled.div`
    width: 100%;
    height: auto;
    margin: auto;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Mulish', sans-serif;
`

const AccordionContainer = styled.div`
    height: auto;
    
    * {
        margin: 10px;
    }
`

const LinkToHome = styled.a`
    font-weight: 400;
    font-size: 18px;
    margin-top: 24px;
    
    span {
        text-decoration: underline;
        color: #FF782D;
        font-weight: 600;
    }
    
    &:hover {
        span {
            text-decoration: underline;
        }
    }
`
