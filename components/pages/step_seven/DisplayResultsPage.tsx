import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import {PageContainer} from "../../elements/PageContainer";
import {Accordion} from "../../elements/Accordion";

import {Button} from "../../elements/Button";
import Link from 'next/link'
import {FormContext} from "../../../contexts/CurrentFormContext";

type DisplayResultsProps = {
    onNext: () => void,
    onBack: () => void,
}

export const DisplayResultsPage = ({ onNext, onBack }: DisplayResultsProps ) => {

    return (
        <PageContainer>
            <MainContent>
                <h1>Results</h1>
                <Accordion>closed</Accordion>
                <Accordion className='open'>open</Accordion>
            </MainContent>
        </PageContainer>
    )
}

const MainContent = styled.div`
    width: 500px;
    height: 100%;
    margin: auto;
    margin-top: 0;
    padding-top: 140px;
    display: flex;
    flex-direction: column;
    font-family: 'Mulish', sans-serif;
`
