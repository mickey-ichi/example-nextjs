import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import { Button } from '../../elements/Button'
import { PageContainer } from '../../elements/PageContainer'
import { Checkbox } from "../../elements/Checkbox";

type DeliveryProps = {
    onNext: () => void,
    onBack: () => void,
}

export const DeliveryPage = ({ onNext, onBack }: DeliveryProps ) => {

    // const { descriptionContent, categoriesContent, photosContent, setPhotosContent } = useContext(FormContext)
    const DeliveryOptions = [
        {name: 'Self pickup', src: '/images/icons/delivery-box.png'},
        {name: 'Parcel machine Inpost', src: '/images/icons/delivery-InPost.png'},
        {name: 'Courier DPD', src: '/images/icons/delivery-dpd.png'},
        {name: 'Paczka Orlen', src: '/images/icons/delivery-PaczkaOrlen.png'},
        {name: 'Courier DPD cash on delivery', src: '/images/icons/delivery-dpd.png'},
        {name: 'Branch Poczta Polska', src: '/images/icons/delivery-PocztaPolska.png'},
        {name: 'Courier Inpost', src: '/images/icons/delivery-InPost.png'},
        {name: 'Courier Poczta Polska', src: '/images/icons/delivery-PocztaPolska.png'},
    ]

    const handleSubmit = () => {
        // setPhotosContent(uploads)
        // reloads this page until next page is built
        onNext()
    }

    const [checked, setChecked] = useState<boolean[]>([false, false, false, false, false, false, false, false])

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
        const stringIndex = e.currentTarget.id
        const numIndex = Number(stringIndex)
        setChecked(prev => prev.map((item,index) => index !== numIndex ? item : !item))
    }

    return (
        <PageContainer>
            <InstructionsText>Select delivery options</InstructionsText>
            <MainContent>
                <OptionsContainer>
                    {DeliveryOptions.map((option, index) => (
                        <Option key={Math.random()}>
                            <Left
                                id={index.toString()}
                                onClick={(e) => handleClick(e)}
                            >
                                <Checkbox
                                    width='32px'
                                    height='32px'
                                    isChecked={checked[index]}
                                ></Checkbox>
                                <label htmlFor={option.name}>
                                    {option.name}
                                </label>
                            </Left>
                            <Icon src={option.src}></Icon>
                        </Option>
                    ))}
                </OptionsContainer>
                <ShippingInfo>
                    <ShippingText>Shipping time</ShippingText>
                    <input
                        type='date'
                        placeholder='Specify a date'
                        // className='not-filled'
                    />
                </ShippingInfo>
            </MainContent>
            <Button onClick={() => onBack()}>Back</Button>
            <Button onClick={() => handleSubmit()}>Next →</Button>
        </PageContainer>
    )
}

export const InstructionsText = styled.h4`
    text-align: left;
    margin-left: 2rem;
`

export const MainContent = styled.div`
    margin: auto;
    width: 95%;
    height: 80%;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.font.family};
`

export const OptionsContainer = styled.div`
    display: flex;
    width: 100%;
    margin: auto;
    flex-wrap: wrap;
    
    @media only screen and (max-width: 950px) {
        flex-direction: column;
    }
`

export const Option = styled.div`
    width: 44%;
    display: flex;
    height: 4rem;
    justify-content: space-between;
    margin: 1rem;
    background: #F8F8F8;
    border-radius: 8px;
    padding: 10px;
    
    @media only screen and (max-width: 950px) {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        height: auto;
    }
    
    @media only screen and (max-width: 500px) {
        justify-content: left;
        width: 100%;
        img {
            display: none;
        }
    }
`

export const Left = styled.div`
    padding-top: 5px;
    font-weight: 400;
    font-size: 16px;
`

export const Icon = styled.img`
    margin-right: 1rem;
`

export const ShippingInfo = styled.div`
    display: flex;
    flex-direction: column;
    
    input {
        background: #F8F8F8;
        border: 1px solid grey;
        border-radius: 8px;
        width: auto;
        height: 4rem;
        line-height: calc(4rem - 10px);
        margin: 1rem;
        padding: 10px;
    }
    .not-filled {
        background: rgba(255, 192, 192, 0.1);
        border: 1px solid #FF3030;
    }
`

export const ShippingText = styled.h5`
    text-align: left;
    margin-left: 1rem;
    margin-bottom: 0;
`
