import React, { useState } from 'react'
import styled from 'styled-components'

type SelectedItemsProps = {
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>,
    setNumSelected: React.Dispatch<React.SetStateAction<number>>,
}

export const SelectedItems = ({ selected, setSelected, setNumSelected }: SelectedItemsProps ) => {
    const handleClick = (itemToRemove: string) => {
        setSelected(prev => {
            const indexToRemove = prev.indexOf(itemToRemove)
            const newArray = prev.filter((data, index) => index !== indexToRemove)
            console.log(newArray)
            return newArray
        })
        setNumSelected(prev => prev - 1)
    }

    return (
        <Container>
            {selected[0] && <Item onClick={() => handleClick(selected[0])}>{selected[0]}</Item>}
            {selected[1] && <Item onClick={() => handleClick(selected[1])}>{selected[1]}</Item>}
            {selected[2] && <Item onClick={() => handleClick(selected[2])}>{selected[2]}</Item>}
        </Container>
    )
}

export const Container = styled.div`
    margin: auto;
    margin-left: 2rem;
    display: flex;
`

export const Item = styled.div`
    background: ${(props) => props.theme.colors.selected};
    padding: 10px;
    padding-right: 30px;
    padding-left: 30px;
    margin: 1rem;
    border-radius: 20px;
    
    &:hover {
        cursor: pointer;
    }
`



