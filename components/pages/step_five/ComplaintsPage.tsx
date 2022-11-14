import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import { Button } from '../../elements/Button'
import { Input } from '../../elements/Input'
import { PageContainer } from '../../elements/PageContainer'
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
                    <ComplaintsContainer>
                        <ComplaintsText>Complaints</ComplaintsText>
                        <Complaints>
                            <Label htmlFor='complaints'>Time to make complaints</Label>
                            <Input type='text' value='value' id='complaints' placeholder='3 years for warranty claims'></Input>
                        </Complaints>
                    </ComplaintsContainer>
                    <ReturnsContainer>
                        <ReturnsText>Returns</ReturnsText>
                        <Returns>
                            <Label htmlFor='returns'>Time to withdraw from the contract</Label>
                            <Input type='text' value='value' id='returns' placeholder='14 working days'></Input>
                        </Returns>
                    </ReturnsContainer>
                </ComplaintsAndReturns>
                <AddressText>Address for complaint or return</AddressText>
                <Address>
                    <AddressDetails>
                        <Street className='street'>
                            <Label htmlFor='street'>Street</Label>
                            <Input type='text' value='value' id='street' placeholder='Maple'></Input>
                        </Street>
                        <BuildingAndPremises className="building-premises">
                            <Building>
                                <Label htmlFor='building'>Building number</Label>
                                <Input type='number' value='value' id='building' placeholder='Building'></Input>
                            </Building>
                            <Premises>
                                <Label htmlFor='premises'>Premises number (optional)</Label>
                                <Input type='number' value='value' id='premises' placeholder='Premises number (optional)'></Input>
                            </Premises>
                        </BuildingAndPremises>
                    </AddressDetails>
                    <ZipAndCity>
                        <Zip>
                            <Label htmlFor='zip'>Zip code</Label>
                            <Input type='number' value='value' id='zip' placeholder='00-000'></Input>
                        </Zip>
                        <City>
                            <Label htmlFor='city'>City</Label>
                            <Input type='text' value='value' id='city' placeholder='Enter a city'></Input>
                        </City>
                    </ZipAndCity>
                </Address>
                <Additional>
                    <Label as='h3'>Additional Information</Label>
                    <Input type='text' value='value' id='additional' placeholder='Provide more details'></Input>
                </Additional>
            </MainContent>
            <ButtonContainer>
                <Button onClick={() => onBack()}>Back</Button>
                <Button onClick={() => handleSubmit()}>Next →</Button>
            </ButtonContainer>
        </PageContainer>
    )
}



 const MainContent = styled.div`
    text-align: left;
    margin: auto;
    width: 95%;
    min-height: 535px;
    height: auto;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.font.family};
    padding-left: 1rem;
    
    input {
        margin: 10px;
        margin-left: 0;
        padding: 5px;
    }
`

 const ComplaintsAndReturns = styled.div`
    height: auto;
    display: flex;
    width: 100%;
    text-align: left;
    
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        margin-left: -2rem;
        div {
            margin-left: 2rem;
            width: auto;
        }
    } 
`
const ComplaintsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const ComplaintsText = styled.h3``

const Complaints = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
`

const ReturnsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const ReturnsText = styled.h3``

const Returns = styled.div`
    flex: 0.5;
    display: flex;
    flex-direction: column;
`

const Address = styled.div`
    width: 100%;
    height: 10rem;
    margin-top: auto;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    height: auto;
    
    @media only screen and (max-width: 600px) {

        div:not(.building-premises) {
            margin-left: 1rem;
        }
    }   
`

const AddressText = styled.h3``

const AddressDetails = styled.div`
    display: flex;
    width: 100%;
    
    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        
        .street {
            width: 100%;
        }
        .building-premises {
            width: auto;
        }
    }   
    @media only screen and (max-width: 600px) {
        div, .street {
            width: calc(100% - 4rem);
        }
    }   
    @media only screen and (max-width: 600px) {
    
        .building-premises {
            flex-direction: column;
        }
    }   
`

const Street = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const BuildingAndPremises = styled.div`
    display: flex;
    width: 50%;
`

const Building = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const Premises = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const ZipAndCity = styled.div`
    display: flex;
    width: 50%;
    
    @media only screen and (max-width: 1000px) {
        width: 100%;
    }   
    @media only screen and (max-width: 500px) {
        flex-direction: column;
        div {
            width: 50%;
        }
    }   
`

const Zip = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const City = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const Additional = styled.div`
    height: auto;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    width: auto;
    
    input {
        margin-top: 0;
    }
    
    @media only screen and (max-width: 600px) {
        input {
            margin-left: 2rem;
        }
    }

`

 const Label = styled.label``
