import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const Navbar = () => {

    const [showDrawer, setShowDrawer] = useState<boolean>(false)

    const autoHideDrawer = () => {
        if (window.innerWidth > 600) {
            if(showDrawer) {
                setShowDrawer(false)
                console.log('closed')
            }
        }
    }
    useEffect(() => {
        window.addEventListener('resize', autoHideDrawer)
        return () => window.removeEventListener('resize', autoHideDrawer)
    }, [autoHideDrawer])

    const handleClick = () => {
        setShowDrawer(prev => !prev)
    }

    return (
        <MainBar>
            <LeftText>Seller</LeftText>
            {!showDrawer ?
                    <Hamburger onClick={() => handleClick()}>
                        <Span />
                        <Span />
                        <Span />
                    </Hamburger>
                :
                <>
                    <Drawer>
                        <Hamburger onClick={() => handleClick()} className='hamburger'>
                            <p>X</p>
                        </Hamburger>
                        <FirstContainer>
                            <Picture src={'/images/profile_pic.png'} />
                            <NameText>Jan Kowalski</NameText>
                        </FirstContainer>
                        <SecondContainer>
                            <IconBox>
                                <Icon src={'/images/icons/shop.png'} className='shop'></Icon>
                            </IconBox>
                            <IconBox>
                                <Icon src={'/images/icons/heart.png'} className='heart'></Icon>
                            </IconBox>
                            <IconBox className='exit'>
                                <Icon src={'/images/icons/exit.png'} className='exit-icon'></Icon>
                            </IconBox>
                        </SecondContainer>

                    </Drawer>
                </>
            }
            <RightContainer>
                <IconBox>
                    <Icon src={'/images/icons/shop.png'}></Icon>
                </IconBox>
                <IconBox>
                    <Icon src={'/images/icons/heart.png'}></Icon>
                </IconBox>
                <Picture src={'/images/profile_pic.png'} />
                <NameText>Jan Kowalski</NameText>
                <IconBox className='exit'>
                    <Icon src={'/images/icons/exit.png'}></Icon>
                </IconBox>
            </RightContainer>
        </MainBar>
    )
}

const MainBar = styled.nav`
    z-index: 2;
    position: sticky;
    top: 0;
    left: 0;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(132, 132, 132, 0.15);
    width: 100vw;
    height: 10%;
    min-height: 5rem;
    display: flex;
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.font.family};
    margin: auto;
     
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
    @media only screen and (max-width: 450px) {
        margin-right: 1rem;
    }
`

const Drawer = styled.div`
    right: -3rem;
    top: -1rem;
    position: fixed;
    width: 0;
    height: 110%;
    background: white;
    padding: 1rem;
    padding-top: 1rem;
    padding-right: 5rem;
    border-left: 2px solid lightgrey;
    transition: all 1s ease-in-out;
    
    .hamburger {
        margin-right: -1rem;
    }    
    
    @media only screen and (max-width: 600px) {
        width: 20rem;
    }   
    
    @media only screen and (max-width: 400px) {
        right: 0;
        width: 100%;
        padding-right: 1rem;
        border-left: none;
        border-radius: 0;    
        
        .hamburger {
            margin-right: 1rem;
        }
    }
    
    @media only screen and (min-width: 600px) {
        display: none;
        width: 0;
    }
`

const FirstContainer = styled.div`
    margin: auto;
    padding: 3rem;
    text-align: center;
    
    img {
        height: 5rem;
        width: 5rem;
    }
    h1 {
        margin: auto;
        font-size: 20px;
    }
`

const SecondContainer = styled.div`
    width: 100%;
    
    div {
        height: 5rem;
        width: 5rem;
    }
    div > .shop, .heart, .exit-icon {
        height: 3rem;
        width: 3rem;
    }
`

const Hamburger = styled.div`
    background: #FF782D;
    width: 3rem;
    height: 3rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: auto;
    margin-right: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 15px;
    opacity: 1;
    padding-top: 8px;
    color: white;
    
    p {
        font-size: 30px;
        margin: 0;
        padding: 0;
    }
    
    &:hover {
        opacity: 0.9;
        cursor: pointer;
    }
    
    @media only screen and (min-width: 600px) {
        display: none;
    }
`

const Span = styled.span`
    width: 33px;
    height: 4px;
    background: white;
    border-radius: 3px;
    margin: auto;
    margin-top: 5px;
    margin-bottom: 0;
`


const RightContainer = styled.div`
    display: flex;
    margin-right: 4rem;
    
    @media only screen and (max-width: 600px) {
        display: none;
        margin-right: 2rem;
    }
    
    div {
        margin: 1rem;
    }
`

const IconBox = styled.div`
    width: 3rem;
    height: 3rem;
    margin: auto;
    margin-top: 1rem;
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

const NameText = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin: auto;
    margin-left: 1rem;
    margin-right: 2rem;
    
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
   
`