import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import OrangeImg from '../../public/images/orange_background.png'
import { Hamburger } from './HamburgerButton';
import { Drawer } from './Drawer';

export const Navbar = () => {

    const [showDrawer, setShowDrawer] = useState<boolean>(false)

    const autoHideDrawer = () => {
        if (window.innerWidth > 600) {
            if(showDrawer) {
                setShowDrawer(false)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('resize', autoHideDrawer)
        return () => window.removeEventListener('resize', autoHideDrawer)
    })

    const handleClick = () => {
        setShowDrawer(prev => !prev)
    }

    return (
        <FullwidthBar>
            <MainBar>
                <LeftText>Seller</LeftText>
                <Hamburger onClick={() => handleClick()} className={showDrawer ? 'close-burger' : 'open-burger'}>
                    {!showDrawer ?
                        <>
                            <Span/>
                            <Span/>
                            <Span/>
                        </>
                        :
                        <p>X</p>
                    }
                </Hamburger>
                <Drawer className={showDrawer ? 'show' : 'hide'}>
                    <FirstContainer>
                        <Picture src={'/images/profile_pic.png'} />
                        <NameText>Jan Kowalski</NameText>
                    </FirstContainer>
                    <SecondContainer>
                        <Row>
                            <RowContent>
                                <IconBox className='icon-box'>
                                    <Icon src={'/images/icons/shop.png'} className='shop'></Icon>
                                </IconBox>
                                <div>cart</div>
                            </RowContent>
                        </Row>
                        <Row>
                            <RowContent>
                                <IconBox className='icon-box'>
                                    <Icon src={'/images/icons/heart.png'} className='heart'></Icon>
                                </IconBox>
                                <div>favorites</div>
                            </RowContent>
                        </Row>
                        <Row>
                            <RowContent>
                                <IconBox className='icon-box'>
                                    <Icon src={'/images/icons/exit.png'} className='exit-icon'></Icon>
                                </IconBox>
                                <div>exit</div>
                            </RowContent>
                        </Row>
                    </SecondContainer>
                </Drawer>
                {showDrawer && <DarkenBackground />}
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
        </FullwidthBar>
    )
}

const FullwidthBar = styled.div`
    width: 100vw;
    background: white;
    
    @media only screen and (max-width: 1290px) {
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

const MainBar = styled.nav`
    position: sticky;
    z-index: 2;
    box-shadow: 0px 0px 10px -10px rgba(132, 132, 132, 0.15);
    max-width: 1290px;
    height: 10%;
    min-height: 5rem;
    display: flex;
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.font.family};
    margin: auto;
    
    @media only screen and (max-width: 600px) {
        flex-direction: row-reverse;
    }
`

const LeftText = styled.h2`
    color: #FF782D;
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    margin: auto;
    margin-left: 0;
    line-height: 5rem;
    
    @media only screen and (max-width: 600px) {
        font-size: 25px;
        margin-left: 1rem;
        margin-right: 2rem;
    }
    @media only screen and (max-width: 450px) {
        margin-right: 1rem;
    }
`

const FirstContainer = styled.div`
    margin: auto;
    height: 30%;
    padding-top: 9rem;
    background-image: url(${OrangeImg.src});
    color: white;
    text-align: left;
    padding-left: 2rem;
    
    img {
        height: 7rem;
        width: 7rem;
    }
    h1 {
        margin: auto;
        width: auto;
        margin-top: 10px;
        font-size: 25px;
    }
`

const SecondContainer = styled.div`
    width: 100%;
`

const Row = styled.div`
    display: flex;
    height: 5rem;
    width: 100%;
    opacity: 0.8;
    font-weight: 800;
    font-size: 20px;
        
    div {
        margin: auto;
        margin-right: auto;
        margin-left: 1rem;
        padding: 0;
    }    
    
    & .icon-box {
        background: none; 
    }
    
    &:hover {
        background: rgba(253, 227, 167,0.2);
        cursor: pointer;
        opacity: 1;
        
        * {
            transform: scale(1.1);
        }
        

        & .icon-box {
            opacity: 1;
        }
    }
`

const RowContent = styled.div`
    display: flex;
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
    margin-right: 0;
    
    @media only screen and (max-width: 600px) {
        display: none;
        margin-right: 2rem;
    }
    
    div:not(.exit) {
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
    opacity: 0.8;
    
    &:hover {
        cursor: pointer;
        opacity: 1;
    }
    
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

const DarkenBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background: rgba(0,0,0,0.4);
`
