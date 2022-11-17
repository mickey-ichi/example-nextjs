import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button } from '../../elements/Button'
import {Input, ReqInput} from '../../elements/Input'
import { PageContainer } from '../../elements/PageContainer'
import { Form } from '../../elements/Form'
import { FormContext } from '../../../contexts/CurrentFormContext'
import {ButtonContainer} from "../../elements/ButtonContainer";

type DescriptionProps = {
    onNext: () => void
}

export const DescriptionPage = ({ onNext }: DescriptionProps ) => {

    const [charCount, setCharCount] = useState<number[]>([0,0])

    const { descriptionContent, setDescriptionContent } = useContext(FormContext)

    type LocalContent = {
            title: string | null,
            description: string | null,
            numUnits: number | null,
            length: number,
            width: number,
            height: number,
            price: number | null,
    }

    const [localContent, setLocalContent] = useState<LocalContent>({
        title: null,
        description: null,
        numUnits: null,
        length: 0,
        width: 0,
        height: 0,
        price: null,
    })

    useEffect(() => setLocalContent(descriptionContent), [descriptionContent])

    const [formInProgress, setFormInProgress] = useState<boolean>(true)
    useEffect(() => checkFormProgress(), [localContent])

    const checkFormProgress = () => {
        if(localContent.title && localContent.description && localContent.numUnits && localContent.price) {
            setFormInProgress(false)
        }
        else setFormInProgress(true)
    }

    const updateCharacterCount = (name: string, length: number) => {
        if (name === 'title') {
            setCharCount(prev => [length, prev[1]])
        }
        if (name === 'description') {
            setCharCount(prev => [prev[0], length])
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault()
        const { name, value } = e.target
        setLocalContent((prev) => ({...prev, [name]: value}))

        updateCharacterCount(name, value.length)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setDescriptionContent(localContent)
        onNext()
    }

    return (
        <PageContainer>
            <DescriptionForm onSubmit={(e) => handleSubmit(e)} style={{flexDirection: 'column'}}>
                <Wrapper>
                    <LeftSide>
                        <Instructions>Fill in the basic information about your item</Instructions>
                        <TitleLabel>Title</TitleLabel>
                        <Title
                            type='text'
                            placeholder='Enter item title here'
                            name='title'
                            value={localContent.title || ''}
                            onChange={(e) => handleChange(e)}
                            maxLength={60}
                        />
                        <Span>{`${charCount[0]}/60`}</Span>
                        <Spacer />
                        <DescriptionLabel>Description</DescriptionLabel>
                        <Description
                            name='description'
                            placeholder='Enter item description here'
                            value={localContent.description || ''}
                            onChange={(e) => handleChange(e)}
                            maxLength={1200}
                        />
                        <Span>{`${charCount[1]}/1200`}</Span>
                    </LeftSide>
                    <RightSide>
                        <AvailabilityLabel>Number of units available</AvailabilityLabel>
                        <Availability
                            type='number'
                            placeholder='Availability'
                            name='numUnits'
                            value={localContent.numUnits || ''}
                            onChange={(e) => handleChange(e)}
                        />
                        <DimensionsLabel>Dimensions (optional)</DimensionsLabel>
                        <DimensionsContainer>
                            <DimensionLabel>Length [mm]</DimensionLabel>
                            <Dimension
                                type='number'
                                name='length'
                                value={localContent.length}
                                onChange={(e) => handleChange(e)}
                            />
                            <DimensionLabel>Width [mm]</DimensionLabel>
                            <Dimension
                                type='number'
                                name='width'
                                value={localContent.width}
                                onChange={(e) => handleChange(e)}
                            />
                            <DimensionLabel>Height [mm]</DimensionLabel>
                            <Dimension
                                type='number'
                                name='height'
                                value={localContent.height}
                                onChange={(e) => handleChange(e)}
                            />
                        </DimensionsContainer>
                        <PriceLabel>Price</PriceLabel>
                        <Price
                            type='number'
                            placeholder='Product price in PLN (gross)'
                            name='price'
                            value={localContent.price || ''}
                            onChange={(e) => handleChange(e)}
                        />
                    </RightSide>
                </Wrapper>
                <ButtonContainer style={{marginTop: '-1rem'}}>
                    <Button disabled={false} type='submit'>Next →</Button>
                </ButtonContainer>
            </DescriptionForm>
        </PageContainer>
    )
}

const Wrapper = styled.div`
    display: flex;
    margin-bottom: 2rem;
    @media only screen and (max-width: 900px) {
        flex-direction: column;
    }    
`

const LeftSide = styled.div`
    flex-grow: 0.7;
    text-align: left;
    display: flex;
    flex-direction: column;
`

const Instructions = styled.h3`
`

const Title = styled(ReqInput)`
    margin-top: 10px;
    background: #F8F8F8;
    border-radius: 8px;
    line-height: 2rem;
    padding: 10px;
    font-weight: 200;
    font-size: 16px;
`

const TitleLabel = styled.div`
    font-weight: 600;
`

const Spacer = styled.div`
    margin-bottom: 2rem;
`

const Description = styled.textarea.attrs({required: false})`
    margin-top: 10px;
    min-height: 282px;
    background: #F8F8F8;
    border: none;
    border-radius: 8px;
    padding: 10px;
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    
    &:focus {
        outline: none;
    }
`

const DescriptionLabel = styled.label`
    font-weight: 600;
`

const Span = styled.span`
    margin-top: 5px;
    font-weight: 400;
    font-size: 12px;
    color: #8A8A8A;
`

const RightSide = styled.div`
    margin-left: 2rem;
    flex-grow: 0.3;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    
    @media only screen and (max-width: 900px) {
        margin-left: 0;
        margin-top: -2rem;
    }
`

const Availability = styled(ReqInput)`
    margin-bottom: auto;
    line-height: 2rem;
    padding: 10px;
`

const AvailabilityLabel = styled.label`
    margin-top: 4rem;
    margin-bottom: 5px;
    font-weight: 600;
`

const DimensionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    margin-top: 0.5rem;
    margin-bottom: auto;
    margin-left: 0;
    width: 200px;
    margin-right: 2rem;
    
    * {
        width: 110px;
        margin: 5px;
        padding: 5px;
    }
    
    @media only screen and (max-width: 900px) {
        margin-bottom: 2rem;
    }
`

const DimensionsLabel = styled.label`
    margin-top: 1rem;
    margin-left: 5px;
    font-weight: 600;
    
    @media only screen and (max-width: 900px) {
        margin-top: 2rem;
    }
`

const Dimension = styled(Input)`
    height: 3rem;
    border: none;
`

const DimensionLabel = styled.label`
    margin: auto;
    margin-right: 1rem;
    margin-left: 0;
    font-weight: 600;
    font-size: 16px;
`

const Price = styled(ReqInput)`
    line-height: 2rem;
    padding: 10px;
`

const PriceLabel = styled.label`
    font-weight: 600;
`

const DescriptionForm = styled(Form)`
    display: flex;
    
    & ${ReqInput}:invalid, ${Description}:invalid {
        border: 3px solid ${props => props.theme.colors.error};
    }
`


