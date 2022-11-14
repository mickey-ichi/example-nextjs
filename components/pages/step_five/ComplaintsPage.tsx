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

     type LocalContent = {
         complaintTime: string,
         returnTime: string,
         street: string,
         buildingNum: number | string,
         premisesNum: number | string,
         zip: number | string,
         city: string,
         additional: string,
     }

     const [localContent, setLocalContent] = useState<LocalContent>({
         complaintTime: '',
         returnTime: '',
         street: '',
         buildingNum: '',
         premisesNum: '',
         zip: '',
         city: '',
         additional: '',
     })

    const handleSubmit = () => {
        // setPhotosContent(uploads)
        // reloads this page until next page is built
        onNext()
    }

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         e.preventDefault()
         const { name, value } = e.target
         setLocalContent((prev) => ({...prev, [name]: value}))

         // updateCharacterCount(name, value.length)
     }

    return (
        <PageContainer>
            <MainContent>
                <ComplaintsAndReturns>
                    <ComplaintsContainer>
                        <ComplaintsText>Complaints</ComplaintsText>
                        <Complaints>
                            <Label htmlFor='complaints'>Time to make complaints</Label>
                            <Input
                                type='text'
                                value={localContent.complaintTime}
                                id='complaints'
                                name='complaintTime'
                                onChange={e => handleChange(e)}
                                placeholder='3 years for warranty claims'
                            />
                        </Complaints>
                    </ComplaintsContainer>
                    <ReturnsContainer>
                        <ReturnsText>Returns</ReturnsText>
                        <Returns>
                            <Label htmlFor='returns'>Time to withdraw from the contract</Label>
                            <Input
                                type='text'
                                value={localContent.returnTime}
                                id='returns'
                                name='returnTime'
                                onChange={e => handleChange(e)}
                                placeholder='14 working days'
                            />
                        </Returns>
                    </ReturnsContainer>
                </ComplaintsAndReturns>
                <AddressText>Address for complaint or return</AddressText>
                <Address>
                    <AddressDetails>
                        <Street className='street'>
                            <Label htmlFor='street'>Street</Label>
                            <Input
                                type='text'
                                value={localContent.street}
                                id='street'
                                name='street'
                                onChange={e => handleChange(e)}
                                placeholder='Street name'
                            />
                        </Street>
                        <BuildingAndPremises className="building-premises">
                            <Building>
                                <Label htmlFor='building'>Building number</Label>
                                <Input
                                    type='text'
                                    value={localContent.buildingNum}
                                    id='building'
                                    name='buildingNum'
                                    onChange={e => handleChange(e)}
                                    placeholder='Building'
                                    onFocus={(e) => e.target.type = 'number'}
                                />
                            </Building>
                            <Premises>
                                <Label htmlFor='premises'>Premises number (optional)</Label>
                                <Input
                                    type='text'
                                    value={localContent.premisesNum}
                                    id='premises'
                                    name='premisesNum'
                                    onChange={e => handleChange(e)}
                                    placeholder='Premises number (optional)'
                                    onFocus={(e) => e.target.type = 'number'}
                                />
                            </Premises>
                        </BuildingAndPremises>
                    </AddressDetails>
                    <ZipAndCity>
                        <Zip>
                            <Label htmlFor='zip'>Zip code</Label>
                            <Input
                                type='text'
                                value={localContent.zip}
                                id='zip'
                                name='zip'
                                onChange={e => handleChange(e)}
                                placeholder='00-000'
                                onFocus={(e) => e.target.type = 'number'}
                            />
                        </Zip>
                        <City>
                            <Label htmlFor='city'>City</Label>
                            <Input
                                type='text'
                                value={localContent.city}
                                id='city'
                                name='city'
                                onChange={e => handleChange(e)}
                                placeholder='Enter a city'
                            />
                        </City>
                    </ZipAndCity>
                </Address>
                <Additional>
                    <Label as='h3'>Additional Information</Label>
                    <Input
                        type='text'
                        value={localContent.additional}
                        id='additional'
                        name='additional'
                        onChange={e => handleChange(e)}
                        placeholder='Provide more details'
                    />
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
