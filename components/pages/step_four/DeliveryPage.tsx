import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Button } from '../../elements/Button'
import { PageContainer } from '../../elements/PageContainer'
import { Checkbox } from "../../elements/Checkbox";
import {ButtonContainer} from "../../elements/ButtonContainer";

type DeliveryProps = {
    onNext: () => void,
    onBack: () => void,
}

export const DeliveryPage = ({ onNext, onBack }: DeliveryProps ) => {

    const inputRef = useRef<HTMLInputElement>(null);

    // const { descriptionContent, categoriesContent, photosContent, setPhotosContent } = useContext(FormContext)
    const DeliveryOptions = [
        {name: 'Self pickup', src: '/images/icons/delivery_box.png'},
        {name: 'Parcel machine Inpost', src: '/images/icons/delivery_InPost.png'},
        {name: 'Courier DPD', src: '/images/icons/delivery_dpd.png'},
        {name: 'Paczka Orlen', src: '/images/icons/delivery_PaczkaOrlen.png'},
        {name: 'Courier DPD cash on delivery', src: '/images/icons/delivery_dpd.png'},
        {name: 'Branch Poczta Polska', src: '/images/icons/delivery_PocztaPolska.png'},
        {name: 'Courier Inpost', src: '/images/icons/delivery_InPost.png'},
        {name: 'Courier Poczta Polska', src: '/images/icons/delivery_PocztaPolska.png'},
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
        !checked[numIndex] && inputRef.current && inputRef.current.focus()
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
                    <ShippingText
                        as='h4'
                    >Shipping time</ShippingText>
                    <ShippingInput
                        type='text'
                        ref={inputRef}
                        onFocus={(e) => e.target.type = 'date'}
                        onBlur={(e) => e.target.type = 'text'}
                        placeholder='Specify a date'></ShippingInput>
                </ShippingInfo>
            </MainContent>
            <ButtonContainer>
                <Button onClick={() => onBack()}>Back</Button>
                <Button onClick={() => handleSubmit()}>Next →</Button>
            </ButtonContainer>
        </PageContainer>
    )
}

const InstructionsText = styled.h4`
    text-align: left;
    margin-left: 2rem;
    margin-top: 0;
    margin-bottom: 0;
`

const MainContent = styled.div`
    margin: auto;
    margin-bottom: 1rem;
    width: 95%;
    min-height: 515px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.font.family};
    margin-bottom: 0;
`

const OptionsContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    margin: auto;
    flex-wrap: wrap;
    
    @media only screen and (max-width: 950px) {
        flex-direction: column;
    }
`

const Option = styled.div`
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
    }
    
    @media only screen and (max-width: 500px) {
        justify-content: left;
        width: 100%;
        img {
            display: none;
        }
    }
`

const Left = styled.div`
    padding-top: 5px;
    font-weight: 400;
    font-size: 16px;
`

const Icon = styled.img`
    margin-right: 1rem;
`

const ShippingInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: -1rem;

    .not-filled {
        background: rgba(255, 192, 192, 0.1);
        border: 1px solid #FF3030;
    }
`

const ShippingText = styled.label`
    text-align: left;
    margin-left: 1rem;
    margin-bottom: 0;
    position: relative;
`

const ShippingInput = styled.input`
    font-size: 16px;
    background: #F8F8F8;
    border: 1px solid grey;
    border-radius: 8px;
    width: auto;
    height: 4rem;
    line-height: calc(4rem - 10px);
    margin: 1rem;
    padding: 10px;
    outline: none;
    max-height: 50px;
    cursor: pointer;
    
    &:focus {
        background: #FFC0C0;
        outline: 2px solid #FF3030;
    }
    
  &::-webkit-calendar-picker-indicator {
    // background: rgba(0,0,0,0);
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
}
`
