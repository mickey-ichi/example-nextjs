import React, { useState } from 'react'
import styled from 'styled-components'

type CategoryButtonsProps = {
    names: string[],
    changeCategory: (index: number) => void
}



export const CategoryButtons = ({ names, changeCategory }: CategoryButtonsProps ) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index: number) => {
        setActiveIndex(index)
        changeCategory(index)
    }

    return (
        <ButtonsContainer>
            {names.map((name, index) =>
                activeIndex === index ?
                    <ActiveButton
                        key={Math.random()}
                        role="div"
                        onClick={() => handleClick(index)}
                    >
                        <p>{name}</p>
                        <Icon src={`/images/icons/vector_right.png`} />
                    </ActiveButton>
                    :
                    <Button
                        key={Math.random()}
                        role="div"
                        onClick={() => handleClick(index)}
                    >
                        <p>{name}</p>
                        <Icon src={`/images/icons/vector_right.png`} />
                    </Button>
            )}
        </ButtonsContainer>
    )
}

export const ButtonsContainer = styled.div`
    margin: auto;
    margin-right: 10px;
    min-height: 25rem;
    min-width: 100px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 10px;
    
    @media only screen and (max-width: 770px) {
        min-width: 300px;
        margin: auto;
        margin-bottom: 1rem;
    }
    
    @media only screen and (max-width: 400px) {
        min-width: 100px;
        button {
            min-width: 100px;
        }
    }
`
export const Button = styled.button`
    flex: 1;
    min-width: 228px;
    min-height: 43px;
    border: none;
    border-radius: 10px;
    background: white;
    text-align: left;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    
    @media only screen and (max-width: 770px) {
        margin: auto;
        width: 100%;
        line-height: 35px;
        justify-content: center;

        img {
            display: none;
        }  
    }
    
    &:hover {
        cursor: pointer;
        background: ${(props) => props.theme.colors.selected};
    }
`

export const ActiveButton = styled(Button)`
    background: ${(props) => props.theme.colors.selected};
`

export const Icon = styled.img`
    margin-top: auto;
    margin-bottom: auto;
`
    
