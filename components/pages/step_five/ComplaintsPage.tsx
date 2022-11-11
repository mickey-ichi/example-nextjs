import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import { Button } from '../../elements/Button'
import { PageContainer } from '../../elements/PageContainer'
import { Form } from '../../elements/Form'
import { FormContext } from '../../../contexts/CurrentFormContext'
import { Checkbox } from "../../elements/Checkbox";
import {ButtonContainer} from "../../elements/ButtonContainer";

type ComplaintsProps = {
    onNext: () => void,
    onBack: () => void,
}

export const ComplaintsPage = ({ onNext, onBack }: ComplaintsProps ) => {

    const handleSubmit = () => {
        // setPhotosContent(uploads)
        // reloads this page until next page is built
        onNext()
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
    }

    return (
        <PageContainer>
            <MainContent>
                <ComplaintsAndReturns>
                    <Complaints>
                        <ComplaintsText>Complaints</ComplaintsText>
                        <Label htmlFor='complaints'>Time to make complaints</Label>
                        <Input type='text' value='value' id='complaints'></Input>
                    </Complaints>
                    <Returns>
                        <ReturnsText>Returns</ReturnsText>
                    </Returns>
                </ComplaintsAndReturns>
                <Address>
                    <AddressLeft>

                    </AddressLeft>
                    <AddressRight>

                    </AddressRight>
                </Address>
                <Additional>

                </Additional>
            </MainContent>
            <ButtonContainer>
                <Button onClick={() => onBack()}>Back</Button>
                <Button onClick={() => handleSubmit()}>Next →</Button>
            </ButtonContainer>
        </PageContainer>
    )
}



export const MainContent = styled.div`
    margin: auto;
    width: 95%;
    height: 80%;
    min-height: 30rem;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.font.family};
`

export const ComplaintsAndReturns = styled.div`
    display: flex;
    height: 10rem;
    border: 1px solid red;
    display: flex;
    width: 100%;
    text-align: left;
    
    * {
        margin-left: 1rem;
    }
`

export const Complaints = styled.div`
    flex: 0.5;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`

export const ComplaintsText = styled.h4`

`

export const Returns = styled.div`
    flex: 0.5;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`

export const ReturnsText = styled.h4`

`

export const Address = styled.div`
    border: 1px solid red;
    width: 100%;
    height: 10rem;
    margin-top: auto;
    display: flex;
`

export const AddressLeft = styled.div``
export const AddressRight = styled.div``


export const Additional = styled.div`
    border: 1px solid red;
    width: 100%;
    height: 10rem;
    margin-top: auto;
`

export const Label = styled.label`
`

export const Input = styled.input`
    margin-top: 10px;
    background: #F8F8F8;
    border-radius: 8px;
    border: none;
    height: 3rem;
    font-weight: 400;
    font-size: 16px;
    color: #181818;
    text-indent: 10px;
    
    &:focus {
        outline: none;
        border: 2px solid #FF782D;
    }
`