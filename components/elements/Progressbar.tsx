import React from 'react'
import styled from 'styled-components'

type ProgressbarProps = {
    step: number
}

export const Progressbar = ({ step }: ProgressbarProps ) => {

    const stepData = [
        {step: 'Description', img1: 'description.png', img2: 'description_completed.png'},
        {step: 'Categories', img1: 'categories.png', img2: 'categories_completed.png'},
        {step: 'Photos', img1: 'photos.png', img2: 'photos_completed.png'},
        {step: 'Delivery', img1: 'delivery.png', img2: 'delivery_completed.png'},
        {step: 'Complaints', img1: 'complaints.png', img2: 'complaints_completed.png'},
    ]

    return (
        <BarContainer>
            {stepData.map((item, counter) => {
                return (
                    <SectionContainer key={Math.random()}>
                        <Step>
                            {(counter + 1) === step ?
                                <CurrentIconContainer>
                                    <Icon src={`/images/icons/` + `${item.img2}`}/>
                                </CurrentIconContainer>
                                :
                                (counter + 1) < step ?
                                    <IconContainer>
                                        <Icon src={`/images/icons/` + `${item.img1}`} />
                                        <Checkmark src={'/images/icons/checkmark.png'} />
                                    </IconContainer>
                                    :
                                    <IconContainer>
                                        <Icon src={`/images/icons/` + `${item.img1}`} />
                                    </IconContainer>
                            }
                            <StepText>{item.step}</StepText>
                        </Step>
                        {counter < 4 &&
                            (counter + 1) < step ?
                                <Line src={'/images/icons/line_completed.png'}/>
                                :
                                (counter + 1) < 5 && <Line src={'/images/icons/line.png'}/>
                        }
                    </SectionContainer>
                )})
            }
        </BarContainer>
    )
}

const BarContainer = styled.div`
    margin-top: 4rem;
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
    
    @media only screen and (max-width: 900px) {
        margin-right: 0;
        margin-left: 0;
    }
`

const Step = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 5rem;
    
    @media only screen and (max-width: 450px) {
        width: 4rem;
    }
`

const IconContainer = styled.div`
    width: 3rem;
    height: 3rem;
    margin: auto;
    margin-right: 1rem;
    background: #FFF5EC;
    border-radius: 50%;
    
    @media only screen and (max-width: 450px) {
        width: 2rem;
        height: 2rem;
    }
`

const CurrentIconContainer = styled(IconContainer)`
    background: #FF782D;
`

const Icon = styled.img`
    width: 1rem;
    height: 1rem;
    margin-top: 1rem;
    margin-left: 1rem;
    
    @media only screen and (max-width: 450px) {
        margin-top: 0.5rem;
        margin-left: 0.5rem;
    }
`

const Checkmark = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 2rem;
    
    @media only screen and (max-width: 450px) {
        width: 15px;
        height: 15px;
        margin-top: -1rem;
        margin-left: 1.5rem;
    }
`

const StepText = styled.div`
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    text-align: center;
    margin-top: 10px;
    
    @media only screen and (max-width: 900px) {
        font-size: 13px;
    }
    @media only screen and (max-width: 450px) {
        font-size: 12px;
    }
`

const Line = styled.img`
    width: 100px;
    height: 4px;
    margin-top: 1.5rem;
    
    @media only screen and (max-width: 900px) {
        width: 50px;
    }
    @media only screen and (max-width: 600px) {
        display: none;
    }
`