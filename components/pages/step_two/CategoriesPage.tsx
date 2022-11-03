import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button } from '../../elements/Button'
import { PageContainer } from '../../elements/PageContainer'
import { Form } from '../../elements/Form'

type CategoriesProps = {
    title?: string,
    onNext: ()=>void,
    onBack: ()=>void,
}

export const CategoriesPage = ({ onNext, onBack }: CategoriesProps ) => {


    return (
        <PageContainer>
            <Form>

            </Form>

            <Button onClick={() => onBack()}>Back</Button>
            <Button onClick={() => onNext()}>Next →</Button>
        </PageContainer>
    )
}


const LeftForm = styled.div`
    flex-grow: 0.7;
    text-align: left;
    display: flex;
    flex-direction: column;
`

const Instructions = styled.h3`
`

const Title = styled.input`
    margin-top: 10px;
    margin-bottom: 2rem;
    background: #F8F8F8;
    border: none;
    border-radius: 8px;
    line-height: 2rem;
    padding: 10px;
`

const TitleLabel = styled.div`
    font-weight: 600;
`

const Description = styled.textarea`
    margin-top: 10px;
    height: 250px;
    background: #F8F8F8;
    border: none;
    border-radius: 8px;
    padding: 10px;
    
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
`

const DescriptionLabel = styled.label`
    font-weight: 600;
`

const RightForm = styled.div`
    margin-left: 2rem;
    flex-grow: 0.3;
    text-align: left;
    display: flex;
    flex-direction: column;
    
    @media only screen and (max-width: 900px) {
        margin-left: 0;
        margin-top: -2rem;
    }
`

const Availability = styled.input`
    margin-bottom: auto;
    background: #F8F8F8;
    border: none;
    border-radius: 8px;
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

const Length = styled.input`
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
    background: #F8F8F8;
    border: none;
    text-indent: 10px;
`

const LengthLabel = styled.label`
    margin: auto;
    margin-right: 1rem;
    margin-left: 0;
    font-size: 0.8em;
`

const Width = styled.input`
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
    background: #F8F8F8;
    border: none;
    text-indent: 10px;
`

const WidthLabel = styled.label`
    margin: auto;
    margin-right: 1rem;
    margin-left: 0;
    font-size: 0.8em;
`

const Height = styled.input`
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
    background: #F8F8F8;
    border: none;
    text-indent: 10px;
`
const HeightLabel = styled.label`
    margin: auto;
    margin-right: 1rem;
    margin-left: 0;
    font-size: 0.8em;
`

const Price = styled.input`
    background: #F8F8F8;
    border: none;
    border-radius: 8px;
    line-height: 2rem;
    padding: 10px;
`

const PriceLabel = styled.label`
    font-weight: 600;
`


