import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import {PageContainer} from "../../elements/PageContainer";
import {Button} from "../../elements/Button";
import Link from 'next/link'
import {FormContext} from "../../../contexts/CurrentFormContext";

type FinishProps = {
    onNext: () => void,
    onBack: () => void,
}

export const FinishPage = ({ onNext, onBack }: FinishProps ) => {

    const { setDescriptionContent, setCategoriesContent, setPhotosContent, setDeliveryContent, setComplaintContent } = useContext(FormContext)

    const clearContextData = () => {
        setDescriptionContent({
            title: '',
            description: '',
            numUnits: 0,
            length: 0,
            width: 0,
            height: 0,
            price: 0,
        })
        setCategoriesContent([])
        setPhotosContent([])
        setDeliveryContent([ '', [], [] ])
        setComplaintContent({
            complaintTime: '',
            returnTime: '',
            street: '',
            buildingNum: 0,
            premisesNum: 0,
            zip: 0,
            city: '',
            additional: '',
        })
    }

    const handleNext = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (confirm('Are you sure you want to restart and lose your progress?')) {
            clearContextData()
        } else {
            e.preventDefault()
        }
    }

    return (
        <PageContainer style={{paddingTop: 0}}>
            <MainContent>
                <ImageContainer>
                    <img src='/images/icons/success_image.png' />
                </ImageContainer>
                <FinishedText>Your advertisement was successfully added!</FinishedText>
                <FinishedButton>View your advertisement →</FinishedButton>
                <Link href='/' passHref>
                    <LinkToHome onClick={(e) => handleNext(e)}>or <span>Return to home page</span></LinkToHome>
                </Link>
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

const ImageContainer = styled.div`
    margin: auto;
    margin-top: 0;
`

const FinishedText = styled.h3`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    width: 400px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 24px;
`

const FinishedButton = styled(Button)`
    width: auto;
    height: auto;
    padding: 12px 32px 12px 32px;
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


