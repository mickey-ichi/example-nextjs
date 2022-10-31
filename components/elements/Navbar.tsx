import React from 'react'
import styled from 'styled-components'

export const Navbar = () => {
    return (
        <MainBar>
            <LeftText>Seller</LeftText>
            <RightContainer>
                <IconBox>
                    <Icon src={'/images/icons/shop.png'}></Icon>
                </IconBox>
                <IconBox>
                    <Icon src={'/images/icons/heart.png'}></Icon>
                </IconBox>
                <Picture src={'/images/profile_pic.png'} />
                <NameText>Jan Kowalski</NameText>
                <IconBox>
                    <Icon src={'/images/icons/exit.png'}></Icon>
                </IconBox>
            </RightContainer>
        </MainBar>
    )
}

const MainBar = styled.nav`
    background-color: white;
    box-shadow: 0px 0px 10px rgba(132, 132, 132, 0.15);
    position: absolute;
    width: 100%;
    height: 10%;
    min-height: 5rem;
    left: 0px;
    top: 0px;
    display: flex;
     
     @media only screen and (max-width: 600px) {
        justify-content: space-between;
    }
`

const LeftText = styled.h2`
    color: #FF782D;
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    margin: auto;
    line-height: 5rem;
    margin-left: 5rem;
    
    @media only screen and (max-width: 600px) {
        font-size: 25px;
        margin-left: 1rem;
        margin-right: 2rem;
    }
`

const RightContainer = styled.div`
    display: flex;
    margin-right: 4rem;
    
    @media only screen and (max-width: 600px) {
        margin-right: 0;
    }
`

const IconBox = styled.div`
    width: 3rem;
    height: 3rem;
    margin: auto;
    margin-top: 1rem;
    margin-right: 1rem;
    padding: auto;
    background: #FFF5EC;
    border-radius: 8px;
`

const Icon = styled.img`
    width: 1rem;
    height: 1rem;
    margin-top: 1rem;
    margin-left: 1rem;
`

const Picture = styled.img`
    margin: auto;
    height: 3rem;
    width: 3rem;
`

const NameText = styled.div`
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin: auto;
    margin-left: 1rem;
    margin-right: 2rem;
    
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin-right: 0rem;
    }
`