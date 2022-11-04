import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

type CategorySectionProps = {
    name: string,
    items: string[],
    numSelected: number,
    setNumSelected: React.Dispatch<React.SetStateAction<number>>,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
}

export const CategorySection = ({ name, items, numSelected, setNumSelected, selected, setSelected }: CategorySectionProps ) => {

    const [checked, setChecked] = useState<boolean[]>([false, false, false, false, false])
    const handleClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>, index: number) => {
        setNumSelected(prev => prev + 1)
        if (numSelected < 3) {
            setChecked((prev) => {
                const newArray = prev
                newArray[index] = !prev[index]
                return newArray
            })
            setSelected((prev) => [...prev, (e.target as Element).id])
        }
    }

    useEffect(() => {

    }, [selected])

    return (
        <Category>
            <NameText>{name}</NameText>
            <ItemsContainer>
                {items.map((item, index) => {
                    return (
                        <ItemRow key={Math.random()}>
                            <Input id={item} type='checkbox' defaultChecked={checked[index]} onClick={(e) => handleClick(e, index)}/>
                            <Label>{item}</Label>
                        </ItemRow>
                    )}
                )}
            </ItemsContainer>
        </Category>
    )
}

export const Category = styled.div`
    margin: auto;
    padding: 10px;
    height: auto;
    font-size: 12px;
`
export const NameText = styled.h3``

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const ItemRow = styled.div`
    display: flex;
    line-height: 30px;
`
export const Input = styled.input`
    height: 20px;
    width: 20px;
    margin-right: 1rem;
    // outline: 2.5px solid lightgrey;
    border-radius: 2px;
    accent-color: ${(props) => props.theme.colors.active};
    background-color: white;
    // appearance: none;
    
    &:checked{
    }
`
export const Label = styled.label``