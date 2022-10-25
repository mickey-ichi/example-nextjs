import React from 'react'
import styled from 'styled-components'

export const Progressbar = ( step: number ) => {

    const imageNames = [
        'description.png',
        'categories.png',
        'photos.png',
        'delivery.png',
        'complaints.png'
    ]

    const completedImageNames = [
        'description_completed.png',
        'categories_completed.png',
        'photos_completed.png',
        'delivery_completed.png',
        'complaints_completed.png'
    ]
    const stepNames = [
        'Description',
        'Categories',
        'Photos',
        'Delivery',
        'Complaints'
    ]

    return (
        <BarContainer>
            {imageNames.map((name, counter) => {
                return (
                    <SectionContainer key={Math.random()}>
                        <Step>
                            {(counter + 1) <= step ?
                                <CompletedIconContainer>
                                    <Icon src={`/images/icons/` + `${completedImageNames[counter]}`}/>
                                </CompletedIconContainer>
                                :
                                <IconContainer>
                                    <Icon src={`/images/icons/` + `${name}`} />
                                </IconContainer>
                            }
                            <StepText>{stepNames[counter]}</StepText>
                        </Step>
                        <Line src={'/images/icons/line.png'}/>
                    </SectionContainer>
                )})
            }
        </BarContainer>
    )
}

const BarContainer = styled.div`
    width: 100vw;
    height: 10rem;
    display: flex;
    justify-content: center;
`

const SectionContainer = styled.div`
    width: auto;
    margin: auto;
    margin-top: 2rem;
    margin-right: 5px;
    margin-left: 5px;
    display: flex;
`

const Step = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 5rem;
`

const IconContainer = styled.div`
    width: 3rem;
    height: 3rem;
    margin: auto;
    margin-right: 1rem;
    padding: auto;
    background: #FFF5EC;
    border-radius: 50%;
`

const CompletedIconContainer = styled(IconContainer)`
    background: #FF782D;
`

const Icon = styled.img`
    width: 1rem;
    height: 1rem;
    margin-top: 1rem;
    margin-left: 1rem;
`

const StepText = styled.div`
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    text-align: center;
    margin-top: 10px;
`

const Line = styled.img`
    width: 100px;
    height: 4px;
    margin-top: 1.5rem;
`