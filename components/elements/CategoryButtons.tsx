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
                        <span>&#62;</span>
                    </ActiveButton>
                    :
                    <Button
                        key={Math.random()}
                        role="div"
                        onClick={() => handleClick(index)}
                    >
                        <p>{name}</p>
                        <span>&#62;</span>
                    </Button>
            )}
        </ButtonsContainer>
    )
}

export const ButtonsContainer = styled.div`
    margin: auto;
    margin-top: 1rem;
    margin-left: 2rem;
    margin-right: 10px;
    height: 25rem;
    min-width: 200px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
`
export const Button = styled.button`
    flex: 1;
    width: auto;
    height: auto;
    border: none;
    border-radius: 10px;
    background: white;
    text-align: left;
    display: flex;
    justify-content: space-between;
    
    @media only screen and (max-width: 600px) {
        width: 130px;
    }
    @media only screen and (max-width: 400px) {
        margin-left: -1rem;
    }
    
    * {
        margin: 0;
        padding: 0;
        line-height: 3rem;
    }
    
    span {
        @media only screen and (max-width: 600px) {
            display: none;
        }
    }
    }
    
    &:hover {
        background: ${(props) => props.theme.colors.selected};
    }
`

export const ActiveButton = styled(Button)`
    background: ${(props) => props.theme.colors.selected};
`
